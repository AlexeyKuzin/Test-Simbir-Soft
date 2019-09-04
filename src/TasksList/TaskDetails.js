import React from 'react'
import {withRouter} from 'react-router-dom'

const TaskDetails = props => {
    return (
      <tr>
        <td>  
          {props.id}  
        </td>
        <td>       
          {props.title}
        </td>
        <td>  
          {props.status}  
        </td>
        <td>       
          {props.owner}
        </td>
        <td>  
          {props.date}  
        </td>
        <td>       
          {props.priority}
        </td>
      </tr>
    )
  }

export default withRouter(TaskDetails)