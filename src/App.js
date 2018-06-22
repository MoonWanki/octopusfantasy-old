import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'App.scss';
import store from 'store';

import { HomeContainer, ContentsContainer } from 'Containers';
import { Login, About, NaverLoginCallback, KakaoLoginCallback, Sidebar } from 'Components';

class App extends Component {

  componentDidMount() {
    console.log("App Mounted");
  }

  render() {
    console.log('App rendered');
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Fragment>
              <Sidebar />
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/naverlogincallback" component={NaverLoginCallback} />
                <Route path="/kakaologincallback" component={KakaoLoginCallback} />
                <Route path="/:contenttype" component={ContentsContainer} />
              </Switch>
            </Fragment>     
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;