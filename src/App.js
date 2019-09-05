import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import RenderLogIn from './LogIn/LogIn'; 
import ListTask from './TasksList/ListTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "false"
    }
  }

  render()
   
  {
    return (
      <div className="App">
       <nav className="nav">
        <NavLink to='/TasksList/ListTask' style = {{"margin": 10}}>TaskList</NavLink>   
        <NavLink to='/Login' style = {{"margin": 10}}>Log in</NavLink>
       </nav> 
       <hr/>

       <Route path='/TasksList/ListTask' component={ListTask} />
       <Route path='/LogIn' component={RenderLogIn} />

      </div>
    );
  }
}

export default App;
