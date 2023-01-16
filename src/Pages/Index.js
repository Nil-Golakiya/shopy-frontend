import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Index = ({ Component }) => {
    const [data, setData] = useState()
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer)?.user?.user?._id

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8800/category/Customercategory")
        setData(data)
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
    }, [])

    useEffect(() => {
        // const scriptTag = document.createElement('script')
        // scriptTag.src = "/js/app-html.js"
        // document.body.appendChild(scriptTag);
    }, [])

    console.log("wishlist in index", wishlist)

    return (
        <>
            <div className="">
                <header className="hdr-wrap">
                    <Navbar data={data} setCart={setCart} cart={cart} />
                </header>
                <div className="has-smround-btns has-loader-bg equal-height has-sm-container">
                    <Sidebar data={data} setCart={setCart} cart={cart} />
                    <Component setCart={setCart} cart={cart} wishlist={wishlist} setWishlist={setWishlist} data={data} />
                </div>
                <Footer cart={cart} />
            </div>
        </>
    )
}

export default Index
