import React from 'react'
import { useState } from 'react';

const Usestate = () => {
    function toNameChange() {
        const names=["vimal","varun","vinu"];
        const int=Math.floor(Math.random()*3);
        return names[int];
        
      }
      
      const [Count,setCount]=useState(99);

  return (
    <main>
     <p>my name is bharath</p>
     <button> subscribe </button>
     <button>-</button>
     <span>{Count}</span>
     <button>+</button>
    </main>
  )
}

export default Usestate