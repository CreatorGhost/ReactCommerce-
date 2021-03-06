import React from 'react';
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
    <div className="header">
        <Link className="logo-container" to ="/">
        <Logo className ="logo"/>
        </Link>
        <div className="options">
            <Link className="options" to ="/shop">
                Shop
            </Link>
            <Link className="options" to ="/shop">
                Contact
            </Link>
        </div>
    </div>
    );
} 

export default Header;