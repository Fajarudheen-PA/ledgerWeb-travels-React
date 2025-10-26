import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './Services.css'

function Services() {
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

  const services = [
    {
      id: 1,
      title: 'Flight Tickets',
      icon: '✈️',
      description: 'Book your domestic and international flights with the best deals from leading airlines worldwide. Get instant quotes and secure your seat today.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      bgImage: '../../../images/ledger-services-tickets.jpg'
    },
    {
      id: 2,
      title: 'Passport Services',
      icon: '📘',
      description: 'Fast-track passport renewal, new passport applications, and documentation services. Expert assistance to ensure your documents are processed quickly and correctly.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      bgImage: '../../../images/ledger-services-passport.jpg'
    },
    {
      id: 3,
      title: 'Visa Services',
      icon: '📋',
      description: 'Comprehensive visa application support for countries worldwide. From tourist to business visas, we simplify the process with expert guidance.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      bgImage: '../../../images/ledger-services-visa.jpg'
    }
  ]

  const partners = [
    { name: 'Air India', logo: '🇮🇳 Air India' },
    { name: 'Indigo', logo: '🛩️ Indigo' },
    { name: 'Singapore Airlines', logo: '✈️ Singapore Airlines' },
    { name: 'Saudi Airlines', logo: '🇸🇦 Saudi Airlines' },
    { name: 'Etihad Airways', logo: '🌐 Etihad' },
    { name: 'Emirates', logo: '✈️ Emirates' }
  ]

  return (
    <div className='services-page'>
      <NavBar />
      
      {/* Hero Section */}
      <section className='services-hero'>
        <div className='content-wrapper'>
          <div className='services-hero__content fade-in-up'>
            <h1 className='services-hero__title'>Our Services</h1>
            <p className='services-hero__subtitle'>Your complete travel solution provider</p>
            <div className='services-hero__divider'></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className='services-overview'>
        <div className='content-wrapper'>
          <h2 className='services-overview__title'>Explore Our Range of Services</h2>
          <div className='services-grid'>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className='service-card__icon-container'>
                  <div className='service-card__icon' style={{background: service.gradient}}>
                    <span className='service-icon'>{service.icon}</span>
                  </div>
                </div>
                <div className='service-card__content'>
                  <h3 className='service-card__title'>{service.title}</h3>
                  <p className='service-card__description'>{service.description}</p>
                  <a href='/services/form' className='service-card__cta'>
                    Get a Quote
                    <i className='fas fa-arrow-right'></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className='services-partners'>
        <div className='content-wrapper'>
          <h2 className='partners-title'>Our Trusted Partners</h2>
          <p className='partners-subtitle'>Fly with confidence. We partner with the world's leading airlines</p>
          <div className='partners-grid'>
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className='partner-card fade-in-up'
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className='partner-logo'>{partner.logo}</div>
                <p className='partner-name'>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
