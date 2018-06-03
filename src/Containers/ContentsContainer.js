import React, { Component } from 'react';
import { ContentBanner, PostList } from 'Components';
import * as postUtil from 'util/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'store/modules/post';
import $ from 'jquery';
import { Loader } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
    postList: state.post.postList
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

    fetchNextPost = async () => {
                
        console.log('페치 가능.');  
        this.isFetching = true; // LOCK
        this.nextPostNum++;   

        const { PostActions } = this.props;
        const { contentType } = this.state;

        console.log('isFetching:', this.isFetching, 'nextPostNum:', this.nextPostNum);                
        console.log('로딩 시작');                
        
        /*------------------------------------------------------------------*/
        const newPost = await postUtil.loadNextPost(contentType, this.nextPostNum);
        /*------------------------------------------------------------------*/
        console.log('로딩 끝');                
        
        if(newPost.data.length > 0) { // 포스트 있음
            PostActions.fetchPost(newPost.data[0]);
        } else {
            this.setState({ fullLoaded: true }); // 꽉 참
        }
        this.isFetching = false; // UNLOCK
        
    }

    componentDidMount() {

        console.log('Contents Component did Mount');                

        if(this.nextPostNum < 0 && this.isFetching===false && this.state.fullLoaded===false) {
            this.fetchNextPost();
        }

        $(window).scroll(() => {
            if (this.isFetching===false && this.state.fullLoaded===false && $(document).height() - $(window).height() - $(window).scrollTop() < 300) {
                    this.isFetching = true;
                    console.log(this.isFetching, '이군 가즈아!!'); 
                    this.fetchNextPost();
            }
        });
    }

    static getDerivedStateFromProps(props, state) {

        // 라우트 변경 시
        if(state.contentType !== props.match.params.contenttype) {
            // 포스트 제거, state 변경
            console.log('라우트 변경됨! 그러면...');


            return { contentType: props.match.params.contenttype, fullLoaded: false };

        } else return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('지금 type:', this.state.contentType, '다음 type:', nextState.contentType);
        
        if(this.state.contentType!==nextState.contentType) {
            this.init();
        }

        return true;
    }

    componentDidUpdate() {
        if(this.nextPostNum < 0 && this.isFetching===false && this.state.fullLoaded===false) {
            this.fetchNextPost();
        }
        console.log('Contents Component did Update');
    }

    componentWillUnmount() {
        this.init();
    }

    init() {
        console.log('상태 초기화~~');
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