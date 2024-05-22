import React, { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({});
    const getInput = (event) => {
        const {name, value} = event.target;
        const singleData = {[name]:value};
        // setData(prevData => ({
        //     ...prevData, ...singleData
        // }))
        setData({...data,...singleData})
    }
    console.log(data);
  return (
    <form>
        <div>
            <input type='text' placeholder='name' name="name" onChange={getInput}/>
        </div>
        <div>
            <input type='number' placeholder='age' name="age" onChange={getInput}/>
        </div>
        <div>
            <input type='date' placeholder='DOB' name="date" onChange={getInput}/>
        </div>
    </form>
  )
}

export default Form;
