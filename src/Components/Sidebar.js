import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import "../asstes/sidebar.css"

const Sidebar = ({ data }) => {

    const navigate = useNavigate()
    const user = localStorage.getItem("myuser");

    const handleLogout = async () => {
        localStorage.removeItem("myuser");
        navigate("/login")
        toast.error("Your are successfully logout..!")
    }

    return (
        <div className="header-side-panel">
            <div className="mobilemenu js-push-mbmenu">
                <div className="mobilemenu-content">
                    <div className="mobilemenu-close mobilemenu-toggle">Close</div>
                    <div className="mobilemenu-scroll">
                        <div className="mobilemenu-search"></div>
                        <div className="nav-wrapper show-menu">
                            <div className="nav-toggle">
                                <span className="nav-back"><i className="icon-angle-left"></i></span>
                                <span className="nav-title"></span>
                                <a href="#" className="nav-viewall">view all</a>
                            </div>
                            <ul className="nav nav-level-1">
                                {
                                    data && data.map((cat) => {
                                        return (
                                            <li key={cat._id}><Link to={`/products/${cat.name}`}>{cat.name}<span
                                                className="arrow"><i className="icon-angle-right"></i></span></Link>
                                                <ul className="nav-level-2">
                                                    {
                                                        cat.subcategory_details && cat.subcategory_details.map((subcat) => {
                                                            return (
                                                                <li key={subcat._id}><Link to={`/products/${cat.name}/${subcat.name}`}>{subcat.name}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdn-content account-drop" id="dropdnAccount">
                <div className="dropdn-content-block">
                    {/* <button className="dropdn-close"><span className="js-dropdn-close">X</span></button> */}
                    <div className="dropdn-close btn-wrap text-right" data-animation="fadeIn" data-animation-delay="2000"><span className="js-dropdn-close btn btn--sm closebtn" >X</span></div>
                    <ul className="sidebar_ul">
                        {user ? <li><button onClick={() => handleLogout()} className="logoutbutton"><i className="fa fa-power-off"></i><span>Logout</span></button></li> :
                            <li><Link to="/login"><i className="icon-login"></i><span>Log In</span></Link></li>}

                        {user ? "" : <li><Link to="/login"><i className="icon-user2"></i><span>Register</span></Link></li>}
                        <li><Link to="/account-details"><i className="fa fa-user"></i><span>My Account</span></Link></li>
                        <li><Link to="/account-order"><i className="fa fa-shopping-basket "></i><span>My Order</span></Link></li>
                        <li><Link to="/wishlist"><i className="fa fa-heart "></i><span>My Wishlist</span></Link></li>
                        <li><a href="checkout.html"><i className="fa fa-cart-arrow-down "></i><span>My Cart</span></a></li>
                        <li><a href="checkout.html"><i className="fa fa-credit-card "></i><span>My Wishlist</span></a></li>
                    </ul>
                </div>
                <div className="drop-overlay js-dropdn-close"></div>
            </div>
            <div className="dropdn-content minicart-drop" id="dropdnMinicart">
                <div className="dropdn-content-block">
                    <div className="dropdn-close"><span className="js-dropdn-close">Close</span></div>
                    <div className="minicart-drop-content js-dropdn-content-scroll">
                        <div className="minicart-prd row">
                            <div className="minicart-prd-image image-hover-scale-circle col">
                                <a href="product.html"><img className="lazyload fade-up"
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-01-1.webp" alt="" /></a>
                            </div>
                            <div className="minicart-prd-info col">
                                <div className="minicart-prd-tag">Shopy</div>
                                <h2 className="minicart-prd-name"><a href="#">Leather Pegged Pants</a></h2>
                                <div className="minicart-prd-qty"><span className="minicart-prd-qty-label">Quantity:</span><span
                                    className="minicart-prd-qty-value">1</span></div>
                                <div className="minicart-prd-price prd-price">
                                    <div className="price-old">$200.00</div>
                                    <div className="price-new">$180.00</div>
                                </div>
                            </div>
                            <div className="minicart-prd-action">
                                <a href="#" className="js-product-remove" data-line-number="1"><i className="icon-recycle"></i></a>
                            </div>
                        </div>
                        <div className="minicart-prd row">
                            <div className="minicart-prd-image image-hover-scale-circle col">
                                <a href="product.html"><img className="lazyload fade-up"
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-16-1.webp" alt="" /></a>
                            </div>
                            <div className="minicart-prd-info col">
                                <div className="minicart-prd-tag">Shopy</div>
                                <h2 className="minicart-prd-name"><a href="#">Cascade Casual Shirt</a></h2>
                                <div className="minicart-prd-qty"><span className="minicart-prd-qty-label">Quantity:</span><span
                                    className="minicart-prd-qty-value">1</span></div>
                                <div className="minicart-prd-price prd-price">
                                    <div className="price-old">$200.00</div>
                                    <div className="price-new">$180.00</div>
                                </div>
                            </div>
                            <div className="minicart-prd-action">
                                <a href="#" className="js-product-remove" data-line-number="2"><i className="icon-recycle"></i></a>
                            </div>
                        </div>
                        <div className="minicart-empty js-minicart-empty d-none">
                            <div className="minicart-empty-text">Your cart is empty</div>
                            <div className="minicart-empty-icon">
                                <i className="icon-shopping-bag"></i>
                                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 306 262"
								style="enable-background:new 0 0 306 262;" xml:space="preserve">
								<path className="st0"
									d="M78.1,59.5c0,0-37.3,22-26.7,85s59.7,237,142.7,283s193,56,313-84s21-206-69-240s-249.4-67-309-60C94.6,47.6,78.1,59.5,78.1,59.5z" />
							</svg> */}
                            </div>
                        </div>
                        <a href="#" className="minicart-drop-countdown mt-3">
                            <div className="countdown-box-full">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto"><i className="icon-gift icon--giftAnimate"></i></div>
                                    <div className="col">
                                        <div className="countdown-txt">WHEN BUYING TWO
                                            THINGS A THIRD AS A GIFT
                                        </div>
                                        <div className="countdown js-countdown" data-countdown="2021/07/01"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="minicart-drop-info d-none d-md-block">
                            <div className="shop-feature-single row no-gutters align-items-center">
                                <div className="shop-feature-icon col-auto"><i className="icon-truck"></i></div>
                                <div className="shop-feature-text col"><b>SHIPPING!</b> Continue shopping to add more products
                                    and receive free shipping</div>
                            </div>
                        </div>
                    </div>
                    <div className="minicart-drop-fixed js-hide-empty">
                        <div className="loader-horizontal-sm js-loader-horizontal-sm" data-loader-horizontal=""><span></span>
                        </div>
                        <div className="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
                            <div className="minicart-drop-total-txt col-auto heading-font">Subtotal</div>
                            <div className="minicart-drop-total-price col" data-header-cart-total="">$340</div>
                        </div>
                        <div className="minicart-drop-actions">
                            <a href="cart.html" className="btn btn--md btn--grey"><i className="icon-basket"></i><span>Cart
                                Page</span></a>
                            <a href="checkout.html" className="btn btn--md"><i className="icon-checkout"></i><span>Check
                                out</span></a>
                        </div>
                        <ul className="payment-link mb-2">
                            <li><i className="icon-amazon-logo"></i></li>
                            <li><i className="icon-visa-pay-logo"></i></li>
                            <li><i className="icon-skrill-logo"></i></li>
                            <li><i className="icon-klarna-logo"></i></li>
                            <li><i className="icon-paypal-logo"></i></li>
                            <li><i className="icon-apple-pay-logo"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="drop-overlay js-dropdn-close"></div>
            </div>
        </div>
    )
}

export default Sidebar
