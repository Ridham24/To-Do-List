const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((task) => (
            <li>{task}</li>
        ))}
      </ul>
    </div>
  )
}
export default List