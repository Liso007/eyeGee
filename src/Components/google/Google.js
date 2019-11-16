import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component {
    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: ''
    }

    responseGoogle = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name
        });
    }

    componentClicked = () => console.log('clicked');
    render() {

        let Gcontent;

        if( this.state.isLoggedIn){
            Gcontent= (
                <div >
                    <h1>Google Auth</h1>
                    <p>Hi click on the button below to Continue!!</p>
             <button >Continue</button>
                </div>
            );
        }else{
            Gcontent=(
                <GoogleLogin
                clientId="1058094908048-7q553ehcv3m6iu3bd7vaklbkq9ef85it.apps.googleusercontent.com"
                buttonText='Login'
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            );
        }
        return (
            <div>
                {Gcontent}
            </div>
        )
    }
}

export default Google;