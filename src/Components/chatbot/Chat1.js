import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import Review from './chat';

class CustomChatbot extends Component {
    render() {
      return (
        <ChatBot className="card-content" 
          steps={[
            {
                id: '0',
                message: 'Hello friend, I am Bot I will help you with your claim.',
                trigger: 'greet',
              },
              {
                id: 'greet',
                user: true,
                trigger: '1',
              },
            {
              id: '1',
              message: 'What is your First-Name(s)?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your Last-Name(s)?',
              trigger: 'lastname',
            },
            {
                id: 'lastname',
                user: true,
                trigger: '5',
              },
            {
                id: '5',
                message: 'What is your gender?',
                trigger: 'gender',
              },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '7' },
                { value: 'female', label: 'Female', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '9',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
                id: '9',
                message: 'Provide your Identity number?',
                trigger: 'ID',
              },
            {
                id: 'ID',
                user: true,
                trigger: '11',
                validator: (value) => {
                  if (isNaN(value)) {
                    return 'value must be a number';
                  } else if (value < 0) {
                    return 'value must be positive';
                  } else if (value > 9999999999999) {
                    return `${value}? Come on!`;
                  }
    
                  return true;
                },
              },    
            {
              id: '11',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'firstname', label: 'First-Name', trigger: 'update-firstname' },
                { value: 'lastname', label: 'Last-Name', trigger: 'update-lastname' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
                { value: 'ID', label: 'Identity Number', trigger: 'update-ID' },
              ],
            },
            {
              id: 'update-firstname',
              update: 'firstname',
              trigger: '11',
            },
            {
              id: 'update-lastname',
              update: 'lastname',
              trigger: '11',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '11',
            },
            {
                id: 'update-age',
                update: 'age',
                trigger: '11',
              },
              {
                id: 'update-ID',
                update: 'ID',
                trigger: '11',
              },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
        />
      );
    }
  }
export default CustomChatbot;