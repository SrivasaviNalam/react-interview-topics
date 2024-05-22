import React from 'react'

const EventHandling = () => {
    const addNum = (num1,num2) => {
        console.log(num1+num2)
    }
   return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={()=>addNum(3,4)}>Click to Add</button>
    </div>
  )
}

export default EventHandling;
