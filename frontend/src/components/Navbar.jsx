import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket, faShoppingBag, faHeart, faUser} from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='n-container'>
        <div className='n-row'>
            <div className='n-col'>
                <span className='n-email'>pjy5658@gmail.com</span>
                <span><FontAwesomeIcon icon={faUser} /> Guest</span>
            </div>
            <div className='n-col'>
                <div className="socials">
                    <a href='/'><img src="/images/socials/facebook.png" alt="" /></a>
                    <a href='/'><img src="/images/socials/instagram.png" alt="" /></a>
                    <a href='/'><img src="/images/socials/twitter.png" alt="" /></a>
                    <a href='/'><img src="/images/socials/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="n-row">
            <div className="n-col">
                <a href='/'><img src='/images/logo/logo.png' className='logo' alt='' /></a>
            </div>
            <div className="n-col">
                <div className="icons">
                    <a href='/login'><span><FontAwesomeIcon icon={faRightToBracket} />Login</span></a>
                    <a href='/wish'><span><FontAwesomeIcon icon={faHeart} /><span className='totalItems'>0</span></span></a>
                    <a href='/cart'><span><FontAwesomeIcon icon={faShoppingBag} /><span className='totalItems'>0</span></span></a>
                </div>
                
            </div>
        </div>
        <div className="n-row">
            <div className="nav">
                <div className="item">
                    <ul className='items'>
                        <li className='list'><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                        <li className='list'><NavLink to='/shop' activeClassName='active'>Shop</NavLink></li>
                        <li className='list'><NavLink to='/about' activeClassName='active'>About</NavLink></li>
                        <li className='list'><NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>
                    </ul>
                    <button className='btn'>BTN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar