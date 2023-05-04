import React from 'react'
import './Banner.scss'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
        <div className='content-wrapper'>
            <div className='banner__wrap'>
                <div className='banner__left'>
                    <h1 className='banner__main-header'>SO, YOU WANT TO TRAVEL</h1>
                    <h1 className='banner__main-header banner__main-header--main-header'>ABROAD</h1>
                    <p className='banner__desc'>Let's make your travel dreams come true with <span style={{fontWeight:'600', color:'white'}}>Ledger Webb!</span><br/>We offer unbeatable travel deals and unforgettable experiences for your next adventure. Our expert team is dedicated to helping you plan the perfect trip, and our user-friendly platform makes it easy to book flights, visas, and passport services all in one place.</p>
                </div>
                <div className='banner__right'>
                    <Link to='/' className='banner__explore-bg'>
                        <p className='banner__explore-p'>EXPLORE</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner