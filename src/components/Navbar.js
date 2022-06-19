import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h2>Your Treatment</h2>
            </div>
            <div>
                <h3>Make An Appointment, That Will Help You! Choose A Doctor</h3>
                <FontAwesomeIcon className='bell' icon={faBell} size="1x" />
            </div>
        </nav>
    );
}
 
export default Navbar;