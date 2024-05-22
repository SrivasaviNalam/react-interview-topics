import React, { useState } from 'react'

const ChildProps = ({color, changeParentColor}) => {
    const [input,setInput] = useState("");
  return (
    <div style={{backgroundColor:`${color}`, width: '200px', height:'200px'}}>
      <h2>Child Props Component</h2>
      <label>Change parent color</label>
      <input type='text' onChange={(e) => {
        setInput(e.target.value);
        changeParentColor(input);
      }} value={input}/>
    </div>
  )
}

export default ChildProps;
