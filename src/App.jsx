import { useState } from 'react'
import './App.css'
import Box from './Components/Box'
import Index from './Components/Index'

function App() {
  const [todo, setToDo] = useState([]);
  const removeToDo = (id) =>{
    const newToDos = todo.filter
    (
      (d,index)=>
      {
        if(index != id)
        {
          return true;
        }
        else{
          return false;
        }
      }
    )
    setToDo(newToDos)
  }

  const addToHandler = (item) =>{
    setToDo(
      [
        ...todo,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500
    
    h-screen p-6">
      <div className="rounded mx-auto max-w-[650px] min-h-[450px] shadow-2xl bg-[#F3D7CA] p-5">
        <Index handler={addToHandler}/>
        <Box data={todo} removeHandler ={removeToDo}/>
      </div>
    </div>
    </>
  )
}

export default App
