import { uiActionTypes } from './ui.type';

export const navbarDropdownToggleAction = (status) => ({
    type: uiActionTypes.NAVBAR_DROPDOWN_TOGGLE,
    payload: status
});

export const inputGridToggleAction = (status) => ({
    type: uiActionTypes.INPUT_GRID_TOGGLE,
    payload: status
});