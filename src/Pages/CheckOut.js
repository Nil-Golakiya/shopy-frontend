import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";



const CheckOut = ({ cart, clearCart }) => {

    const user = localStorage.getItem("myuser");

    const [priceInfo, setPriceInfo] = useState({
        totalprice: 0,
        discount: 0,
        shippingcharge: 40,
    })
    const [finalPrice, setFinalPrice] = useState(0)
    const [coupon, setCoupon] = useState()
    const [isValid, setIsValid] = useState(true)
    const [couponCode, setCouponCode] = useState()
    const [productId, setProductId] = useState([])



    const Schema = yup.object().shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        address_1: yup.string().required(),
        address_2: yup.string().required(),
        phone_no: yup.number().required(),
        pin_code: yup.number().required(),
        country: yup.string().required(),
        state: yup.string().required(),
        city: yup.string().required(),
        email: yup.string().email().required(),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm({
        resolver: yupResolver(Schema)
    });


    const handleCoupon = async () => {
        const couponData = await axios.get(`http://localhost:8800/coupon/${coupon}`);
        console.log("couponData", couponData.data)
        if (couponData.data.is_active === false) {
            toast.error("Coupon Is Expire");
        } else {
            if (couponData.data.amount === null) {
                if (couponData.data.min_amount < priceInfo.totalprice) {
                    let checkDiscount = (priceInfo.totalprice * couponData.data.discount) / 100
                    if (checkDiscount > couponData.data.max_discount_amount) {
                        checkDiscount = couponData.data.max_discount_amount
                    }
                    checkDiscount = Math.round(checkDiscount)
                    setPriceInfo({ ...priceInfo, discount: checkDiscount })
                    setFinalPrice(finalPrice - checkDiscount)
                    toast.success("Coupon Applied Successfully");
                    setIsValid(false)
                    setCouponCode(couponData.data.code)
                } else {
                    toast.error("Coupon Is Invalid");
                }
            } else {
                if (couponData.data.min_amount < priceInfo.totalprice) {
                    setFinalPrice(finalPrice - couponData.data.amount)
                    setPriceInfo({ ...priceInfo, discount: couponData.data.amount })
                    setIsValid(false)
                    setCouponCode(couponData.data.code)
                }
                toast.error("Coupon Is Invalid----------");
            }
        }
    }

    const CartTotal = () => {
        let carttotal = 0;
        cart?.map((ele) => {
            carttotal += Math.round((ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity);
        })
        setFinalPrice(carttotal + priceInfo.shippingcharge)
        setPriceInfo({ ...priceInfo, totalprice: carttotal })
    }

    const GetProductId = () => {
        const Array = [];
        cart?.map((ele) => {
            Array.push(ele.variation_id.product_id)
            setProductId(Array.concat(productId))
        })
    }

    console.log("errors---", errors)
    console.log("couponCode---", couponCode)
    console.log("cart---", cart)
    console.log("cart---", productId)

    const user_id = cart[0]?.user_id;

    const handleErrors = () => {
        if (Object.keys(errors).length > 0) {
            toast.error("Please fill all details");
            console.log("errors")
        }
    }

    const discount = {
        code: couponCode,
        amount: priceInfo.discount
    }

    const submitHandler = async (data) => {
        let oid = Math.floor(Math.random() * Date.now());
        const contact_info = {
            email: data.email,
            phone_no: data.phone_no
        }

        const ApiData = { oid, user_id, finalPrice, contact_info, data, discount, productId, cart }
        let a = await axios.post(`${process.env.REACT_APP_HOST}/api/pretransaction`, ApiData)
        console.log("ApiData", a)
        let txnData = await a.data;
        // const test = JSON.parse(txnData.myr);
        console.log("txnData", txnData)
        if (txnData.success) {
            let txnToken = await txnData.myr.txnToken;
            console.log("txnToken", txnToken)
            var config = {
                "root": "",
                "flow": "DEFAULT",
                "data": {
                    "orderId": oid,
                    "token": txnToken,
                    "tokenType": "TXN_TOKEN",
                    "amount": finalPrice
                },
                "handler": {
                    "notifyMerchant": function (eventName, data) {
                        console.log("notifyMerchant handler function called");
                        console.log("eventName => ", eventName);
                        console.log("data => ", data);
                    }
                }
            };
            console.log("############", data)

            console.log("window.Paytm.CheckoutJS", window.Paytm)
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                // after successfully updating configuration, invoke JS Checkout
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error) {
                console.log("error => ", error);
            });
            clearCart()
        } else {
            if (txnData.cartClear) {
                clearCart()
            }
            toast.error(txnData.error);
        }
    }

    const handleChange = (e) => {
        if (e.target.name == "coupon") {
            setCoupon(e.target.value)
        }
    }

    const handleRemoveCoupon = () => {
        setCoupon("")
        setIsValid(true)
        setFinalPrice(finalPrice + priceInfo.discount)
        setIsValid(true)
        setCouponCode("")
    }

    console.log("priceInfo", priceInfo)


    console.log("totalprice", priceInfo.totalprice)


    useEffect(() => {
        CartTotal()
    }, [cart])

    useEffect(() => {
        GetProductId()
    }, [cart])

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = `${process.env.REACT_APP_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.REACT_APP_PAYTM_MID}.js`;
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])


    console.log(cart)
    return (
        <div className="page-content">
            <head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></head>
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li><span>Checkout</span></li>
                    </ul>
                </div>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="holder">
                    <div className="container">
                        <h1 className="text-center">Checkout wizard</h1>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="steps-progress">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#step1" data-step={1}><span>01.</span><span>Shipping Address</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#step2" data-step={2}><span>02.</span><span>Billing Address</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#step3" data-step={3}><span>03.</span><span>Delivery Method</span></a>
                                        </li>
                                        {/* <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#step4" data-step={4}><span>04.</span><span>Payment Method</span></a>
                                    </li> */}
                                    </ul>
                                    {/* <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={1} aria-valuemin={1} aria-valuemax={3} style={{ width: '25%' }} />
                                </div> */}
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="step1">
                                        <div className="tab-pane-inside">
                                            {
                                                user ? "" : <p><Link to="/login">Login</Link> or <Link to="/login">Register</Link> for faster payment.</p>
                                            }
                                            <div className="row mt-2">
                                                <div className="col-sm-9">
                                                    <label>First Name:</label>
                                                    <div className="form-group">
                                                        <input type="text" name="first_name" id="first_name" className="form-control form-control--sm" {...register('first_name', { required: true })} />
                                                        {errors.first_name && <p style={{ "color": "red" }}>First name is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <label>Last Name:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="last_name" id="last_name" {...register('last_name', { required: true })} />
                                                        {errors.last_name && <p style={{ "color": "red" }}>Last name is required.</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-1" />
                                            <label>Address 1:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control--sm" name="address_1" id="address_1" {...register('address_1', { required: true })} />
                                                {errors.address_1 && <p style={{ "color": "red" }}>Address-1 name is required.</p>}
                                            </div>
                                            <div className="mt-1" />
                                            <label>Address 2:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control--sm" name="address_2" id="address_2" {...register('address_2', { required: true })} />
                                                {errors.address_2 && <p style={{ "color": "red" }}>Address-2 name is required.</p>}
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <label>Phone No:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="phone_no" id="phone_no" {...register('phone_no', { required: true })} />
                                                        {errors.phone_no && <p style={{ "color": "red" }}>PhoneNo name is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <label>zip/postal code:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="pin_code" id="pin_code" {...register('pin_code', { required: true })} />
                                                        {errors.pin_code && <p style={{ "color": "red" }}>Postal code is required.</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2" />
                                            <div className="text-right">
                                                <button type="button" className="btn btn-sm step-next">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="step2">
                                        <div className="tab-pane-inside">
                                            <div className="mt-2" />
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <label>Country:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="country" id="country" {...register('country', { required: true })} />
                                                        {errors.country && <p style={{ "color": "red" }}>Country is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <label>state:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="state" id="state" {...register('state', { required: true })} />
                                                        {errors.state && <p style={{ "color": "red" }}>State is required.</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2" />
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <label>city:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="city" id="city" {...register('city', { required: true })} />
                                                        {errors.city && <p style={{ "color": "red" }}>City is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <label>Email:</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control--sm" name="email" id="email" {...register('email', { required: true })} />
                                                        {errors.email && <p style={{ "color": "red" }}>Email is required.</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <button type="button" className="btn btn-sm step-next">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="step3">
                                        <div className="tab-pane-inside">
                                            <div className="clearfix">
                                                <input id="formcheckoutRadio1" defaultValue name="radio1" type="radio" className="radio" defaultChecked="checked" onChange={() => { setFinalPrice(priceInfo.totalprice + 40); setPriceInfo({ ...priceInfo, shippingcharge: 40 }) }} />
                                                <label htmlFor="formcheckoutRadio1">Normal Delivery ₹ 40 (3-5 days)</label>
                                            </div>
                                            <div className="clearfix">
                                                <input id="formcheckoutRadio2" defaultValue name="radio1" type="radio" className="radio" onChange={() => { setFinalPrice(priceInfo.totalprice + 80); setPriceInfo({ ...priceInfo, shippingcharge: 80 }) }} />
                                                <label htmlFor="formcheckoutRadio2">Express Delivery ₹80 (1-2 days)</label>
                                            </div>
                                            <div className="clearfix">
                                                <input id="formcheckoutRadio3" defaultValue name="radio1" type="radio" className="radio" onChange={() => { setFinalPrice(priceInfo.totalprice + 150); setPriceInfo({ ...priceInfo, shippingcharge: 150 }) }} />
                                                <label htmlFor="formcheckoutRadio3">Same-Day ₹ 150 (Evening Delivery)</label>
                                            </div>
                                            <div className="text-right">
                                                <button type="submit" className="btn btn-sm" onClick={() => handleErrors()}>Pay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 pl-lg-8 mt-2 mt-md-0">
                                <h2 className="custom-color">Order Summary</h2>
                                <div className="cart-table cart-table--sm pt-3 pt-md-0">
                                    <div className="cart-table-prd cart-table-prd--head py-1 d-none d-md-flex">
                                        <div className="cart-table-prd-image text-center">
                                            Image
                                        </div>
                                        <div className="cart-table-prd-content-wrap">
                                            <div className="cart-table-prd-info">Name</div>
                                            <div className="cart-table-prd-qty">Qty</div>
                                            <div className="cart-table-prd-price">Price</div>
                                        </div>
                                    </div>
                                    {
                                        cart.map((ele) => (
                                            <div className="cart-table-prd">
                                                <div className="cart-table-prd-image">
                                                    <img className="lazyload fade-up" src={ele.subVariation.image} alt="" style={{ height: "100px", objectFit: "cover" }} />
                                                </div>
                                                <div className="cart-table-prd-content-wrap">
                                                    <div className="cart-table-prd-info">
                                                        <h2 className="cart-table-prd-name"><a href="product.html">{ele.subVariation.product_name}</a></h2>
                                                    </div>
                                                    <div className="cart-table-prd-qty">
                                                        <div className="qty qty-changer">
                                                            <input type="text" className="qty-input disabled" value={ele.cart_quantity} data-min={0} data-max={1000} />
                                                        </div>
                                                    </div>
                                                    <div className="cart-table-prd-price-total">
                                                        ₹ {Math.round((ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="mt-2" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Apply Promocode</h3>
                                        <p>Got a promo code? Then you're a few randomly combined numbers &amp; letters away from fab savings!</p>
                                        <div className="form-inline mt-2">
                                            <input type="text" className="form-control form-control--sm" disabled={!isValid} placeholder="Promotion/Discount Code" name="coupon" onChange={(e) => { handleChange(e) }} value={coupon} />
                                            {
                                                isValid ?
                                                    <button type="button" className="btn" onClick={() => handleCoupon()}>Apply</button>
                                                    :
                                                    <button type="button" className="btn" onClick={() => handleRemoveCoupon()}>Remove</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2" />
                                <div className="cart-total-sm">
                                    <span>Subtotal</span>
                                    <span className="card-total-price">₹ {Math.round(finalPrice)}</span>
                                </div>
                                <div className="mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckOut
