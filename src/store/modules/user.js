import { createAction, handleActions } from 'redux-actions';

const initialState = {
    loggedIn: false
};

const FETCH_POSTS = 'contents/FETCH_POSTS';

export const fetchPosts = createAction(FETCH_POSTS);

export default handleActions({
    [FETCH_POSTS]: (state, { payload }) => {
        return {
            fetched: true,
            postList: payload
        };
    },
}, initialState);

