import { Handbag, Heart, Search, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-top'>
        <div className='nav-left'>
          <Image src="/Group 48100065.png" className='hamburger-icon' alt='hamburger' width={20} height={20} />
          <Image src="/Logo.png" alt='logo' width={32} height={32} />
        </div>
        
        <h1 className='logo'>LOGO</h1>
        <div className='nav-right'>
          <ul className="nav-icons">
            <li><Search size={18} /></li>
            <li><Heart size={18} /></li>
            <li><Handbag size={18} /></li>
            <li className='user'><User size={18} /></li>
          </ul>
          <span className='lang'>ENG ▾</span>
        </div>
      </div>

      <div className='nav-bottom'>
        <ul className='nav-links'>
          <li className='nav-item'>SHOP</li>
          <li className='nav-item'>SKILLS</li>
          <li className='nav-item'>STORIES</li>
          <li className='nav-item'>ABOUT</li>
          <li className='nav-item'>CONTACT US</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar