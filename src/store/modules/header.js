import { createAction, handleActions } from 'redux-actions';

// const ENABLE_TRANSPARENCY = 'header/ENABLE_TRANSPARENCY';
// const DISABLE_TRANSPARENCY = 'header/DISABLE_TRANSPARENCY';

// export const enableTransparency = createAction(ENABLE_TRANSPARENCY);
// export const disableTransparency = createAction(DISABLE_TRANSPARENCY);

const SET_ON_TOP = 'header/SET_ON_TOP';
const SET_ON_HEADER = 'header/SET_ON_HEADER';
// const SET_ON_DROPDOWN = 'header/SET_ON_DROPDOWN';

export const setOnTop = createAction(SET_ON_TOP);
export const setOnHeader = createAction(SET_ON_HEADER);
// export const setOnDropdown = createAction(SET_ON_DROPDOWN);

const initialState = {
  transparency: true,
  onTop: true,
  onHeader: false,
  // onDropdown: false
};

export default handleActions({
  [SET_ON_TOP]: (state, { payload: value }) => {
    if(value) { // TOP 올라왔을 때
      if(state.onHeader) { // 마우스가 헤더나 드롭다운 위에 있으면
        return { ...state, onTop: true} // 상태만 변경
      } else {
        return { ...state, onTop: true, transparency: true }; // 상태 변경 및 투명화
      }
    } else { // TOP 벗어났을 때
        return { ...state, onTop: false, transparency: false };
    }
  },
  [SET_ON_HEADER]: (state, { payload: value }) => {    
    if(value) { // 마우스가 헤더 위로 왔을 때
      return { ...state, onHeader: true, transparency: false };
    } else { 
      if(state.onTop) { // TOP이면
        return { ...state, onHeader: false, transparency: true}        
      } else {
        return { ...state, onHeader: false}                
      }
    }
  },
  // [SET_ON_DROPDOWN]: (state, { payload: value }) => {
  //   if(value) { // 마우스가 드롭다운 위로 왔을 때
  //     return { ...state, onDropdown: true, transparency: false };
  //   } else { // 마우스가 드롭다운에서 벗어났을 때
  //     if(state.onHeader) { // 헤더 위에 있다면
  //       return { ...state, onDropdown: false, transparency: false}
  //     }
  //     if(state.onTop) { // TOP이면
  //       return { ...state, onDropdown: false, transparency: true}        
  //     }
  //   }
  // }
}, initialState);