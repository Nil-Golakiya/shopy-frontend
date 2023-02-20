import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Account_sidebar = () => {

  const params = useLocation()
  const activeRoute = params.pathname;

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = "/js/app-html.js"
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  return (
    <div className="col-md-4 aside aside--left">
      <div className="list-group">
        <Link to="/account-details" className={`list-group-item ${activeRoute === "/account-details" ? "active" : ""}`}>Account Details</Link>
        <Link to="/account-address" className={`list-group-item ${activeRoute === "/account-address" ? "active" : ""}`} >My Addresses</Link>
        <Link to="/wishlist" className={`list-group-item ${activeRoute === "/wishlist" ? "active" : ""}`}>My Wishlist</Link>
        <Link to="/account-order" className={`list-group-item ${activeRoute === "/account-order" ? "active" : ""}`}>My Order History</Link>
      </div>
    </div>
  )
}

export default Account_sidebar
