import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'App.scss';
import { CookiesProvider } from 'react-cookie';
import store from 'store';

import { Login, NaverLoginCallback, KakaoLoginCallback, Main } from 'Components';

class App extends Component {

  render() {
    console.log('App rendered');
    return (
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/naverlogincallback" component={NaverLoginCallback} />
                <Route path="/kakaologincallback" component={KakaoLoginCallback} />
                <Route component={Main} />
              </Switch>
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;