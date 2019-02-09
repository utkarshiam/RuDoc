import React, { Component } from 'react';
import Home from './pages/Home.js';
import createGroup from './pages/createGroup.js';
import existingGroups from './pages/existingGroups.js';
import MsgPage from './pages/MsgPage.js';
import AddPar from './pages/AddPar.js';
import Database from './pages/Database.js';
import UserAdd from './pages/UserAdd.js';
import Blogs from './pages/Blogs.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/createGroup' component={createGroup}/>
          <Route exact path='/existingGroups' component={existingGroups}/>
          <Route exact path='/existingGroups/:cid' component={AddPar}/>
          <Route exact path='/MsgPage' component={MsgPage}/>
          <Route exact path='/MsgPage/:cid' component={UserAdd}/>
          <Route exact path='/Blogs' component={Blogs}/>
          <Route exact path='/Database' component={Database}/>

        </div>
      </Router>
      </div>

    );
  }
}

export default App;
