import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmptyCart from '../Components/EmptyCart'

const Cart = ({ cart, setCart }) => {

  const [totalprice, setTotalPrice] = useState()
  const navigate = useNavigate()

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

  const handleCheckOut = () => {
    navigate("/checkout")
  }

  const handleCartQty = (item, type) => {
    if (type === "remove" && item.cart_quantity - 1 === 0) {
      handleDelete(item._id)
    } else {
      const cartObject = cart.filter((ele) => {
        if (ele._id === item._id) {
          if (type === "add") {
            ele.cart_quantity = ele.cart_quantity + 1
          }
          if (type === "remove") {
            ele.cart_quantity = ele.cart_quantity - 1
          }
        }
        return ele
      })
      setCart(cartObject)
      const dataObj = cartObject.find(ele => ele._id === item._id)
      const data = axios.put(`/cart/${dataObj._id}`, dataObj)
    }
  }

  useEffect(() => {
    CartTotal()
  }, [cart])

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = "/js/app-html.js"
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  return (
    <>
      {
        cart.length === 0 ? <EmptyCart /> :
          <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
              <div className="container">
                <ul className="breadcrumbs">
                  <li><a href="index.html">Home</a></li>
                  <li><span>Cart</span></li>
                </ul>
              </div>
            </div>
            <div className="holder">
              <div className="container">
                <div className="page-title text-center">
                  <h1>Shopping Cart</h1>
                </div>
                <div className="row">
                  <div className="col-lg-11 col-xl-13">
                    <div className="cart-table">
                      <div className="cart-table-prd cart-table-prd--head py-1 d-none d-md-flex">
                        <div className="cart-table-prd-image text-center">
                          Image
                        </div>
                        <div className="cart-table-prd-content-wrap">
                          <div className="cart-table-prd-info">Name</div>
                          <div className="cart-table-prd-qty">Qty</div>
                          <div className="cart-table-prd-price">Price</div>
                          <div className="cart-table-prd-action">&nbsp;</div>
                        </div>
                      </div>
                      {
                        cart.map((ele) => (
                          <div className="cart-table-prd">
                            <div className="cart-table-prd-image">
                              <a href="product.html" className="prd-img"><img className="lazyload fade-up" src={ele.subVariation.image} style={{ height: "187px", objectFit: "contain" }} alt="" /></a>
                            </div>
                            <div className="cart-table-prd-content-wrap">
                              <div className="cart-table-prd-info">
                                <div className="cart-table-prd-price">
                                  <div className="price-old">₹ {ele.subVariation.price}</div>
                                  <div className="price-new">₹ {ele.subVariation.price - ele.subVariation.price / ele.subVariation.discount}</div>
                                </div>
                                <h2 className="cart-table-prd-name"><a href="product.html">{ele.subVariation.product_name}</a></h2>
                              </div>
                              <div className="cart-table-prd-qty">
                                <div className="qty qty-changer">
                                  <button className="decrease" onClick={() => handleCartQty(ele, "remove")} />
                                  <input type="text" className="qty-input" value={ele.cart_quantity} data-min={0} data-max={100} />
                                  <button className="increase" onClick={() => handleCartQty(ele, "add")} />
                                </div>
                              </div>
                              <div className="cart-table-prd-price-total">
                                ₹ {(ele.subVariation.price - (ele.subVariation.price / ele.subVariation.discount)) * ele.cart_quantity}
                              </div>
                            </div>
                            <div className="cart-table-prd-action">
                              <button className="cart-table-prd-remove" onClick={() => handleDelete(ele._id)}><i className="icon-recycle" /></button>
                            </div>
                          </div>
                        ))
                      }

                    </div>
                    <div className="text-center mt-1"><button type="button" className="btn btn--grey">Clear All</button></div>
                    <div className="d-none d-lg-block">
                      <div className="mt-4" />
                      <div className="holder">
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
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-06-1.webp" alt="Midi Dress" className="js-prd-img lazyload fade-up" />
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
                                    <h2 className="prd-title"><a href="product.html">Midi Dress</a></h2>
                                    <div className="prd-description">
                                      Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                    </div>
                                    <div className="prd-action">
                                      <form action="#">
                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Midi Dress&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-06-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-21-1.webp" alt="Genuine Leather" className="js-prd-img lazyload fade-up" />
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
                                    <h2 className="prd-title"><a href="product.html">Genuine Leather</a></h2>
                                    <div className="prd-description">
                                      Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                    </div>
                                    <div className="prd-action">
                                      <form action="#">
                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Genuine Leather&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-21-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-26-1.webp" alt="Pureboost Shoes" className="js-prd-img lazyload fade-up" />
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
                                    <h2 className="prd-title"><a href="product.html">Pureboost Shoes</a></h2>
                                    <div className="prd-description">
                                      Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                    </div>
                                    <div className="prd-action">
                                      <form action="#">
                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Pureboost Shoes&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-26-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Pureboost Shoes&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-26-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-30-1.webp" alt="Multiple Pocket" className="js-prd-img lazyload fade-up" />
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
                                    <h2 className="prd-title"><a href="product.html">Multiple Pocket</a></h2>
                                    <div className="prd-description">
                                      Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante sed lacinia.
                                    </div>
                                    <div className="prd-action">
                                      <form action="#">
                                        <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Multiple Pocket&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-30-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                                          <button className="btn js-prd-addtocart" data-product="{&quot;name&quot;: &quot;Multiple Pocket&quot;, &quot;path&quot;:&quot;images/skins/fashion/products/product-30-1.webp&quot;, &quot;url&quot;:&quot;product.html&quot;, &quot;aspect_ratio&quot;:0.778}">Add To Cart</button>
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
                  </div>
                  <div className="col-lg-7 col-xl-5 mt-3 mt-md-0">
                    <div className="card-total">
                      <div className="row d-flex">
                        <div className="col card-total-txt">Total</div>
                        <div className="col-auto card-total-price text-right">₹ {totalprice}</div>
                      </div>
                      <button className="btn btn--full btn--lg" onClick={() => handleCheckOut()}><span>Checkout</span></button>
                    </div>
                    <div className="mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>

  )
}

export default Cart
