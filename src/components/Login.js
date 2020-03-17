import React, { Component } from 'react'
import Register from './Register'
import { Link } from 'react-router-dom';
import YouTube from '@u-wave/react-youtube';

const div={
    color:'black',
    fontSize:'20px',

}

const fn={
    backgroundColor: 'lightgreen',
}

class Login extends Component {
    render() {
        return (
            <body style={fn} >
            <form  style={div}>
                <h3>Sign In</h3>

                <div className="form-group" >
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                
                
            
               


                <div className="form-group">
                    <Link type="submit" to="/reg" className="btn btn-link">Register</Link>

                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>

                </p>


                <YouTube
                    video="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
                    autoplay
                />

                <div>
                   
                </div>
            </form>
            </body>
            

        );
    }
}

export default Login
