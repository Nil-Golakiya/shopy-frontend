import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Index = ({ Component }) => {
    const [data, setData] = useState()

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8800/category/Customercategory")
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="">
                <header className="hdr-wrap">
                    <Navbar data={data} />
                </header>
                <div className="has-smround-btns has-loader-bg equal-height has-sm-container">
                    <Sidebar data={data} />
                    <Component />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Index
