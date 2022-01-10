import dropDownMenuActionTypes from "./dropdown.types";

const INITIAL_STATE = {
    hidden: true
}

const dropDownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dropDownMenuActionTypes.TOGGLE_DROPDOWN_MENU_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }
}

export default dropDownReducer;