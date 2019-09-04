import React from 'react'
import  Task  from './Task' 

const BriefTaskList = (props) => {

  const ListItems = props.ListTask.map((item) => 
  <Task 
    key={item.id+item.owner+item.title}
    title={item.title}
    status={item.status}
  />

  )

  return (
  <div className="col-10">
  <table className="table tablehover">
    <thead className="thead-dark">
      <th scope = "col-2">Title</th>
      <th scope = "col-1">Status</th>
    </thead>
    <tbody>
      {ListItems}
    </tbody>
  </table>
</div>
    )
}

export default BriefTaskList