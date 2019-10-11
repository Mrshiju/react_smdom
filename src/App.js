import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Link} from "react-router-dom";
import axios from 'axios';
import Login from "./views/login.js"
import Home from "./views/home.js"
import 'antd/es/date-picker/style/css'; // 加载 CSS
import 'antd/dist/antd.css';
import 'echarts/lib/echarts';

function App() {
  return (
   <Router>
       <Route exact path="/login" component={Login} />
       <Route path="/home" component={Home} />
   </Router>
  );
}

export default App;
