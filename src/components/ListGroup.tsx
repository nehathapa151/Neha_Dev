import React, {useState} from "react";

function ListGroup(){
    const items =['neha', 'kunal','jyoti','priya','ayush']
    const statecheck = () =>{
      const [newvalue, setnewvalue] = useState("hello");
    }
    const onchange = (event: { target: { value: any; }; }) =>{
      let newvalue = event.target.value;
      console.log(newvalue);
    }
    return (
      <>
      <input onChange={onchange} placeholder="enter your name"></input>

      <ul className="list-group">
      {items.map((items)=>
      (<li>{items}</li>
      ))}
      </ul>

       
        </> 
)}

export default ListGroup;