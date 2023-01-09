import React, { useState } from 'react'
import "../asstes/login.css"
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
            const { data } = await axios.post("http://localhost:8800/auth/userregister", {
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
        try {
            if (formdata1.password === formdata1.confirmpassword) {
                const signupData = await axios.post("http://localhost:8800/auth/signup", {
                    user_name: formdata1.user_name,
                    email: formdata1.email,
                    password: formdata1.password,
                    roles: "user"
                })
                console.log("signupData", signupData)
                const userData = signupData.data;
                if (userData.status) {
                    toast.success(userData.message);
                    navigate("/")
                } else {
                    toast.error(userData.message)
                }
            }
        } catch (error) {
            toast.error("Invalid Credentials");
        }

    }

    return (
        <div className={`login_container ${classList}`}>
            <div className="forms-container">
                <div className="signin-signup">

                    <form className="sign-in-form" onSubmit={handleSubmit(signinsubmithandler)}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" name="email" placeholder="Email" {...register('email', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input id="password" type="password" name="password" placeholder="Password" {...register('password', { required: true })} />
                            {errors.password && <p style={{ "color": "red" }}>password is required.</p>}
                        </div>
                        <button type="submit" className="btn solid">Login</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </form>

                    <form className="sign-up-form loginform" onSubmit={handleSubmit1(signupsubmithandler)}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="user_name" placeholder="username" {...register1('user_name', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" name="email" {...register1('email', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" name="password" {...register1('password', { required: true })} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password" {...register1('confirmpassword', { required: true })} />
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
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
                        <button className="btn1 transparent" id="sign-up-btn" onClick={() => setClassList("sign-up-mode")}>
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
                        <button className="btn1 transparent" id="sign-in-btn" onClick={() => setClassList("")}>
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
