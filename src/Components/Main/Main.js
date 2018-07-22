import React, { Component, Fragment } from 'react';
import { Sidebar, GlobalHeader, Header, Home, PostListContainer, About } from 'Components';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Sidebar />
                <GlobalHeader />
                <Switch>
                    <Route to='/' component={Home} />
                    <Route to='/music' component={<PostListContainer type='music' />} />
                    <Route to='/entertainment' component={<PostListContainer type='entertainment' />} />
                    <Route to='/daigasso' component={<PostListContainer type='daigasso' />} />
                    <Route to='/gamevideo' component={<PostListContainer type='gamevideo' />} />
                    <Route to='/mrblog' component={<PostListContainer type='mrblog' />} />
                    <Route to='/about' component={<About />} />
                    <Route component={<Redirect to='/' />} />
                </Switch>
            </Fragment>
        );
    }
}

export default Main;