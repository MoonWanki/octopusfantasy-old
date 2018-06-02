import { createAction, handleActions } from 'redux-actions';

const ENABLE_TRANSPARENCY = 'header/ENABLE_TRANSPARENCY';
const DISABLE_TRANSPARENCY = 'header/DISABLE_TRANSPARENCY';

export const enableTransparency = createAction(ENABLE_TRANSPARENCY);
export const disableTransparency = createAction(DISABLE_TRANSPARENCY);

const initialState = {
  canBeTransparent: true,
   
};

export default handleActions({
  [ENABLE_TRANSPARENCY]: ({ canBeTransparent }) => { return {canBeTransparent: true} },
  [DISABLE_TRANSPARENCY]: ({ canBeTransparent }) => { return {canBeTransparent: false} }
}, initialState);