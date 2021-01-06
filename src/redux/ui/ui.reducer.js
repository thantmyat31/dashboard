import { uiActionTypes } from './ui.type';

const INITIAL_STATE = {
    navbarDropdown: false
}

const uiReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case uiActionTypes.NAVBAR_DROPDOWN_TOGGLE:
            return {
                ...state,
                navbarDropdown: action.payload
            }

        default:
            return state;
    }
}
 
export default uiReducer;