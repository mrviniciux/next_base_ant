import React from 'react';
import LoginForm from '../components/LoginForm'
import { connect } from "react-redux";

class Login extends React.Component{
  render(){
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
}

export default connect()(Login);