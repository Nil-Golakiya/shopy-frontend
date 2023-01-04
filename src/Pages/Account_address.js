import React from 'react'
import Account_sidebar from '../Components/Account_sidebar'

const Account_address = () => {
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
                            <h1 className="mb-3">My Addresses</h1>
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Address 1 (Default)</h3>
                                            <p>Thomas Nolan Kaszas
                                                <br /> 5322 Otter Ln Middleberge
                                                <br /> FL 32068 Palm Bay FL 32907</p>
                                            <div className="mt-2 clearfix">
                                                <a href="#" className="link-icn js-show-form" data-form="#updateAddress"><i className="icon-pencil" />Edit</a>
                                                <a href="#" className="link-icn ml-1 float-right"><i className="icon-cross" />Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 mt-2 mt-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>Address 2</h3>
                                            <p>Yuto Murase 42 1
                                                <br /> Motohakone Hakonemaci Ashigarashimo
                                                <br /> Gun Kanagawa 250 05 JAPAN
                                            </p>
                                            <div className="mt-2 clearfix">
                                                <a href="#" className="link-icn js-show-form" data-form="#updateAddress"><i className="icon-pencil" />Edit</a>
                                                <a href="#" className="link-icn ml-1 float-right"><i className="icon-cross" />Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 d-none" id="updateAddress">
                                <div className="card-body">
                                    <h3>Edit Address</h3>
                                    <label className="text-uppercase">Country:</label>
                                    <div className="form-group select-wrapper">
                                        <select className="form-control">
                                            <option value="United States">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="China">China</option>
                                            <option value="India">India</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Mexico">Mexico</option>
                                        </select>
                                    </div>
                                    <label className="text-uppercase">State:</label>
                                    <div className="form-group select-wrapper">
                                        <select className="form-control">
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="text-uppercase">City:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-uppercase">zip/postal code:</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <input id="formCheckbox1" name="checkbox1" type="checkbox" />
                                        <label htmlFor="formCheckbox1">Set address as default</label>
                                    </div>
                                    <div className="mt-2">
                                        <button type="reset" className="btn btn--alt js-close-form" data-form="#updateAddress">Cancel</button>
                                        <button type="submit" className="btn ml-1">Add Address</button>
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

export default Account_address
