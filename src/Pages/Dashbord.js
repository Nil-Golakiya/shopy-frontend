import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

const Dashbord = ({ data }) => {

  useEffect(() => {
    console.log("vghbuvfkgj")
    const scriptTag = document.createElement('script')
    scriptTag.src = "/js/app-html.js"
    document.body.appendChild(scriptTag);
  }, [])

  console.log("data Dashboard", data)

  return (
    <div className="page-content">
      <div className="holder fullwidth full-nopad mt-0">
        <div className="container">
          <div className="bnslider-wrapper">
            <div className="bnslider bnslider--lg keep-scale" id="bnslider-001" data-slick="{&quot;arrows&quot;: true, &quot;dots&quot;: true}" data-autoplay="false" data-speed={12000} data-start-width={1917} data-start-height={764} data-start-mwidth={1550} data-start-mheight={1000}>
              <div className="bnslider-slide">
                <div className="bnslider-image-mobile lazyload" data-bgset="images/skins/fashion/slider/slide-fashion-02-m.webp" />
                <div className="bnslider-image lazyload" data-bgset="images/skins/fashion/slider/slide-fashion-02.webp" />
                <div className="bnslider-text-wrap bnslider-overlay ">
                  <div className="bnslider-text-content txt-middle txt-right txt-middle-m txt-center-m">
                    <div className="bnslider-text-content-flex ">
                      <div className="bnslider-vert w-s-60 w-ms-100" style={{ padding: '0px' }}>
                        <div className="bnslider-text order-1 mt-sm bnslider-text--md text-center data-ini" data-animation="fadeInUp" data-animation-delay={800} data-fontcolor="#282828" data-fontweight={700} data-fontline="1.5">Best
                          Price This Year</div>
                        <div className="bnslider-text order-2 mt-sm bnslider-text--xs text-center data-ini" data-animation="fadeInUp" data-animation-delay={1000} data-fontcolor="#7c7c7c" data-fontweight={400} data-fontline="1.5">
                          eCommerce HTML Template</div>
                        <div className="btn-wrap text-center  order-4 mt-md" data-animation="fadeIn" data-animation-delay={2000} style={{ opacity: 1 }}>
                          <Link to="/products/Woman" className="btn">
                            Shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bnslider-slide">
                <div className="bnslider-image-mobile lazyload" data-bgset="images/skins/fashion/slider/slide-fashion-01-m.webp" />
                <div className="bnslider-image lazyload" data-bgset="images/skins/fashion/slider/slide-fashion-01.webp" />
                <div className="bnslider-text-wrap bnslider-overlay ">
                  <div className="bnslider-text-content txt-middle txt-left txt-middle-m txt-center-m">
                    <div className="bnslider-text-content-flex ">
                      <div className="bnslider-vert w-s-60 w-ms-100" style={{ padding: '0px' }}>
                        <div className="bnslider-text order-1 mt-0 bnslider-text--md text-center data-ini" data-animation="fadeInUp" data-animation-delay={800} data-fontcolor="#282828" data-fontweight={700} data-fontline="1.5">Best
                          Rated Theme 2020</div>
                        <div className="bnslider-text order-2 mt-sm bnslider-text--xs text-center data-ini" data-animation="fadeInUp" data-animation-delay={1000} data-fontcolor="#7c7c7c" data-fontweight={400} data-fontline="1.5">
                          eCommerce HTML Template</div>
                        <div className="btn-wrap text-center  order-4 mt-md" data-animation="fadeIn" data-animation-delay={2000} style={{ opacity: 1 }}>
                          <Link to="/products/Man" className="btn">
                            Shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bnslider-slide slick-slide is-paused" data-autoplay="true" data-video-type="video" data-slick-index={2} aria-hidden="true" style={{ width: '1903px', position: 'relative', left: '-3806px', top: '0px', zIndex: 998, opacity: 0, transition: 'opacity 500ms ease 0s' }} id="slick-slide02">
                <div className="video-wrap">
                  <video playsInline loop preload="auto">
                    <source src="https://cdn.shopify.com/s/files/1/0201/0942/6742/files/video-girl.mp4?v=1594287483" type="video/mp4" />
                  </video>
                  <div className="video-control visible">
                    <div className="video-play js-video-slider-play"><i className="icon-play" /></div>
                    <div className="video-stop js-video-slider-stop"><i className="icon-pause" /></div>
                  </div>
                </div>
                <div className="bnslider-text-wrap bnslider-overlay ">
                  <div className="bnslider-text-content txt-middle txt-center txt-middle-m txt-center-m">
                    <div className="bnslider-text-content-flex ">
                      <div className="bnslider-vert " style={{ padding: '0px' }}>
                        <div className="bnslider-text order-1 mt-sm bnslider-text--md text-center data-ini" data-animation="fadeInUp" data-animation-delay={800} data-fontcolor="#282828" data-fontweight={700} data-fontline="1.5">Live
                          life in Comfort</div>
                        <div className="btn-wrap text-center  order-4 mt-md" data-animation="fadeIn" data-animation-delay={2000} style={{ opacity: 1 }}>
                          <Link to="/products/Electronic" className="btn">
                            Shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bnslider-arrows container-fluid">
              <div />
            </div>
            <div className="bnslider-dots container-fluid" />
          </div>
        </div>
      </div>
      <div className="holder holder-mt-xsmall">
        <div className="container">
          <div className="row vert-margin-small">
            {/* <div className="col-sm">
              <a href="category.html" className="collection-grid-3-item image-hover-scale">
                <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                  <div className="foxic-loader" />
                </div>
                <div className="collection-grid-3-caption-bg">
                  <h3 className="collection-grid-3-title">Fashion</h3>
                  <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                </div>
              </a>
            </div> */}
            <div className="holder">
              <div className="container">
                <div className="title-wrap text-center">
                  <h2 className="h1-style">You may also like</h2>
                  <div className="carousel-arrows carousel-arrows--center" />
                </div>
                <div className="prd-grid prd-carousel js-prd-carousel slick-arrows-aside-simple slick-arrows-mobile-lg data-to-show-4 data-to-show-md-3 data-to-show-sm-3 data-to-show-xs-2" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 2, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;slidesToScroll&quot;: 1}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1}},{&quot;breakpoint&quot;: 480,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1}}]}">
                  <div className="col-sm">
                    <a href="category.html" className="collection-grid-3-item image-hover-scale">
                      <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                        <div className="foxic-loader" />
                      </div>
                      <div className="collection-grid-3-caption-bg" style={{ borderRadius: "50%" }}>
                        <h3 className="collection-grid-3-title">Fashion</h3>
                        <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm">
                    <a href="category.html" className="collection-grid-3-item image-hover-scale">
                      <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                        <div className="foxic-loader" />
                      </div>
                      <div className="collection-grid-3-caption-bg">
                        <h3 className="collection-grid-3-title">Fashion</h3>
                        <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm">
                    <a href="category.html" className="collection-grid-3-item image-hover-scale">
                      <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                        <div className="foxic-loader" />
                      </div>
                      <div className="collection-grid-3-caption-bg">
                        <h3 className="collection-grid-3-title">Fashion</h3>
                        <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm">
                    <a href="category.html" className="collection-grid-3-item image-hover-scale">
                      <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                        <div className="foxic-loader" />
                      </div>
                      <div className="collection-grid-3-caption-bg">
                        <h3 className="collection-grid-3-title">Fashion</h3>
                        <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm">
                    <a href="category.html" className="collection-grid-3-item image-hover-scale">
                      <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%' }}>
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="lazyload fade-up" alt="Banner" />
                        <div className="foxic-loader" />
                      </div>
                      <div className="collection-grid-3-caption-bg">
                        <h3 className="collection-grid-3-title">Fashion</h3>
                        <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="holder holder-mt-medium section-name-products-grid" id="productsGrid01">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Collections</h2>
            <div className="title-wrap title-tabs-wrap text-center js-title-tabs">
              <div className="title-tabs">
                {
                  data && data.map((ele) => (
                    <h2 className="h3-style">
                      <Link to={`/products/${ele.name}`} data-total={8} data-loaded={4} data-grid-tab-title><span className="title-tabs-text theme-font">{ele.name}</span></Link>
                    </h2>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="prd-grid-wrap">
            <div className="prd-grid data-to-show-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2" data-grid-tab-content />
            <div className="loader-horizontal-sm js-loader-horizontal-sm d-none" data-loader-horizontal style={{ opacity: 0 }}><span /></div>
            <div className="circle-loader-wrap d-none">
              <div className="circle-loader">
                <a href="" data-load="4" className="js-circle-loader">
                  <svg id="svg_d" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="63" fill="transparent"></circle>
                    <circle className="js-circle-bar" cx="50%" cy="50%" r="63" fill="transparent"></circle>
                  </svg>
                  <svg id="svg_m" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50" fill="transparent"></circle>
                    <circle className="js-circle-bar" cx="50%" cy="50%" r="50" fill="transparent"></circle>
                  </svg>
                  <div className="circle-loader-text">Load More</div>
                  <div className="circle-loader-text-alt"><span className="js-circle-loader-start"></span>&nbsp;out of&nbsp;<span className="js-circle-loader-end"></span></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="holder holder-mt-medium ">
        <div className="container">
          <a href="https://bit.ly/3eJX5XE" target="_blank" className="bnr-wrap bnr-">
            <div className="bnr custom-caption image-hover-scale bnr--middle bnr--right bnr--fullwidth">
              <div className="bnr-img d-none d-sm-block image-container" style={{ paddingBottom: '41.36752136752137%' }}>
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion2-full.webp" className="lazyload fade-up" alt="" />
              </div>
              <div className="bnr-img d-sm-none image-container" style={{ paddingBottom: '74.3139407244786%' }}>
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion2-full-m.webp" className="lazyload fade-up" alt="" />
              </div>
              <div className="bnr-caption text-center" style={{ padding: '4% 4%' }}>
                <div className="bnr-caption-inside w-s-50 w-ms-100 title-wrap">
                  <h2 className="h1-style">The best trends<br className="d-sm-none" /> of summer 2020</h2>
                  <div className="h-sub mt-0">eCommerce HTML Template</div>
                  <div className="bnr-btn inherit mt-sm order-3">
                    <div className="btn">Buy Now</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="holder">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Trending product</h2>
            <div className="h-sub maxW-825">Hurry up! Limited</div>
          </div>
          <div className="prd-grid-wrap position-relative">
            <div className="prd-grid data-to-show-4 data-to-show-lg-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2 js-category-grid" data-grid-tab-content>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-03-1.webp" alt="Oversized Cotton Blouse" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                        <div className="label-new"><span>New</span></div>
                        <div className="label-sale"><span>-10% <span className="sale-text">Sale</span></span>
                          <div className="countdown-circle">
                            <div className="countdown js-countdown" data-countdown="2021/07/01">
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-03-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-03-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-03-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-03-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-03-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-03-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Banita</a></div>
                      <h2 className="prd-title"><a href="product.html">Oversized Cotton Blouse</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Oversized Cotton Blouse&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-03-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-old">$ 200</div>
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Oversized Cotton Blouse&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-03-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-1.webp" alt="Midi Dress with Belt" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                      <div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
                        <i className="icon-palette"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>
                        <ul>
                          <li data-image="images/skins/fashion/products/product-06-1.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-grey.html" alt="" /></a></li>
                          <li data-image="images/skins/fashion/products/product-06-color-2.webp">
                            <a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-green.html" alt="" /></a></li>
                          <li data-image="images/skins/fashion/products/product-06-color-3.webp">
                            <a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-black.html" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-06-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-06-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-06-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Seiko</a></div>
                      <h2 className="prd-title"><a href="product.html">Midi Dress with Belt</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress with Belt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress with Belt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-10-1.webp" alt="Short Sleeve Blouse" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                        <div className="label-sale"><span>-10% <span className="sale-text">Sale</span></span>
                          <div className="countdown-circle">
                            <div className="countdown js-countdown" data-countdown="2021/07/01">
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-10-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-10-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-10-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-10-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-10-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-10-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Short Sleeve Blouse</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Short Sleeve Blouse&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-10-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-old">$ 200</div>
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Short Sleeve Blouse&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-10-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-13-1.webp" alt="Peg Cropped Cuffed Pants" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                        <div className="label-new"><span>New</span></div>
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-13-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-13-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-13-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-13-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-13-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-13-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Peg Cropped Cuffed Pants</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Peg Cropped Cuffed Pants&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-13-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Peg Cropped Cuffed Pants&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-13-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-16-1.webp" alt="Cascade Casual Shirt" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                      <div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
                        <i className="icon-palette"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>
                        <ul>
                          <li data-image="images/skins/fashion/products/product-16-1.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-grey.html" alt="" /></a></li>
                          <li data-image="images/skins/fashion/products/product-16-color-2.webp">
                            <a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-green.html" alt="" /></a></li>
                          <li data-image="images/skins/fashion/products/product-16-color-3.webp">
                            <a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-black.html" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-16-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-16-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-16-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-16-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-16-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-16-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Cascade Casual Shirt</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Cascade Casual Shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-16-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Cascade Casual Shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-16-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow prd-outstock">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-18-1.webp" alt="Sport Cotton T-shirt" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                        <div className="label-new"><span>New</span></div>
                        <div className="label-outstock"><span>Sold Out</span></div>
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Sport Cotton T-shirt</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Sport Cotton T-shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-18-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Sport Cotton T-shirt&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-18-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-1.webp" alt="Genuine Leather Strap Watch" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                        <div className="label-sale"><span>-10% <span className="sale-text">Sale</span></span>
                          <div className="countdown-circle">
                            <div className="countdown js-countdown" data-countdown="2021/07/01">
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-21-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-21-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-21-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Genuine Leather Strap Watch</a>
                      </h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather Strap Watch&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-old">$ 200</div>
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather Strap Watch&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
                <div className="prd-inside">
                  <div className="prd-img-area">
                    <a href="product.html" className="prd-img image-hover-scale image-container">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-25-1.webp" alt="Fashion Waist Bag" className="js-prd-img lazyload fade-up" />
                      <div className="foxic-loader" />
                      <div className="prd-big-squared-labels">
                      </div>
                    </a>
                    <div className="prd-circle-labels">
                      <a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                      <a href="#" className="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK
                        VIEW</span></a>
                    </div>
                    <ul className="list-options color-swatch">
                      <li data-image="images/skins/fashion/products/product-25-1.webp" className="active">
                        <a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-25-1.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-25-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-25-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                      <li data-image="images/skins/fashion/products/product-25-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-25-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                    </ul>
                  </div>
                  <div className="prd-info">
                    <div className="prd-info-wrap">
                      <div className="prd-info-top">
                        <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                        </div>
                      </div>
                      <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                      <div className="prd-tag"><a href="#">Shopy</a></div>
                      <h2 className="prd-title"><a href="product.html">Fashion Waist Bag</a></h2>
                      <div className="prd-description">
                        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed
                        lacinia.
                      </div>
                      <div className="prd-action">
                        <form action="#">
                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Fashion Waist Bag&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-25-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                            To Cart</button>
                        </form>
                      </div>
                    </div>
                    <div className="prd-hovers">
                      <div className="prd-circle-labels">
                        <div><a href="#" className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a><a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        </div>
                        <div className="prd-hide-mobile"><a href="#" className="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"><i className="icon-eye" /><span>QUICK VIEW</span></a></div>
                      </div>
                      <div className="prd-price">
                        <div className="price-new">$ 180</div>
                      </div>
                      <div className="prd-action">
                        <div className="prd-action-left">
                          <form action="#">
                            <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Fashion Waist Bag&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-25-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add
                              To Cart</button>
                          </form>
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
      <div className="holder holder-mt-medium">
        <div className="container">
          <div className="title-wrap text-center ">
            <h2 className="h1-style text-center"><a href="blog.html" title="View all">Latest From Blog</a></h2>
            <div className="carousel-arrows" style={{ margin: '0 auto 65px', width: '50px' }} />
          </div>
          <div className="post-prws post-prws-carousel post-prws--row js-post-prws-carousel" data-slick="{&quot;slidesToShow&quot;: 3, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2 }},{&quot;breakpoint&quot;: 480,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1 }}]}">
            <div className="post-prw-vert col">
              <a href="blog-post.html" className="post-prw-img image-hover-scale image-container" style={{ paddingBottom: '54.44%' }}>
                <img className="fade-up w-100 lazyload" alt="The High-Street Brand Fashion" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/blog/blog-fashion-02.webp" />
              </a>
              <h4 className="post-prw-title"><a href="blog-post.html">The High-Street Brand Fashion</a></h4>
              <div className="post-prw-links">
                <div className="post-prw-date"><i className="icon-calendar1" />
                  June 9, 2020
                </div>
              </div>
            </div>
            <div className="post-prw-vert col">
              <a href="blog-post.html" className="post-prw-img image-hover-scale image-container" style={{ paddingBottom: '54.44%' }}>
                <img className="fade-up w-100 lazyload" alt="The High-Street Brand Fashion" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/blog/blog-fashion-03.webp" />
              </a>
              <h4 className="post-prw-title"><a href="blog-post.html">Trends to Try This Season</a></h4>
              <div className="post-prw-links">
                <div className="post-prw-date"><i className="icon-calendar1" />
                  June 3, 2020
                </div>
              </div>
            </div>
            <div className="post-prw-vert col">
              <a href="blog-post.html" className="post-prw-img image-hover-scale image-container" style={{ paddingBottom: '54.44%' }}>
                <img className="fade-up w-100 lazyload" alt="The High-Street Brand Fashion" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/blog/blog-fashion-04.webp" />
              </a>
              <h4 className="post-prw-title"><a href="blog-post.html">Working From Home</a></h4>
              <div className="post-prw-links">
                <div className="post-prw-date"><i className="icon-calendar1" />
                  June 1, 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord

