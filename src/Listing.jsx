import { Button, List, ListItem, ListItemText, Modal,Box,Typography, Input,FormControl } from '@mui/material'
import { MdOutlineDeleteForever } from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import db from './firebase'
import './Listing.css'
import { useState } from 'react'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Listing = ({ list }) => {
  const [open, setOpen] = useState(false)
  const [id,setId]=useState(0)
  const [text, setText] = useState('')
  const handleEdit = () => {
    db.collection('todos').doc(id).set({
      todo: text
    },{merge:true})
    setOpen(false)
    setText('')
  }
  return (
    <>
      <List>
        {list.map((task) => (
          <>
          <ListItem>
            <a
              className="del"
              onClick={() => db.collection('todos').doc(task.id).delete()}
            >
              <MdOutlineDeleteForever />
            </a>
              <a onClick={e => {
                setOpen(true)
                setId(task.id)
            }}>
              <FiEdit />
            </a>
            <ListItemText
              className="listed"
              primary="Todo"
              secondary={task.input}
            />
          </ListItem>
<Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <FormControl>
                <Input type="text" value={text} className='inp' onChange={e=>setText(e.target.value)} />
              </FormControl>
            <Button
              className='btn'
              disabled={!text}
              onClick={handleEdit}
                type="submit"
                variant="outlined"
                color="error"
              >
                Edit
              </Button>
          </Typography>
        </Box>
      </Modal>
          </>
        ))}
      </List>
      
    </>
  )
}
export default Listing
