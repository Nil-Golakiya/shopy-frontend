import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product_page = () => {

    const [data, setData] = useState();
    const [colors, setColors] = useState([]);
    const [variations, setVariations] = useState([]);
    const [images, setImages] = useState([]);
    const [activeInfo, setActiveInfo] = useState({});

    const params = useParams();

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8800/product/${params.id}`)
        const productData = data.data[0]
        setData(productData)
        handleChangeColorSize(productData, null)
    }

    const handleChangeColorSize = (data, color) => {
        const colorArray = [];
        data.variations.map((ele) => {
            colorArray.push(ele.color);
        })
        setColors(colorArray);
        if (!color) {
            color = colorArray[0];
        }

        const variationObj = data.variations.find((v) => v.color === color);
        if (variationObj) {
            setImages(variationObj.image);
            setVariations(variationObj.subVariation);
            const info = variationObj.subVariation[0];
            setActiveInfo({ ...activeInfo, color, ...info });
        }

        const imageArray = []
        data.variations.map((ele) => (
            imageArray.push(ele.image)
        ))
        console.log("data", imageArray)

    }

    console.log("activeInfo", activeInfo)
    console.log(images)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="category.html">Women</a></li>
                        <li><span>Leather Pegged Pants</span></li>
                    </ul>
                </div>
            </div>
            <div className="holder">
                <div className="container js-prd-gallery" id="prdGallery">
                    <div className="row prd-block prd-block-under prd-block--prv-left">
                        <div className="col">
                            <div className="js-prd-d-holder">
                                <div className="prd-block_title-wrap">
                                    <div className="prd-block_reviews" data-toggle="tooltip" data-placement="top" title="Scroll To Reviews"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star" />
                                        <span className="reviews-link"><a href="#" className="js-reviews-link"> (17 reviews)</a></span>
                                    </div>
                                    <h1 className="prd-block_title">Leather Pegged Pants</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row prd-block prd-block--prv-left">
                        <div className="col-md-8 col-lg-10 aside--sticky js-sticky-collision">
                            <div className="aside-content">
                                <div className="mb-2 js-prd-m-holder" />
                                <div className="prd-block_main-image">
                                    <div className="prd-block_main-image-holder" id="prdMainImage">
                                        <div className="product-main-carousel js-product-main-carousel" data-zoom-position="inner">
                                            
                                            <div data-value="Beige"><span className="prd-img"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/product-page/product-01.webp" className="lazyload fade-up elzoom" alt="" data-zoom-image="images/skins/fashion/product-page/product-01.webp" /></span></div>

                                        </div>
                                        <div className="prd-block_label-sale-squared justify-content-center align-items-center"><span>Sale</span></div>
                                    </div>
                                    <div className="prd-block_main-image-links">

                                        <a data-fancybox data-width={900} href="https://www.youtube.com/watch?v=Zk3kr7J_v3Q" className="prd-block_video-link"><i className="icon-video" /></a>
                                        <a href="images/products/product-01.html" className="prd-block_zoom-link"><i className="icon-zoom-in" /></a>
                                    </div>
                                </div>
                                <div className="product-previews-wrapper">
                                    <div className="product-previews-carousel js-product-previews-carousel" data-desktop={5} data-tablet={3}>
                                        {images.map((image) => (
                                            <a href="#" data-value="Beige">
                                                <span className="prd-img">
                                                    <img src={image} data-src={image} className="lazyload fade-up" alt="" />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-8 mt-1 mt-md-0">
                            <div className="prd-block_info prd-block_info--style1" data-prd-handle="/products/copy-of-suede-leather-mini-skirt">
                                <div className="prd-block_info-top prd-block_info_item order-0 order-md-2">
                                    <div className="prd-block_price prd-block_price--style2">
                                        <div className="prd-block_price--actual">₹ {activeInfo.price}</div>
                                        <div className="prd-block_price-old-wrap">
                                            <span className="prd-block_price--old">₹ {activeInfo.price}</span>
                                            <span className="prd-block_price--text">You Save: $131.99 (28%)</span>
                                        </div>
                                    </div>
                                    <div className="prd-block_viewed-wrap d-none d-md-flex">
                                        <div className="prd-block_viewed">
                                            <i className="icon-time" />
                                            <span>This product was viewed 13 times within last hour</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="prd-block_description prd-block_info_item ">
                                    <h3>Short description</h3>
                                    <p>{data?.sort_description}</p>
                                    <div className="mt-1" />
                                    <div className="row vert-margin-less">
                                        <div className="col-sm">
                                            <ul className="list-marker">
                                                <li>100% Polyester</li>
                                                <li>Lining:100% Viscose</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm">
                                            <ul className="list-marker">
                                                <li>Do not dry clean</li>
                                                <li>Only non-chlorine</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="prd-progress prd-block_info_item" data-left-in-stock>
                                    <div className="prd-progress-text">
                                        Hurry Up! Left <span className="prd-progress-text-left js-stock-left">{activeInfo.qty}</span> in stock
                                    </div>
                                    <div className="prd-progress-text-null" />
                                    <div className="prd-progress-bar-wrap progress">
                                        <div className="prd-progress-bar progress-bar active" data-stock="50, 10, 30, 25, 1000, 15000" style={{ width: '53%' }} />
                                    </div>
                                </div>
                                <div className="prd-block_countdown js-countdown-wrap prd-block_info_item countdown-init">
                                    <div className="countdown-box-full-text w-md">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-sm-auto text-center">
                                                <div className="countdown js-countdown" data-countdown="2021/07/01" />
                                            </div>
                                            <div className="col">
                                                <div className="countdown-txt"> TIME IS RUNNING OUT!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prd-block_order-info prd-block_info_item " data-order-time data-locale="en">
                                    <i className="icon-box-2" />
                                    <div>Order in the next <span className="prd-block_order-info-time countdownCircleTimer" data-time="8:00:00, 15:30:00, 23:59:59"><span><span>04</span>:</span><span><span>46</span>:</span><span><span>24</span></span></span> to get it by <span data-date>Tuesday, September 08, 2020</span></div>
                                </div>
                                <div className="prd-block_info_item prd-block_info-when-arrives d-none" data-when-arrives>
                                    <div className="prd-block_links prd-block_links m-0 d-inline-flex">
                                        <i className="icon-email-1" />
                                        <div><a href="#" data-follow-up data-name="Oversize Cotton Dress" className="prd-in-stock" data-src="#whenArrives">Inform me when the item arrives</a></div>
                                    </div>
                                </div>
                                <div className="prd-block_info-box prd-block_info_item">
                                    <div className="two-column"><p>Availability:
                                        <span className="prd-in-stock" data-stock-status>In stock</span></p>
                                        <p className="prd-taxes">Tax Info:
                                            <span>Tax included.</span>
                                        </p>
                                        <p>Collection: <span> <a href="collections.html" data-toggle="tooltip" data-placement="top" data-original-title="View all">Women</a></span></p>
                                        <p>Sku: <span data-sku>FOXic-45812</span></p>
                                        <p>Vendor: <span>Banita</span></p>
                                        <p>Barcode: <span>314363563</span></p></div>
                                </div>
                                <div className="order-0 order-md-100">
                                    <form method="post" action="#">
                                        <div className="prd-block_options">
                                            <div className="prd-color swatches">
                                                <div className="option-label">Color:</div>
                                                <select className="form-control hidden single-option-selector-modalQuickView" id="SingleOptionSelector-0" data-index="option1">
                                                    {colors.map((color) => {
                                                        <option value={color}>{color}</option>
                                                    })}
                                                </select>
                                                <ul className="images-list js-size-list" data-select-id="SingleOptionSelector-0">
                                                    {colors.map((color) => (
                                                        <li className={`${color === activeInfo.color ? "active" : ""}`} onClick={() => handleChangeColorSize(data, color)}>
                                                            <a href="#" data-value={color} data-toggle="tooltip" data-placement="top" data-original-title={color}>
                                                                <span className="image-container image-container--product">
                                                                    <img src="images/skins/fashion/product-page/product-01.html" alt="" />
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="prd-size swatches">
                                                <div className="option-label">Size:</div>
                                                <select className="form-control hidden single-option-selector-modalQuickView" id="SingleOptionSelector-1" data-index="option2">
                                                    <option value="Small" selected="selected">Small</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Large">Large</option>
                                                </select>
                                                <ul className="size-list js-size-list" data-select-id="SingleOptionSelector-1">
                                                    {variations.map((variation) => (
                                                        <li className={`${variation.size === activeInfo.size ? "active" : ""}`} onClick={() => setActiveInfo({ ...activeInfo, ...variation })}>
                                                            <a href="#" data-value={variation.size}><span className="value">{variation.size}</span></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="prd-block_actions prd-block_actions--wishlist">
                                            <div className="prd-block_qty">
                                                <div className="qty qty-changer">
                                                    <button className="decrease js-qty-button" />
                                                    <input type="number" className="qty-input" name="quantity" defaultValue={1} data-min={1} data-max={1000} />
                                                    <button className="increase js-qty-button" />
                                                </div>
                                            </div>
                                            <div className="btn-wrap">
                                                <button className="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart" data-product="{&quot;name&quot;:  &quot;Leather Pegged Pants &quot;,  &quot;url &quot;: &quot;product.html&quot;,  &quot;path &quot;: &quot;images/skins/fashion/product-page/product-01.webp&quot;,  &quot;aspect_ratio &quot;: &quot;0.78&quot;}">Add to cart</button>
                                            </div>
                                            <div className="btn-wishlist-wrap">
                                                <a href="#" className="btn-add-to-wishlist ml-auto btn-add-to-wishlist--add js-add-wishlist" title="Add To Wishlist"><i className="icon-heart-stroke" /></a>
                                                <a href="#" className="btn-add-to-wishlist ml-auto btn-add-to-wishlist--off js-remove-wishlist" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="prd-block_agreement prd-block_info_item order-0 order-md-100 text-right" data-agree>
                                        <input id="agreementCheckboxProductPage" className="js-agreement-checkbox" data-button=".shopify-payment-agree" name="agreementCheckboxProductPage" type="checkbox" />
                                        <label htmlFor="agreementCheckboxProductPage"><a href="#" data-fancybox className="modal-info-link" data-src="#agreementInfo">I agree to the terms of service</a></label>
                                    </div>
                                </div>
                                <div className="prd-block_info_item">
                                    <ul className="prd-block_links list-unstyled">
                                        <li><i className="icon-size-guide" /><a href="#" data-fancybox className="modal-info-link" data-src="#sizeGuide">Size Guide</a></li>
                                        <li><i className="icon-delivery-1" /><a href="#" data-fancybox className="modal-info-link" data-src="#deliveryInfo">Delivery and Return</a></li>
                                        <li><i className="icon-email-1" /><a href="#" data-fancybox className="modal-info-link" data-src="#contactModal">Ask about this product</a></li>
                                    </ul>
                                    <div id="sizeGuide" style={{ display: 'none' }} className="modal-info-content modal-info-content-lg">
                                        <div className="modal-info-heading">
                                            <div className="mb-1"><i className="icon-size-guide" /></div>
                                            <h2>Size Guide</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-borderless text-center">
                                                <thead>
                                                    <tr>
                                                        <th>USA</th>
                                                        <th>UK</th>
                                                        <th>France</th>
                                                        <th>Japanese</th>
                                                        <th>Bust</th>
                                                        <th>Waist</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>8</td>
                                                        <td>36</td>
                                                        <td>7</td>
                                                        <td>32"</td>
                                                        <td>61 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>10</td>
                                                        <td>38</td>
                                                        <td>11</td>
                                                        <td>34"</td>
                                                        <td>67 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>12</td>
                                                        <td>40</td>
                                                        <td>15</td>
                                                        <td>36"</td>
                                                        <td>74 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>14</td>
                                                        <td>42</td>
                                                        <td>17</td>
                                                        <td>38"</td>
                                                        <td>79 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>16</td>
                                                        <td>44</td>
                                                        <td>21</td>
                                                        <td>40"</td>
                                                        <td>84 cm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="deliveryInfo" style={{ display: 'none' }} className="modal-info-content modal-info-content-lg">
                                        <div className="modal-info-heading">
                                            <div className="mb-1"><i className="icon-delivery-1" /></div>
                                            <h2>Delivery and Return</h2>
                                        </div>
                                        <br />
                                        <h5>Our parcel courier service</h5>
                                        <p>Foxic is proud to offer an exceptional international parcel shipping service. It is straightforward and very easy to organise international parcel shipping. Our customer service team works around the clock to make sure that you receive high quality courier service from start to finish.</p>
                                        <p>Sending a parcel with us is simple. To start the process you will first need to get a quote using our free online quotation service. From this, you’ll be able to navigate through the online form to book a collection date for your parcel, selecting a shipping day suitable for you.</p>
                                        <br />
                                        <h5>Shipping Time</h5>
                                        <p>The shipping time is based on the shipping method you chose.<br />
                                            EMS takes about 5-10 working days for delivery.<br />
                                            DHL takes about 2-5 working days for delivery.<br />
                                            DPEX takes about 2-8 working days for delivery.<br />
                                            JCEX takes about 3-7 working days for delivery.<br />
                                            China Post Registered Mail takes 20-40 working days for delivery.</p>
                                    </div>
                                    <div id="contactModal" style={{ display: 'none' }} className="modal-info-content modal-info-content-sm">
                                        <div className="modal-info-heading">
                                            <div className="mb-1"><i className="icon-envelope" /></div>
                                            <h2>Have a question?</h2>
                                        </div>
                                        <form method="post" action="#" id="contactForm" className="contact-form">
                                            <div className="form-group">
                                                <input type="text" name="contact[name]" className="form-control form-control--sm" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="contact[email]" className="form-control form-control--sm" placeholder="Email" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="contact[phone]" className="form-control form-control--sm" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control textarea--height-170" name="contact[body]" placeholder="Message" required defaultValue={"Hi! I need next info about the \"Oversize Cotton Dress\":"} />
                                            </div>
                                            <button className="btn" type="submit">Ask our consultant</button>
                                            <p className="p--small mt-15 mb-0">and we will contact you soon</p><input name="recaptcha-v3-token" type="hidden" defaultValue="03AGdBq27T8WvzvZu79QsHn8lp5GhjNX-w3wkcpVJgCH15Ehh0tu8c9wTKj4aNXyU0OLM949jTA4cDxfznP9myOBw9m-wggkfcp1Cv_vhsi-TQ9E_EbeLl33dqRhp2sa5tKBOtDspTgwoEDODTHAz3nuvG28jE7foIFoqGWiCqdQo5iEphqtGTvY1G7XgWPAkNPnD0B9V221SYth9vMazf1mkYX3YHAj_g_6qhikdQDsgF2Sa2wOcoLKWiTBMF6L0wxdwhIoGFz3k3VptYem75sxPM4lpS8Y_UAxfvF06fywFATA0nNH0IRnd5eEPnnhJuYc5LYsV6Djg7_S4wLBmOzYnahC-S60MHvQFf-scQqqhPWOtgEKPihUYiGFBJYRn2p1bZwIIhozAgveOtTNQQi7FGqmlbKkRWCA" /></form>
                                    </div>
                                </div>
                                <div className="prd-block_info_item">
                                    <img className="img-responsive lazyload d-none d-sm-block" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/payment/safecheckout.webp" alt="" />
                                    <img className="img-responsive lazyload d-sm-none" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/payment/safecheckout-m.webp" alt="" />
                                </div>
                            </div>
                            <div className="prd-block_info prd-block_info--style1">
                                <div className="panel-group panel-group--style1 prd-block_accordion" id="productAccordion">
                                    <div className="panel">
                                        <div className="panel-heading active">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#productAccordion" href="#collapse2">
                                                    Description</a>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </h4>
                                        </div>
                                        <div id="collapse2" className="panel-collapse collapse show">
                                            <div className="panel-body">
                                                <h4>Give you a complete account of the system</h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                                <div className="row mt-3">
                                                    <div className="col-md-9">
                                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                                    </div>
                                                    <div className="col-md-9"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/product-description-01.webp" alt="" className="lazyload" /></div>
                                                </div>
                                                <div className="mt-3" />
                                                <h4>List heading</h4>
                                                <div className="row">
                                                    <div className="col-sm-9">
                                                        <ul className="list-unstyled list-smaller">
                                                            <li>1. All this mistaken idea of denouncing</li>
                                                            <li>2. Raising pain was born and give you</li>
                                                            <li>3. Complete account of the system</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-9 mt-15 mt-sm-0">
                                                        <ul className="list-unstyled list-smaller">
                                                            <li>4. All this mistaken idea of denouncing</li>
                                                            <li>5. Raising pain was born and give you</li>
                                                            <li>6. Complete account of the system</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row mt-3 align-items-center">
                                                    <div className="col-md-9"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/product-description-02.webp" alt="" className="lazyload" /></div>
                                                    <div className="col-md-9">
                                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#productAccordion" href="#collapse1">
                                                    Sizing Guide</a>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </h4>
                                        </div>
                                        <div id="collapse1" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <table className="table table-striped">
                                                    <tbody><tr>
                                                        <th scope="row">US Sizes</th>
                                                        <td>6</td>
                                                        <td>6,5</td>
                                                        <td>7</td>
                                                        <td>7,5</td>
                                                        <td>8</td>
                                                        <td>8,5</td>
                                                    </tr>
                                                        <tr>
                                                            <th scope="row">Euro Sizes</th>
                                                            <td>39</td>
                                                            <td>39</td>
                                                            <td>40</td>
                                                            <td>40-41</td>
                                                            <td>41</td>
                                                            <td>41-42</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">UK Sizes</th>
                                                            <td>5,5</td>
                                                            <td>6</td>
                                                            <td>6,5</td>
                                                            <td>7</td>
                                                            <td>7,5</td>
                                                            <td>8</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Inches</th>
                                                            <td>9.25"</td>
                                                            <td>9.5"</td>
                                                            <td>9.625"</td>
                                                            <td>9.75"</td>
                                                            <td>9.9375"</td>
                                                            <td>10.125"</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">CM</th>
                                                            <td>23,5</td>
                                                            <td>24,1</td>
                                                            <td>24,4</td>
                                                            <td>24,8</td>
                                                            <td>25,4</td>
                                                            <td>25,7</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#productAccordion" href="#collapse4">
                                                    Assigned Tags</a>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </h4>
                                        </div>
                                        <div id="collapse4" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="tags-list">
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">St.Valentine’s gift</a></li>
                                                    <li><a href="#">Sunglasses</a></li>
                                                    <li><a href="#">Discount</a></li>
                                                    <li><a href="#">Maxi dress</a></li>
                                                    <li><a href="#">Underwear</a></li>
                                                    <li><a href="#">men accessories</a></li>
                                                    <li><a href="#">hand bags</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">St.Valentine’s gift</a></li>
                                                    <li><a href="#">Sunglasses</a></li>
                                                    <li><a href="#">Discount</a></li>
                                                    <li><a href="#">Maxi dress</a></li>
                                                    <li><a href="#">Underwear</a></li>
                                                    <li><a href="#">men accessories</a></li>
                                                    <li><a href="#">hand bags</a></li>
                                                    <li><a href="#">Discount</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                                <div className="mt-3" />
                                                <h3>Add your tag</h3>
                                                <form className="form--simple" action="#">
                                                    <label>Tag<span className="required">*</span></label>
                                                    <input className="form-control form-control--sm" />
                                                    <button className="btn btn--md">Submit Tag</button>
                                                    <div className="required-text">* Required Fields</div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#productAccordion" href="#collapse5">Reviews</a>
                                                <span className="toggle-arrow"><span /><span /></span>
                                            </h4>
                                        </div>
                                        <div id="collapse5" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div id="productReviews">
                                                    <div className="row mb-2 align-items-center">
                                                        <div className="col-sm"><h3 className="m-0">CUSTOMER REVIEWS</h3></div>
                                                        <div className="col-sm-auto ml-auto"><a href="#" className="review-write-link"><i className="icon-pencil" />Write review</a></div>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="review-item_rating">
                                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                                            <div className="col-auto ml-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                                        </div>
                                                        <div className="review-item_content">
                                                            <h4>Good ball and company</h4>
                                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
                                                        </div>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="review-item_rating">
                                                            <i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" />
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col"><h5 className="review-item_author">Jaden Ngo on May 25, 2018</h5></div>
                                                            <div className="col-auto ml-auto"><a href="#" className="review-item_report">Report as Inappropriate</a></div>
                                                        </div>
                                                        <div className="review-item_content">
                                                            <h4>Good ball and company</h4>
                                                            <p>I recently bought this ball and this is the first ball that I actually buy based on quality and material, I always been playing my friend ball and one of them recommended me this, read some review online and decided to buy it, the ball feel sticky at first but quality is nice and the hand wrote letter was awesome because it shows how much season creator actually care about their customers.</p>
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
            <div className="holder prd-block_links-wrap-bg d-none d-md-block">
                <div className="prd-block_links-wrap prd-block_info_item container mt-2 mt-md-5 py-1">
                    <div className="prd-block_link"><span><i className="icon-call-center" />24/7 Support</span></div>
                    <div className="prd-block_link">
                        <span>Use promocode  FOXIC to get 15% discount!</span></div>
                    <div className="prd-block_link"><span><i className="icon-delivery-truck" /> Fast Shipping</span></div>
                </div>
            </div>
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
                                        <div className="prd-tag"><a href="#">FOXic</a></div>
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
                                        <div className="prd-tag"><a href="#">FOXic</a></div>
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
                                        <div className="prd-tag"><a href="#">FOXic</a></div>
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
                                        <div className="prd-tag"><a href="#">FOXic</a></div>
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
            </div>
        </div>
    )
}

export default Product_page
