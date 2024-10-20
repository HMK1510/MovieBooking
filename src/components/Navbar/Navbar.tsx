"use client"
import Link  from 'next/link'
import React from 'react'
import './Navbar.css'
import { BiUserCircle, BiSearch } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import LocationPopup from '@/popups/locations/LocationPopup'



const Navbar = () => {

const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)

  return (
    <nav>
      <div className='left'>
        <Image src={logo} alt='logo' width={100} height={100}></Image>
        <div className='searchbox'>
          <BiSearch className='searchbtn'></BiSearch>
          <input type='text' placeholder='Search for a movie'></input>
        </div>
      </div>
      <div className='right'>
          <p className='dropdown'
            onClick={() => setShowLocationPopup(true)}
          >Ho Chi Minh<RiArrowDropDownFill className='dropicon'/></p>
          <a href='/' className='theme_btn1 linkstylenone'>Logout</a>
          <a href='/' className='linkstylenone'>
            <BiUserCircle className='theme_icon1'/>
          </a>
      </div>
      {
        showLocationPopup && 
        <LocationPopup
          setShowLocationPopup={setShowLocationPopup}
        />
      }
    </nav>
  )
}

export default Navbar
