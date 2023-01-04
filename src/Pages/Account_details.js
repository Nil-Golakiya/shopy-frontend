import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Account_sidebar from '../Components/Account_sidebar'

const Account_details = () => {

    useEffect(() => {
        console.log("vghbuvfkgj")
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);
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
                            <h1 className="mb-3">Account Details</h1>
                            <div className="row vert-margin">
                                <div className="col-sm-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Personal Info</h3>
                                            <p><b>First Name:</b> Jenny<br />
                                                <b>Last Name:</b> Raider<br />
                                                <b>E-mail:</b> jennyraider@hotmail.com<br />
                                                <b>Phone:</b> 876-432-4323</p>
                                            <div className="mt-2 clearfix">
                                                <a href="#" className="link-icn js-show-form" data-form="#updateDetails"><i className="icon-pencil" />Edit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 d-none" id="updateDetails">
                                <div className="card-body">
                                    <h3>Update Account Details</h3>
                                    <div className="row mt-2">
                                        <div className="col-sm-9">
                                            <label className="text-uppercase">First Name:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control--sm" placeholder="Jenny" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9">
                                            <label className="text-uppercase">Last Name:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control--sm" placeholder="Raider" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-9">
                                            <label className="text-uppercase">E-mail:</label>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control--sm" placeholder="jennyraider@hotmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9">
                                            <label className="text-uppercase">Phone:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control--sm" placeholder="876-432-4323" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <button type="reset" className="btn btn--alt js-close-form" data-form="#updateDetails">Cancel</button>
                                        <button type="submit" className="btn ml-1">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_details
