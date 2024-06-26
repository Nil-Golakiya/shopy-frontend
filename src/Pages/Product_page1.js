import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const Product_page1 = ({ setCart, cart }) => {


    const [data, setData] = useState();
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState([]);
    const [variations, setVariations] = useState([]);
    const [images, setImages] = useState([]);
    const [activeInfo, setActiveInfo] = useState({});
    const [isCart, setIsCart] = useState(false);


    const params = useParams();
    const navigate = useNavigate()

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer)?.user?.user._id


    const fetchData = async () => {
        const { data } = await axios.get(`/product/${params.id}`)
        const productData = data.data[0]
        setData(productData)
        handleChangeColorSize(productData, null)
    }

    const createCart = async () => {
        if (userId) {
            localStorage.setItem('cartItem', JSON.stringify(activeInfo))
            const { data: resData } = await axios.post("/cart/", {
                variation_id: activeInfo.variation_id,
                user_id: userId,
                subVariation: { ...activeInfo, image: images[0], product_name: data.title },
                cart_quantity: count,
            })

            const findItem = await cart.find((item) => item.variation_id === resData.variation_id && item.subVariation._id === resData.subVariation._id)

            let checkCart = cart.map((item) => {
                if (item.variation_id === resData.variation_id && item.subVariation._id === resData.subVariation._id) {
                    item.cart_quantity += resData.cart_quantity
                }
                return item;
            })

            if (findItem) {
                setCart(checkCart)
            } else {
                setCart([...checkCart, resData])
            }

        } else {
            navigate("/login")
        }
    }

    const handleGotoCart = () => {
        navigate("/cart")
    }

    const handleChangeColorSize = (data, color) => {

        const colorArray = [];
        data?.variations.map((ele) => {
            colorArray.push({
                color: ele.color,
                image: ele.image[0]
            });
        })
        setColors(colorArray);
        if (!color) {
            color = colorArray[0].color;
        }

        const variationObj = data?.variations.find((v) => v.color === color);
        if (variationObj) {
            setImages(variationObj.image);
            setVariations(variationObj.subVariation);
            const info = variationObj.subVariation[0];
            setActiveInfo({ ...activeInfo, color, variation_id: variationObj._id, ...info, product_name: data.title });
        }

        const imageArray = []
        data.variations.map((ele) => (
            imageArray.push(ele.image)
        ))
    }

    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => {
        let isAddCart = false;
        cart.map((ele) => {
            if (ele.subVariation._id === activeInfo._id) {
                isAddCart = true
            }
        })
        setIsCart(isAddCart)
    }, [activeInfo])

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])

    return (
        <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/products/${params.category}`}>{params.category}</Link></li>
                        <li><span>{data && data.title}</span></li>
                    </ul>
                </div>
            </div>
            <div className="holder">
                <div className="container js-prd-gallery" id="prdGallery">
                    <div className="row prd-block prd-block-under prd-block--prv-bottom">
                        <div className="col">
                            <div className="js-prd-d-holder">
                                <div className="prd-block_title-wrap">
                                    <div className="prd-block_reviews" data-toggle="tooltip" data-placement="top" title="Scroll To Reviews"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star" />
                                        <span className="reviews-link"><a href="#" className="js-reviews-link"> (17 reviews)</a></span>
                                    </div>
                                    <h1 className="prd-block_title">{data && data.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row prd-block prd-block--prv-bottom">
                        <div className="col-md-8 col-lg-8 col-xl-8 aside--sticky js-sticky-collision">
                            <div className="aside-content">
                                <div className="mb-2 js-prd-m-holder" />
                                <div className="prd-block_main-image">
                                    <div className="prd-block_main-image-holder" id="prdMainImage">
                                        <Carousel infiniteLoop={true} autoPlay={true}  >
                                            {
                                                images.map((image) => (
                                                    <div data-value="Beige">
                                                        <span className="prd-img">
                                                            <img src={image} data-src={image} className="lazyload fade-up" alt="" />
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                            </Carousel>
                                        <div className="prd-block_label-sale-squared justify-content-center align-items-center"><span>Sale</span></div>
                                    </div>
                                </div>
                                <div className='d-flex mt-2'>
                                    {images.map((image) => (
                                        <span className="prd-img">
                                            <img src={image} onLoadStart={() => console.log('loading..')} onLoad={() => console.log('loaded..')} className="lazyload fade-up" alt="" style={{ height: "150px", objectFit: "contain" }} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-10 col-xl-10 mt-1 mt-md-0">
                            <div className="prd-block_info prd-block_info--style1" data-prd-handle="/products/copy-of-suede-leather-mini-skirt">
                                <div className="prd-block_info-top prd-block_info_item order-0 order-md-2">
                                    <div className="prd-block_price prd-block_price--style2">
                                        <div className="prd-block_price--actual">₹ {Math.round(activeInfo.price - activeInfo.price / activeInfo.discount)}</div>
                                        <div className="prd-block_price-old-wrap">
                                            <span className="prd-block_price--old">₹ {activeInfo.price}</span>
                                            <span className="prd-block_price--text">You Save:₹ {Math.round(activeInfo.price / activeInfo.discount)} ({activeInfo.discount}%)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="prd-block_description prd-block_info_item ">
                                    <h3>Short description</h3>
                                    <p>{data && data.sort_description}</p>
                                    <div className="mt-1" />
                                    <div className="row vert-margin-less">
                                        <div className="col-sm">
                                            <ul className="list-marker">
                                                <li>100% Polyester</li>
                                                <li>Lining:100% Viscose</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm">
                                            <ul className="list-marker">
                                                <li>Do not dry clean</li>
                                                <li>Only non-chlorine</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="prd-progress prd-block_info_item" data-left-in-stock>
                                    {
                                        activeInfo.qty === 0 ? <div className="prd-progress-text" style={{ color: "red" }}>
                                            Out of stock
                                        </div> :
                                            <div className="prd-progress-text">
                                                Hurry Up! Left <span className="prd-progress-text-left js-stock-left">{activeInfo.qty}</span> in stock
                                            </div>
                                    }

                                    <div className="prd-progress-text-null" />
                                    <div className="prd-progress-bar-wrap progress">
                                        <div className="prd-progress-bar progress-bar active" data-stock="50, 10, 30, 25, 1000, 15000" style={{ width: `${activeInfo.qty}%` }} />
                                    </div>
                                </div>

                                <div className={`prd-block_info_item prd-block_info-when-arrives ${activeInfo.qty === 0 ? "" : "d-none"}`} data-when-arrives>
                                    <div className="prd-block_links prd-block_links m-0 d-inline-flex">
                                        <i className="icon-email-1" />
                                        <div><a href="#" data-follow-up data-name="Oversize Cotton Dress" className="prd-in-stock" data-src="#whenArrives">Inform me when the item arrives</a></div>
                                    </div>
                                </div>
                                <div className="prd-block_info-box prd-block_info_item">
                                    <div className="two-column"><p className="d-flex">Availability:
                                        <span className="prd-in-stock" data-stock-status>{activeInfo.qty !== 0 ? "In stock" : <p style={{ color: "red" }}>Out Of stock</p>}</span></p>
                                        <p className="prd-taxes">Tax Info:
                                            <span>Tax included.</span>
                                        </p>
                                        <p>Collection: <span> <Link to={`/products/${params.category}`} data-toggle="tooltip" data-placement="top" data-original-title="View all">{params.category}</Link></span></p>
                                    </div>
                                </div>
                                <div className="order-0 order-md-100">
                                    <form method="post" action="#">
                                        <div className="prd-block_options">
                                            <div className="prd-color swatches">
                                                <div className="option-label">Color:</div>
                                                <select className="form-control hidden single-option-selector-modalQuickView" id="SingleOptionSelector-0" data-index="option1">
                                                    {colors.map((ele) => {
                                                        <option value={ele.color}>{ele.color}</option>
                                                    })}
                                                </select>
                                                <ul className="images-list js-size-list" data-select-id="SingleOptionSelector-0">
                                                    {colors.map((ele) => (
                                                        <li className={`${ele.color === activeInfo.color ? "active" : ""}`} onClick={() => handleChangeColorSize(data, ele.color)}>
                                                            <a href="#" data-value={ele.color} data-toggle="tooltip" data-placement="top" data-original-title={ele.color}>
                                                                <span className="image-container image-container--product">
                                                                    <img src={ele.image} alt="" />
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="prd-size swatches">
                                                <div className="option-label">Size:</div>
                                                <select className="form-control hidden single-option-selector-modalQuickView" id="SingleOptionSelector-1" data-index="option2">
                                                    <option value="Small" selected="selected">Small</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Large">Large</option>
                                                </select>
                                                <ul className="size-list js-size-list" data-select-id="SingleOptionSelector-1">
                                                    {variations.map((variation) => (
                                                        <li className={`${variation.size === activeInfo.size ? "active" : ""}`} onClick={() => setActiveInfo({ ...activeInfo, ...variation })}>
                                                            <a href="#" data-value={variation.size}><span className="value">{variation.size}</span></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="prd-block_actions prd-block_actions--wishlist">
                                            <div className="prd-block_qty">
                                                <div className="qty qty-changer">
                                                    <button className="decrease" disabled={count === 0 || activeInfo.qty === 0} type='button' onClick={() => setCount(count - 1)} />
                                                    <input type="number" className="qty-input" name="quantity" value={count} data-min={1} data-max={100} />
                                                    <button className="increase" disabled={activeInfo.qty === count} type='button' onClick={() => setCount(count + 1)} />
                                                </div>
                                            </div>
                                            <div className="btn-wrap">
                                                {isCart ?
                                                    <button onClick={() => handleGotoCart()} className="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart" data-product="{&quot;name&quot;:  &quot;Leather Pegged Pants &quot;,  &quot;url &quot;: &quot;product.html&quot;,  &quot;path &quot;: &quot;images/skins/fashion/product-page/product-01.webp&quot;,  &quot;aspect_ratio &quot;: &quot;0.78&quot;}">
                                                        Go to cart
                                                    </button> :
                                                    <button type="button" onClick={() => createCart()} disabled={count === 0 || activeInfo.qty === 0} className="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart" data-product="{&quot;name&quot;:  &quot;Leather Pegged Pants &quot;,  &quot;url &quot;: &quot;product.html&quot;,  &quot;path &quot;: &quot;images/skins/fashion/product-page/product-01.webp&quot;,  &quot;aspect_ratio &quot;: &quot;0.78&quot;}">
                                                        Add to cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </form>
                                    <div className="prd-block_agreement prd-block_info_item order-0 order-md-100 text-right" data-agree>
                                        <input id="agreementCheckboxProductPage" className="js-agreement-checkbox" data-button=".shopify-payment-agree" name="agreementCheckboxProductPage" type="checkbox" />
                                        <label htmlFor="agreementCheckboxProductPage"><a href="#" data-fancybox className="modal-info-link" data-src="#agreementInfo">I agree to the terms of service</a></label>
                                    </div>
                                </div>
                                <div className="prd-block_info_item">
                                    <ul className="prd-block_links list-unstyled">
                                        <li><i className="icon-delivery-1" /><a href="#" data-fancybox className="modal-info-link" data-src="#deliveryInfo">Delivery and Return</a></li>
                                        <li><i className="icon-email-1" /><a href="#" data-fancybox className="modal-info-link" data-src="#contactModal">Ask about this product</a></li>
                                    </ul>
                                    <div id="deliveryInfo" style={{ display: 'none' }} className="modal-info-content modal-info-content-lg">
                                        <div className="modal-info-heading">
                                            <div className="mb-1"><i className="icon-delivery-1" /></div>
                                        </div>
                                        <br />
                                        <h5>Our parcel courier service</h5>
                                        <p>SHOPY is proud to offer an exceptional international parcel shipping service. It is straightforward and very easy to organise international parcel shipping. Our customer service team works around the clock to make sure that you receive high quality courier service from start to finish.</p>
                                        <p>Sending a parcel with us is simple. To start the process you will first need to get a quote using our free online quotation service. From this, you’ll be able to navigate through the online form to book a collection date for your parcel, selecting a shipping day suitable for you.</p>
                                        <br />
                                        <h5>Shipping Time</h5>
                                        <p>The shipping time is based on the shipping method you chose.<br />
                                            EMS takes about 5-10 working days for delivery.<br />
                                            DHL takes about 2-5 working days for delivery.<br />
                                            DPEX takes about 2-8 working days for delivery.<br />
                                            JCEX takes about 3-7 working days for delivery.<br />
                                            China Post Registered Mail takes 20-40 working days for delivery.</p>
                                    </div>
                                    <div id="contactModal" style={{ display: 'none' }} className="modal-info-content modal-info-content-sm">
                                        <div className="modal-info-heading">
                                            <div className="mb-1"><i className="icon-envelope" /></div>
                                        </div>
                                        <form method="post" action="#" id="contactForm" className="contact-form">
                                            <div className="form-group">
                                                <input type="text" name="contact[name]" className="form-control form-control--sm" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="contact[email]" className="form-control form-control--sm" placeholder="Email" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="contact[phone]" className="form-control form-control--sm" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control textarea--height-170" name="contact[body]" placeholder="Message" required defaultValue={"Hi! I need next info about the \"Oversize Cotton Dress\":"} />
                                            </div>
                                            <button className="btn" type="submit">Ask our consultant</button>
                                            <p className="p--small mt-15 mb-0">and we will contact you soon</p><input name="recaptcha-v3-token" type="hidden" defaultValue="03AGdBq27T8WvzvZu79QsHn8lp5GhjNX-w3wkcpVJgCH15Ehh0tu8c9wTKj4aNXyU0OLM949jTA4cDxfznP9myOBw9m-wggkfcp1Cv_vhsi-TQ9E_EbeLl33dqRhp2sa5tKBOtDspTgwoEDODTHAz3nuvG28jE7foIFoqGWiCqdQo5iEphqtGTvY1G7XgWPAkNPnD0B9V221SYth9vMazf1mkYX3YHAj_g_6qhikdQDsgF2Sa2wOcoLKWiTBMF6L0wxdwhIoGFz3k3VptYem75sxPM4lpS8Y_UAxfvF06fywFATA0nNH0IRnd5eEPnnhJuYc5LYsV6Djg7_S4wLBmOzYnahC-S60MHvQFf-scQqqhPWOtgEKPihUYiGFBJYRn2p1bZwIIhozAgveOtTNQQi7FGqmlbKkRWCA" /></form>
                                    </div>
                                </div>
                                <div className="prd-block_info_item">
                                    <img className="img-responsive lazyload d-none d-sm-block" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/payment/safecheckout.webp" alt="" />
                                    <img className="img-responsive lazyload d-sm-none" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/payment/safecheckout-m.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder prd-block_links-wrap-bg d-none d-md-block">
                <div className="prd-block_links-wrap prd-block_info_item container mt-2 mt-md-5 py-1">
                    <div className="prd-block_link"><span><i className="icon-call-center" />24/7 Support</span></div>
                    <div className="prd-block_link"><span><i className="icon-delivery-truck" /> Fast Shipping</span></div>
                </div>
            </div>
            <div className="holder mt-3 mt-md-5">
                <div className="container">
                    <ul className="nav nav-tabs product-tab">
                        <li className="nav-item"><a href="#Tab1" className="nav-link" data-toggle="tab">Description
                            <span className="toggle-arrow"><span /><span /></span>
                        </a></li>
                        <li className="nav-item"><a href="#Tab5" className="nav-link" data-toggle="tab">Reviews
                            <span className="toggle-arrow"><span /><span /></span>
                        </a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade" id="Tab1">
                            <p>
                                <div dangerouslySetInnerHTML={{ __html: data && data.long_description }}></div>
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="Tab5">
                            <div id="productReviews">
                                <div className="row align-items-center">
                                    <div className="col"><h2>CUSTOMER REVIEWS</h2></div>
                                </div>
                                <div id="productReviewsBottom">
                                    <div className="review-item">
                                        <div className="review-item_rating">
                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                        </div>
                                        <div className="review-item_top row align-items-center">
                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                            <div className="col-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                        </div>
                                        <div className="review-item_content">
                                            <h4>Good ball and company</h4>
                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item_rating">
                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                        </div>
                                        <div className="review-item_top row align-items-center">
                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                            <div className="col-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                        </div>
                                        <div className="review-item_content">
                                            <h4>Good ball and company</h4>
                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item_rating">
                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                        </div>
                                        <div className="review-item_top row align-items-center">
                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                            <div className="col-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                        </div>
                                        <div className="review-item_content">
                                            <h4>Good ball and company</h4>
                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item_rating">
                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                        </div>
                                        <div className="review-item_top row align-items-center">
                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                            <div className="col-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                        </div>
                                        <div className="review-item_content">
                                            <h4>Good ball and company</h4>
                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item_rating">
                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                        </div>
                                        <div className="review-item_top row align-items-center">
                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                            <div className="col-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                        </div>
                                        <div className="review-item_content">
                                            <h4>Good ball and company</h4>
                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fancybox-container fancybox-show-thumbs fancybox--light fancybox-is-open fancybox-is-zoomable fancybox-can-zoomIn fancybox-show-toolbar fancybox-show-infobar d-none" role="dialog" tabIndex={-1} id="fancybox-container-1" style={{ transitionDuration: '366ms' }}>
                <div className="fancybox-bg" />
                <div className="fancybox-inner">
                    <div className="fancybox-infobar">
                        <span data-fancybox-index>8
                        </span>&nbsp;/&nbsp;
                        <span data-fancybox-count>9</span>
                    </div>
                    <div className="fancybox-toolbar">
                        <button data-fancybox-close className="fancybox-button fancybox-button--close" title="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z" /></svg>
                        </button>
                    </div>
                    <div className="fancybox-navigation">
                        <button data-fancybox-prev className="fancybox-button fancybox-button--arrow_left" title="Previous">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z" />
                                </svg>
                            </div>
                        </button>
                        <button data-fancybox-next className="fancybox-button fancybox-button--arrow_right" title="Next">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="fancybox-stage">
                        <div className="fancybox-slide fancybox-slide--image fancybox-slide--current fancybox-slide--complete" style={{}}>
                            <div className="fancybox-content" style={{ transform: 'translate(784px, 6px)', width: '351.014px', height: '451px' }}>
                                {
                                    images.map((image) => (
                                        <img className="fancybox-image" src={image} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="fancybox-caption fancybox-caption--separate"><div className="fancybox-caption__body" />
                    </div>
                    <div className="fancybox-progress" />
                </div>
                <div className="fancybox-thumbs fancybox-thumbs-x">
                    <div className="fancybox-thumbs__list d-flex justify-content-center">
                        {
                            images.map((image) => (
                                <a href="javascript:;" tabIndex={0} data-index={1} style={{ backgroundImage: `url(${image})`, height: "150px", width: "150px" }} />
                            ))
                        }
                        {/* <a href="javascript:;" tabIndex={0} data-index={0} style={{ backgroundImage: 'url(images/skins/fashion/product-page/product-01.webp)' }} className />

                        <a href="javascript:;" tabIndex={0} data-index={7} style={{ backgroundImage: 'url(images/skins/fashion/product-page/product-08.webp)' }} className="fancybox-thumbs-active" /> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product_page1
