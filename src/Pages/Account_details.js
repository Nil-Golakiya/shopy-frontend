import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Account_sidebar from '../Components/Account_sidebar'

const Account_details = () => {

    const [open, setOpen] = useState(false)
    const [openPassword, setOpenPassword] = useState(false)
    const [userData, setUserData] = useState()

    const userDetails = JSON.parse(localStorage.getItem("persist:user"))
    const user_id = JSON.parse(userDetails.Reducer)?.user?.user?._id;

    console.log("user_id", user_id)

    const { register, control, handleSubmit, reset, watch, getValues, setValue } = useForm({});

    const fetchData = async () => {
        const { data } = await axios.get(`/auth/${user_id}`)
        const Data = data.data;
        reset({
            first_name: Data.first_name,
            last_name: Data.last_name,
            email: Data.email,
            phone: Data.phone,
        })
        setUserData(Data)
    }

    const handleOpenEdit = () => {
        reset({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone: userData.phone,
        })
        setOpen(true)
    }

    const handleOpenEditPassword = () => {
        setOpenPassword(true)
    }

    useEffect(() => {
        // const scriptTag = document.createElement('script')
        // scriptTag.src = "/js/app-html.js"
        // document.body.appendChild(scriptTag);
        fetchData()
    }, [])

    const submitHandler = async (data) => {
        try {
            const UserData = await axios.put(`/auth/${user_id}`, data)
            fetchData()
            if (UserData.data.status === false) {
                toast.error(UserData.data.message);
            } else {
                toast.success(UserData.data.message);
                setOpen(false)
            }
            console.log("UserData", UserData)
        } catch (error) {
            console.log("error", error)
        }
    }

    const submitHandlerPassword = async (data) => {
        const PasswordData = {
            old_password: data.old_password,
            new_password: data.new_password,
            confirm_new_password: data.confirm_new_password,
            email: userData.email
        }
        if (PasswordData.new_password === PasswordData.confirm_new_password) {
            const updatePasswordData = await axios.put("/auth/password/updatepassword", PasswordData)
            if (updatePasswordData.data.status === true) {
                toast.success(updatePasswordData.data.message);
                setOpenPassword(false)
                setValue('old_password', '')
                setValue('new_password', '')
                setValue('confirm_new_password', '')
            } else {
                toast.error(updatePasswordData.data.message);
            }
        } else {
            toast.error("Password Not Match...!");
        }
    }

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
                                            <p><b>First Name:</b> {userData?.first_name}<br />
                                                <b>Last Name:</b> {userData?.last_name}<br />
                                                <b>E-mail:</b> {userData?.email}<br />
                                                <b>Phone:</b> {userData?.phone}</p>
                                            <div className="mt-2 clearfix d-flex justify-content-between">
                                                <button className="link-icn js-show-form px-2 py-1" onClick={() => handleOpenEdit()} style={{ border: "none", background: "#17c6aa", color: "white", borderRadius: "4px" }}><i className="icon-pencil" />Edit</button>
                                                <button className="link-icn js-show-form px-2 py-1" onClick={() => handleOpenEditPassword()} style={{ border: "none", background: "#17c6aa", color: "white", borderRadius: "4px" }}><i className="icon-pencil" />Change Password</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <form onSubmit={handleSubmit(submitHandler)}>
                                    <div className={`${open ? "card-body" : "d-none"}`}>
                                        <h3>Update Account Details</h3>
                                        <div className="row mt-2">
                                            <div className="col-sm-9">
                                                <label className="text-uppercase">First Name:</label>
                                                <div className="form-group">
                                                    <input type="text" name="first_name" className="form-control form-control--sm" {...register('first_name', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label className="text-uppercase">Last Name:</label>
                                                <div className="form-group">
                                                    <input type="text" name="last_name" className="form-control form-control--sm" {...register('last_name', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-9">
                                                <label className="text-uppercase">E-mail:</label>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control form-control--sm" {...register('email', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <label className="text-uppercase">Phone:</label>
                                                <div className="form-group">
                                                    <input type="text" name="phone" className="form-control form-control--sm" {...register('phone', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button type="reset" className="btn btn--alt js-close-form" onClick={() => setOpen(false)}>Cancel</button>
                                            <button type="submit" className="btn ml-1">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-5">
                                <form onSubmit={handleSubmit(submitHandlerPassword)}>
                                    <div className={`${openPassword ? "card-body" : "d-none"}`}>
                                        <h3>Update Password</h3>
                                        <div className="row mt-2">
                                            <div className="col-sm-12">
                                                <label className="text-uppercase">Old Password :</label>
                                                <div className="form-group">
                                                    <input type="text" name="old_password" className="form-control form-control--sm" {...register('old_password', { required: false })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 mt-2">
                                                <label className="text-uppercase">New Password:</label>
                                                <div className="form-group">
                                                    <input type="text" name="new_password" className="form-control form-control--sm" {...register('new_password', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-12">
                                                <label className="text-uppercase">Confirm New Password:</label>
                                                <div className="form-group">
                                                    <input type="text" name="confirm_new_password" className="form-control form-control--sm" {...register('confirm_new_password', { required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button type="reset" className="btn btn--alt js-close-form" onClick={() => setOpenPassword(false)}>Cancel</button>
                                            <button type="submit" className="btn ml-1">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_details
