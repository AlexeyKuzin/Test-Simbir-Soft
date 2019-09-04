import React from 'react'

import  TaskCard  from './TaskCard'

const ScramTask = (props) => {

  // eslint-disable-next-line
  const ListItemsToDo = props.ListTask.map((item) => {
  if(item.status === "to do") {
  return (<TaskCard 
    key={item.id+item.owner+item.title}
    title={item.title}
    date={item.date}
    status={item.status}
  />)}}
  )
  
  // eslint-disable-next-line
  const ListItemsInProgress = props.ListTask.map((item) => {
    if(item.status === "in progress") {
    return (<TaskCard 
      key={item.id+item.owner+item.title}
      title={item.title}
      date={item.date}
      status={item.status}
    />)}}
    )
    
    // eslint-disable-next-line
    const ListItemsDone = props.ListTask.map((item) => {
      if(item.status === "done") {
      return (<TaskCard 
        key={item.id+item.owner+item.title}
        title={item.title}
        date={item.date}
        status={item.status}
      />)}}
      )

return (
<div className="col-10">
   <div className="row">
    <div className="col"
    style={{
      'backgroundColor': 'red',
      'opacity': 0.5
      }}>
      <h3 style={{'color': 'white'}}
      >
       To do
      </h3>
        {ListItemsToDo}
    </div>
    <div className="col"
     style={{
       'backgroundColor': 'blue',
       'opacity': 0.5
      }}
    >
      <h3 style={{'color': 'white'}}>In progress</h3>
      {ListItemsInProgress}
    </div>
    <div className="col"
      style={{
        'backgroundColor': 'green',
        'opacity': 0.5
      }}
    >
      <h3 style={{'color': 'white'}}>Done</h3>
      {ListItemsDone}
    </div>

   </div>
 </div>
  )
}

export default ScramTask 