import React from 'react'
import {withRouter} from 'react-router-dom'

const TaskCard = props => {
    return (
      <div className="card"
      style = {{"margin": 5}}>
        <h4>{props.title}</h4>
        <h5>{props.date}</h5>
        <h5>{props.status}</h5>
      </div>
    )
  }

export default withRouter(TaskCard)