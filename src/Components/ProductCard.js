import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ item, setWishlist, wishlist }) => {

    const [colorImages, setColorImages] = useState([])
    const [productImages, setProductImages] = useState([])
    const [displayImage, setDisplayImage] = useState(null)
    const [productPrice, setProductPrice] = useState(null)
    const [isWishlist, setIsWishlist] = useState(false)

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer)?.user?.user?._id

    const handleChangeColorImages = (data) => {
        setProductImages(data.image)
        setDisplayImage(data.image?.[0])
        setProductPrice(data.price)
    }

    const handleWishlist = async (id) => {
        const data = await axios.post("http://localhost:8800/wishlist", {
            product_id: id,
            user_id: userId
        })

        const Array = [];
        data.data.wishlist_id = data.data._id
        Array.push(data.data);
        setWishlist(Array.concat(wishlist))
        setIsWishlist(data.data._id)
    }

    const handleRemoveWishlist = async (id) => {
        setIsWishlist(false)
        const data = await axios.delete(`http://localhost:8800/wishlist/${id}`)
        setWishlist(wishlist.filter((e) => e.wishlist_id !== id))
    }

    useEffect(() => {
        if (item) {
            setProductImages(item.images)
            setDisplayImage(item.images?.[0])
            setProductPrice(item.variations[0]?.subVariation[0]?.price)

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

    useEffect(() => {
        wishlist?.map((ele) => {
            if (ele._id === item._id) {
                setIsWishlist(ele.wishlist_id)
            }
        })
    }, [])


    return (
        <div className="prd prd--style2 prd-labels--max prd-labels-shadow ">
            <div className="prd-inside">
                <div className="prd-img-area">
                    <Link to={`/products/${item.categories[0]?.name}/${item.subcategories[0]?.name}/${item._id}`} target="_blank" className="prd-img image-hover-scale image-container" style={{ paddingBottom: '128.48%' }}>
                        <img src={displayImage} alt="Leather Pegged Pants" className="js-prd-img lazyload fade-up" />
                        <div className="foxic-loader" />
                        <div className="prd-big-squared-labels">
                        </div>
                    </Link>
                    <div className="prd-circle-labels">
                        {
                            isWishlist ?
                                <Link to="#" className="circle-label-compare mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" onClick={() => handleRemoveWishlist(isWishlist)} /></Link>
                                :
                                <Link to="#" className="circle-label-compare mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" onClick={() => handleWishlist(item._id)} /></Link>
                        }
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
                            </ul>
                        </div>
                    </div>
                    <ul className="list-options color-swatch">
                        {productImages && productImages.map((image) =>
                            <li className={`${image === displayImage ? "active" : ""}`} onMouseEnter={() => setDisplayImage(image)}>
                                <a href="#" className="js-color-toggle">
                                    <img src={image} className="lazyload fade-up" alt="Color Name" />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="prd-info">
                    <div className="prd-info-wrap">
                        <div className="prd-info-top">
                            <div className="prd-rating"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                        </div>
                        <div className="prd-rating justify-content-center"><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /><i className="icon-star-fill fill" /></div>
                        <h2 className="prd-title"><Link to={`/products/${item.categories[0]?.name}/${item.subcategories[0]?.name}/${item._id}`}>{item.title}</Link></h2>
                        <div className="prd-description">
                            {item.shortDescription}
                        </div>
                    </div>
                    <div className="prd-hovers">
                        <div className="prd-circle-labels">
                            <div>
                                {
                                    isWishlist ?
                                        <Link to="#" className="circle-label-compare mt-0" title="Remove From Wishlist"><i className="icon-heart-hover" onClick={() => handleRemoveWishlist(isWishlist)} /></Link>
                                        :
                                        <Link to="#" className="circle-label-compare mt-0" title="Add To Wishlist"><i className="icon-heart-stroke" onClick={() => handleWishlist(item._id)} /></Link>
                                }
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
