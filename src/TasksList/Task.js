import React from 'react'
import {withRouter} from 'react-router-dom'

const Task = props => {
  
  return (
    <tr
      onClick = {() => props.history.push('/ListTask/' + props.title.toLowerCase)}
    >
      <td>  
        {props.title}  
      </td>
      <td>       
        {props.status}
      </td>
    </tr>
  )
}

export default withRouter(Task)