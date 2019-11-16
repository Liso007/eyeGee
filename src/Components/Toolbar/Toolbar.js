import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'; 
import './Toolbar.css';
import IG from './eyeGeeIcon9.png';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div> 
            <div className="toolbar_logo">
                <a href="/">
                    <div className="toolbar_logo-items">
                     <img src={ IG } alt="IG"/>
                     <h1>eyegee</h1>
                     </div>
                     </a>
                     </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Sign In</a></li>
                    <li><a href="/">Sign Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;