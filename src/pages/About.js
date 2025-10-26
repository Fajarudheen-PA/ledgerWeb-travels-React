import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './About.css'

function About() {
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

    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className='about-page'>
      <NavBar />
      
      {/* Hero Section */}
      <section className='about-hero'>
        <div className='content-wrapper'>
          <div className='about-hero__content fade-in-up'>
            <h1 className='about-hero__title'>About Ledger Webb</h1>
            <p className='about-hero__subtitle'>Your trusted travel partner, making dreams come true</p>
            <div className='about-hero__divider'></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='about-overview'>
        <div className='content-wrapper'>
          <div className='about-overview__content'>
            <div className='about-overview__left slide-in-left'>
              <h2 className='about-overview__title'>Who We Are</h2>
              <p className='about-overview__text'>
              Ledger Webb is a leading travel services company dedicated to making your international travel dreams a reality. 
              We specialize in visa processing, passport services, flight booking, and comprehensive travel planning solutions. 
              With years of experience in the industry, we have helped thousands of travelers explore the world with confidence.
            </p>
            <p className='about-overview__text'>
              Our team of travel experts is committed to providing exceptional service, ensuring that every journey begins with ease and ends with unforgettable memories.
            </p>
          </div>
          <div className='about-overview__right slide-in-right'>
            <div className='about-overview__stats'>
              <div className='stat-card'>
                <h3 className='stat-number'>10,000+</h3>
                <p className='stat-label'>Happy Travelers</p>
              </div>
              <div className='stat-card'>
                <h3 className='stat-number'>50+</h3>
                <p className='stat-label'>Destinations</p>
              </div>
              <div className='stat-card'>
                <h3 className='stat-number'>98%</h3>
                <p className='stat-label'>Success Rate</p>
              </div>
              <div className='stat-card'>
                <h3 className='stat-number'>24/7</h3>
                <p className='stat-label'>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className='about-vision'>
        <div className='content-wrapper'>
          <div className='about-vision__content'>
            <div className='about-vision__left slide-in-left'>
              <div className='vision-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className='about-vision__right slide-in-right'>
              <h2 className='section-title'>Our Vision</h2>
              <p className='section-text'>
              To be the world's most trusted and innovative travel services company, empowering people to explore the globe 
              with confidence, ease, and unforgettable experiences.
            </p>
            <p className='section-text'>
              We envision a future where international travel is accessible, seamless, and stress-free for everyone, 
              regardless of where they want to go. We strive to break down barriers and make the world more connected.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='about-mission'>
        <div className='content-wrapper'>
          <div className='about-mission__content'>
            <div className='about-mission__left slide-in-left'>
              <h2 className='section-title'>Our Mission</h2>
              <p className='section-text'>
              To provide exceptional travel services and support that exceed our clients' expectations, making their travel 
              dreams achievable and their journeys smooth.
            </p>
            <p className='section-text'>
              We are committed to:
            </p>
            <ul className='mission-list'>
              <li className='mission-item'>Providing accurate, timely, and professional visa and passport services</li>
              <li className='mission-item'>Offering the best flight deals and travel packages</li>
              <li className='mission-item'>Delivering personalized service tailored to each client's unique needs</li>
              <li className='mission-item'>Maintaining transparency, integrity, and trust in everything we do</li>
              <li className='mission-item'>Supporting our clients 24/7 throughout their travel journey</li>
            </ul>
          </div>
          <div className='about-mission__right slide-in-right'>
            <div className='mission-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className='about-journey'>
        <div className='content-wrapper'>
          <h2 className='journey-title'>Our Journey</h2>
          <div className='journey-timeline'>
            <div className='journey-item fade-in-up'>
              <div className='journey-year'>2020</div>
              <div className='journey-content'>
                <h3>Founded with a Dream</h3>
                <p>Ledger Webb was established with a passion to make travel accessible and stress-free for everyone.</p>
              </div>
            </div>
            
            <div className='journey-item fade-in-up'>
              <div className='journey-year'>2021</div>
              <div className='journey-content'>
                <h3>Expanding Our Reach</h3>
                <p>We expanded our services to include visa processing and passport assistance, serving clients worldwide.</p>
              </div>
            </div>
            
            <div className='journey-item fade-in-up'>
              <div className='journey-year'>2022</div>
              <div className='journey-content'>
                <h3>Digital Transformation</h3>
                <p>Launched our online platform, making it easier for clients to access our services from anywhere in the world.</p>
              </div>
            </div>
            
            <div className='journey-item fade-in-up'>
              <div className='journey-year'>2023</div>
              <div className='journey-content'>
                <h3>Growing Together</h3>
                <p>Celebrated reaching 10,000+ satisfied customers and expanded our team of travel experts.</p>
              </div>
            </div>
            
            <div className='journey-item fade-in-up'>
              <div className='journey-year'>2024</div>
              <div className='journey-content'>
                <h3>Innovation & Excellence</h3>
                <p>Continued to innovate and improve our services, maintaining our commitment to excellence and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='about-values'>
        <div className='content-wrapper'>
          <h2 className='values-title'>Our Core Values</h2>
          <div className='values-grid'>
            <div className='value-card fade-in-up'>
              <div className='value-icon'>⭐</div>
              <h3 className='value-title'>Excellence</h3>
              <p className='value-text'>We strive for excellence in every service we provide, ensuring top-quality results for our clients.</p>
            </div>
            
            <div className='value-card fade-in-up'>
              <div className='value-icon'>🤝</div>
              <h3 className='value-title'>Integrity</h3>
              <p className='value-text'>We operate with the highest standards of honesty, transparency, and ethical conduct.</p>
            </div>
            
            <div className='value-card fade-in-up'>
              <div className='value-icon'>💡</div>
              <h3 className='value-title'>Innovation</h3>
              <p className='value-text'>We continuously embrace new technologies and methods to improve our services.</p>
            </div>
            
            <div className='value-card fade-in-up'>
              <div className='value-icon'>❤️</div>
              <h3 className='value-title'>Customer Focus</h3>
              <p className='value-text'>Our clients are at the heart of everything we do. Your success is our success.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

