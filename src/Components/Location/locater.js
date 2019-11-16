import React, { Component } from 'react';

class Locater extends Component {

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };

        this.getlocation = this.getlocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }

    getlocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        }else{
            alert('Geolocation not supported!');
        }
    }
    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        this.reverseGeocodeCoordinates();
    }

    reverseGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${'AIzaSyCnP9zE0K1aHw6lUjUYZpFqcRMsTuV4mnY'}`)
        .then(response => response.json())
        .then(data => this.setState({
            userAddress: data.results[0].formatted_address
        }))
        .catch(error => alert(error))
    }

    handleLocationError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert('User denied the request for Geolocation.')
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location information unavailable.')
                break;
            case error.TIMEOUT:
                alert('The request to get user location timed out.')
                break;
            case error.UNKNOWN_ERROR:
                alert('An unknown error occured.') 
                break;
            default:
                alert('An unknown error occured.')           
        }
    }


    render() {
        return (
            <div className="locater">
                <h2>Hello world</h2>
                <button className="locbtn" onClick={this.getlocation} > Get </button>
                <table>

                   <tbody>
                      <tr>
                      <td><b>Latitude</b></td>
                      <td>{ this.state.latitude}</td>
                      </tr>
                    </tbody>
                    <br/>
                    <tbody>
                     <tr>
                     <td><b>Longitude</b></td>
                     <td>{ this.state.longitude}</td>
                     </tr>
                     </tbody>
                     <br/>
                     <tbody>
                     <tr>
                     <td><b>Address</b></td>
                     <td>{ this.state.userAddress}</td>
                     </tr>
                     </tbody>
            </table>
            </div>
        )
    }
}

export default  Locater;
