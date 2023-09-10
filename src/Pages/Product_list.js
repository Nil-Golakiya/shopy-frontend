import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const Product_list = ({ setWishlist, wishlist, setLoading }) => {

    const [data, setData] = useState(null)

    const params = useParams()

    const fetchData = async () => {
        setLoading(true)
        const getparams = {}
        if (params.category) {
            getparams.category_id = params.category;
        }

        if (params.subcategory) {
            getparams.subcategory_id = params.subcategory;
        }

        const { data } = await axios.get("/product/categorywiseproduct", { params: getparams });
        const Data = data.data;
        setData(Data);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [params])

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
                    </ul>
                </div>
            </div>
            {data && data.length > 0 ? (
                <>
                    <div className="holder">
                        <div className="container">
                            <div className="page-title text-center">
                                <h1>{data?.[0]?.categories[0]?.name}</h1>
                            </div>
                            {/* <div className="filter-row"> 
                                <div className="row">
                                    <div className="items-count">{data.length} item(s)</div>
                                    <div className="select-wrap d-none d-md-flex">
                                        <div className="select-label">SORT:</div>
                                        <div className="select-wrapper select-wrapper-xxs">
                                            <select className="form-control input-sm">
                                                <option value="featured">Featured</option>
                                                <option value="rating">Rating</option>
                                                <option value="price">Price</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="select-wrap d-none d-md-flex">
                                        <div className="select-label">VIEW:</div>
                                        <div className="select-wrapper select-wrapper-xxs">
                                            <select className="form-control input-sm">
                                                <option value="featured">12</option>
                                                <option value="rating">36</option>
                                                <option value="price">100</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="viewmode-wrap">
                                        <div className="view-mode">
                                            <span className="js-horview d-none d-lg-inline-flex"><i className="icon-grid" /></span>
                                            <span className="js-gridview"><i className="icon-grid" /></span>
                                            <span className="js-listview"><i className="icon-list" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                            <div className="row">
                                <div className="col-lg-4 aside aside--left filter-col filter-mobile-col filter-col--sticky js-filter-col" data-grid-tab-content>
                                    <div className="filter-col-content filter-mobile-content">
                                        <div className="sidebar-block">
                                            <div className="sidebar-block_title">
                                                <span>Current selection</span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <div className="selected-filters-wrap">
                                                    <ul className="selected-filters">
                                                        <li><a href="#">Grey</a></li>
                                                        <li><a href="#">Men</a></li>
                                                        <li><a href="#">Above $200</a></li>
                                                    </ul>
                                                    <div className="d-flex flex-wrap align-items-center">
                                                        <a href="#" className="clear-filters"><span>Clear All</span></a>
                                                        <div className="selected-filters-count ml-auto d-none d-lg-block">Selected <span>6 items</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-block d-filter-mobile">
                                            <h3 className="mb-1">SORT BY</h3>
                                            <div className="select-wrapper select-wrapper-xs">
                                                <select className="form-control">
                                                    <option value="featured">Featured</option>
                                                    <option value="rating">Rating</option>
                                                    <option value="price">Price</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block open">
                                            <div className="sidebar-block_title">
                                                <span>Categories</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="category-list">
                                                    <li className="active"><a href="category.html" title="Casual" className="open">Casual&nbsp;<span>(30)</span></a>
                                                        <div className="toggle-category js-toggle-category"><span><i className="icon-angle-down" /></span></div>
                                                        <ul className="category-list category-list">
                                                            <li><a href="category.html" title="Men">Men&nbsp;<span>(10)</span></a></li>
                                                            <li><a href="category.html" title="Women">Women&nbsp;<span>(10)</span></a></li>
                                                            <li><a href="category.html" title="Accessories">Accessories&nbsp;<span>(10)</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="category.html" title="T-Shirts" className="open">T-Shirts</a></li>
                                                    <li><a href="category.html" title="Medical" className="open">Medical</a></li>
                                                    <li><a href="category.html" title="FoodMarket" className="open">FoodMarket</a></li>
                                                    <li><a href="category.html" title="Bikes" className="open">Bikes&nbsp;<span>(12)</span></a></li>
                                                    <li><a href="category.html" title="Cosmetics" className="open">Cosmetics&nbsp;<span>(16)</span></a></li>
                                                    <li><a href="category.html" title="Fishing" className="open">Fishing&nbsp;<span>(20)</span></a></li>
                                                    <li><a href="category.html" title="Electronics" className="open">Electronics&nbsp;<span>(15)</span></a></li>
                                                    <li><a href="category.html" title="Games" className="open">Games&nbsp;<span>(14)</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block collapsed">
                                            <div className="sidebar-block_title">
                                                <span>Colors</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="color-list two-column">
                                                    <li className="active"><a href="#" data-tooltip="Dark Red" title="Dark Red"><span className="value"><img src="images/colorswatch/color-red.html" alt="" /></span><span className="colorname">Red (87)</span></a></li>
                                                    <li><a href="#" data-tooltip="Pink" title="Pink"><span className="value"><img src="images/colorswatch/color-pink.html" alt="" /></span><span className="colorname">Pink (95)</span></a></li>
                                                    <li><a href="#" data-tooltip="Violet" title="Violet"><span className="value"><img src="images/colorswatch/color-violet.html" alt="" /></span><span className="colorname">Violet (18)</span></a></li>
                                                    <li><a href="#" data-tooltip="Blue" title="Blue"><span className="value"><img src="images/colorswatch/color-blue.html" alt="" /></span><span className="colorname">Blue (78)</span></a></li>
                                                    <li><a href="#" data-tooltip="Marine" title="Marine"><span className="value"><img src="images/colorswatch/color-marine.html" alt="" /></span><span className="colorname">Marine (45)</span></a></li>
                                                    <li><a href="#" data-tooltip="Orange" title="Orange"><span className="value"><img src="images/colorswatch/color-orange.html" alt="" /></span><span className="colorname">Orange (96)</span></a></li>
                                                    <li><a href="#" data-tooltip="Yellow" title="Yellow"><span className="value"><img src="images/colorswatch/color-yellow.html" alt="" /></span><span className="colorname">Yellow (55)</span></a></li>
                                                    <li><a href="#" data-tooltip="Dark Yellow" title="Dark Yellow"><span className="value"><img src="images/colorswatch/color-darkyellow.html" alt="" /></span><span className="colorname">Dark Yellow (2)</span></a></li>
                                                    <li><a href="#" data-tooltip="Black" title="Black"><span className="value"><img src="images/colorswatch/color-black.html" alt="" /></span><span className="colorname">Black (15)</span></a></li>
                                                    <li><a href="#" data-tooltip="White" title="White"><span className="value"><img src="images/colorswatch/color-white.html" alt="" /></span><span className="colorname">White (58)</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block collapsed">
                                            <div className="sidebar-block_title">
                                                <span>Size</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="category-list two-column size-list" data-sort="[&quot;XXS&quot;,&quot;XS&quot;,&quot;S&quot;,&quot;M&quot;,&quot;L&quot;,&quot;XL&quot;,&quot;XXL&quot;,&quot;XXXL&quot;]">
                                                    <li data-value="L" className="active"><a href="#">L</a></li>
                                                    <li data-value="XL"><a href="#">XL</a></li>
                                                    <li data-value="XXS"><a href="#">XXS</a></li>
                                                    <li data-value="XS"><a href="#">XS</a></li>
                                                    <li data-value="S"><a href="#">S</a></li>
                                                    <li data-value="XXL"><a href="#">XXL</a></li>
                                                    <li data-value="XXXL"><a href="#">XXXL</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block collapsed">
                                            <div className="sidebar-block_title">
                                                <span>Brands</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="category-list">
                                                    <li><a href="#">Adidas</a></li>
                                                    <li><a href="#">Nike</a></li>
                                                    <li className="active"><a href="#">Reebok</a></li>
                                                    <li><a href="#">Ralph Lauren</a></li>
                                                    <li><a href="#">Delpozo</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block collapsed">
                                            <div className="sidebar-block_title">
                                                <span>Price</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="category-list">
                                                    <li><a href="#">$100-$200</a></li>
                                                    <li className="active"><a href="#">Above $200</a></li>
                                                    <li><a href="#">Under $100</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-block filter-group-block collapsed">
                                            <div className="sidebar-block_title">
                                                <span>Popular tags</span>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </div>
                                            <div className="sidebar-block_content">
                                                <ul className="tags-list">
                                                    <li className="active"><a href="#">Jeans</a></li>
                                                    <li><a href="#">St.Valentine’s gift</a></li>
                                                    <li><a href="#">Sunglasses</a></li>
                                                    <li><a href="#">Discount</a></li>
                                                    <li><a href="#">Maxi dress</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://bit.ly/3eJX5XE" className="bnr image-hover-scale bnr--bottom bnr--left" data-fontratio="3.95">
                                            <div className="bnr-img">
                                                <img src="images/banners/banner-collection-aside.html" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="filter-toggle js-filter-toggle">
                                    <div className="loader-horizontal js-loader-horizontal">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <span className="filter-toggle-icons js-filter-btn"><i className="icon-filter" /><i className="icon-filter-close" /></span>
                                    <span className="filter-toggle-text"><a href="#" className="filter-btn-open js-filter-btn">REFINE &amp; SORT</a><a href="#" className="filter-btn-close js-filter-btn">RESET</a><a href="#" className="filter-btn-apply js-filter-btn">APPLY &amp; CLOSE</a></span>
                                </div>
                                <div className="col-lg aside">
                                    <div className="prd-grid-wrap">
                                        <div className="prd-grid product-listing data-to-show-4 data-to-show-md-3 data-to-show-sm-2 js-category-grid" data-grid-tab-content>
                                            {data && data.map((item) => (
                                                <ProductCard item={item} setWishlist={setWishlist} wishlist={wishlist} />
                                            ))}
                                        </div>
                                        {/* <div className="loader-horizontal-sm js-loader-horizontal-sm d-none" data-loader-horizontal style={{ opacity: 0 }}><span /></div>
                                        <div className="circle-loader-wrap">
                                            <div className="circle-loader">
                                                <a href="ajax/ajax-product-category.json" data-total={30} data-loaded={12} data-load={6} className="lazyload js-circle-loader">
                                                    <svg id="svg_d" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="50%" cy="50%" r={63} fill="transparent" />
                                                        <circle className="js-circle-bar" cx="50%" cy="50%" r={63} fill="transparent" />
                                                    </svg>
                                                    <svg id="svg_m" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="50%" cy="50%" r={50} fill="transparent" />
                                                        <circle className="js-circle-bar" cx="50%" cy="50%" r={50} fill="transparent" />
                                                    </svg>
                                                    <div className="circle-loader-text">Load More</div>
                                                    <div className="circle-loader-text-alt"><span className="js-circle-loader-start" />&nbsp;out of&nbsp;<span className="js-circle-loader-end" /></div>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="holder"> 
                        <div className="container">
                            <div className="title-wrap text-center">
                                <h2 className="h1-style">You may also like</h2>
                                <div className="carousel-arrows carousel-arrows--center" />
                            </div>
                            <div className="prd-grid prd-carousel js-prd-carousel slick-arrows-aside-simple slick-arrows-mobile-lg data-to-show-4 data-to-show-md-3 data-to-show-sm-3 data-to-show-xs-2" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 2, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;slidesToScroll&quot;: 1}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1}},{&quot;breakpoint&quot;: 480,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1}}]}">
                                <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                                    <div className="prd-inside">
                                        <div className="prd-img-area">
                                            <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-1.webp" alt="Midi Dress with Belt" className="js-prd-img lazyload fade-up" />
                                                <div className="foxic-loader" />
                                                <div className="prd-big-squared-labels">
                                                </div>
                                            </a>
                                            <div className="prd-circle-labels">
                                                <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                                <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                                <div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
                                                    <i className="icon-palette"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>
                                                    <ul>
                                                        <li data-image="images/skins/fashion/products/product-06-1.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-grey.html" alt="" /></a></li>
                                                        <li data-image="images/skins/fashion/products/product-06-color-2.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-green.html" alt="" /></a></li>
                                                        <li data-image="images/skins/fashion/products/product-06-color-3.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-black.html" alt="" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="list-options color-swatch">
                                                <li data-image="images/skins/fashion/products/product-06-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-06-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-06-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="prd-info">
                                            <div className="prd-info-wrap">
                                                <div className="prd-info-top">
                                                    <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                </div>
                                                <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                <div className="prd-tag"><a href="#">Seiko</a></div>
                                                <h2 className="prd-title"><a href="product.html">Midi Dress with Belt</a></h2>
                                                <div className="prd-description">
                                                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                </div>
                                                <div className="prd-action">
                                                    <form action="#">
                                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress with Belt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="prd-hovers">
                                                <div className="prd-circle-labels">
                                                    <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                    <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                </div>
                                                <div className="prd-price">
                                                    <div className="price-new">$ 180</div>
                                                </div>
                                                <div className="prd-action">
                                                    <div className="prd-action-left">
                                                        <form action="#">
                                                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress with Belt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                                    <div className="prd-inside">
                                        <div className="prd-img-area">
                                            <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-17-1.webp" alt="Stand Collar Shirt" className="js-prd-img lazyload fade-up" />
                                                <div className="foxic-loader" />
                                                <div className="prd-big-squared-labels">
                                                    <div className="label-sale"><span>-10% <span className="sale-text">Sale</span></span>
                                                        <div className="countdown-circle">
                                                            <div className="countdown js-countdown" data-countdown="2021/07/01" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="prd-circle-labels">
                                                <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                                <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                            </div>
                                            <ul className="list-options color-swatch">
                                                <li data-image="images/skins/fashion/products/product-17-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-17-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-17-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-17-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-17-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-17-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="prd-info">
                                            <div className="prd-info-wrap">
                                                <div className="prd-info-top">
                                                    <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                </div>
                                                <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                <div className="prd-tag"><a href="#">SHOPY</a></div>
                                                <h2 className="prd-title"><a href="product.html">Stand Collar Shirt</a></h2>
                                                <div className="prd-description">
                                                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                </div>
                                                <div className="prd-action">
                                                    <form action="#">
                                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Stand Collar Shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-17-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="prd-hovers">
                                                <div className="prd-circle-labels">
                                                    <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                    <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                </div>
                                                <div className="prd-price">
                                                    <div className="price-old">$ 200</div>
                                                    <div className="price-new">$ 180</div>
                                                </div>
                                                <div className="prd-action">
                                                    <div className="prd-action-left">
                                                        <form action="#">
                                                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Stand Collar Shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-17-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                                    <div className="prd-inside">
                                        <div className="prd-img-area">
                                            <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-1.webp" alt="Genuine Leather Strap Watch" className="js-prd-img lazyload fade-up" />
                                                <div className="foxic-loader" />
                                                <div className="prd-big-squared-labels">
                                                    <div className="label-new"><span>New</span></div>
                                                </div>
                                            </a>
                                            <div className="prd-circle-labels">
                                                <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                                <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                            </div>
                                            <ul className="list-options color-swatch">
                                                <li data-image="images/skins/fashion/products/product-21-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-21-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-21-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="prd-info">
                                            <div className="prd-info-wrap">
                                                <div className="prd-info-top">
                                                    <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                </div>
                                                <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                <div className="prd-tag"><a href="#">SHOPY</a></div>
                                                <h2 className="prd-title"><a href="product.html">Genuine Leather Strap Watch</a></h2>
                                                <div className="prd-description">
                                                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                </div>
                                                <div className="prd-action">
                                                    <form action="#">
                                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather Strap Watch&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="prd-hovers">
                                                <div className="prd-circle-labels">
                                                    <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                    <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                </div>
                                                <div className="prd-price">
                                                    <div className="price-new">$ 180</div>
                                                </div>
                                                <div className="prd-action">
                                                    <div className="prd-action-left">
                                                        <form action="#">
                                                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather Strap Watch&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                                    <div className="prd-inside">
                                        <div className="prd-img-area">
                                            <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-26-1.webp" alt="Pureboost Running Shoes" className="js-prd-img lazyload fade-up" />
                                                <div className="foxic-loader" />
                                                <div className="prd-big-squared-labels">
                                                </div>
                                            </a>
                                            <div className="prd-circle-labels">
                                                <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                                <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                            </div>
                                            <ul className="list-options color-swatch">
                                                <li data-image="images/skins/fashion/products/product-26-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-26-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-26-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-26-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-26-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-26-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="prd-info">
                                            <div className="prd-info-wrap">
                                                <div className="prd-info-top">
                                                    <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                </div>
                                                <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                <div className="prd-tag"><a href="#">SHOPY</a></div>
                                                <h2 className="prd-title"><a href="product.html">Pureboost Running Shoes</a></h2>
                                                <div className="prd-description">
                                                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                </div>
                                                <div className="prd-action">
                                                    <form action="#">
                                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Pureboost Running Shoes&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-26-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="prd-hovers">
                                                <div className="prd-circle-labels">
                                                    <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                    <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                </div>
                                                <div className="prd-price">
                                                    <div className="price-new">$ 180</div>
                                                </div>
                                                <div className="prd-action">
                                                    <div className="prd-action-left">
                                                        <form action="#">
                                                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Pureboost Running Shoes&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-26-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                                    <div className="prd-inside">
                                        <div className="prd-img-area">
                                            <a href="product.html" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-30-1.webp" alt="Multiple Pocket Waist Pack" className="js-prd-img lazyload fade-up" />
                                                <div className="foxic-loader" />
                                                <div className="prd-big-squared-labels">
                                                </div>
                                            </a>
                                            <div className="prd-circle-labels">
                                                <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                                <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a>
                                            </div>
                                            <ul className="list-options color-swatch">
                                                <li data-image="images/skins/fashion/products/product-30-1.webp" className="active"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-30-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-30-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-30-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                                <li data-image="images/skins/fashion/products/product-30-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-30-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="prd-info">
                                            <div className="prd-info-wrap">
                                                <div className="prd-info-top">
                                                    <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                </div>
                                                <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                                                <div className="prd-tag"><a href="#">SHOPY</a></div>
                                                <h2 className="prd-title"><a href="product.html">Multiple Pocket Waist Pack</a></h2>
                                                <div className="prd-description">
                                                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                                </div>
                                                <div className="prd-action">
                                                    <form action="#">
                                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Multiple Pocket Waist Pack&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-30-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="prd-hovers">
                                                <div className="prd-circle-labels">
                                                    <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a></div>
                                                    <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                                                </div>
                                                <div className="prd-price">
                                                    <div className="price-new">$ 180</div>
                                                </div>
                                                <div className="prd-action">
                                                    <div className="prd-action-left">
                                                        <form action="#">
                                                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Multiple Pocket Waist Pack&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-30-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </>
            ) : (
                <div className="col-lg aside">
                    <div className="prd-grid-wrap">
                        <div className="page404-bg">
                            <div className="page404-text">
                                <div className="txt3"><i className="icon-shopping-bag"></i></div>
                                <div className="txt4">Unfortunately, there are no products<br />matching the selection</div>
                            </div>
                            <svg className="blob" id="morphing" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                                <g transform="translate(50,50)">
                                    <path className="p" d="M90.23231635515415 1.3590389263994358C121.43109845822381 -0.3149614411498387 154.06253803489648 4.6703084011009235 174.1944261207218 28.621865445921017C195.09411706547405 53.447257768799986 197.4757313354093 86.82079173304636 188.80216961511337 118.0662060322417C180.86920405236256 147.00882555890382 158.12784853385182 167.3856217815123 131.4981218273408 181.25565460551041C103.63168351648216 195.8072556806954 70.80444006249867 208.3814574644373 42.76494803980738 194.13733874440067C15.14371150855949 180.10671515255277 7.356456088621718 146.1989277156854 2.299134577764221 115.6330640347451C-2.2861209214248555 87.92730334242857 -0.381916484193205 59.20210477189201 16.740846628675342 36.94732812908921C34.19549968741889 14.247145185011647 61.6816247467701 2.732740373490823 90.23231635515415 1.3590389263994358Z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Product_list
