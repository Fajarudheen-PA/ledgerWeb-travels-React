import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './Contact.css'

function Contact() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .zoom-in')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', name: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', name: 'Twitter' },
    { icon: 'fab fa-instagram', url: '#', name: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: '#', name: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: '#', name: 'YouTube' }
  ]

  return (
    <div className='contact-page'>
      <NavBar />
      
      {/* Hero Section */}
      <section className='contact-hero'>
        <div className='content-wrapper'>
          <div className='contact-hero__content fade-in-up'>
            <h1 className='contact-hero__title'>Get In Touch</h1>
            <p className='contact-hero__subtitle'>We're here to help you make your travel dreams come true</p>
            <div className='contact-hero__divider'></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='contact-info'>
        <div className='content-wrapper'>
          <div className='contact-info__grid'>
            <div className='contact-card slide-in-left'>
              <div className='contact-card__icon'>
                <i className='fas fa-map-marker-alt'></i>
              </div>
              <h3 className='contact-card__title'>Visit Us</h3>
              <p className='contact-card__text'>
                123 Travel Street, Suite 450<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className='contact-card fade-in-up'>
              <div className='contact-card__icon'>
                <i className='fas fa-phone'></i>
              </div>
              <h3 className='contact-card__title'>Call Us</h3>
              <div className='contact-card__phones'>
                <p className='contact-card__text'>+1 (555) 123-4567</p>
                <p className='contact-card__text'>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className='contact-card slide-in-right'>
              <div className='contact-card__icon'>
                <i className='fas fa-envelope'></i>
              </div>
              <h3 className='contact-card__title'>Email Us</h3>
              <p className='contact-card__text'>
                <a href='mailto:info@ledgerwebb.com' className='contact-link'>
                  info@ledgerwebb.com
                </a>
              </p>
              <p className='contact-card__text'>
                <a href='mailto:support@ledgerwebb.com' className='contact-link'>
                  support@ledgerwebb.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Form Section */}
      <section className='contact-main'>
        <div className='content-wrapper'>
          <div className='contact-main__content'>
            {/* Google Map */}
            <div className='contact-map zoom-in'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.311634077687!2d-73.99059898459421!3d40.75058287932671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9d4e1b5f9%3A0x638f9f0c7b4a2a5f!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Ledger Webb Location'
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className='contact-form-container slide-in-right'>
              <div>
                <h2 className='contact-form-container__title'>Send Us a Message</h2>
                <p className='contact-form-container__subtitle'>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>
              
              <form className='contact-form'>
                <div className='form-group'>
                  <label htmlFor='name'>Your Name</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    placeholder='John Doe' 
                    className='form-input'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email Address</label>
                  <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='john@example.com' 
                    className='form-input'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>Phone Number</label>
                  <input 
                    type='tel' 
                    id='phone' 
                    name='phone' 
                    placeholder='+1 (555) 123-4567' 
                    className='form-input'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='subject'>Subject</label>
                  <select id='subject' name='subject' className='form-input' required>
                    <option value=''>Select a subject</option>
                    <option value='visa'>Visa Inquiry</option>
                    <option value='passport'>Passport Services</option>
                    <option value='flight'>Flight Booking</option>
                    <option value='general'>General Inquiry</option>
                    <option value='support'>Customer Support</option>
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea 
                    id='message' 
                    name='message' 
                    rows='5' 
                    placeholder='Tell us how we can help...' 
                    className='form-input form-textarea'
                    required
                  ></textarea>
                </div>

                <button type='submit' className='form-submit-btn'>
                  Send Message
                  <i className='fas fa-paper-plane'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className='contact-social'>
        <div className='content-wrapper'>
          <div className='social-content fade-in-up'>
            <h2 className='social-title'>Follow Us</h2>
            <p className='social-subtitle'>Stay connected with us on social media</p>
            <div className='social-icons'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className='social-icon'
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

