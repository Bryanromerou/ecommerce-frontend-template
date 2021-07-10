import React, { useEffect, useState } from 'react';

const SizePicker = ({sizes}) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(sizes[0]);
  useEffect(()=>{
    const optionElements = sizes.map((elm)=>{
      return <option value="sizes">{elm}</option>
    })
    setOptions(optionElements)
  },[])

  const handleChange = (event) =>{
    console.log("adding to cart")
    setValue(event.target.value)
  }

  return (
    <div>
      <select value={value} onChange={handleChange}>
        {options}
      </select>
      <button>Add to Cart</button>
    </div>
  );
}

export default SizePicker;
