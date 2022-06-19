import React from 'react';
import avatar from '../assets/avatar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideoCamera, faBell, faCog } from '@fortawesome/free-solid-svg-icons';


const Section = () => {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const slide = '<  26  27  28  29  30  31  01  >';

    return (
        <section>
            <div className='doctors'>
                <div className='card'>
                    <div className='dr-name'>
                        <div className='img'>
                            <img alt='' src={avatar} />
                        </div>
                        <div>
                            <h4>Dr. Lida Gutierrez</h4>
                            <p>Heart Surgeon, London, England</p>
                        </div>
                    </div>
                    <h4>Surgeon</h4>
                    <p>Heart Surgeon</p>
                    <div className='date'>
                        <div>
                            <p>Date</p>
                            <h4>20 Nov 2020</h4>
                        </div>
                        <div>
                            <p>Time</p>
                            <h4>10:00 AM</h4>
                        </div>
                    </div>
                    <div className='b-card'>
                        <div className='appoint'>
                            <h6>Appointment</h6>
                        </div>
                        <div>
                            <FontAwesomeIcon className='phone' icon={faPhone} size="1x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className='video' icon={faVideoCamera} size="1x" />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='dr-name'>
                        <div className='img'>
                            <img alt='' src={avatar} />
                        </div>
                        <div>
                            <h4>Dr. Christina Frazier</h4>
                            <p>Heart Surgeon, London, England</p>
                        </div>
                    </div>
                    <h4>Medicine</h4>
                    <p>Specialist</p>
                    <div className='date'>
                        <div>
                            <p>Date</p>
                            <h4>25 Nov 2020</h4>
                        </div>
                        <div>
                            <p>Time</p>
                            <h4>11:00 AM</h4>
                        </div>
                    </div>
                    <div className='b-card'>
                        <div className='appoint'>
                            <h6>Appointment</h6>
                        </div>
                        <div>
                            <FontAwesomeIcon className='phone' icon={faPhone} size="1x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className='video' icon={faVideoCamera} size="1x" />
                        </div>
                    </div>
                </div>
                <div className='card payment'>
                    <div className='atm'>
                        <h4>5500 6677 000 99</h4>
                        <div>
                            <p>Harold Mann</p>
                            <h6>VISA</h6>
                        </div>
                    </div>
                    <div>
                        <div className='cog settings'>
                            <FontAwesomeIcon icon={faCog} size="1x" />
                        </div>
                        <h6>Settings</h6>
                    </div>
                </div>
            </div>
            <div className='dates'>
                <div className='new'>
                    <h3>Make An Appointment, That Will Help You! Choose A Doctor</h3>
                    <FontAwesomeIcon className='bell' icon={faBell} size="1x" />
                </div>
                <div className='consults card'>
                    <h3>Consults For Today</h3>
                    <div className='num-cont'>
                        {nums.map(num => {
                            return (
                                <div>
                                    {num === 22 ? 
                                    <div className='cog red' key={num}>
                                        {num}
                                    </div> :
                                    <div className='cog' key={num}>
                                        {num}
                                    </div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>
                        <h3>Examinations</h3>
                        <h5 className='blue'>See All</h5>
                    </div>
                    <div className='exams'>
                        <div className='card pain'>
                            <p>23 Dec 2020</p>
                            <h4>Heart Surgeon</h4>
                            <p>Ellen Bradley</p>
                        </div>
                        <div className='card pain'>
                            <p>24 Nov 2020</p>
                            <h4>Medicine Specialist</h4>
                            <p>Luke McKinney</p>
                        </div>
                        <div className='card pain'>
                            <p>15 May 2020</p>
                            <h4>Backpain Specialist</h4>
                            <p>Cameron Holland</p>
                        </div>
                    </div>
                </div>
                <div className='treatment card'>
                    <div className='first'>
                        <h3>Treatment</h3>
                        <h6>November 2020</h6>
                        <div className='cog slide'>
                            <p>{slide}</p>
                        </div>
                    </div>
                    <div className='drugs'>
                        <div className='cog'>
                            <h2>27</h2>
                            <p>November</p>
                        </div>
                        <div className='last'>
                            <div className='text'>
                                <h5>Medicine</h5>
                                <p>11:30 am</p>
                            </div>
                            <div className='icons'>
                                <div className='m-icon'>
                                    <FontAwesomeIcon className='phone' icon={faPhone} size="1x" />
                                </div>
                                <div className='m-icon'>
                                    <FontAwesomeIcon className='video' icon={faVideoCamera} size="1x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section;