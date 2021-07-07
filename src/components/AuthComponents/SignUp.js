import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
const SignUp = () => {
  const [state, setState] = useState({
    email:"",
    password:""
  });

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Trying to sign up")
  }
  const inputChange = (e)=>{
    setState({...state, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={state.email} placeholder="example@gmail.com" onChange={inputChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={state.password} id="password" onChange={inputChange}/>
        <input type="button" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
