import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const HomePage = ({location}) => {
  const history = useHistory()
  useEffect(()=>{
    if(location.state){
      history.push({pathname: '/',state: false})
      window.location.reload()
    } 
  },[])
  
  return (
    <div>
      <h1>Welcome Page for Ecommerce website</h1>
    </div>
  );
}

export default HomePage;
