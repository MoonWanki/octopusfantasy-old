import React, { Component, div } from 'react';
import { ContentBanner, PostList } from 'Components';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import './PostListContainer.scss';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

const mapStateToProps = (state) => ({
    fetched: state.post.fetched,
    postList: state.post.postList
});

class PostListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 1,
            onView: 1
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        $(window).on('scroll.loading', () => {
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 150) {
                this.setState({ onView: this.state.onView + 1 });
            }
        });
        // document.querySelector("meta[name=theme-color]").setAttribute("content", AppColor[this.state.contentType]);
    }

    componentWillUnmount() {
        $(window).off('scroll.loading');
    }

    setOrder = (val) => () => {
        this.scrollToTop();
        setTimeout(() => this.setState({ order: val, onView: 1 }), 500);
    }

    scrollToTop = () => {
        $( 'html, body' ).animate( { scrollTop : 0 });
        return false;
    }

    render() {
        const { postType, fetched, postList } = this.props;
        const { order, onView } = this.state;
        
        const postListOnView = postList
            .filter(post => post["type"]===postType)
            .sort((a, b) => {
                if(a["posted-on"] < b["posted-on"]) return order;
                else return order * -1;
            }).slice(0, onView);

        return (
            <div className='post-list-container'>
                <Helmet>
                    <title>{postType} :: Octopus Fantasy</title>
                </Helmet>
                <ContentBanner postType={postType} />
                <button onClick={this.setOrder(-1)} style={{position: 'fixed'}}>오래된순</button>
                <button onClick={this.setOrder(1)} style={{position: 'fixed'}}>최근순</button>
                {fetched ?
                    <PostList
                        postType={postType}
                        postList={postListOnView} />
                :
                    <div style={{height: '50vh'}}><Loader active inline='centered' size='massive'/></div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(PostListContainer);