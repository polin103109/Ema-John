import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../../images/Logosvg";
import './Header.css';

const Header = () =>{
return (
   <nav className="header">
     <img src={Logo} />
    <div className="navbar">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
    </div>
   </nav>
)
}
export default Header;