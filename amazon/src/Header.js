import React, { useState } from 'react';
import './Header.css';
import { IoSearch } from "react-icons/io5";//Search Icon
import { FaCartShopping } from "react-icons/fa6"; //Cart Icon
import { Link } from 'react-router-dom';



function Header() {

    const [search, setSearch] = useState("");
  return (
    <nav className='header'>
        {/* 
            logo on the left 
            Search bar and search button
            Three Links
                1- Hello SignIn turns to signOut after Logging in 
                2- returns and Orders
                3- your Prime
            Basket Icon with a number depicting the Cart and the number being the no.of items in the cart
        */}
        <Link to='/'>
            <img className='header__logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt='Amazon Logo'
            />
        </Link>
        
        <div className='header__search'>
            <input type='text'
                    className='header__searchInput'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearch className='header__searchIcon'/>
        </div>
        <div className='header__Nav'>
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                <span className='header__optionLineOne'>Hello,</span>
                <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
            <Link to='/' className='header__link'>
                <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            <Link to='/' className='header__link'>
                <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <FaCartShopping className='basket__icon'/>
                    <span className='header__optionLineTwo header__basketCount' >0</span>
                </div>
                
            
            </Link>
            
        </div>
        
    </nav>
  )
}

export default Header