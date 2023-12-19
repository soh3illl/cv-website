import { SKILLS_ACTION_TYPES } from "./skills.types";

const INITIAL_STATE = {
    skillsMap: [],
};

export const skillsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SKILLS_ACTION_TYPES.SET_SKILLS:
            return {
                skillsMap: payload,
            };
            break;
        default:
            return state;
            break;
    }
};
