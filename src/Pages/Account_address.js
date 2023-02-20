import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Account_sidebar from '../Components/Account_sidebar'
import { toast } from 'react-toastify'


const Account_address = () => {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [userDetailsData, setUserDetailsData] = useState()


    const userData = JSON.parse(localStorage.getItem("persist:user"))
    const user_id = JSON.parse(userData.Reducer).user.user._id

    const { register, control, handleSubmit, reset, watch, getValues, setValue } = useForm({});

    console.log("userName", user_id)

    const fetchUserData = async () => {
        const { data } = await axios.get(`http://localhost:8800/auth/${user_id}`)
        const Data = data.data;
        setUserDetailsData(Data)
    }
    console.log("userDetailsData", userDetailsData)

    const submitHandler = async (data) => {
        console.log("data", data)
        const UserData = await axios.put(`http://localhost:8800/auth/${user_id}`, data)
        if (UserData.data.status === false) {
            toast.error(UserData.data.message);
        } else {
            toast.success(UserData.data.message);
            setOpen(false)
        }
        fetchUserData()
    }

    // const EditSubmitHandler = async (data) => {
    //     const UserData = await axios.put(`http://localhost:8800/auth/${user_id}`, data)
    //     if (UserData.data.status === false) {
    //         toast.error(UserData.data.message);
    //     } else {
    //         toast.success(UserData.data.message);
    //         setOpen(false)
    //     }
    //     reset({
    //         address: userDetailsData.address,
    //         city: userDetailsData.city,
    //         state: userDetailsData.state,
    //         pin_code: userDetailsData.pin_code,
    //     })
    // }

    useEffect(() => {
        fetchUserData()
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
                            {userDetailsData?.address === null ?
                                (
                                    <button className={`${open ? "d-none" : ""}`} style={{ border: "none", background: "#17c6aa", height: "40px", borderRadius: "3px", color: "white" }} onClick={() => setOpen(true)}>Add Address</button>

                                ) :
                                (
                                    <>
                                        <div>
                                            <h1 className="mb-3">My Addresses</h1>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h3>Address</h3>
                                                        <p>{userDetailsData?.address}</p>
                                                        <p className="mt-0">{userDetailsData?.city}, {userDetailsData?.state}</p>
                                                        <p className="mt-0">{userDetailsData?.pin_code}</p>
                                                        <div className="mt-2 clearfix">
                                                            <button className="link-icn js-show-form" style={{ border: "none", background: "#17c6aa", height: "40px", borderRadius: "3px", color: "white" }} onClick={() => setOpenEdit(true)}><i className="icon-pencil" />Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <div className={`card mt-3 ${open ? "" : "d-none"}`}>
                                    <div className="card-body">
                                        <h3>Add Address</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="text-uppercase">Address:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="address" {...register('address', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="text-uppercase">City:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="city" {...register('city', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 mt-2">
                                                <label className="text-uppercase">state:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="state" {...register('state', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-2">
                                                <label className="text-uppercase">zip/postal code:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="pin_code" {...register('pin_code', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button type="reset" className="btn btn--alt js-close-form" onClick={() => setOpen(false)}>Cancel</button>
                                            <button type="submit" className="btn ml-1">Add Address</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <form onSubmit={handleSubmit(EditSubmitHandler)}>
                                <div className={`card mt-3 ${openEdit ? "" : "d-none"}`}>
                                    <div className="card-body">
                                        <h3>Add Address</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="text-uppercase">Address:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="address" {...register('address', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="text-uppercase">City:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="city" {...register('city', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 mt-2">
                                                <label className="text-uppercase">state:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="state" {...register('state', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-2">
                                                <label className="text-uppercase">zip/postal code:</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="pin_code" {...register('pin_code', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button type="reset" className="btn btn--alt js-close-form" onClick={() => setOpenEdit(false)}>Cancel</button>
                                            <button type="submit" className="btn ml-1">Add Address</button>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Account_address
