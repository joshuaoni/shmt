import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Section from './Section';

const Main = () => {
    return (
        <div className='main'>
            <div className='cont'>
                <div className='left'>
                    <Sidebar />
                </div>
                <div className='right'>
                    <Navbar />
                    <Section />
                </div>
            </div>
        </div>
    );
}
 
export default Main;