import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./Blogdetails";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/create"><Create/></Route>
            <Route path="/blogs/:id"><BlogDetails/></Route>
            <Route path="*"><NotFound exact path="*"/></Route>       
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
