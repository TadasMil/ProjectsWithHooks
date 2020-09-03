import React from 'react';
import './App.css';
import {Layout} from './components/UI/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import HandleUser from './containers/Users/HandleUser'
import {Projects} from './components/Projects/Projects'
import {Counter} from './containers/Counter/Counter'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/users' component={HandleUser}></Route>
          <Route exact path='/counter' component={Counter}></Route>
          <Route exact path='/' component={Projects}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
