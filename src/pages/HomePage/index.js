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
      The Dove Guy E-commerce website
    </div>
  );
}

export default HomePage;
