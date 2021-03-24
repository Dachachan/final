import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './page/Main';
import info from './page/info'
function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/profile/:id" component={info} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
