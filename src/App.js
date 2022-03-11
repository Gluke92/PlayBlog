import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./Blogdetails";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/"><Home/></Route>
          </Switch>
          <Switch>
            <Route path="/create"><Create/></Route>
          </Switch>
          <Switch>
            <Route exact path="/blogs/:id"><BlogDetails/></Route>
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
