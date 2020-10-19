import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './common/Header';
import Home from './home';
import Venda from './venda';
import ConsultarVendas from './consultarVendas';
import AdicionarProduto from './adicionarProduto';
import ConsultarEstoque from './consultarEstoque';

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/venda' component={Venda} />
          <Route path='/consultar-vendas' component={ConsultarVendas} />
          <Route path='/adicionar-produto' component={AdicionarProduto} />
          <Route path='/consultar-estoque' component={ConsultarEstoque} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
