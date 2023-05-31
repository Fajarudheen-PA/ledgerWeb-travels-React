import React from 'react'
import './DevContact.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function DevContact() {
  const waUrl = "https://wa.me/message/MN5ELFZWLDFLB1";
  const instUrl = "https://instagram.com/fajaru.dheen?igshid=MzRlODBiNWFlZA==";
  const mail = "mailto:fajarudheen.freelancer@gmail.com";
  return (
    <div className='devcontact'>
        <div className="content-wrapper">
            <p className='devcontact__text'>Developer Contact
              <span><Link to={mail}><FontAwesomeIcon icon={faEnvelope} /></Link></span>
              <span><Link to={waUrl}><FontAwesomeIcon icon={faWhatsapp} /></Link></span>
              <span><Link to={instUrl}><FontAwesomeIcon icon={faInstagram} /></Link></span>
            </p>
        </div>
    </div>
  )
}

export default DevContact