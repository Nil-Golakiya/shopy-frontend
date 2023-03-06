import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Account_sidebar from '../Components/Account_sidebar'
import ProductCard from '../Components/ProductCard'

const Wishlist = ({ wishlist, setWishlist }) => {


    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])

    console.log("wishlist", wishlist.length)
    return (
        <div className="page-content">
            <div className="holder">
                <div className="container">
                    <div className="row">
                        <Account_sidebar />
                        <div className="col-md-14 aside">
                            <h1 className="mb-3">My Wishlist</h1>
                            {
                                wishlist.length === 0
                                    ?
                                    (
                                        <div className="empty-wishlist js-empty-wishlist text-center py-3 py-sm-5">
                                            <h3>Your Wishlist is empty</h3>
                                            <div className="mt-5">
                                                <Link to="/" className="btn">Continue shopping</Link>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="prd-grid-wrap position-relative">
                                            <div className="prd-grid prd-grid--wishlist data-to-show-3 data-to-show-lg-3 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1">
                                                {wishlist && wishlist.map((item) => (
                                                    <ProductCard item={item} wishlist={wishlist} setWishlist={setWishlist} />
                                                ))}
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
