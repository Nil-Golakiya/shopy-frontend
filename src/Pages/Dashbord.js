import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import ProductCard from '../Components/ProductCard'


const Dashbord = ({ categoryData, setWishlist, wishlist }) => {

  const [trandingData, setTrandingData] = useState()
  const [featuredData, setFeaturedData] = useState()
  const [collectionData, setCollectionData] = useState()
  const [activeCollection, setActiveCollection] = useState()



  const TrandingProduct = async () => {
    const { data } = await axios.get("http://localhost:8800/product?type=tranding")
    const TrandingProductData = data.data;
    setTrandingData(TrandingProductData)
  }

  const FeaturedProduct = async () => {
    const { data } = await axios.get("http://localhost:8800/product?type=featured")
    const FeaturedProductData = data.data;
    setFeaturedData(FeaturedProductData)
  }

  const handleProductlist = async (name) => {
    setActiveCollection(name)
    const getparams = {}
    getparams.category_id = name;
    console.log("getparams", getparams)
    const { data } = await axios.get("http://localhost:8800/product/limitedproduct", { params: getparams });
    const Data = data.data;
    setCollectionData(Data)
  }

  useEffect(() => {
    TrandingProduct()
    FeaturedProduct()
    handleProductlist("Men")
  }, [])

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = "/js/app-html.js"
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  console.log("categoryData", categoryData)

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
                          Best Clothes</div>
                        <div className="btn-wrap text-center  order-4 mt-md" data-animation="fadeIn" data-animation-delay={2000} style={{ opacity: 1 }}>
                          <Link to="/products/Women" className="btn">
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
      <div class="holder holder-mt-xsmall">
        <div class="container">
          <div className="row vert-margin-small">
            {categoryData && categoryData.map((ele) => (
              <div className="col-sm">
                <Link to={`/products/${ele.name}`} className="collection-grid-3-item image-hover-scale">
                  <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%', borderRadius: "154px", height: "211px", width: "205px" }}>
                    <img src={ele.img} className="lazyload fade-up" alt="Banner" />
                    <div className="foxic-loader" />
                  </div>
                  <div className="collection-grid-3-caption-bg">
                    <h3 className="collection-grid-3-title">{ele.name}</h3>
                    <h4 className="collection-grid-3-subtitle">The&nbsp;Best&nbsp;Look&nbsp;Anywhere</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="holder holder-mt-medium section-name-products-grid" id="productsGrid01">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Collections</h2>
            <div class="title-wrap title-tabs-wrap text-center js-title-tabs">
              <div class="title-tabs">
                {
                  categoryData && categoryData.map((ele) => (
                    <h2 class={`h3-style ${ele.name === activeCollection ? "active" : ""}`} >
                      <Link to="#" onClick={() => handleProductlist(ele.name)}>
                        <span class="title-tabs-text theme-font">{ele.name}</span>
                      </Link>
                    </h2>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="prd-grid-wrap">
            <div class="prd-grid data-to-show-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2" data-grid-tab-content>
              {collectionData && collectionData?.map((item) => (
                <ProductCard item={item} setWishlist={setWishlist} wishlist={wishlist} />
              ))}
            </div>
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
          <Link to="/products/Men/Shirt" target="_blank" className="bnr-wrap bnr-">
            <div className="bnr custom-caption image-hover-scale bnr--middle bnr--right bnr--fullwidth">
              <div className="bnr-img d-none d-sm-block image-container" style={{ paddingBottom: '41.36752136752137%' }}>
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion2-full.webp" className="lazyload fade-up" alt="" />
              </div>
              <div className="bnr-img d-sm-none image-container" style={{ paddingBottom: '74.3139407244786%' }}>
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/banner-fashion2-full-m.webp" className="lazyload fade-up" alt="" />
              </div>
              <div className="bnr-caption text-center" style={{ padding: '4% 4%' }}>
                <div className="bnr-caption-inside w-s-50 w-ms-100 title-wrap">
                  <h2 className="h1-style">The best trends<br className="d-sm-none" /> of summer 2023</h2>
                  <div className="h-sub mt-0">eCommerce HTML Template</div>
                  <div className="bnr-btn inherit mt-sm order-3">
                    <div className="btn">Buy Now</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
              {trandingData && trandingData.map((item) => (
                <ProductCard item={item} setWishlist={setWishlist} wishlist={wishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="holder">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Featured product</h2>
            <div className="h-sub maxW-825">Hurry up! Limited</div>
          </div>
          <div className="prd-grid-wrap position-relative">
            <div className="prd-grid data-to-show-4 data-to-show-lg-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2 js-category-grid" data-grid-tab-content>
              {featuredData && featuredData.map((item) => (
                <ProductCard item={item} setWishlist={setWishlist} wishlist={wishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord

