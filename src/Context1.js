import React from 'react';
import { useContext } from 'react';
import { UserData } from './Contexts/GlobalContexts';
import './Context.css';

const Context1 = () => {
    const {name} = useContext(UserData);
  return (
    <div className='context-div'>
        <h1>Context1 {name}</h1>
    </div>
  )
}

export default Context1;
