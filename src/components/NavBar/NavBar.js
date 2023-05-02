import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss'

function NavBar() {
  return (
    <div className='ledger-navbar'>
      <div className='content-wrapper'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-xxl">
            <Link to="/" className="navbar-brand"><span><img src=''/></span>ledger Webb</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar