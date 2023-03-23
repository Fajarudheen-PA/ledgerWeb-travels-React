import React from 'react'
import './Banner.scss'

function Banner() {
  return (
    <div className='banner'>
        <div className='content-wrapper'>
            <div className='banner__wrap'>
                <div className='banner__left'>
                    <h1 className='banner__main-header'>SO, YOU WANT TO TRAVEL TO</h1>
                    <h1 className='banner__main-header banner__main-header--main-header'>ABROAD</h1>
                    <p className='banner__desc'>Lets make it through <span style={{fontWeight:'600', color:'white'}}>Ledger Web.</span> We offer the best travel deals and experiences for your next adventure. Our team of experts is dedicated to helping you plan the perfect trip, and our user-friendly platform makes it easy to book flights, visa and passport services all in one place.</p>
                </div>
                <div className='banner__right'>
                    <div className='banner__explore-bg'>
                        <p className='banner__explore-p'>EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner