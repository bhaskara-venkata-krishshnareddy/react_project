import React from 'react'
import { useState } from 'react'
import Counter from './Counter';
export default function App() {
  // let name ='';
  const[name , setName] = useState('' )
  const handleclick = ()=> {
    // name ='ganesh'
    setName('ganesh');
  }
  return (
    
    <div>
      {/* <h1>Hello {name}</h1>
      <button onClick={handleclick}>click</button> */}
      <Counter/>
    </div>
  )
}
