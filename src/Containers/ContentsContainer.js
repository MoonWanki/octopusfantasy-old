import React, { Component } from 'react';
import { ContentBanner, PostList } from 'Components';
import * as postUtil from 'util/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentsActions from 'store/modules/contents';

const mapStateToProps = (state) => ({
    postType: state.contents.postType,
    postNum: state.contents.postNum,
    postList: state.contents.postList
});

const mapDispatchToProps = (dispatch) => ({
    ContentsActions: bindActionCreators(contentsActions, dispatch)
});

class ContentsContainer extends Component {

    fetchNextPost = async () => {
        const { postType, postNum, ContentsActions } = this.props;
        const newPost = await postUtil.loadNextPost(postType, postNum)
        console.log(newPost);
        ContentsActions.fetchPost(newPost);
    }

    componentDidMount() {
        // 임시
        const { ContentsActions } = this.props;
        ContentsActions.setPostType("daigasso");
    }

    render() {

        const { postType, postList } = this.props;
        const { fetchNextPost } = this;

        return (
            <div>
                <ContentBanner postType={postType} />
                <button onClick={fetchNextPost} />
                <PostList postList={postList} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentsContainer);