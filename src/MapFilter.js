import React, { useState, useEffect } from 'react';

const MapFilter = () => {
  const [data, setData] = useState([]);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => setData(result))
  },[])

  const MapData = () => {
    const filterData = data.filter((user) => user.id < 5);
    setData(filterData);
  }

  const filteredSquare = () => {
    const filterData = numbers.filter((number) => number%2 === 0).map((num) => num * num);
    setNumbers(filterData);
  } 

  return (
    <>
      <h1 className="head">Users</h1>
      <div className='card-div'>
        {data.map((item) => (
            <div className='card' key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          )
        )}
      </div>
      <button onClick={MapData}>Click for filter data</button>
      <div className="card-div">
        {numbers.map((number) => (
          <div className="card" key={number}>
            <p>{number}</p>
          </div>
        ))}
      </div>
      <button onClick={filteredSquare}>Click for even squared data</button>
    </>
  )
}

export default MapFilter;
