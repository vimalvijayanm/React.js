import React from 'react'


const Content = () => {
    function handleNameChange() {
        const names=["vimal","varun","vinu"];
        const int=Math.floor(Math.random()*3);
        return names[int];
        
      }
      const handleClick=(e)=>{
         console.log(e.target);
      }
      const handleClick2=(name)=>{
        console.log(`Thanks for support ${name}`);
      }
  return (
    <main>
      <p onDoubleClick={()=>handleClick2('vimal')}>my name is {handleNameChange()}</p> {/*anonymous function*/} 
      {/* <button onClick={handleClick()}>subscribe</button>  */} {/*normal function*/}
      <button onClick={(e)=>handleClick(e)}>subscribe</button> 
    </main>
  )
}

export default Content