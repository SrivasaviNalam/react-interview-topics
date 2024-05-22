import React, { useState } from 'react'
import ChildProps from './ChildProps';

const Props = () => {
  const [parentColor, setParentColor] = useState("");
  const [color,setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  }
  const changeParentColor = (value) => {
    setParentColor(value)
  }

  return (
    <div style={{width:'100vw', height:'100vh', backgroundColor:`${parentColor}`}}>
        <h1>Main Props component</h1>
        <label>Change the child component color</label>
        <input type='text' onChange={handleChange} value={color}/>
        <ChildProps color={color} changeParentColor={changeParentColor}></ChildProps>
    </div>
  )
}

export default Props;
