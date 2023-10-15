import {List,ListItem, ListItemText} from '@mui/material'
const Listing = ({ list }) => {
  return (
    <List>
      {list.map((task) => (
        <ListItem>
          <ListItemText primary="Todo" secondary={task} />
        </ListItem>
      ))}
    </List>
  )
}
export default Listing