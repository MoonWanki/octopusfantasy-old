import React, { Component, Fragment } from 'react';
import { Home } from 'Components';
import { HeaderContainer } from 'Containers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as headerActions from 'store/modules/header';


const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class HomeContainer extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.HeaderActions.setOnTop(true);
        this.props.HeaderActions.setOnHeader(false);
    }

    render() {
        return (
            <Fragment>
                <HeaderContainer />
                <Home />
            </Fragment>
        );
    }
}

export default connect(null, mapDispatchToProps)(HomeContainer);
