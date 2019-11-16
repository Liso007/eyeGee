import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
     let drawerClasses = 'side-drawer';
     if (props.show) {
         drawerClasses = 'side-drawer open'
     }
    return (
    <nav className= {drawerClasses}>
        <ul>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Sign In</a></li>
            <li><a href="/">Sign Out</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;