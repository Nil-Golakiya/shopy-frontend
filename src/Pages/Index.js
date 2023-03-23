import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Index = ({ Component }) => {
    const [categoryData, setCategoryData] = useState()
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(false)

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData?.Reducer)?.user?.user?._id


    const fetchWishlistData = async () => {
        if (userId) {
            const { data } = await axios.get(`/wishlist/${userId}`)
            const Data = data.data;
            setWishlist(Data)
        }
    }

    const clearCart = async () => {
        const { data } = await axios.delete(`/cart/deltemany/${userId}`)
    }

    const fetchData = async () => {
        setLoading(true)
        const { data } = await axios.get("/category/Customercategory")
        setCategoryData(data)
        setLoading(false)
    }

    const CartData = async () => {
        if (userId) {
            const { data } = await axios.get(`/cart/${userId}`)
            setCart(data)
        }
    }

    useEffect(() => {
        const Runallfunction = async () => {
            setLoading(true)
            await fetchData()
            await CartData()
            await fetchWishlistData()
        }
        Runallfunction()
    }, [Component])

    return (
        <>
            {loading ? <Loader /> : ""}
            <div className="">
                <header className="hdr-wrap">
                    <Navbar categoryData={categoryData} setCart={setCart} cart={cart} setWishlist={setWishlist} wishlist={wishlist} />
                </header>
                <div className="has-smround-btns has-loader-bg equal-height has-sm-container">
                    <Sidebar categoryData={categoryData} setCart={setCart} cart={cart} />
                    <Component setCart={setCart} cart={cart} categoryData={categoryData} setWishlist={setWishlist} wishlist={wishlist} setLoading={setLoading} clearCart={clearCart} />
                </div>
                <Footer cart={cart} />
            </div>
        </>
    )
}

export default Index
