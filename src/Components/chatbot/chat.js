import React, { useState, useEffect } from 'react';
import './chat.css';
import PropTypes from 'prop-types';

export default function Chat(props) {
    const [state, setState] = useState(
        { greet:'',
          claim:'',
          firstname: '',
          lastname:'',
          gender: '', 
          age: '', 
          ID:''
        });
  
    useEffect(() => {
      const { steps } = props;
      const { firstname, lastname,gender,age, 
      ID } = steps;
      setState({firstname, lastname,gender,age, 
        ID,  });
    }, [props])
  
      const {firstname, lastname,gender,age, 
        ID  } = state;
      return (
        <div className="form">
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>{firstname.value}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{lastname.value}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{age.value}</td>
              </tr>
              <tr>
                <td>ID Number:</td>
                <td>{ID.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
  }
  
  Chat.propTypes = {
    steps: PropTypes.object,
  };
  
  Chat.defaultProps = {
    steps: undefined,
  };
  
