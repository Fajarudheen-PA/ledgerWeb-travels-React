import React from 'react'
import './TopDeals.scss'
import { Link } from 'react-router-dom'

function TopDeals() {
  return (
    <div className='topdeals'>
      <div className="content-wrapper">
        <h3 className='topdeals__main-head'>Today's Top Deals</h3>
        <div className="topdeals__card-group">

          {/* card */}
          <div className="topdeals__card">
            <img src="../../../images/ledger-deals-dubai.jpg" alt="Offer-1" className='topdeals__card__image'/>
            <div className='topdeals__card__content'>
              <h4 className='topdeals__card__head'>Kochi - Dubai</h4>
              <p className='topdeals__card__desc'>Unveiling the Magic of the Arabian Peninsula, let's take a trip here.</p>
            </div>
            <div className='topdeals__card__price'>
              <div className="topdeals__card__price__left">
                <p className='topdeals__card__price__head'>Price</p>
                <p className='topdeals__card__price__head topdeals__card__price__head--rate'>₹26,999/-</p>
              </div>
              <div className="topdeals__card__price__right">
                <Link to='/' className='topdeals__card__btn'>Ticket Booking</Link>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="topdeals__card">
            <img src="../../../images/ledger-deals-dubai.jpg" alt="Offer-1" className='topdeals__card__image'/>
            <div className='topdeals__card__content'>
              <h4 className='topdeals__card__head'>Kochi - Dubai</h4>
              <p className='topdeals__card__desc'>The red and orange sand of the desert are very beautiful, let's take a trip here.</p>
            </div>
            <div className='topdeals__card__price'>
              <div className="topdeals__card__price__left">
                <p className='topdeals__card__price__head'>Price</p>
                <p className='topdeals__card__price__head topdeals__card__price__head--rate'>₹20,000/-</p>
              </div>
              <div className="topdeals__card__price__right">
                <Link to='/' className='topdeals__card__btn'>Ticket Booking</Link>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="topdeals__card">
            <img src="../../../images/ledger-deals-qatar.jpg" alt="Offer-1" className='topdeals__card__image'/>
            <div className='topdeals__card__content'>
              <h4 className='topdeals__card__head'>Kochi - Qatar</h4>
              <p className='topdeals__card__desc'>The red and orange sand of the desert are very beautiful, let's take a trip here.</p>
            </div>
            <div className='topdeals__card__price'>
              <div className="topdeals__card__price__left">
                <p className='topdeals__card__price__head'>Price</p>
                <p className='topdeals__card__price__head topdeals__card__price__head--rate'>₹21,999/-</p>
              </div>
              <div className="topdeals__card__price__right">
                <Link to='/' className='topdeals__card__btn'>Ticket Booking</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopDeals