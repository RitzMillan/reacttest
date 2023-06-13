import './Nav.scss'
import location from '../assets/location.png'
import dropdown from '../assets/dropdown.png'
import search from '../assets/search.png'

import React from 'react'

function Nav() {
  return (
    <>
        <div className='top-nav'>
            <span className='logo' alt='logo'></span>
            <div className='location'>
                <text>&nbsp;&nbsp;&nbsp;&nbsp;Deliver to Rishabh</text><br/>
                <img src={location} className='location-icon' alt='location icon'></img>
                <text><b>Lonavala 410401</b></text>
            </div>
            <div className='search'>
                <div className='search-left'>All <img src={dropdown} alt='drop' className='drop'></img></div>
                <input type='text' placeholder='  Search Amazon.in' className='searchbox'></input>
                <div className='search-right'> <img src={search} alt='drop' className='drop'></img></div>
            </div>
        </div>
    </>
  )
}

export default Nav