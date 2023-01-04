import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Account_sidebar from '../Components/Account_sidebar'

const Wishlist = () => {
    useEffect(() => {
        console.log("vghbuvfkgj")
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);
    }, [])

    return (
        <div className="page-content">
            <div className="holder">
                <div className="container">
                    <div className="row">
                        <Account_sidebar />
                        <div className="col-md-14 aside">
                            <h1 className="mb-3">My Wishlist</h1>
                            <div className="empty-wishlist js-empty-wishlist text-center py-3 py-sm-5 d-none" style={{ opacity: 0 }}>
                                <h3>Your Wishlist is empty</h3>
                                <div className="mt-5">
                                    <Link to="/" className="btn">Continue shopping</Link>
                                </div>
                            </div>
                            <div className="prd-grid-wrap position-relative">
                                <div className="prd-grid prd-grid--wishlist data-to-show-3 data-to-show-lg-3 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1">
                                    <div className="prd prd--in-wishlist prd--style2 prd-labels--max prd-labels-shadow ">
                                        <div className="prd-inside">
                                            <div className="prd-img-area">
                                                <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-04-1.webp" alt="Suede Leather Mini Skirt" className="js-prd-img lazyload fade-up" />
                                                    <div className="foxic-loader" />
                                                    <div className="prd-big-squared-labels">
                                                    </div>
                                                </a>
                                                <div className="prd-circle-labels">
                                                    <a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist" title="Remove From Wishlist"><i className="icon-recycle" /></a>
                                                    <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                                </div>
                                                <ul className="list-options color-swatch">
                                                    <li data-image="images/skins/fashion/products/product-04-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-04-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                    <li data-image="images/skins/fashion/products/product-04-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-04-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                    <li data-image="images/skins/fashion/products/product-04-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-04-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="prd-info">
                                                <div className="prd-info-wrap">
                                                    <div className="prd-info-top">
                                                        <div className="prd-tag"><a href="#">Bigsteps</a></div>
                                                    </div>
                                                    <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                    <div className="prd-tag"><a href="#">Bigsteps</a></div>
                                                    <h2 className="prd-title"><a href="product.html">Suede Leather Mini Skirt</a></h2>
                                                    <div className="prd-description">
                                                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                    </div>
                                                </div>
                                                <div className="prd-hovers">
                                                    <div className="prd-circle-labels">
                                                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                        <div><a href="#" className="circle-label-qview prd-hide-mobile js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                    </div>
                                                    <div className="prd-price">
                                                        <div className="price-new">$ 180</div>
                                                    </div>
                                                    <div className="prd-action">
                                                        <div className="prd-action-left">
                                                            <button className="btn">View Full Info</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
