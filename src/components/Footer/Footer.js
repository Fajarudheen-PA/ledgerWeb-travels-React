import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

function Footer() {
    const url = "https://wa.me/qr/7O32GILDT5YYA1";
  return (
    <div className='footer'>
        <div className="content-wrapper">
            <div className="footer__wrap">
                <div className="footer__left">
                    <div className='footer__logo'>
                        <img src="../../../images/ledger-icon-only.png" alt="ledger Webb" className='footer__image' />
                        <span className='footer__title'>ledger Webb</span>
                    </div>
                    <p className='footer__desc'>Unlock the wonders of the world with Ledger Webb and create cherished memories that will last a lifetime.</p>
                </div>
                <div className="footer__right">
                    <div className='footer__contact-us'>
                        <h4 className='footer__contact-us__head'>Contact US</h4>
                        <p><Link to='tel:+91XXXXXXXXXX' className='footer__contact-us__link'><FontAwesomeIcon icon={faPhone} className='footer__contact-us__link footer__contact-us__link--svg' /> +91 XXXXXXXXXX</Link></p>
                        <p><Link to='mailto:ledgerwebbcok@gmail.com' className='footer__contact-us__link'><FontAwesomeIcon icon={faEnvelope} className='footer__contact-us__link footer__contact-us__link--svg' /> ledgerwebbcok@gmail.com</Link></p>
                        <p><Link to={url} className='footer__contact-us__link'><FontAwesomeIcon icon={faWhatsapp} className='footer__contact-us__link footer__contact-us__link--svg' /> WhatsApp</Link></p>
                    </div>
                    <div className="footer__follow-us">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer