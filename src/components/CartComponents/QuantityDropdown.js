import React, { useEffect, useState } from 'react';

const QuantityDropdown = ({quantity}) => {
  const [value, setValue] = useState(quantity);
  const [options, setOptions] = useState([]);

  const handleChange = async(event) =>{
    setValue(event.target.value)
  }
  
  useEffect(()=>{
    const optionArr = []
    for(let i=0 ; i < 10 ;i++){
      optionArr.push(
        <option>{i+1}</option>
      )
    }
    setOptions(optionArr)
  },[])

  return (
    <>
      <select value={value} onChange={handleChange}>
        {options}
      </select>
    </>
  );
}

export default QuantityDropdown;
