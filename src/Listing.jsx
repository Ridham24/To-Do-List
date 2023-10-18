import { Button, List, ListItem, ListItemText, Modal } from '@mui/material'
import { MdOutlineDeleteForever } from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import db from './firebase'
import './Listing.css'
import { useState } from 'react'
const Listing = ({ list }) => {
  const [open,setOpen]=useState(false)
  const handleModal = () => {
    setOpen(true)
  }
  return (
    <>
      <List>
        {list.map((task) => (
          <ListItem>
            <a
              className="del"
              onClick={() => db.collection('todos').doc(task.id).delete()}
            >
              <MdOutlineDeleteForever />
            </a>
            <a onClick={handleModal}>
              <FiEdit />
            </a>
            <ListItemText
              className="listed"
              primary="Todo"
              secondary={task.input}
            />
          </ListItem>
        ))}
      </List>
      <Modal
        open={open}
        onClose={e=>setOpen(false)}
      >
        <h1>Hello</h1>
      </Modal>
    </>
  )
}
export default Listing
