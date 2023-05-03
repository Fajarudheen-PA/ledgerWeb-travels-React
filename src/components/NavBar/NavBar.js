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
            <div className='ledger-navbar__nav-toggle-grp'>
              <button className="btn btn-outline-success">Login</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ledgerHeader" aria-controls="ledgerHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="ledgerHeader">
                <div className="ledger-navbar__overlay"></div>
                <ul className="navbar-nav">
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link' aria-current="page">Home</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link'>Services</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link'>Pricing</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link'>About Us</Link>
                  </li>
                  <li class="ledger-navbar__nav-item">
                    <Link to='/' className='ledger-navbar__nav-link'>Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <button className="btn">Login</button> */}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar