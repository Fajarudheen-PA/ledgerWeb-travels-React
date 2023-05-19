import React from 'react'
import { Link } from 'react-router-dom'
import './ToContact.scss'

function ToContact() {
  return (
    <div className='tocontact'>
        <div className="content-wrapper">
            <div className="tocontact__wrap">
                <div className="tocontact__left">
                    <h3 className="tocontact__main-head">We are ready to provide the best trip for you</h3>
                    <p className='tocontact__desc'>We have a variety of the world's best destinations that you can choose as your trip destination</p>
                    <Link to='/' className='tocontact__btn'>Contact Now</Link>
                </div>
                <div className="tocontact__right">
                  <img src="../../../images/ledger-tocontact.jpg" alt="Contact" className='tocontact__image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToContact