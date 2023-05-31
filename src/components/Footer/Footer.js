import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';
import DevContact from '../DevContact/DevContact';

function Footer() {
    const waUrl = "https://wa.me/qr/7O32GILDT5YYA1";
    const instUrl = "https://instagram.com/ledgerwebb_travel_partner?igshid=MzNlNGNkZWQ4Mg==";
    const mail = "mailto:ledgerwebbcok@gmail.com";
  return (
    <><div className='footer'>
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
                      <div className='footer__link-grp'>
                          <h4 className='footer__link-grp__head'>Contact US</h4>
                          <p><Link to='tel:+91XXXXXXXXXX' className='footer__link-grp__link'><FontAwesomeIcon icon={faPhone} className='footer__link-grp__link footer__link-grp__link--svg' /> +91 XXXXXXXXXX</Link></p>
                          <p><Link to={mail} className='footer__link-grp__link'><FontAwesomeIcon icon={faEnvelope} className='footer__link-grp__link footer__link-grp__link--svg' /> ledgerwebbcok@gmail.com</Link></p>
                          <p><Link to={waUrl} className='footer__link-grp__link'><FontAwesomeIcon icon={faWhatsapp} className='footer__link-grp__link footer__link-grp__link--svg' /> WhatsApp</Link></p>
                      </div>
                      <div className="footer__link-grp">
                          <h4 className='footer__link-grp__head'>Follow US</h4>
                          <p><Link to={instUrl} className='footer__link-grp__link'><FontAwesomeIcon icon={faFacebookF} className='footer__link-grp__link footer__link-grp__link--svg' /> Facebook</Link></p>
                          <p><Link to={instUrl} className='footer__link-grp__link'><FontAwesomeIcon icon={faTwitter} className='footer__link-grp__link footer__link-grp__link--svg' /> Twitter</Link></p>
                          <p><Link to={instUrl} className='footer__link-grp__link'><FontAwesomeIcon icon={faInstagram} className='footer__link-grp__link footer__link-grp__link--svg' /> Instagram</Link></p>
                      </div>
                  </div>
              </div>
              <div className='footer__copyright'>
                  <p className='footer__copyright footer__copyright--font'>Copyright &copy; ledger Webb 2023</p>
              </div>
          </div>
      </div>
      <DevContact /></>
  )
}

export default Footer