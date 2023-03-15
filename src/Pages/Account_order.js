import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Account_sidebar from '../Components/Account_sidebar'
import moment from "moment"

const Account_order = ({ setLoading }) => {

    const [orderData, setOrderData] = useState()

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userId = JSON.parse(userData.Reducer).user.user._id;

    const fetchData = async () => {
        setLoading(true)
        const { data } = await axios.get(`http://localhost:8800/order/${userId}`)
        setOrderData(data)
        setLoading(false)
    }

    useEffect(() => {
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
                                            <th scope="col">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderData?.map((ele) => (
                                                <tr>
                                                    <td>1</td>
                                                    <td><b>{ele.order_id}</b> </td>
                                                    <td>{moment(ele.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                    <td>{ele.status}</td>
                                                    <td><span className="color">₹ {ele.total_price}</span></td>
                                                    <td className="d-flex justify-content-center align-items-center"><Link to={`/account-order/${ele._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></td>
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
