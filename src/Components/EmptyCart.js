import React from 'react'

const EmptyCart = () => {
    return (
        <div className="page-content">
            <div className="holder breadcrumbs-wrap mt-0">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li><span>Cart</span></li>
                    </ul>
                </div>
            </div>
            <div className="holder mt-0">
                <div className="container">
                    <div className="page404-bg">
                        <div className="page404-text">
                            <div className="txt1"><img src="images/pages/tumbleweed.gif" alt="" /></div>
                            <div className="txt2">Your shopping cart is empty!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart
