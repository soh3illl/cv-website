import { EDUCATION_ACTION_TYPES } from "./education.types";

const INITIAL_STATE = {
    educationList: [],
};

export const educationReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case EDUCATION_ACTION_TYPES.SET_EDUCATION:
            return {
                educationList: payload,
            };
            break;
        default:
            return state;
            break;
    }
};
