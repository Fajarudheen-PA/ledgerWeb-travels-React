import React from 'react'
import './TopDeals.scss'

function TopDeals() {
  return (
    <div className='topdeals'>
      <div className="content-wrapper">
        <h3 className='topdeals__main-head'>Today's Top Deals</h3>
        <div className="topdeals__card-group">
          {/* card */}
          <div className="topdeals__card">
            <img src="../../../images/ledger-deals-dubai.jpg" alt="Offer-1" className='topdeals__card__image'/>
            <div>
              <h4 className='topdeals__card__head'>Kochi - Dubai</h4>
              <p className='topdeals__card__desc'>The red and orange sand of the desert are very beautiful, let's take a trip here.</p>
            </div>
            <div className='topdeals__card__price'>
              <div className="topdeals__card__price__left">
                <p className='topdeals__card__price__head'>Price</p>
                <p className='topdeals__card__price__head topdeals__card__price__head--rate'>₹ 20,000/-</p>
              </div>
              <div className="topdeals__card__price__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDeals