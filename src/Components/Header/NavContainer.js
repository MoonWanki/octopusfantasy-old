import React, { Component, Fragment } from 'react';
import './NavContainer.scss';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from 'store/modules/header';

const mapStateToProps = (state) => ({
    onHeader: state.header.onHeader,
    onTop: state.header.onTop });

const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class NavContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: "",
        };
    }

    getRouted = () => {
        switch(window.location.pathname) {
            case '/music':
            case '/entertainment':
            case '/daigasso':
                return "PRODUCTS";
            case '/gamevideo':
            case '/mrblog':
            case '/detectivepenguin':
                return "LIFE";
            case '/about':
                return "ABOUT";
            default:
                return "OTEHR";
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(!props.onHeader)
        return ({ activeNav: "NONE" });
        else return false;
    }

    handleMouseOverOnNav = (name, value) => {

        if(value) { // 네비로 진입
            if(name==="PRODUCTS") this.setState({ activeNav: "PRODUCTS" });
            else if(name==="LIFE") this.setState({ activeNav: "LIFE" });
            else if(name==="ABOUT") this.setState({ activeNav: "ABOUT" })
        }
    }

    handleMouseLeaveOnContainer = (e) => {
        //e.stopPropagation();
        this.setState({ activeNav: "NONE" });
        if(this.props.onTop) {
            this.props.HeaderActions.setOnTop(true);
        }
    }

    render() {

        const { handleMouseOverOnNav, getRouted, handleMouseLeaveOnContainer } = this;        
        const { transparency } = this.props;
        const { activeNav } = this.state;

        return (
            <Fragment>
                <div id="nav-container" onMouseLeave={handleMouseLeaveOnContainer}>
                    <NavItem
                        name="PRODUCTS"
                        transparency={transparency}
                        active={activeNav==="PRODUCTS"}
                        routed={getRouted()==="PRODUCTS"}
                        onMouseOver={handleMouseOverOnNav}
                        onClick={handleMouseLeaveOnContainer}
                        dropdownItems={[
                            {
                                url: "/music",
                                contentTitle: "MUSIC WORKS",
                                content: "자작곡, 뮤직비디오"
                            },
                            {
                                url: "/entertainment",
                                contentTitle: "ENTERTAINMENTS",
                                content: "각종 UCC 영상들"
                            },
                            {
                                url: "/daigasso",
                                contentTitle: "DAIGASSO! DX",
                                content: "대합주! 밴드브라더스 DX 작품"
                            }
                        ]}/>
                    <NavItem
                        name="LIFE"
                        transparency={transparency}
                        active={activeNav==="LIFE"}
                        routed={getRouted()==="LIFE"}
                        onMouseOver={handleMouseOverOnNav}
                        dropdownItems={[
                            {
                                url: "/gamevideo",
                                contentTitle: "GAME VIDEO",
                                content: "롤, 던파 플레이 영상"
                            },
                            {
                                url: "/mrblog",
                                contentTitle: "Mr. Blog 시리즈",
                                content: "Octopus Fantasy의 진미, Mr. Blog와의 만담!"
                            }
                        ]}
                         />
                    <Link to='/about'>
                        <NavItem
                            name="ABOUT"
                            transparency={transparency}
                            active={activeNav==="ABOUT"}
                            routed={getRouted()==="ABOUT"}
                            onMouseOver={handleMouseOverOnNav}
                            dropdownItems={null}
                         />
                    </Link>
                </div>
                
            </Fragment>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavContainer);