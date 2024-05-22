import React, {useState} from 'react'

function States() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [isVisible,setIsVisible] = useState(false);
    // const [arr,setArr] = useState([{
    //     name:"Srivasavi",
    //     age: 26,
    // },{
    //     name: "Vyshu",
    //     age: 26,
    // }]);
    // const [obj,setObj] = useState({
    //     name:"Sri",
    //     age: 25
    // })
    const [position,setPosition] =useState({x: 0, y:0});
    const changeStates = () => {
        setCount(count+1);
        setName("Sri");
        setIsVisible(!isVisible);
    }
    const [items, setItems] = useState([]);

    const handleMouseOver = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
    }

    const addItem = () => {
        const newItem = {
            id: items.length,
            value: Math.ceil(Math.random()*100)
        };
        setItems([...items,newItem]);
    }

    const [complexItem, setComplexItem] = useState({
        items: []
    })

    const complexAddItem = () => {
        const newItem = {
            id: complexItem.items.length,
            value: Math.floor(Math.random() *100)
        };
        setComplexItem((prevData) => (
            {...prevData, items: [...prevData.items,newItem]}
        ))
    }

  return (
    <div>
        <h1>{count}</h1>
        <h2>{name}</h2>
        {isVisible ? (<h3>Visible</h3>) : (<h3>Not Visible</h3>)}   
        <button onClick={changeStates}>Change States</button>
        <div onPointerMove={handleMouseOver} style={{border:'1px solid #000', width: '50vh', height:'50vh' , position:'relative',margin:'30px'}}>
            <div style={{borderRadius:'50%',backgroundColor:'red',height: '20px', width: '20px', transform:`translate(${position.x}px,${position.y}px)`, position: 'absolute', left:'-10' , right: '-10'}}></div>
        </div>
        <div className="todo-list">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
              ))}
            </ul>
        </div>
        <button onClick={addItem}>Add Item</button>
        <div className="todo-list">
            <ul>
                {complexItem.items.map((item) => (
                  <li key={item.id}>{item.value}</li>
              ))}
            </ul>
        </div>
        <button onClick={complexAddItem}>Complex Add Item</button>
    </div>
  )
}

export default States;
