import { useState } from 'react'
import './App.css'
import Listing from './Listing'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import db from './firebase'
import { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import {GiBroadDagger} from 'react-icons/gi'

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>
      setList(snapshot.docs.map(doc => ({ id:doc.id,input: doc.data().todo })))
    )}
  , [])
  const handleList = (e) => {
    db.collection('todos').add({
      todo: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
          <GiBroadDagger/>
          Add Task
        </Button>
      </form>
      <Listing list={ list} />
    </>
  )
}

export default App
