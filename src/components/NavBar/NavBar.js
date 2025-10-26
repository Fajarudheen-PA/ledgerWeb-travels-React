import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.scss'

function NavBar() {
  return (
    <div className='ledger-navbar'>
      <div className='content-wrapper'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-xxl">
            <Link to="/" className="navbar-brand">
              <span><img src='../../../images/ledger-webb-icon.png' alt='ledger Webb' style={{width:"110px"}}/></span>
            </Link>
            
            {/* navbar toggler for mobile */}
              <div className="collapse navbar-collapse" id="ledgerHeader">
                <ul className="navbar-nav">
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link' aria-current="page">Home</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/about' className='ledger-navbar__nav-link'>About Us</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/services' className='ledger-navbar__nav-link'>Services</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/blog' className='ledger-navbar__nav-link'>Blog</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/contact' className='ledger-navbar__nav-link'>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className='ledger-navbar__right-sec'>
                <div className='ledger-navbar__btn'>
                  <Link to='/' className='ledger-navbar__btn-link'>Login</Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ledgerHeader" aria-controls="ledgerHeader" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
             </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar