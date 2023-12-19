import { PROJECTS_ACTION_TYPES } from "./projects.types";

const INITIAL_STATE = {
    projectsList: [],
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case PROJECTS_ACTION_TYPES.SET_PROJECTS:
            return {
                projectsList: payload,
            };
            break;
        default:
            return state;
            break;
    }
};
