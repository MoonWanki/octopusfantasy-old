import React, { Component } from 'react';
import './NavContainer.scss';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from 'store/modules/header';

const mapStateToProps = (state) => ({ headerCanBeTransparent: state.header.canBeTransparent });

const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class NavContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: this.setDefaultNavActive(),
            activeDropdown: null,
            inDropdown: false
        };
    }

    setDefaultNavActive() {
        switch(window.location.pathname) {
            case '/music':
            case '/entertainment':
                return "PRODUCTS";
            case '/gamevideo':
            case '/mrblog':
                return "LIFE";
            case '/about':
                return "ABOUT";
            default:
                return null;
        }
    }

    handleMouseEnterNav = (name) => {
        console.log(name + " nav enter");
        // const { HeaderActions } = this.props;
        // HeaderActions.disableTransparency();
        this.setState({ activeNav: name, activeDropdown: name==="ABOUT"?null:name });
    }

    handleMouseLeaveNav = (name) => {
        console.log(name + " nav leave");

        if(this.state.inDropdown===true) {
            const { HeaderActions } = this.props;
            HeaderActions.disableTransparency();

        } else {
            this.setState({ activeNav: this.setDefaultNavActive(), activeDropdown: null, inDropdown: false });
        }
  
    }

    handleMouseEnterDropdown = (name) => {
        console.log(name + " dropdown enter");
        this.setState({ inDropdown: true });
    }

    handleMouseLeaveDropdown = (name) => {
        console.log(name + " dropdown leave");       
        const { HeaderActions } = this.props;
        HeaderActions.enableTransparency(); 
        this.setState({ activeNav: this.setDefaultNavActive(), activeDropdown: null, inDropdown: false });
    }

    render() {

        const { handleMouseEnterNav, handleMouseLeaveNav, handleMouseEnterDropdown, handleMouseLeaveDropdown } = this;
        const { transparency } = this.props;
        const { activeNav, activeDropdown } = this.state;

        return (
            <div>
                <div id="nav-container">
                    <NavItem
                        name="PRODUCTS"
                        transparency={transparency}
                        active={activeNav==="PRODUCTS"?true:false}
                        handleMouseEnter={handleMouseEnterNav}
                        handleMouseLeave={handleMouseLeaveNav}/>
                    <NavItem
                        name="LIFE"
                        transparency={transparency}
                        active={activeNav==="LIFE"?true:false}
                        handleMouseEnter={handleMouseEnterNav}
                        handleMouseLeave={handleMouseLeaveNav} />
                    <Link to='/about'>
                        <NavItem
                            name="ABOUT"
                            transparency={transparency}
                            active={activeNav==="ABOUT"?true:false}
                            handleMouseEnter={handleMouseEnterNav}
                            handleMouseLeave={handleMouseLeaveNav} />
                    </Link>
                </div>
                <NavDropdown
                    name="PRODUCTS"
                    active={activeDropdown==="PRODUCTS"?true:false}
                    handleMouseEnter={handleMouseEnterDropdown}
                    handleMouseLeave={handleMouseLeaveDropdown}
                    items={[
                        {
                            url: "/music",
                            contentTitle: "MUSIC",
                            content: "자작곡, 뮤직비디오 등 각종 MUSIC WORKS"
                        },
                        {
                            url: "/entertainment",
                            contentTitle: "ENTERTAINMENT",
                            content: "병맛 오지는 추억팔이 영상"
                        },
                        {
                            url: "/daigasso",
                            contentTitle: "Daigasso! DX",
                            content: "중·고등학생 때 닌텐도 음악 게임인 <대합주! 밴드브라더스 DX>로 작곡한 음악"
                        }
                    ]} />
                <NavDropdown
                    name="LIFE"         
                    active={activeDropdown==="LIFE"?true:false}                
                    handleMouseEnter={handleMouseEnterDropdown}
                    handleMouseLeave={handleMouseLeaveDropdown}
                    items={[
                        {
                            url: "/gamevideo",
                            contentTitle: "GAME VIDEO",
                            content: "롤, 던파 플레이 영상"
                        },
                        {
                            url: "/mrblog",
                            contentTitle: "ENTERTAINMENT",
                            content: "Octopus Fantasy의 진미, Mr. Blog와의 만담!"
                        }
                    ]} />
            </div>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavContainer);