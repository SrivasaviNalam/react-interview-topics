import './App.css';
import { useState } from 'react';
//import MapFilter from './MapFilter.js';
//import States from './States.js';
//import ClassComponent  from './ClassComponent.js';
//import Props from './Props';
//import InlineConditionalRendering from './InlineConditionalRendering';
//import EventHandling from './EventHandling';
//import Form from './Form';
import { UserData } from './Contexts/GlobalContexts';
import Context1 from './Context1';
import Context2 from './Context2';

function App() {
  const [name,setName] = useState("Srivasavi");
  return (
    <div className="App">
      {/*<MapFilter/>*/}
      {/*<States/>*/}
      {/* <ClassComponent />*/}
      {/* <Props></Props> */}
      {/* <InlineConditionalRendering></InlineConditionalRendering> */}
      {/* <EventHandling/> */}
      {/* <Form /> */}
      <UserData.Provider value={{name,setName}}>
        <Context1/>
        <Context2/>
      </UserData.Provider>
    </div>
  );
}

export default App;
