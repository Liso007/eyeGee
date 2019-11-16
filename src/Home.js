import React, { Component } from 'react';

// CSS Styling
import './app.css';

class Home extends Component {
    render() {
        return (
            <section>
               <div className="header"><h1>Hello world</h1></div> 
               <div className="menu"></div>
               <div className="content">
               <div className="cardmap">

               </div>
               </div>
               <div className="footer">hello</div>
            </section>
        )
    }
}

export default Home;