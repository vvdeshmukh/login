import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import '../media/css/login.css';


class Forgot extends React.Component {
    componentDidMount(){
        document.title = "Forgot Password"
        document.getElementById("signin_button").style.backgroundColor="skyblue"
        document.getElementById("login_button").style.backgroundColor="skyblue"
    }
    constructor(props) {
      super(props)
       
      this.state={
        isVerified: false,
        user_data:{'email':'',
        },
  
      }
  }  
    handleSubmit = event => {
      event.preventDefault();
      let email= findDOMNode(this.refs.email).value;
     
      if(email.length>0){
          const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
          if(expression.test(String(email))){
               this.state.isVerified=true;
               document.getElementById("input_email").style.border="1.5px solid green";
               document.getElementById("error_message_email_id").innerText="";
               // Call API for Reseting password
               this.state.user_data.email=email;
               console.log("Forgot_password_data--->",this.state.user_data);
               alert("Instruction is sent to your email");
          }
          else{
              document.getElementById("input_email").style.border="1.5px solid red";
              document.getElementById("error_message_email_id").innerText="Email Id is Invalid!";
          }
      }
      else{
         document.getElementById("input_email").style.border="1.5px solid red";
         document.getElementById("error_message_email_id").innerText="This Field is Required!";
      }
     
    };
    handleChange = event => {
      event.preventDefault();
      let email= findDOMNode(this.refs.email).value;
     
      if(email.length>0){
          const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
          if(expression.test(String(email))){
               this.state.isVerified=true;
               document.getElementById("email_label").innerText="Email";
               document.getElementById("input_email").style.border="1.5px solid green";
               document.getElementById("error_message_email_id").innerText="";
          }
          else{
              document.getElementById("email_label").innerText="Email";
              document.getElementById("input_email").style.border="1.5px solid red";
              document.getElementById("error_message_email_id").innerText="Email Id is Invalid!";
          }
      }
      else{
         document.getElementById("email_label").innerText="";

      }
    };

    render() {
       return (
          <form class="login-form" onSubmit={this.handleSubmit}>
              <h2><center>Forgot Password ?</center></h2>
              <em class="fa fa-unlock-alt" idaria-hidden="true" class="lock-icon"></em>
              <p>Reset your password incase you forgot your password.</p>
              <label id="email_label" class="form-check-label" for="dropdownCheck"></label>
              <input id="input_email" type="text" placeholder="Enter your email address" ref="email" onChange={this.handleChange}/>
              <span id="error_message_email_id" class="error_message"></span>

               <div class="nextOrForgot">
                  <button class="next">Reset Password</button>
               </div>
          </form>
       )
    }
 }
 export default Forgot;