import React, { useState } from 'react';
import SignIn from '../../components/AuthComponents/SignIn';
import SignUp from '../../components/AuthComponents/SignUp';

const Index = () => {
  const [signUp, setSignUp] = useState(false);
  
  const changeState = () => setSignUp(!signUp)

  return (
    <div>
      {signUp ? <SignUp/>:<SignIn/>}
      <p onClick={changeState}><b>{signUp ? "Already have an account? Sign In" : "Don't have an account yet? Sign Up"}</b></p>
    </div>
  );
}

export default Index;
