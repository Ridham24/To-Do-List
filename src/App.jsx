import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const handleList = (e) => {
    setList([...list, text])
    setText('')
    e.preventDefault()
  }
  const handleInput = (e) => setText(e.target.value)
  return (
    <>
      <h1>To-Do-List</h1>
      <form>
      <input type="text" placeholder='Enter the Task...' value={ text} onChange={handleInput}/>
      <button className='button' onClick={handleList}>Add Task</button>
      </form>
      <ul>
        {list.map((task)=><li>{task}</li>)}
      </ul>
    </>
  )
}

export default App
