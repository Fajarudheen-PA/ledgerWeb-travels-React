import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FormsDoc.scss'
// // import PopUp from '../PopUp/PopUp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faClose, faGear, faHeadset } from "@fortawesome/free-solid-svg-icons";

function FormsDoc() {

    const [pop, setPop] = useState(false);
    const [tripType, setTripType] = useState("Round Trip");

    const closePopUp = () => {
        setPop(false);
    };

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    return (
        <div className='formsdoc'>
            <div className="content-wrapper">
                <div className="formsdoc__content">
                    <h2 className="formsdoc__main-head">Let us know</h2>
                    <form>
                        <div className="formsdoc__label-grp">

                            {/* One way or Round trip radio */}
                            <div className="formsdoc__radio-grp">
                                <label>
                                    <input
                                        type="radio"
                                        value="oneWay"
                                        checked={tripType === 'oneWay'}
                                        onChange={handleTripTypeChange}
                                        className='formsdoc__radio-grp__input'
                                    />
                                    One Way
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="roundTrip"
                                        checked={tripType === 'roundTrip'}
                                        onChange={handleTripTypeChange}
                                        className='formsdoc__radio-grp__input'
                                    />
                                    Round Trip
                                </label>
                            </div>

                            {/* From */}
                            <label for='from' className="form-label">From:</label>
                            <select className='form-select' id='from'>
                                <option value='Cochin' selected>Cochin</option>
                                <option value='Kozhikode'>Kozhikode</option>
                            </select>

                            {/* Going To */}
                            <label for='to' className="form-label">To:</label>
                            <select className='form-select' id='to'>
                                <option value='Cochin' selected>Cochin</option>
                                <option value='Kozhikode'>Kozhikode</option>
                            </select>

                            {/* Departure date */}
                            <label for="departdate" class="form-label">Departure Date:</label>
                            <div className="react-datepicker-wrapper">
                                <DatePicker
                                    id="departdate"
                                    name="departdate"
                                    selected={null} // Set the selected date value here
                                    onChange={() => { }} // Add onChange handler if needed
                                    placeholderText="Select a date"
                                    className='form-select'
                                />
                            </div>

                            {/* Return date */}
                            {tripType === "roundTrip" ? <><label for="returndate" class="form-label">Return Date:</label><div className="react-datepicker-wrapper">
                                <DatePicker
                                    id="returndate"
                                    name="returndate"
                                    selected={null} // Set the selected date value here
                                    onChange={() => { }} // Add onChange handler if needed
                                    placeholderText="Select a date"
                                    className='form-select' />
                            </div></> : ""}

                            {/* Number of Passengers */}
                            <label for="passenger-count" className='form-label'>Number of Passengers:</label>
                            <input type="number" className='form-control' onClick={() => setPop(!pop)} id='passenger-count' placeholder='Enter count' />

                            <label></label>





                        </div>

                        {pop && (
                            <div>
                                <div className="overlay" onClick={closePopUp}></div>
                                <PopUp />
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </div>
    )
}

function PopUp(props) {
    // const { onClose } = props;
    // Adult
    const [countAdult, setCountAdult] = useState(0);

    const adultIncrement = (e) => {
        e.preventDefault();
        setCountAdult(countAdult + 1)
        setCountInfant(Math.min(countInfant, countAdult));
    }
    const adultDecrement = (e) => {
        e.preventDefault();
        setCountAdult(countAdult > 0 ? countAdult - 1 : 0)
        setCountInfant(Math.min(countInfant, Math.max(0, countAdult - 1)));
    }
    // Child
    const [countChild, setCountChild] = useState(0);

    const childIncrement = (e) => {
        e.preventDefault();
        setCountChild(countChild + 1)
    }
    const childDecrement = (e) => {
        e.preventDefault();
        setCountChild(countChild > 0 ? countChild - 1 : 0)
    }
    // Infant
    const [countInfant, setCountInfant] = useState(0);

    const infantIncrement = (e) => {
        e.preventDefault();
        if (countInfant < countAdult) {
            setCountInfant(countInfant + 1)
        }
    }
    const infantDecrement = (e) => {
        e.preventDefault();
        setCountInfant(countInfant > 0 ? countInfant - 1 : 0)
    }
    return (
        <div className='content-wrapper'>
            <div className='popup-parent'>
                <div className='popup'>
                    <div>
                        {/* Adult Count Section */}
                        <div className='inside-count'>
                            <label for="adult" className='form-label'>Adult:</label>
                            <div className='inside-count__right-grp'>
                                <button className='value-change-button' onClick={adultDecrement}>-</button>
                                <input type="number" className='form-control' value={countAdult} id='adult' />
                                <button className='value-change-button' onClick={adultIncrement}>+</button>
                            </div>
                        </div>
                        {/* Child Count Section */}
                        <div className='inside-count'>
                            <label for="child" className='form-label'>Child:</label>
                            <div className='inside-count__right-grp'>
                                <button className='value-change-button' onClick={childDecrement}>-</button>
                                <input type="number" className='form-control' value={countChild} id='child' />
                                <button className='value-change-button' onClick={childIncrement}>+</button>
                            </div>
                        </div>
                        {/* Infant Count Section */}
                        <div className='inside-count'>
                            <label for="infant" className='form-label'>Infant:</label>
                            <div className='inside-count__right-grp'>
                                <button className='value-change-button' onClick={infantDecrement}>-</button>
                                <input type="number" className='form-control' value={countInfant} id='infant' />
                                <button className='value-change-button' onClick={infantIncrement} disabled={countInfant === countAdult}>+</button>
                            </div>
                        </div>
                        <div className='popup-confirm-button'>
                            <button className='popup-confirm-button__button'>Confirm</button>
                        </div>
                        <div className='note'>
                            <p><i>Note: You can only book for 1 infant per Adult</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormsDoc