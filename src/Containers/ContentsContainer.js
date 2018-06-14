import React, { Component } from 'react';
import { ContentBanner, PostList } from 'Components';
import * as postUtil from 'util/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'store/modules/post';
import $ from 'jquery';
import { Loader } from 'semantic-ui-react';
import { HeaderContainer } from 'Containers';

const mapStateToProps = (state) => ({
    postList: state.post.postList,
    active: state.post.active
});

const mapDispatchToProps = (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
});

class ContentsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contentType: '',
            fullLoaded: false
        }
    }
    
    nextPostNum = -1;
    isFetching = false;
    
    static getDerivedStateFromProps(props, state) {
        
        // 라우트 변경 시
        if(state.contentType !== props.match.params.contenttype) {
            return { contentType: props.match.params.contenttype, fullLoaded: false };
        } else return null;
    }
    
    componentDidMount() {
    
        window.scrollTo(0, 0);
        this.props.PostActions.setActive(true);
    
        if(this.nextPostNum < 0 && this.isFetching===false && this.state.fullLoaded===false) {
            this.fetchNextPost();
        }
        
        $(window).on('scroll.loading', () => {
            if (this.isFetching===false && this.state.fullLoaded===false && $(document).height() - $(window).height() - $(window).scrollTop() < 100) {
                    this.isFetching = true;
                    this.fetchNextPost();
            }
        });
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(this.state.contentType!==nextState.contentType) {
            this.init();
        }
        
        return true;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
        if(this.nextPostNum < 0 && this.isFetching===false && this.state.fullLoaded===false) {
            this.fetchNextPost();
        }
    }

    fetchNextPost = async () => {

        if(!this.props.active) return;
                
        this.isFetching = true; // LOCK
        this.nextPostNum++;   

        const { PostActions } = this.props;
        const { contentType } = this.state;
        
        /*------------------------------------------------------------------*/
        const newPost = await postUtil.loadNextPost(contentType, this.nextPostNum);
        /*------------------------------------------------------------------*/
        
        if(newPost.data.length > 0) { // 포스트 있음
            PostActions.fetchPost(newPost.data[0]);
        } else {
            this.setState({ fullLoaded: true }); // 꽉 참
        }
        this.isFetching = false; // UNLOCK
        
    }

    componentWillUnmount() {
        this.props.PostActions.setActive(false);
        this.props.PostActions.initPosts(); 
        $(window).off('scroll.loading');
    }

    init() {
        this.isFetching = false;
        this.nextPostNum = -1;
        this.setState({ fullLoaded: false });
                    
        const { PostActions } = this.props;
        PostActions.initPosts();
    }

    render() {

        const { postList } = this.props;
        const { contentType, fullLoaded } = this.state;

        const loaderBoxStyle = {
            height: '200px',
            paddingTop: '85px',
            textAlign: 'center',
            color: 'gray',
            background: '#f9f9f9'
        }

        return (
            <div>
                <HeaderContainer />
                <ContentBanner contentType={contentType} />
                <PostList postList={postList} />
                <div style={loaderBoxStyle}>
                    {fullLoaded?(<h3>여기가 끝이네요 ^ㅡ^</h3>):(<Loader active inline='centered' />)}
                </div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentsContainer);