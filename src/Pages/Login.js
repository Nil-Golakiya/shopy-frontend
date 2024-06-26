import React, { useEffect, useState } from 'react'
import signup from "../Image/signup.svg"
import signin from "../Image/login.svg"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { LoginStart, LoginFailure, LoginSuccess } from '../Redux/Action'
import { useSelector, useDispatch } from "react-redux";

const Login = () => {

    const [classList, setClassList] = useState('')
    const [displayButton, setDisplayButton] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showSignUpPassword, setShowSignUpPassword] = useState(false)
    const [showConfirmSignUpPassword, setShowConfirmSignUpPassword] = useState(false)

    const user = useSelector((state) => state.Reducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const Schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const Schema1 = yup.object().shape({
        user_name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    useEffect(() => {
        require("../asstes/login.css")
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm({
        resolver: yupResolver(Schema)
    });

    const {
        register: register1,
        handleSubmit: handleSubmit1,
        formState: { errors: errors1 },
        getValues: getValues1
    } = useForm({
        resolver: yupResolver(Schema1)
    });


    const signinsubmithandler = async (formData) => {
        dispatch(LoginStart());
        try {
            const { data } = await axios.post("/auth/userregister", {
                email: formData.email,
                password: formData.password,
                roles: "user"
            });
            const userData = data.data;
            if (userData && data.status) {
                dispatch(LoginSuccess(userData));
                toast.success('Your are successfully logged in..!');
                navigate("/")
                localStorage.setItem("myuser", JSON.stringify({ token: userData.token, email: userData.user.email }))
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            dispatch(LoginFailure());
            toast.error("Invalid Credentials");
        }
    }

    const signupsubmithandler = async (formdata1) => {
        console.log("formdata1", formdata1)
        try {
            if (formdata1.password === formdata1.confirmpassword) {
                const signupData = await axios.post("/auth/signup", {
                    first_name: formdata1.first_name,
                    last_name: formdata1.last_name,
                    user_name: formdata1.user_name,
                    email: formdata1.email,
                    phone: formdata1.phone,
                    password: formdata1.password,
                    roles: "user"
                })
                const userData = signupData.data;
                if (userData.status) {
                    toast.success(userData.message);
                    setClassList("")
                } else {
                    toast.error(userData.message)
                }
            }
        } catch (error) {
            toast.error("Invalid Credentials");
        }
    }

    const handleSignup = () => {
        setClassList("sign-up-mode")
        setDisplayButton(true)
    }

    const handleSignin = () => {
        setClassList("")
        setDisplayButton(false)
    }


    return (
        <div className={`login_container ${classList}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    {
                        displayButton === false ? (
                            <button
                                style={{ position: "absolute", top: "-165px", right: "0", marginRight: "10px", borderRadius: "174px", padding: "15px", backgroundColor: "#fff", border: "2px solid #17c6aa" }}
                                onClick={() => navigate("/")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17c6aa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            </button>
                        )
                            :
                            ""
                    }
                    <form className="sign-in-form loginform" onSubmit={handleSubmit(signinsubmithandler)}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" name="email" placeholder="Email" {...register('email', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Password" {...register('password', { required: true })} />
                            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} style={{ position: "absolute", right: "25px", cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}></i>
                            {errors.password && <p style={{ "color": "red" }}>password is required.</p>}
                        </div>
                        <button type="submit" className="btn solid">Login</button>
                    </form>
                    {
                        displayButton === true ? (
                            <button
                                style={{ position: "absolute", top: "-165px", left: "0", marginRight: "10px", borderRadius: "174px", padding: "15px", backgroundColor: "#fff", border: "2px solid #17c6aa" }}
                                onClick={() => navigate("/")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17c6aa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            </button>
                        )
                            :
                            ""
                    }
                    <form className="sign-up-form loginform" onSubmit={handleSubmit1(signupsubmithandler)}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="first_name" placeholder="First name" {...register1('first_name', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="last_name" placeholder="Last Name" {...register1('last_name', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="user_name" placeholder="username" {...register1('user_name', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="phone" placeholder="Phone" {...register1('phone', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" name="email" {...register1('email', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type={showSignUpPassword ? "text" : "password"} placeholder="Password" name="password" {...register1('password', { required: true })} />
                            <i className={showSignUpPassword ? "fas fa-eye-slash" : "fas fa-eye"} style={{ position: "absolute", right: "25px", cursor: "pointer" }} onClick={() => setShowSignUpPassword(!showSignUpPassword)}></i>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type={showConfirmSignUpPassword ? "text" : "password"} name="confirmpassword" placeholder="Confirm Password" {...register1('confirmpassword', { required: true })} />
                            <i className={showConfirmSignUpPassword ? "fas fa-eye-slash" : "fas fa-eye"} style={{ position: "absolute", right: "25px", cursor: "pointer" }} onClick={() => setShowConfirmSignUpPassword(!showConfirmSignUpPassword)}></i>
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn1 transparent" id="sign-up-btn" onClick={() => handleSignup()}>
                            Sign up
                        </button>
                    </div>
                    <img src={signup} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn1 transparent" id="sign-in-btn" onClick={() => handleSignin()}>
                            Sign in
                        </button>
                    </div>
                    <img src={signin} className="image" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Login
