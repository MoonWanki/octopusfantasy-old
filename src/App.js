import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'App.scss';
import { CookiesProvider } from 'react-cookie';
import store from 'store';

import { HomeContainer, ContentsContainer, SinglePostContainer } from 'Containers';
import { Login, About, NaverLoginCallback, KakaoLoginCallback, Main } from 'Components';

class App extends Component {

  render() {
    console.log('app rendered');
    return (
      <CookiesProvider>

      <Provider store={store}>
        <BrowserRouter>
            {/* <Sidebar /> */}
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Main} />
              {/* <Route exact path="/" component={HomeContainer} />
              <Route path="/about" component={About} />
              <Route path="/naverlogincallback" component={NaverLoginCallback} />
              <Route path="/kakaologincallback" component={KakaoLoginCallback} />
              <Route path="/post/:pid" component={SinglePostContainer} />                
              <Route path="/:contenttype" component={ContentsContainer} /> */}
            </Switch>
        </BrowserRouter>
      </Provider>
      </CookiesProvider>
    );
  }
}

export default App;