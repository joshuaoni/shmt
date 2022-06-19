import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlusCircle, faCommenting, faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (  
        <div className='sidebar card'>
            <div className='cog'>
                <FontAwesomeIcon className='' icon={faCanadianMapleLeaf} size="2x" />
            </div>
            <div>
                <div className='item'>
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    <h6>Dashboard</h6>
                </div>
                <div  className='item plus'>
                    <FontAwesomeIcon className='dr' icon={faPlusCircle} size="lg" />
                    <h6>Doctor</h6>
                </div>
                <div className='item'>
                    <FontAwesomeIcon icon={faCommenting} size="lg" />
                    <h6>Contact</h6>
                </div>
                <div className='item'>
                    <FontAwesomeIcon icon={faMedkit} size="lg" />
                    <h6>Medicine</h6>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;