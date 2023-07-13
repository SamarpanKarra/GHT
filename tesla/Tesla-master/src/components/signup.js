import React, { useState } from 'react'
import './auth.css';
const Register = () => {
  const [firstname, setFirstname] = useState('');

  const [lastname, setLastname] = useState('');  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // Create the submit method.
   const submit = async e => {       
         e.preventDefault(); 
            
         const user = {
              'name':firstname,
            //  name:lastname,
              'email':email,
              'password':password
             };    
             console.log(user);     

             fetch('http://localhost:8000/api/v1/accounts/register/', { method: 'POST', body: user })
             .then(response => {
                 // HTTP 301 response
                 // HOW CAN I FOLLOW THE HTTP REDIRECT RESPONSE?
                 if (response.redirected) {
                     window.location.href = '/sign-in';
                 }
             })
             .catch(function(err) {
                 console.info(err);
             });
            }
    return (
      <body>
        <div className="auth-wrapper">
            <div className="auth-inner">
      <form onSubmit={submit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"  value={lastname}  onChange={e => setLastname(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </body>
    )
  }
  export default Register ;