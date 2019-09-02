import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import {
  GlobalStyle
} from './style';
import {
  GlobalIcon
} from './statics/iconfont/iconfont';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/loadable.js';
import Write from './pages/write/loadable.js';
import store from './store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <GlobalStyle />
        <GlobalIcon />
        <BrowserRouter>
          <Header />
          <Route path = '/' exact component = {Home}></Route>
          <Route path = '/login' exact component = {Login}></Route>
          <Route path = '/write' exact component = {Write}></Route>
          <Route path = '/detail/:id' exact component = {Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;