import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../asstes/Order_details.css"
import logo from "../Image/logo.jpeg"

const Order_details = () => {

    const [orderData, setOrderData] = useState()
    const [paymentInfo, setPaymentInfo] = useState()
    const [orderDetails, setOrderDetails] = useState()

    const params = useParams()
    console.log("params", params.id)

    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const userName = JSON.parse(userData.Reducer).user.user.user_name

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8800/order/orderdetils/${params.id}`)
        setOrderData(data)
        console.log("orderData", data)
        setPaymentInfo(JSON.parse(data.paymentInfo))
        getOrderDetails(data)
    }

    const getOrderDetails = (data) => {
        const Array = []

        data.order_details_id?.map((element) => {
            Array.push(element)
            console.log("data------", Array)
        })
        setOrderDetails(Array)
    }

    console.log("orderDetails", orderDetails)
    console.log("paymentInfo", paymentInfo)

    useEffect(() => {
        fetchData()
    }, [params])



    return (
        <div className="container-fluid my-5  d-flex  justify-content-center">
            <div className="card card-1">
                <div className="bg-white">
                    <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
                        <div className="col my-auto"> <h4 className="mb-0">Thanks for your Order,<span className="change-color"> {userName}</span> !</h4> </div>
                        <div className="col-auto text-center  my-auto pl-0 pt-sm-4"> <img className="img-fluid my-auto align-items-center mb-0" src={logo} width={115} height={115} /> <p className="mb-4 pt-0 Glasses"></p></div>
                    </div>
                </div>
                <div className="card-body pt-0">
                    <div className="row justify-content-between mb-3">
                        <div className="col-auto"> <h6 className="color-1 mb-0 change-color">Receipt</h6> </div>
                        <div className="col-auto  "> <small>Order Id : {orderData?.order_id}</small> </div>
                    </div>
                    {
                        orderDetails?.map((ele) => (
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="card card-2">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="sq align-self-center ">
                                                    <img className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={ele.product_info.image} width={135} height={135} />
                                                </div>
                                                <div className="media-body my-auto text-right">
                                                    <div className="row  my-auto flex-column flex-md-row">
                                                        <div className="col my-auto"> <h6 className="mb-0">{ele.product_info.product_name}</h6></div>
                                                        <div className="col-auto my-auto"> <h6 className="mb-0">Color : {ele.product_info.color}</h6></div>
                                                        <div className="col my-auto"> <h6 className="mb-0">Size : {ele.product_info.size}</h6></div>
                                                        <div className="col my-auto"> <h6 className="mb-0">Qty : {ele.quantity}</h6></div>
                                                        <div className="col my-auto"><h4 className="mb-0">₹ {Math.round(ele.total)}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="row mt-4">
                        <div className="col">
                            <div className="row justify-content-between">
                                <div className="col-auto"><p className="mb-1 text-dark"><b>Order Details</b></p></div>
                                <div className="flex-sm-col text-right col"> <p className="mb-1"><b>Total</b></p> </div>
                                <div className="flex-sm-col col-auto"> <p className="mb-1">₹ {orderData?.total_price - orderData?.shippingCharge + (orderData?.discount?.amount)}</p> </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="flex-sm-col text-right col"><p className="mb-1"> <b>Discount</b></p> </div>
                                <div className="flex-sm-col col-auto"><p className="mb-1">₹ {orderData?.discount?.amount}</p></div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="flex-sm-col text-right col"><p className="mb-1"><b>Delivery Charges</b></p></div>
                                <div className="flex-sm-col col-auto"><p className="mb-1">₹ {orderData?.shippingCharge}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row invoice ">
                        <div className="col"><p className="mb-1"> BANKTXNID : {paymentInfo?.BANKTXNID}</p><p className="mb-1">Invoice Date :  {moment(orderData?.date).format('ll')}</p><p className="mb-1">Bank Name: {orderData?.contact_info?.email}</p></div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="jumbotron-fluid">
                        <div className="row justify-content-between ">
                            <div className="col-sm-auto col-auto my-auto"><img className="img-fluid my-auto align-self-center " src={logo} width={115} height={115} /></div>
                            <div className="col-auto my-auto "><h2 className="mb-0 font-weight-bold">TOTAL PAID</h2></div>
                            <div className="col-auto my-auto ml-auto"><h1 className="display-3" style={{ margin: "22px", fontSize: "3rem" }}>₹ {orderData?.total_price}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order_details
