import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import "../asstes/sidebar.css"

const Sidebar = ({ categoryData, setCart, cart }) => {

    const [totalprice, setTotalPrice] = useState()

    const navigate = useNavigate()
    const user = localStorage.getItem("myuser");

    const handleLogout = async () => {
        localStorage.clear();
        navigate("/login")
        toast.error("Your are successfully logout..!")
    }

    const CartTotal = () => {
        let carttotal = 0;
        cart?.map((ele) => {
            carttotal += (ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity;
        })
        setTotalPrice(carttotal)
    }

    const handleDelete = async (id) => {
        const deleteProduct = await axios.delete(`/cart/${id}`)
        setCart(cart.filter((item) => item._id !== id));
    }

    useEffect(() => {
        CartTotal()
    }, [cart])

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
                                    categoryData?.map((cat) => {
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
                    <div className="dropdn-close btn-wrap text-right" data-animation="fadeIn" data-animation-delay="2000"><span className="js-dropdn-close btn btn--sm closebtn" >X</span></div>
                    <ul className="sidebar_ul">
                        {user ? <li><button onClick={() => handleLogout()} className="logoutbutton"><i className="fa fa-power-off"></i><span>Logout</span></button></li> :
                            <li><Link to="/login"><i className="icon-login"></i><span>Log In</span></Link></li>}

                        {user ? "" : <li><Link to="/login"><i className="icon-user2"></i><span>Register</span></Link></li>}
                        {user ? <li><Link to="/account-details"><i className="fa fa-user"></i><span>My Account</span></Link></li> : <li><Link to="/login"><i className="fa fa-user"></i><span>My Account</span></Link></li>}
                        {user ? <li><Link to="/account-order"><i className="fa fa-shopping-basket"></i><span>My Order</span></Link></li> : <li><Link to="/login"><i className="fa fa-shopping-basket"></i><span>My Order</span></Link></li>}
                        {user ? <li><Link to="/wishlist"><i className="fa fa-heart"></i><span>My Wishlist</span></Link></li> : <li><Link to="/login"><i className="fa fa-heart"></i><span>My Wishlist</span></Link></li>}
                        {user ? <li><Link to="/cart"><i className="fa fa-cart-arrow-down"></i><span>My Cart</span></Link></li> : <li><Link to="/login"><i className="fa fa-cart-arrow-down"></i><span>My Cart</span></Link></li>}
                        {user ? <li><Link to="/checkout"><i className="fa fa-credit-card"></i><span>Checkout</span></Link></li> : <li><Link to="/login"><i className="fa fa-credit-card"></i><span>checkout</span></Link></li>}
                    </ul>
                </div>
                <div className="drop-overlay js-dropdn-close"></div>
            </div>
            <div className="dropdn-content minicart-drop" id="dropdnMinicart">
                <div className="dropdn-content-block">
                    <div className="dropdn-close"><span className="js-dropdn-close">Close</span></div>
                    <div className="minicart-drop-content js-dropdn-content-scroll">
                        {
                            cart && cart.length > 0 ?
                                (
                                    cart.map((ele) => (
                                        <div className="minicart-prd row">
                                            <div className="minicart-prd-image image-hover-scale-circle col">
                                                <a href="product.html"><img className="lazyload fade-up"
                                                    src={ele?.subVariation?.image} alt="" style={{ height: "100px", objectFit: "contain" }} /></a>
                                            </div>
                                            <div className="minicart-prd-info col">
                                                <div className="minicart-prd-tag">Shopy</div>
                                                <h2 className="minicart-prd-name"><a href="#">{ele.subVariation.product_name}</a></h2>
                                                <div className="minicart-prd-qty"><span className="minicart-prd-qty-label">Quantity:</span><span
                                                    className="minicart-prd-qty-value">{ele.cart_quantity}</span></div>
                                                <div className="minicart-prd-price prd-price">
                                                    <div className="price-old">₹ {ele.subVariation.price}</div>
                                                    <div className="price-new">₹ {ele.subVariation.price - ele.subVariation.price / ele.subVariation.discount}</div>
                                                </div>
                                            </div>
                                            <div className="minicart-prd-action">
                                                <a href="#" className="js-product-remove" data-line-number="1"><i className="icon-recycle" onClick={() => handleDelete(ele._id)}></i></a>
                                            </div>
                                        </div>
                                    ))
                                ) :
                                <div className="minicart-empty js-minicart-empty">
                                    <div className="minicart-empty-text">Your cart is empty</div>
                                    <div className="minicart-empty-icon">
                                        <i className="icon-shopping-bag"></i>
                                    </div>
                                </div>
                        }

                    </div>
                    <div className="minicart-drop-fixed js-hide-empty">
                        <div className="loader-horizontal-sm js-loader-horizontal-sm" data-loader-horizontal=""><span></span>
                        </div>
                        <div className="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
                            <div className="minicart-drop-total-txt col-auto heading-font">Subtotal</div>
                            <div className="minicart-drop-total-price col" data-header-cart-total="">₹ {totalprice}</div>
                        </div>
                        <div className="minicart-drop-actions">
                            <Link to="/cart" className="btn btn--md btn--grey"><i className="icon-basket"></i><span>Cart
                                Page</span></Link>
                            <Link to="/checkout" className="btn btn--md"><i className="icon-checkout"></i><span>Check
                                out</span></Link>
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
