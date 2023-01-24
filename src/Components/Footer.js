import axios from 'axios'
import React from 'react'
import logo from "../Image/logo.jpeg"
import { Link } from 'react-router-dom'

const Footer = () => {

    const cartItem = JSON.parse(localStorage.getItem("cartItem"));
    console.log("cartItem-------------", cartItem)


    return (
        <div>
            <footer className="page-footer footer-style-6 ">
                <div className="holder ">
                    <div className="footer-shop-info">
                        <div className="container">
                            <div className="text-icn-blocks-bg-row">
                                <div className="text-icn-block-footer">
                                    <div className="icn">
                                        <i className="icon-trolley" />
                                    </div>
                                    <div className="text">
                                        <h4>Extra fast delivery</h4>
                                        <p>Your order will be delivered 3-5 business days after all of your items are available
                                        </p>
                                    </div>
                                </div>
                                <div className="text-icn-block-footer">
                                    <div className="icn">
                                        <i className="icon-currency" />
                                    </div>
                                    <div className="text">
                                        <h4>Best price</h4>
                                        <p>We'll match the product prices of key online and local competitors for immediately
                                        </p>
                                    </div>
                                </div>
                                <div className="text-icn-block-footer">
                                    <div className="icn">
                                        <i className="icon-diplom" />
                                    </div>
                                    <div className="text">
                                        <h4>Guarantee</h4>
                                        <p>If the item you want is available, we can process a return and place a new order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row mt-0">
                            <div className="col-lg col-xl last-mobile">
                                <div className="footer-block">
                                    <div className="footer-logo">
                                        <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                                            <img className="lazyload fade-up" src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="collapsed-content">
                                        <ul>
                                            <li>E-mail: <a href="mailto:Foxshop@gmail.com">shopy@gmail.com</a></li>
                                            <li>Hours: 10:00 - 18:00, Mon - Fri</li>
                                        </ul>
                                    </div>
                                    <ul className="social-list">
                                        <li>
                                            <a href="#" className="icon icon-facebook" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon icon-twitter" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon icon-google" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon icon-vimeo" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon icon-youtube" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon icon-pinterest" />
                                        </li>
                                    </ul>
                                    <div className="d-lg-none mt-3">
                                        <div className="box-coupon">
                                            <div className="box-coupon-icon"><i className="icon-scissors" /></div>
                                            <div className="box-coupon-text"><span className="custom-color">Shopy</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-xl">
                                <div className="footer-block collapsed-mobile">
                                    <div className="title">
                                        <h4>Information</h4>
                                        <span className="toggle-arrow"><span /><span /></span>
                                    </div>
                                    <div className="collapsed-content">
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link tp="/">Terms &amp; Conditions</Link></li>
                                            <li><Link tp="/">Returns &amp; Exchanges</Link></li>
                                            <li><Link tp="/">Shipping &amp; Delivery</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-xl">
                                <div className="footer-block collapsed-mobile">
                                    <div className="title">
                                        <h4>Account details</h4>
                                        <span className="toggle-arrow"><span /><span /></span>
                                    </div>
                                    <div className="collapsed-content">
                                        <ul>
                                            <li><Link to="/">My Account</Link></li>
                                            <li><Link to="/cart">View Cart</Link></li>
                                            <li><Link to="wishlist">My Wishlist</Link></li>
                                            <li><Link to="/">Order Status</Link></li>
                                            <li><Link to="/">Track My Order</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-xl">
                                <div className="footer-block collapsed-mobile">
                                    <div className="title">
                                        <h4>Safe payments</h4>
                                        <span className="toggle-arrow"><span /><span /></span>
                                    </div>
                                    <div className="collapsed-content">
                                        <ul className="payment-link">
                                            <li><i className="icon-google-pay-logo" /></li>
                                            <li><i className="icon-visa-pay-logo" /></li>
                                            <li><i className="icon-apple-pay-logo" /></li>
                                        </ul>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <div className="box-coupon">
                                            <div className="box-coupon-icon"><i className="icon-scissors" /></div>
                                            <div className="box-coupon-text"><span className="custom-color">Shopy</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom footer-bottom--bg">
                    <div className="container">
                        <div className="footer-copyright text-center">
                            <a href="#">Shopy</a> ©2020 copyright
                        </div>
                    </div>
                </div>
            </footer>
            {/* <div className="footer-sticky">
                <div className="sticky-addcart js-stickyAddToCart closed">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto sticky-addcart_image">
                                <a href="product.html">
                                    <img src="images/skins/fashion/products/product-01-1.html" alt="" />
                                </a>
                            </div>
                            <div className="col col-sm-5 col-lg-4 col-xl-5 sticky-addcart_info">
                                <h1 className="sticky-addcart_title">{cartItem.product_name}</h1>
                                <div className="sticky-addcart_price">
                                    <span className="sticky-addcart_price--actual">$180.00</span>
                                    <span className="sticky-addcart_price--old">$210.00</span>
                                </div>
                            </div>
                            <div className="col-auto sticky-addcart_options  prd-block prd-block_info--style1">
                                <div className="select-wrapper">
                                    <select className="form-control form-control--sm">
                                        <option value>--Please choose an option--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-auto sticky-addcart_actions">
                                <div className="prd-block_qty">
                                    <span className="option-label">Quantity:</span>
                                    <div className="qty qty-changer">
                                        <button className="decrease" />
                                        <input type="number" className="qty-input" defaultValue={1} data-min={1} data-max={1000} />
                                        <button className="increase" />
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <button className="btn js-prd-addtocart" data-fancybox data-src="#modalCheckOut">Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup-addedtocart js-popupAddToCart closed" data-close={50000}>
                    <div className="container">
                        <div className="row">
                            <div className="popup-addedtocart-close js-popupAddToCart-close"><i className="icon-close" /></div>
                            <div className="popup-addedtocart-cart js-open-drop" data-panel="#dropdnMinicart"><i className="icon-basket" /></div>
                            <div className="col-auto popup-addedtocart_logo">
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/logo-white-sm.webp" className="lazyload fade-up" alt="" />
                            </div>
                            <div className="col popup-addedtocart_info">
                                <div className="row">
                                    <a href="product.html" className="col-auto popup-addedtocart_image">
                                        <span className="image-container w-100">
                                            <img src="images/skins/fashion/products/product-01-1.html" alt="" />
                                        </span>
                                    </a>
                                    <div className="col popup-addedtocart_text">
                                        <a href="product.html" />
                                        <span className="popup-addedtocart_message">Added to <a href="cart.html" className="underline">Cart</a></span>
                                        <span className="popup-addedtocart_error_message" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto popup-addedtocart_actions">
                                <span>You can continue</span> <Link to="/cart" className="btn btn--grey btn--sm"><i className="icon-basket" /><span>Check Cart</span></Link>
                                <span>or</span> <a href="checkout.html" className="btn btn--invert btn--sm"><i className="icon-envelope-1" /><span>Check out</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-addcart popup-selectoptions js-popupSelectOptions closed" data-close={500000}>
                    <div className="container">
                        <div className="row">
                            <div className="popup-selectoptions-close js-popupSelectOptions-close"><i className="icon-close" /></div>
                            <div className="col-auto sticky-addcart_image sticky-addcart_image--zoom">
                                <a href="#" data-caption>
                                    <span className="image-container"><img src="#" alt="" /></span>
                                </a>
                            </div>
                            <div className="col col-sm-5 col-lg-4 col-xl-5 sticky-addcart_info">
                                <h1 className="sticky-addcart_title"><a href="#">&nbsp;</a></h1>
                                <div className="sticky-addcart_price">
                                    <span className="sticky-addcart_price--actual" />
                                    <span className="sticky-addcart_price--old" />
                                </div>
                                <div className="sticky-addcart_error_message">Error Message</div>
                            </div>
                            <div className="col-auto sticky-addcart_options prd-block prd-block_info--style1">
                                <div className="select-wrapper">
                                    <select className="form-control form-control--sm sticky-addcart_options_select">
                                        <option value="none">Select Option please..</option>
                                    </select>
                                    <div className="invalid-feedback">Can't be blank</div>
                                </div>
                            </div>
                            <div className="col-auto sticky-addcart_actions">
                                <div className="prd-block_qty">
                                    <span className="option-label">Quantity:</span>
                                    <div className="qty qty-changer">
                                        <button className="decrease" />
                                        <input type="number" className="qty-input" defaultValue={2} data-min={1} data-max={10000} />
                                        <button className="increase" />
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <button className="btn js-prd-addtocart">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="back-to-top js-back-to-top compensate-for-scrollbar" href="#" title="Scroll To Top">
                    <i className="icon icon-angle-up" />
                </a>
                <div className="loader-horizontal js-loader-horizontal">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className="footer-sticky">
                <div className="payment-notification-wrap js-pn" data-visible-time={3000} data-hidden-time={3000} data-delay={500} data-from="Aberdeen,Bakersfield,Birmingham,Cambridge,Youngstown"
                    data-products={`[{&quot;productname&quot;:&quot;${cartItem.product_name}&quot;, &quot;productlink&quot;:&quot;product.html&quot;,&quot;productimage&quot;:&quot;images/skins/fashion/products/product-01-1.webp&quot;},{&quot;productname&quot;:&quot;Black Fabric Backpack&quot;, &quot;productlink&quot;:&quot;product.html&quot;,&quot;productimage&quot;:&quot;images/skins/fashion/products/product-28-1.webp&quot;},{&quot;productname&quot;:&quot;Combined Chunky Sneakers&quot;, &quot;productlink&quot;:&quot;product.html&quot;,&quot;productimage&quot;:&quot;images/skins/fashion/products/product-23-1.webp&quot;}]`}>
                    <div className="payment-notification payment-notification--squared">
                        <div className="payment-notification-inside">
                            <div className="payment-notification-container">
                                <a href="#" className="payment-notification-image js-pn-link">
                                    <img src="images/products/product-01.html" className="js-pn-image" alt="" />
                                </a>
                                <div className="payment-notification-content-wrapper">
                                    <div className="payment-notification-content">
                                        <div className="payment-notification-text">Someone purchased</div>
                                        <a href="product.html" className="payment-notification-name js-pn-name js-pn-link">Applewatch</a>
                                        <div className="payment-notification-bottom">
                                            <div className="payment-notification-when"><span className="js-pn-time">32</span> min ago
                                            </div>
                                            <div className="payment-notification-from">from <span className="js-pn-from">Riverside</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-notification-close"><i className="icon-close-bold" /></div>
                            <div className="payment-notification-qw prd-hide-mobile js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Footer
