import React, { useState } from 'react'
import './auth.css';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');     // Create the submit method.
     const submit = async e => {       
           e.preventDefault();       
           const user = {
                username: username,
                password: password
               };         

               fetch('http://localhost:8000/api/v1/accounts/login/', { method: 'POST', body: user })
               .then(response => {
                   // HTTP 301 response
                   // HOW CAN I FOLLOW THE HTTP REDIRECT RESPONSE?
                   if (response.redirected) {
                       window.location.href = '/home';
                   }
               })
               .catch(function(err) {
                   console.info(err);
               });
               // Create the POST requuest
         /* const {data} = await                                                                            
                         axios.post('http://localhost:8000/api/v1/accounts/login/',
                         user ,{headers: 
                        {'Content-Type': 'application/json'}});
         // Initialize the access & refresh token in localstorage.      
       //  localStorage.clear();       
         //  localStorage.setItem('access_token', data.access);      
           //   localStorage.setItem('refresh_token', data.refresh);       
             //   axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;     
                    window.location.href = '/home'    }*/
                         }

    return (
        <body>
            <div className="auth-wrapper">
            <div className="auth-inner">
      <form onSubmit={submit}>
        <h3 style={{"color":"black"}}>Sign In</h3>
        <div className="mb-3">
          <label  style={{"color":"black"}}>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label  style={{"color":"black"}}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox" >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1" style={{"color":"black"}}>
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" href="Home" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      </div>
      </body>
    );
  };

export default Login;
  