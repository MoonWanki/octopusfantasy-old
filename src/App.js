import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'App.scss';
import store from 'store';

import {
  HeaderContainer,
  HomeContainer,
  ContentsContainer,
  AboutContainer
} from 'Containers';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div onScroll={console.log('스크롤~')}>
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/about" component={AboutContainer} />
              <Route path="/:contenttype" component={ContentsContainer} />
            </Switch>
          </div>     
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;