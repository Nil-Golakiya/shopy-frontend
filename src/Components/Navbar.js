import React, { useEffect, useState } from 'react'
import logo from "../Image/logo.jpeg"
import { Link } from "react-router-dom"



const Navbar = ({ categoryData, cart, wishlist }) => {

    const [totalprice, setTotalPrice] = useState()

    const CartTotal = () => {
        let carttotal = 0;
        cart?.map((ele) => {
            carttotal += (ele.subVariation?.price - (ele.subVariation?.price / ele.subVariation?.discount)) * ele?.cart_quantity;
        })
        setTotalPrice(carttotal)
    }

    useEffect(() => {
        CartTotal()
    }, [cart])

    useEffect(() => {
        const list = document.getElementById("navbarList")
    }, [])

    return (
        <>
            <div>
                <div className="hdr-content hdr-content-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto show-mobile">
                                <div className="menu-toggle"> <a href="#" className="mobilemenu-toggle"><i className="icon-menu" /></a>
                                </div>
                            </div>
                            <div className="col-auto hdr-logo">
                                <Link to="/" className="logo"><img srcSet={logo} alt="Logo" height="60px" /></Link>
                            </div>
                            <div className="hdr-nav hide-mobile nav-holder-s">
                            </div>
                            <div className="hdr-links-wrap col-auto ml-auto">
                                <div className="hdr-inline-link">
                                    <div className="search_container_desktop">
                                        <div className="dropdn dropdn_search dropdn_fullwidth">
                                            <a href="#" className="dropdn-link  js-dropdn-link only-icon"><i className="icon-search" /><span className="dropdn-link-txt">Search</span></a>
                                            <div className="dropdn-content">
                                                <div className="container">
                                                    <form method="get" action="#" className="search search-off-popular">
                                                        <input name="search" type="text" className="search-input input-empty" placeholder="What are you looking for?" />
                                                        <button type="submit" className="search-button"><i className="icon-search" /></button>
                                                        <a href="#" className="search-close js-dropdn-close"><i className="icon-close-thin" /></a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdn dropdn_wishlist">
                                        <Link to="/wishlist" className="dropdn-link only-icon wishlist-link ">
                                            <i className="icon-heart" /><span className="dropdn-link-txt">Wishlist</span><span className="wishlist-qty">{wishlist.length}</span>
                                        </Link>
                                    </div>
                                    <div className="hdr_container_desktop">
                                        <div className="dropdn dropdn_account dropdn_fullheight">
                                            <a href="#" className="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i className="icon-user"></i></a>
                                        </div>
                                    </div>
                                    <div className="dropdn dropdn_fullheight minicart">
                                        <a href="#" className="dropdn-link js-dropdn-link minicart-link only-icon" data-panel="#dropdnMinicart">
                                            <i className="icon-basket" />
                                            <span className="minicart-qty">{cart.length}</span>
                                            <span className="" style={{ fontWeight: "600", paddingLeft: "7px" }}>₹ {totalprice}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hdr">
                    <div className="hdr-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto show-mobile">
                                    <div className="menu-toggle"> <a href="#" className="mobilemenu-toggle"><i className="icon-menu" /></a> </div>
                                </div>
                                <div className="col-auto hdr-logo">
                                    <Link to="/" className="logo"><img srcSet={logo} height="54px" alt="Logo" /></Link>
                                </div>
                                <div className="hdr-nav hide-mobile nav-holder justify-content-center px-4">
                                    <ul className="mmenu mmenu-js" id="navbarList">
                                        {
                                            categoryData && categoryData.map((cat) => {
                                                return (
                                                    <li className="mmenu-item--simple" key={cat._id}><Link to={`/products/${cat.name}`}>{cat.name}</Link>
                                                        <div className="mmenu-submenu">
                                                            <ul className="submenu-list">
                                                                {
                                                                    cat.subcategory_details && cat.subcategory_details.map((subcat) => {
                                                                        return (
                                                                            <li key={subcat._id}><Link to={`/products/${cat.name}/${subcat.name}`}>{subcat.name}</Link></li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="hdr-links-wrap col-auto ml-auto">
                                    <div className="hdr-inline-link">
                                        <div className="search_container_desktop">
                                            <div className="dropdn dropdn_search dropdn_fullwidth">
                                                <a href="#" className="dropdn-link  js-dropdn-link only-icon"><i className="icon-search" /><span className="dropdn-link-txt">Search</span></a>
                                                <div className="dropdn-content">
                                                    <div className="container">
                                                        <form method="get" action="#" className="search search-off-popular">
                                                            <input name="search" type="text" className="search-input input-empty" placeholder="What are you looking for?" />
                                                            <button type="submit" className="search-button"><i className="icon-search" /></button>
                                                            <a href="#" className="search-close js-dropdn-close"><i className="icon-close-thin" /></a>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdn dropdn_wishlist">
                                            <Link to="/wishlist" className="dropdn-link only-icon wishlist-link ">
                                                <i className="icon-heart" /><span className="dropdn-link-txt">Wishlist</span><span className="wishlist-qty">{wishlist.length}</span>
                                            </Link>
                                        </div>
                                        <div className="hdr_container_desktop">
                                            <div className="dropdn dropdn_account dropdn_fullheight">
                                                <a href="#" className="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i className="icon-user"></i></a>
                                            </div>
                                        </div>
                                        <div className="dropdn dropdn_fullheight minicart">
                                            <a href="#" className="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                                                <i className="icon-basket" />
                                                <span className="minicart-qty">{cart.length}</span>
                                                <span className="minicart-total hide-mobile">₹ {totalprice}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
