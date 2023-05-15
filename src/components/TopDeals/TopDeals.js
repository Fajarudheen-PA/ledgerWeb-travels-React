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
            <img src="" alt="Offer-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDeals