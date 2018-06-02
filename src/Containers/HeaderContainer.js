import React, { Component } from 'react';
import { Header } from 'Components';
import $ from 'jquery';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ canBeTransparent: state.header.canBeTransparent });

class HeaderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparency: true
        }
    }

    componentDidMount() {
        
        $(window).scroll(() => {
            if($(window).scrollTop()>30 && this.state.transparency===true) {
                this.setState({ transparency: false });
            } else if($(window).scrollTop()<30 && this.state.transparency===false && this.props.canBeTransparent) {
                this.setState({ transparency: true });            }
        });

        $(document).mousemove((e) => {
            if($(window).scrollTop()<30) {
                if(this.state.transparency===true && e.pageY<100)
                    this.setState({ transparency: false });
                if(this.state.transparency===false && e.pageY>100 && this.props.canBeTransparent)
                    this.setState({ transparency: true });
            }
        });
        
    }
    
    render() {

        return (
            <Header
                transparency={this.state.transparency}
            />
        )
    }
}

export default connect(mapStateToProps)(HeaderContainer);