import { createAction, handleActions } from 'redux-actions';

const initialState = {
    postType: null,
    postNum: 0,
    postList: []
};

const SET_POST_TYPE = 'contents/SET_POST_TYPE';
const FETCH_POST = 'contents/FETCH_POST';

export const setPostType = createAction(SET_POST_TYPE, type => type);
export const fetchPost = createAction(FETCH_POST);

export default handleActions({
    [SET_POST_TYPE]: (state, { payload: type }) => {
        return { postType: type, postNum: 0, postList: [] };
    },
    [FETCH_POST]: (state, { payload }) => {
        const newPost = {
            id: payload.id,
            type: payload.type,
            title: payload.title,
            postedOn: null,
            video: payload.video,
            content: payload.content,
            likes: payload.likes,
            comments: payload.comments
        };
        return {
            postList: [...state.postList, newPost],
            postNum: state.postNum + 1
        }
    }
}, initialState);

