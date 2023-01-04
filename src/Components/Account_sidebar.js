import React from 'react'
import { Link } from 'react-router-dom'

const Account_sidebar = () => {
  return (
    <div className="col-md-4 aside aside--left">
      <div className="list-group">
        <Link to="/account-details" className="list-group-item active">Account Details</Link>
        <Link to="/account-address" className="list-group-item">My Addresses</Link>
        <Link to="/wishlist" className="list-group-item">My Wishlist</Link>
        <Link to="/account-order" className="list-group-item">My Order History</Link>
      </div>
    </div>
  )
}

export default Account_sidebar
