import React from 'react'
import './ServicesList.scss'
import { Link } from 'react-router-dom'

function ServicesList() {
  return (
    <div className='serviceslist'>
      <div className="content-wrapper">
        <div className="serviceslist__card-grp">

          {/* card */}
          <div style={{backgroundImage: "url(../../../images/ledger-deals-dubai.jpg)", objectFit: "contain"}} className="serviceslist__card">
            <div className='serviceslist__card__content'>
              <p className='topdeals__card__desc'>Unveiling the Magic of the Arabian Peninsula, let's take a trip here.</p>
              <h4 className='serviceslist__card__head'>Tickets</h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServicesList