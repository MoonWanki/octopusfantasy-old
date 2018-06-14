import React, { Component } from 'react';
import { Header } from 'Components';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as headerActions from 'store/modules/header';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => ({ canBeTransparent: state.header.canBeTransparent });

const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class HeaderContainer extends Component {

    componentDidMount() {

        $(window).scroll(() => {
            if($(window).scrollTop()===0) {
                this.props.HeaderActions.setOnTop(true);
            } else {
                this.props.HeaderActions.setOnTop(false);
            }
        });
    }
    
    render() {
        return <Header />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);