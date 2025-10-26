import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './Forms.css'

function Forms() {
  const [pop, setPop] = useState(false);
  const [tripType, setTripType] = useState("Round Trip");
  const [from, setFrom] = useState("Cochin");
  const [to, setTo] = useState("Cochin");
  const [classType, setClassType] = useState("Economy");
  const [passengerSummary, setPassengerSummary] = useState("");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

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

  const updatePassengerSummary = () => {
    let summary = `${adults} Adult${adults !== 1 ? 's' : ''}`;
    if (children > 0) summary += `, ${children} Child${children !== 1 ? 'ren' : ''}`;
    if (infants > 0) summary += `, ${infants} Infant${infants !== 1 ? 's' : ''}`;
    setPassengerSummary(summary);
  };

  const handleConfirm = () => {
    updatePassengerSummary();
    setPop(false);
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  return (
    <div className='forms-page'>
      <NavBar />
      
      {/* Hero Banner */}
      <section className='forms-hero'>
        <div className='content-wrapper'>
          <div className='forms-hero__content fade-in-up'>
            <h1 className='forms-hero__title'>Book Your Flight</h1>
            <p className='forms-hero__subtitle'>Find the best deals for your next journey</p>
            <div className='forms-hero__divider'></div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className='forms-booking'>
        <div className='content-wrapper'>
          <div className='booking-form-container slide-in-up'>
            <div className='booking-form__header'>
              <h2 className='booking-form__title'>Flight Details</h2>
            </div>

            <form className='booking-form fade-in-up'>
              {/* Trip Type Selection */}
              <div className='trip-type-selection'>
                <button
                  type="button"
                  className={`trip-type-btn ${tripType === "Round Trip" ? 'active' : ''}`}
                  onClick={() => handleTripTypeChange("Round Trip")}
                >
                  <i className='fas fa-exchange-alt'></i>
                  <span>Round Trip</span>
                </button>
                <button
                  type="button"
                  className={`trip-type-btn ${tripType === "One Way" ? 'active' : ''}`}
                  onClick={() => handleTripTypeChange("One Way")}
                >
                  <i className='fas fa-arrow-right'></i>
                  <span>One Way</span>
                </button>
              </div>

              <div className='form-row'>
                {/* From */}
                <div className='form-group'>
                  <label className='form-label'>
                    <i className='fas fa-map-marker-alt'></i>
                    From
                  </label>
                  <select 
                    className='form-select'
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value='Cochin'>Cochin</option>
                    <option value='Kozhikode'>Kozhikode</option>
                    <option value='Mumbai'>Mumbai</option>
                    <option value='Delhi'>Delhi</option>
                    <option value='Bangalore'>Bangalore</option>
                  </select>
                </div>

                {/* To */}
                <div className='form-group'>
                  <label className='form-label'>
                    <i className='fas fa-map-marker-alt'></i>
                    To
                  </label>
                  <select 
                    className='form-select'
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value='Cochin'>Cochin</option>
                    <option value='Kozhikode'>Kozhikode</option>
                    <option value='Mumbai'>Mumbai</option>
                    <option value='Delhi'>Delhi</option>
                    <option value='Bangalore'>Bangalore</option>
                  </select>
                </div>
              </div>

              <div className='form-row'>
                {/* Departure Date */}
                <div className='form-group'>
                  <label className='form-label'>
                    <i className='fas fa-calendar-alt'></i>
                    Departure Date
                  </label>
                  <input 
                    type='date'
                    className='form-select date-input'
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Return Date */}
                {tripType === "Round Trip" && (
                  <div className='form-group'>
                    <label className='form-label'>
                      <i className='fas fa-calendar-alt'></i>
                      Return Date
                    </label>
                    <input 
                      type='date'
                      className='form-select date-input'
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                )}
              </div>

              <div className='form-row'>
                {/* Passengers */}
                <div className='form-group passenger-group' onClick={() => setPop(true)}>
                  <label className='form-label'>
                    <i className='fas fa-users'></i>
                    Passengers
                  </label>
                  <div className='passenger-display'>
                    <span>{passengerSummary || '1 Adult'}</span>
                    <i className='fas fa-chevron-down'></i>
                  </div>
                </div>

                {/* Class */}
                <div className='form-group'>
                  <label className='form-label'>
                    <i className='fas fa-chair'></i>
                    Class
                  </label>
                  <select 
                    className='form-select'
                    value={classType}
                    onChange={(e) => setClassType(e.target.value)}
                  >
                    <option value='Economy'>Economy</option>
                    <option value='Premium Economy'>Premium Economy</option>
                    <option value='Business'>Business</option>
                    <option value='First Class'>First Class</option>
                  </select>
                </div>
              </div>

              <button type='submit' className='submit-btn'>
                Search Flights
                <i className='fas fa-search'></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Passenger Popup */}
      {pop && (
        <>
          <div className='overlay' onClick={() => setPop(false)}></div>
          <PassengerPopup
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infants={infants}
            setInfants={setInfants}
            onConfirm={handleConfirm}
            onClose={() => setPop(false)}
          />
        </>
      )}

      <Footer />
    </div>
  )
}

function PassengerPopup({ adults, setAdults, children, setChildren, infants, setInfants, onConfirm, onClose }) {
  const adultIncrement = () => {
    setAdults(adults + 1);
    if (infants > adults) setInfants(adults);
  };

  const adultDecrement = () => {
    if (adults > 0) {
      setAdults(adults - 1);
      if (infants > adults - 1) setInfants(Math.max(0, adults - 1));
    }
  };

  const childIncrement = () => setChildren(children + 1);
  const childDecrement = () => setChildren(Math.max(0, children - 1));

  const infantIncrement = () => {
    if (infants < adults) setInfants(infants + 1);
  };

  const infantDecrement = () => setInfants(Math.max(0, infants - 1));

  return (
    <div className='popup-container zoom-in'>
      <div className='popup'>
        <div className='popup-header'>
          <h3>Select Passengers</h3>
          <button className='close-btn' onClick={onClose}>
            <i className='fas fa-times'></i>
          </button>
        </div>

        <div className='popup-body'>
          {/* Adult */}
          <div className='passenger-row'>
            <div className='passenger-info'>
              <span className='passenger-label'>Adults</span>
              <span className='passenger-age'>(12+ years)</span>
            </div>
            <div className='counter'>
              <button className='counter-btn' onClick={adultDecrement} disabled={adults === 0}>
                <i className='fas fa-minus'></i>
              </button>
              <span className='counter-value'>{adults}</span>
              <button className='counter-btn' onClick={adultIncrement}>
                <i className='fas fa-plus'></i>
              </button>
            </div>
          </div>

          {/* Child */}
          <div className='passenger-row'>
            <div className='passenger-info'>
              <span className='passenger-label'>Children</span>
              <span className='passenger-age'>(2-11 years)</span>
            </div>
            <div className='counter'>
              <button className='counter-btn' onClick={childDecrement} disabled={children === 0}>
                <i className='fas fa-minus'></i>
              </button>
              <span className='counter-value'>{children}</span>
              <button className='counter-btn' onClick={childIncrement}>
                <i className='fas fa-plus'></i>
              </button>
            </div>
          </div>

          {/* Infant */}
          <div className='passenger-row'>
            <div className='passenger-info'>
              <span className='passenger-label'>Infants</span>
              <span className='passenger-age'>(Under 2 years)</span>
            </div>
            <div className='counter'>
              <button className='counter-btn' onClick={infantDecrement} disabled={infants === 0}>
                <i className='fas fa-minus'></i>
              </button>
              <span className='counter-value'>{infants}</span>
              <button className='counter-btn' onClick={infantIncrement} disabled={infants >= adults}>
                <i className='fas fa-plus'></i>
              </button>
            </div>
          </div>

          <div className='note'>
            <i className='fas fa-info-circle'></i>
            <p>Note: Maximum 1 infant per adult</p>
          </div>
        </div>

        <div className='popup-footer'>
          <button className='confirm-btn' onClick={onConfirm}>
            Confirm
            <i className='fas fa-check'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forms
