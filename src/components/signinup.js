import Navbar from "./navbar";
import Footer from "./footer";
import "../css/signform.css";

import React, { Component } from "react";

class SignInUp extends Component{
  

  /*===== LOGIN SHOW and HIDDEN =====*/
 

state = {
  isSignUp : true,
  isSignIn : false
}





render(){
  console.log(this.state);
  return (
    
    <div className="website-content">
      <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
      <Navbar />
      
      <div className="login">
            <div className="login__content">
                <div className="login__img">
                    <img src={process.env.PUBLIC_URL + "/img/img-login.svg"} alt=""/>
                </div>

                <div className="login__forms">
                    <form action="" className={this.state.isSignIn ? "login__registre block": "login__registre none"}  id="login-in">
                        <h1 className="login__title">Sign In</h1>
    
                        <div className="login__box">
                            <i className='bx bx-user login__icon'></i>
                            <input type="text" placeholder="Username" className="login__input"/>
                        </div>
    
                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" placeholder="Password" className="login__input"/>
                        </div>

                        <a href="#" className="login__forgot">Forgot password?</a>

                        <a href="#" className="login__button">Sign In</a>

                        <div>
                            <span className="login__account">Don't have an Account ?</span>
                            <span onClick={ () => this.setState({isSignUp:true, isSignIn: false })} className="login__signin" id="sign-up">Sign Up</span>
                        </div>
                    </form>

                    <form action="" className={this.state.isSignUp ?"login__create block": "login__create none"} id="login-up">
                        <h1 className="login__title">Create Account</h1>
    
                        <div className="login__box">
                            <i className='bx bx-user login__icon'></i>
                            <input type="text" placeholder="Username" className="login__input"/>
                        </div>
    
                        <div className="login__box">
                            <i className='bx bx-at login__icon'></i>
                            <input type="text" placeholder="Email" className="login__input"/>
                        </div>

                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" placeholder="Password" className="login__input"/>
                        </div>

                        <a href="#" className="login__button">Sign Up</a>

                        <div>
                            <span className="login__account">Already have an Account ?</span>
                            <span onClick={() => this.setState({isSignUp:false, isSignIn: true })} className="login__signup" id="sign-in">Sign In</span>
                        </div>

                        <div className="login__social">
                            <a href="#" className="login__social-icon"><i className='bx bxl-facebook' ></i></a>
                            <a href="#" className="login__social-icon"><i className='bx bxl-twitter' ></i></a>
                            <a href="#" className="login__social-icon"><i className='bx bxl-google' ></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


      <Footer />
    </div>
  );
}

}

export default SignInUp;
