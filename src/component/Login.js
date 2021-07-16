import React, { Component } from 'react';
import firebase from '../firebase'


class Login extends Component {

   
   
    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    };

   configCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recapatca varified")
        },
        defaultCountry: "IN"
      });
   }

   onSignInSubmit =(e)=>{
       e.preventDefault()  
       this.configCaptcha()

    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("OSMS not sent")
        });
   }

   onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("user is verified")
      localStorage.setItem("token", JSON.stringify(user))
      // ...
      window.location.pathname = "/"
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
   }

   

    render() {
        return (
            <div className="login">
            <h2>Login Form</h2>
            <form onSubmit={this.onSignInSubmit}>
                <div id="sign-in-button"></div>
                <input 
                type="number" 
                name="mobile" 
                placeholder="Mobile number"
                onChange={this.handleChange}
                required/>
                <button type="submit">Submit</button>
            </form>

            <h2>Enter Otp</h2>

            <form onSubmit={this.onSubmitOTP}>
                <input 
                type="number"
                 name="otp" 
                 placeholder="otp number" 
                 onChange={this.handleChange}
                 required/>
                <button type="submit">Submit Otp</button>
            </form>
        </div>
        );
    }
}

export default Login;
