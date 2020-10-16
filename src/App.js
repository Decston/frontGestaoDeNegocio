import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './common/Header';
import Home from './home';
import Venda from './venda';

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/venda' component={Venda} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
