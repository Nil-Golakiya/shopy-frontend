import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Account_sidebar from '../Components/Account_sidebar'
import moment from "moment"

const Account_order = () => {

    const [orderData, setOrderData] = useState()

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer).user.user._id;

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8800/order/${userId}`)
        setOrderData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li><span>My account</span></li>
                    </ul>
                </div>
            </div>
            <div className="holder">
                <div className="container">
                    <div className="row">
                        <Account_sidebar />
                        <div className="col-md-14 aside">
                            <h1 className="mb-3">Order History</h1>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-order-history">
                                    <thead>
                                        <tr>
                                            <th scope="col"># </th>
                                            <th scope="col">Order Number</th>
                                            <th scope="col">Order Date </th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderData?.map((ele) => (
                                                <tr>
                                                    <td>1</td>
                                                    <td><b>{ele.order_id}</b> <Link to={`/account-order/${ele._id}`} className="ml-1">View Details</Link></td>
                                                    <td>{moment(ele.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                    <td>{ele.status}</td>
                                                    <td><span className="color">₹ {ele.total_price}</span></td>
                                                    <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-right mt-2">
                                <a href="#" className="btn btn--alt">Clear History</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_order
