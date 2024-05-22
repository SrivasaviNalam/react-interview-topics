import React, { useEffect } from 'react'

const InlineConditionalRendering = () => {
  useEffect(() => {
    const name="Srivasavi";
    const age = 27;
    // if(name="Srivasavi") {
    //   console.log("My name is Srivasavi");
    // } else if( age="26") {
    //   console.log("My age is 26");
    // } else {
    //   console.log("My name is neither Srivasavi nor my age is 26");
    // }
  
    //instead of if else we can use conditional rendering
    age>26 ? console.log("I am young") : name ==="Srivasavi" && age === 26 ? (
      <>
        {console.log("My name is Srivasavi")}
        {console.log('My age is 26')}
      </>
    ) : console.log("neither my age is 26 nor my name is srivasavi")
  }, [])

  return (
    <div>   
      <h1>Inline conditional rendering</h1>
    </div>
  )
}

export default InlineConditionalRendering;
