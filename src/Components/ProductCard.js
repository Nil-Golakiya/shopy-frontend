import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const [colorImages, setColorImages] = useState([])
    const [productImages, setProductImages] = useState([])
    const [displayImage, setDisplayImage] = useState(null)
    const [productPrice, setProductPrice] = useState(null)
    const [wishlist, setWishlist] = useState([])


    useEffect(() => {
        if (item) {
            setProductImages(item.images)
            setDisplayImage(item.images?.[0])
            setProductPrice(item.variations?.[0].subVariation?.[0].price)

            const imageObject = []
            item.variations.map((ele) => {
                const obj = {
                    color: ele.color,
                    image: ele.image,
                    price: ele.subVariation[0].price,
                }
                imageObject.push(obj)
            })
            setColorImages(imageObject)
        }
    }, [])

    const handleChangeColorImages = (data) => {
        setProductImages(data.image)
        setDisplayImage(data.image?.[0])
        setProductPrice(data.price)
    }

    const handleWishlist = (id) => {
        const Array = wishlist;
        Array.push(id);
        console.log("wishlist", id)
        setWishlist(Array)
    }

    console.log("item", item)


    return (
        <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
            <div className="prd-inside">
                <div className="prd-img-area">
                    <Link to={`/products/${item.categories[0].name}/${item.subcategories[0].name}/${item._id}`} target="_blank" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                        <img src={displayImage} alt="Leather Pegged Pants" className="js-prd-img lazyload fade-up" />
                        <div className="foxic-loader" />
                        <div className="prd-big-squared-labels">
                        </div>
                    </Link>
                    <div className="prd-circle-labels">
                        <a href="#" onClick={() => handleWishlist(item._id)} className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a>
                        <a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                        <div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
                            <i className="icon-palette"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></i>
                            <ul>
                                {
                                    colorImages.map((image) => (
                                        <li onMouseEnter={() => handleChangeColorImages(image)}>
                                            <a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title={image.color}>
                                                <img src={image.image?.[0]} alt="" />
                                            </a>
                                        </li>
                                    ))
                                }
                                {/* <li data-image="images/skins/fashion/products/product-01-color-2.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-black.html" alt="" /></a></li>
                                <li data-image="images/skins/fashion/products/product-01-color-3.webp"><a className="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"><img src="images/colorswatch/color-red.html" alt="" /></a></li> */}
                            </ul>
                        </div>
                    </div>
                    <ul className="list-options color-swatch">
                        {productImages.map((image) =>
                            <li className={`${image === displayImage ? "active" : ""}`} onMouseEnter={() => setDisplayImage(image)}>
                                <a href="#" className="js-color-toggle">
                                    <img src={image} className="lazyload fade-up" alt="Color Name" />
                                </a>
                            </li>
                        )}

                        {/* <li data-image="images/skins/fashion/products/product-01-2.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-01-2.webp" className="lazyload fade-up" alt="Color Name" /></a></li>
                        <li data-image="images/skins/fashion/products/product-01-3.webp"><a href="#" className="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="images/skins/fashion/products/product-01-3.webp" className="lazyload fade-up" alt="Color Name" /></a></li> */}
                    </ul>
                </div>
                <div className="prd-info">
                    <div className="prd-info-wrap">
                        <div className="prd-info-top">
                            <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                        </div>
                        <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                        <h2 className="prd-title"><Link to={`/products/${item.categories[0].name}/${item.subcategories[0].name}/${item._id}`}>{item.title}</Link></h2>
                        <div className="prd-description">
                            {item.shortDescription}
                        </div>
                    </div>
                    <div className="prd-hovers">
                        <div className="prd-circle-labels">
                            <div>
                                <a onClick={() => handleWishlist(item._id)} className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" /></a>
                                <a href="#" className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" /></a>
                            </div>
                        </div>
                        <div className="prd-price">
                            <div className="price-new">{productPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard
