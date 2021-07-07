import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router';
import AuthModel from '../../Services/Auth';

const SignIn = () => {
  const [state, setState] = useState({
    email:"",
    password:""
  });
  const history = useHistory();

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Trying to sign in")
  }
  const inputChange = (e)=>{
    setState({...state, [e.target.name]:e.target.value})
  }
  const responseGoogle = async (e)=>{
    const success = await AuthModel.googleLogin(e.tokenId);
    if (success){
      history.push({pathname: '/',
      state: true})
    }
    
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={state.email} placeholder="example@gmail.com" onChange={inputChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={state.password} id="password" onChange={inputChange}/>
        <input type="button" value="Sign In" />
      </form>
      <GoogleLogin
        clientId="1030621693375-0q2drq6h5ueni2h8dnl11ei8f8nk9t2c.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SignIn;
