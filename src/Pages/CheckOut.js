import React, { useEffect, useState } from 'react'

const CheckOut = ({ cart }) => {

    const [totalprice, setTotalPrice] = useState()

    const CartTotal = () => {
        let carttotal = 0;
        cart?.map((ele) => {
            carttotal += (ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity;
        })
        setTotalPrice(carttotal)
    }

    useEffect(() => {
        CartTotal()
    }, [cart])


    console.log(cart)
    return (
        <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li><span>Checkout</span></li>
                    </ul>
                </div>
            </div>
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
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#step4" data-step={4}><span>04.</span><span>Payment Method</span></a>
                                    </li>
                                </ul>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={1} aria-valuemin={1} aria-valuemax={5} style={{ width: '25%' }} />
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="step1">
                                    <div className="tab-pane-inside">
                                        <p><a href="account-create.html">Login</a> or <a href="account-create.html">Register</a> for faster payment.</p>
                                        <div className="row mt-2">
                                            <div className="col-sm-9">
                                                <label>First Name:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control--sm" />
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label>Last Name:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control--sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2" />
                                        <label>Country:</label>
                                        <div className="form-group select-wrapper">
                                            <select className="form-control form-control--sm">
                                                <option value="United States">United States</option>
                                                <option value="Canada">Canada</option>
                                                <option value="China">China</option>
                                                <option value="India">India</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Mexico">Mexico</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <label>State:</label>
                                                <div className="form-group select-wrapper">
                                                    <select className="form-control form-control--sm">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label>zip/postal code:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control--sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2" />
                                        <label>Address 1:</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control--sm" />
                                        </div>
                                        <div className="clearfix">
                                            <input id="formcheckoutCheckbox1" name="checkbox1" type="checkbox" />
                                            <label htmlFor="formcheckoutCheckbox1">Save address to my account</label>
                                        </div>
                                        <div className="text-right">
                                            <button type="button" className="btn btn-sm step-next">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="step2">
                                    <div className="tab-pane-inside">
                                        <div className="clearfix">
                                            <input id="formcheckoutCheckbox2" name="checkbox2" type="checkbox" />
                                            <label htmlFor="formcheckoutCheckbox2">The same as shipping address</label>
                                        </div>
                                        <div className="mt-2" />
                                        <label>Country:</label>
                                        <div className="form-group select-wrapper">
                                            <select className="form-control form-control--sm">
                                                <option value="United States">United States</option>
                                                <option value="Canada">Canada</option>
                                                <option value="China">China</option>
                                                <option value="India">India</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Mexico">Mexico</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <label>State:</label>
                                                <div className="form-group select-wrapper">
                                                    <select className="form-control form-control--sm">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label>zip/postal code:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control--sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2" />
                                        <label>Address 1:</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control--sm" />
                                        </div>
                                        <div className="mt-2" />
                                        <div className="text-right">
                                            <button type="button" className="btn btn-sm step-next">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="step3">
                                    <div className="tab-pane-inside">
                                        <div className="clearfix">
                                            <input id="formcheckoutRadio1" defaultValue name="radio1" type="radio" className="radio" defaultChecked="checked" />
                                            <label htmlFor="formcheckoutRadio1">Standard Delivery $2.99 (3-5 days)</label>
                                        </div>
                                        <div className="clearfix">
                                            <input id="formcheckoutRadio2" defaultValue name="radio1" type="radio" className="radio" />
                                            <label htmlFor="formcheckoutRadio2">Express Delivery $10.99 (1-2 days)</label>
                                        </div>
                                        <div className="clearfix">
                                            <input id="formcheckoutRadio3" defaultValue name="radio1" type="radio" className="radio" />
                                            <label htmlFor="formcheckoutRadio3">Same-Day $20.00 (Evening Delivery)</label>
                                        </div>
                                        <div className="text-right">
                                            <button type="button" className="btn btn-sm step-next">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="step4">
                                    <div className="tab-pane-inside">
                                        <div className="clearfix">
                                            <input id="formcheckoutRadio4" defaultValue name="radio2" type="radio" className="radio" defaultChecked="checked" />
                                            <label htmlFor="formcheckoutRadio4">Credit Card</label>
                                        </div>
                                        <div className="clearfix">
                                            <input id="formcheckoutRadio5" defaultValue name="radio2" type="radio" className="radio" />
                                            <label htmlFor="formcheckoutRadio5">Paypal</label>
                                        </div>
                                        <div className="mt-2" />
                                        <label>Cart Number</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control--sm" />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <label>Month:</label>
                                                <div className="form-group select-wrapper">
                                                    <select className="form-control form-control--sm">
                                                        <option selected value={1}>January</option>
                                                        <option value={2}>February</option>
                                                        <option value={3}>March</option>
                                                        <option value={4}>April</option>
                                                        <option value={5}>May</option>
                                                        <option value={6}>June</option>
                                                        <option value={7}>July</option>
                                                        <option value={8}>August</option>
                                                        <option value={9}>September</option>
                                                        <option value={10}>October</option>
                                                        <option value={11}>November</option>
                                                        <option value={12}>December</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label>Year:</label>
                                                <div className="form-group select-wrapper">
                                                    <select className="form-control form-control--sm">
                                                        <option value={2019}>2019</option>
                                                        <option value={2020}>2020</option>
                                                        <option value={2021}>2021</option>
                                                        <option value={2022}>2022</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2024}>2024</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2" />
                                        <label>CVV Code</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control--sm" />
                                        </div>
                                    </div>
                                    <div className="clearfix mt-1 mt-md-2">
                                        <button type="submit" className="btn btn--lg w-100">Place Order</button>
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
                                                    ₹ {(ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity}
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
                                        <input type="text" className="form-control form-control--sm" placeholder="Promotion/Discount Code" />
                                        <button type="submit" className="btn">Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2" />
                            <div className="cart-total-sm">
                                <span>Subtotal</span>
                                <span className="card-total-price">₹ {totalprice}</span>
                            </div>
                            <div className="mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
