import { useState } from 'react'
import './App.css'
import List from './List'
import { Button, FormControl, Input, InputLabel } from '@mui/material'

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
      <form className="form">
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            type="text"
            value={text}
            onChange={handleInput}
          />
        </FormControl>
        <Button
          disabled={!text}
          type="submit"
          onClick={handleList}
          variant="outlined"
          color="error"
        >
          Add Task
        </Button>
      </form>
      <List list={ list} />
    </>
  )
}

export default App
