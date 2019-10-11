import React from 'react';
import {BrowserRouter as Router ,Route, Link,Switch} from "react-router-dom";
import Layout from './layout';
import Datashow from './datashow'

function Content() {
  return (
   <Switch>
      <Route exact path='/home/layout' component={Layout}></Route>
      <Route path='/home' component={Datashow}></Route>
   </Switch>
  );
}

export default Content;
