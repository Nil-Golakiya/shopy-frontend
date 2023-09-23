import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import ProductCard from '../Components/ProductCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


const Dashbord = ({ categoryData, setWishlist, wishlist, setLoading }) => {

  const [trandingData, setTrandingData] = useState()
  const [featuredData, setFeaturedData] = useState()
  const [collectionData, setCollectionData] = useState()
  const [activeCollection, setActiveCollection] = useState()
  const [carouselData, setCarouselData] = useState()

  const TrandingProduct = async () => {
    const { data } = await axios.get("/product?type=tranding")
    const TrandingProductData = data.data;
    setTrandingData(TrandingProductData)
  }

  const FeaturedProduct = async () => {
    const { data } = await axios.get("/product?type=featured")
    const FeaturedProductData = data.data;
    setFeaturedData(FeaturedProductData)
  }

  const handleProductlist = async (name) => {
    setLoading(true)
    setActiveCollection(name)
    const getparams = {}
    getparams.category_id = name;
    const { data } = await axios.get("/product/limitedproduct", { params: getparams });
    const Data = data.data;
    setCollectionData(Data)
    setLoading(false)
  }

  const fetchData = async () => {
    const { data } = await axios.get("/carousel")
    const updatedData = data.map((item) => {
      const pngURL = `${process.env.REACT_APP_API_BASE_URL}/${item.image}`;
      return { ...item, pngURL }
    })

    setCarouselData(updatedData)
    // console.log("updatedData", updatedData)
  }

  useEffect(() => {
    TrandingProduct()
    FeaturedProduct()
    handleProductlist("Men")
    fetchData()
  }, [])

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = "/js/app-html.js"
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])
  // console.log('carouselData--', carouselData);

  return (
    <div className="page-content">
      <div className="holder fullwidth full-nopad mt-0">
        <div className="container">
          <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}  >
            {
              carouselData && carouselData.map((item) => (

                <div>
                  <img src={`${item.pngURL}`} />
                </div>
              ))
            }
          </Carousel>

          {/* <div className="bnslider-slide">
            <div className="bnslider-image-mobile lazyload" style={{ backgroundImage: ` url(${item.pngURL})` }} />
            <div className="bnslider-image lazyload" style={{ backgroundImage: ` url(${item.pngURL})` }} />
            <div className="bnslider-text-wrap bnslider-overlay ">
              <div className="bnslider-text-content txt-middle txt-right txt-middle-m txt-center-m">
                <div className="bnslider-text-content-flex ">
                  <div className="bnslider-vert w-s-60 w-ms-100" style={{ padding: '0px' }}>
                    <div className="bnslider-text order-1 mt-sm bnslider-text--md text-center data-ini" data-animation="fadeInUp" data-animation-delay={800} data-fontcolor="#282828" data-fontweight={700} data-fontline="1.5">
                      Best Price This Year
                    </div>
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
          </div> */}
        </div>
      </div>
      <div class="holder holder-mt-xsmall">
        <div class="container">
          <div className="row vert-margin-small">
            {categoryData && categoryData.map((ele) => (
              <div className="col-sm">
                <Link to={`/products/${ele.name}`} className="collection-grid-3-item image-hover-scale">
                  <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '93.68%', borderRadius: "154px", height: "211px", width: "205px" }}>
                    <img src={`https://shopybackend.onrender.com/${ele.img}`} className="lazyload fade-up" alt="Banner" />
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

