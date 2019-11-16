import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import './fb.css';

class Facebook extends Component {
    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    componentClicked = () => console.log('clicked');
    render() {

        let fbcontent;

        if( this.state.isLoggedIn){
            fbcontent= (
                <div className="mainFB">
                    <h1>Facebook Auth</h1>
            <div className="fbuser">
                 <div className="welcome">
                 <h2>Welcome {this.state.name}</h2>
                 </div>
                 <div className="picuser">
                 <img src={this.state.picture} alt={this.state.name} />
                 </div>
                 <div className="emailuser">
                 Email: {this.state.email}
                 </div>
             </div> 
             <button className="fbbtn">Continue</button>
                </div>
            );
        }else{
            fbcontent=(
                <FacebookLogin
                appId="424677914912714"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        }
        return (
            <div>
                {fbcontent}
            </div>
        )
    }
}

export default  Facebook;