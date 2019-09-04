import React from 'react'; 
import  TaskDetails  from './TaskDetails'

const DetailTask = (props) => {

  const ListItems = props.ListTask.map((item) => 
  <TaskDetails 
    key={item.id+item.owner+item.title}
    id={item.id}
    title={item.title}
    status={item.status}
    owner={item.owner}
    date={item.date}
    priority={item.priority}
  />
  )
  return (
  <div className="col-10">
  <table className="table tablehover">
    <thead className="thead-dark">
      <th scope = "col-1">Id</th>
      <th scope = "col-2">Title</th>
      <th scope = "col-1">Status</th>
      <th scope = "col-1">Owner</th>
      <th scope = "col-1">Date</th>
      <th scope = "col-1">Priority</th>
    </thead>
    <tbody>
      {ListItems}
    </tbody>
  </table>
  </div>    
  )
}

export default DetailTask