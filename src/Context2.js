import React from 'react';
import { useContext } from 'react';
import { UserData } from './Contexts/GlobalContexts';

const Context2 = () => {
    const { setName} = useContext(UserData);
  return (
    <div className='context-div'>
      <button onClick={() => setName("Srivasavi Nalam")}>Change State using context</button>
    </div>
  )
}

export default Context2;
