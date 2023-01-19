import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Index = ({ Component }) => {
    const [categoryData, setCategoryData] = useState()
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    const fetchWishlistData = async () => {
        const { data } = await axios.get(`http://localhost:8800/wishlist/${userId}`)
        setWishlist(data)
    }
    console.log("wishlistData", wishlist)


    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer)?.user?.user?._id

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8800/category/Customercategory")
        setCategoryData(data)
    }

    const CartData = async () => {
        if (userId) {

            const { data } = await axios.get(`http://localhost:8800/cart/${userId}`)
            setCart(data)
        }
    }

    useEffect(() => {
        fetchData()
        CartData()
        fetchWishlistData()
    }, [])

    useEffect(() => {
        // const scriptTag = document.createElement('script')
        // scriptTag.src = "/js/app-html.js"
        // document.body.appendChild(scriptTag);
    }, [])


    return (
        <>
            <div className="">
                <header className="hdr-wrap">
                    <Navbar categoryData={categoryData} setCart={setCart} cart={cart} setWishlist={setWishlist} wishlist={wishlist} />
                </header>
                <div className="has-smround-btns has-loader-bg equal-height has-sm-container">
                    <Sidebar categoryData={categoryData} setCart={setCart} cart={cart} />
                    <Component setCart={setCart} cart={cart} categoryData={categoryData} setWishlist={setWishlist} wishlist={wishlist} />
                </div>
                <Footer cart={cart} />
            </div>
        </>
    )
}

export default Index
