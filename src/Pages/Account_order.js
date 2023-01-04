import React from 'react'
import Account_sidebar from '../Components/Account_sidebar'

const Account_order = () => {
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
                                        <tr>
                                            <td>1</td>
                                            <td><b>175525</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>01.02.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$1252.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><b>189067</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>12.02.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$367.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><b>186543</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>03.04.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$587.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><b>209876</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>05.06.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$3654.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><b>215879</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>06.07.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$258.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><b>229876</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>12.08.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$314.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td><b>268745</b> <a href="cart.html" className="ml-1">View Details</a></td>
                                            <td>01.09.2017</td>
                                            <td>Shipped</td>
                                            <td><span className="color">$522.00</span></td>
                                            <td><a href="#" className="btn btn--grey btn--sm">REORDER</a></td>
                                        </tr>
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
