import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from 'Components';
import * as headerActions from 'store/modules/header';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({ headerCanBeTransparent: state.header.canBeTransparent });

const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class HomeContainer extends Component {

    componentDidMount() {
        const { HeaderActions } = this.props;
        HeaderActions.enableTransparency();
    }

    componentWillUnmount() {
        const { HeaderActions } = this.props;
        HeaderActions.disableTransparency();
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log("home container rendered")
        return (
            <Home />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);