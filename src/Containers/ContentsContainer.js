import React, { Component } from 'react';
import { ContentBanner, PostList } from 'Components';
import * as util from 'util/content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentsActions from 'store/modules/contents';

const mapStateToProps = (state) => ({
    postList: state.contents.postList
});

const mapDispatchToProps = (dispatch) => ({
    ContentsActions: bindActionCreators(contentsActions, dispatch)
});

class ContentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentType: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const type = nextProps.match.params.contenttype;
        if(type !== prevState.contentType) return {type: type}
        else return null;
    }

    loadContent = async (contentId) => {
        const post = await util.getPost(1);
        console.log(post);
        const comments = await util.getComments(1);
        console.log(comments);
    }

    componentDidMount() {

    }

    render() {

        const { contentType } = this.state;
        const { postList } = this.props;

        return (
            <div>
                <ContentBanner contentType={contentType} />
                <PostList postList={postList}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentsContainer);