import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FormsDoc.scss'
// import PopUp from '../PopUp/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faClose, faGear, faHeadset } from "@fortawesome/free-solid-svg-icons";

function FormsDoc() {

    const [pop, setPop] = useState(false)

    const closePopUp = () => {
        setPop(false);
    };

    return (
        <div className='formsdoc'>
            <div className="content-wrapper">
                <div className="formsdoc__content">
                    <h2 className="formsdoc__main-head">Let us know</h2>
                    <form>
                        <div className="formsdoc__label-grp">
                            <label for='from' className="form-label">From:</label>
                            <select className='form-select' id='from'>
                                <option value='Cochin' selected>Cochin</option>
                                <option value='Kozhikode'>Kozhikode</option>
                            </select>

                            <label for='to' className="form-label">To:</label>
                            <select className='form-select' id='to'>
                                <option value='Cochin' selected>Cochin</option>
                                <option value='Kozhikode'>Kozhikode</option>
                            </select>

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

                            <label for="returndate" class="form-label">Return Date:</label>
                            <div className="react-datepicker-wrapper">
                                <DatePicker
                                    id="returndate"
                                    name="returndate"
                                    selected={null} // Set the selected date value here
                                    onChange={() => { }} // Add onChange handler if needed
                                    placeholderText="Select a date"
                                    className='form-select'
                                />
                            </div>

                            {/* try */}
                            {/* <label for="returndate" class="form-label">Number of passengers:</label> */}
                            <label for="passenger-count" className='form-label'>Number of Passengers:</label>
                            <input type="number" className='form-control' onClick={()=>setPop(!pop)} id='passenger-count' placeholder='Enter count' />






                        </div>

                        {pop && (
                            <div>
                                <div className="overlay" onClick={closePopUp}></div>
                                <PopUp onClose={closePopUp} />
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
    return (
        <div className='content-wrapper'>
            <div className='popup-parent'>
                <div className='popup'>
                    <div>
                        <li title='My Account'><FontAwesomeIcon icon={faUser} /> My Account</li>
                        <button title='Logout'>Logout</button>
                        <div className='version'>
                            <p><i>version 1.0.1</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormsDoc