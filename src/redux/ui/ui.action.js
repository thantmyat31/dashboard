import { uiActionTypes } from './ui.type';

export const navbarDropdownToggle = (status) => ({
    type: uiActionTypes.NAVBAR_DROPDOWN_TOGGLE,
    payload: status
});