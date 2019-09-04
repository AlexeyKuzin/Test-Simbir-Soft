import React from 'react'

import BriefTaskList from './BriefTaskList'
import DetailTask from './DetailTask'
import ScrumTask from './ScrumTask'

import { ArreyList } from '../Data/Data'

console.log("hi")

class ListTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: "briefly",
      sort: "status",
      filter: "all",
      arr: ArreyList
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const filterArr = (filt) => ArreyList.filter(function(item) {
      return item.status === filt
      }
    )

    if(prevState.filter !== this.state.filter && this.state.filter !== 'all') {
      this.setState({arr: filterArr(this.state.filter)})
    }
    else if(prevState.filter !== this.state.filter && this.state.filter === 'all') {
      this.setState({arr: ArreyList})
    }
  }

  render() {

    const useView = (view) => {
      switch (view) {
        case "briefly":
          // eslint-disable-next-line
          return <BriefTaskList ListTask={this.state.arr}/>;          
          break;
        case "in detail":
          return <DetailTask ListTask={this.state.arr}/>;
          // eslint-disable-next-line
          break;
        case "scrum":
          // eslint-disable-next-line
          return <ScrumTask ListTask={this.state.arr}/>
         // eslint-disable-next-line 
          break;
        default:
          // eslint-disable-next-line
          return <BriefTaskList ListTask={this.state.arr}/>;          
          break; 
      }
    }

    useView(this.state.view) 

    // eslint-disable-next-line

  return (
    <div>
      <h1>Page Task List</h1>
        <div className="container-fluid">
          <div className="row">
          <div className="col-2">
    <h3>View</h3>
     <select onChange={e => this.setState({view: e.target.value})}>
       <option value="briefly">briefly</option>
       <option value="in detail">in detail</option>
       <option value="scrum">scrum</option>
     </select>
    <hr/>
    <h3>Sort</h3>
    <select onChange={e => this.setState({sort: e.target.value})}>
       <option value="status">status</option>
       <option value="date">date</option>
       <option value="priority">priority</option>
     </select>
    <hr/>
    <h3>Status Filter</h3>
    <select onChange={e => this.setState({filter: e.target.value})}>
       <option value="all">all</option>
       <option value="to do">to do</option>
       <option value="in progress">in progress</option>
       <option value="done">done</option>  
     </select>
    </div> 
      {useView(this.state.view)}
    </div>
      </div>
    </div>
  )
  }
}


export default ListTask