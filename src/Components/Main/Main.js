import React, { Component, Fragment } from 'react';
import { Sidebar, Header, Home, PostListContainer, About, SinglePostContainer } from 'Components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Visibility } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'store/modules/post';
import { loadAllPosts } from 'util/http/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { css } from 'glamor';

const mapStateToProps = (state) => ({
    postList: state.post.postList,
    fetched: state.post.fetched
});

const mapDispatchToProps = (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
});

class Main extends Component {

    toastId;

    constructor(props) {
        super(props);
        this.state = {
            topVisible: true
        }
    }

    componentDidMount() {
        this.loadPostsAndFetch();
    }
    
    loadPostsAndFetch = async () => {
        if(!this.props.fetched) {
            this.toastId = toast("백그라운드에서 컨텐츠를 불러오는 중입니다...", { autoClose: false });
            const res = await loadAllPosts();
            if(res.status===200 && res.data) {
                this.props.PostActions.fetchPosts(res.data);
                toast.update(this.toastId, {
                    render: `${res.data.length}개 컨텐츠가 준비되었습니다!`,
                    type: toast.TYPE.INFO,
                    autoClose: 1500,
                    className: css({
                        transform: "rotateX(360deg)",
                        transition: "transform 0.4s",
                    })
                });
            } else {
                toast.update(this.toastId, {
                    render: '로딩 중 문제가 발생하였습니다. HTTP STATUS: ' + res.status,
                    type: toast.TYPE.ERROR,
                    autoClose: 1500,
                    className: css({
                        transform: "rotateX(360deg)",
                        transition: "transform 0.4s",
                    })
                });
            }
        }
    }

    handleTopVisible = (val) => () => this.setState({ topVisible: val });

    render() {
        console.log('Main rendered');
        const { handleTopVisible } = this;
        const { topVisible } = this.state;
        const { pathname } = this.props.location;
        return (
            <Fragment>
                <Sidebar topVisible={topVisible} />
                <Header topVisible={topVisible} path={pathname}/>
                <Visibility once={false} fireOnMount={true} onTopVisible={handleTopVisible(true)} onTopVisibleReverse={handleTopVisible(false)}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/post/:pid' component={SinglePostContainer} />                
                        <Route path='/music' render={() => <PostListContainer postType='music' />} />
                        <Route path='/entertainment' render={() => <PostListContainer postType='entertainment' />} />
                        <Route path='/daigasso' render={() => <PostListContainer postType='daigasso' />} />
                        <Route path='/gamevideo' render={() => <PostListContainer postType='gamevideo' />} />
                        <Route path='/mrblog' render={() => <PostListContainer postType='mrblog' />} />
                        <Route path='/about' component={About} />
                        <Route component={<Redirect to='/' />} />
                    </Switch>
                </Visibility>
                <ToastContainer style={{fontWeight: '700'}} hideProgressBar autoClose={1500} position='bottom-right' closeButton={false} draggable={false}/>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);