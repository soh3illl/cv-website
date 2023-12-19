import { RESUME_ACTION_TYPES } from "./resume.types";

const INITIAL_STATE = {
    resumeList: [],
    isLoading: false,
    error: null,
};

export const resumeReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case RESUME_ACTION_TYPES.FETCH_RESUME_START:
            return {
                ...state,
                isLoading: true,
            };
            break;
        case RESUME_ACTION_TYPES.FETCH_RESUME_SUCCESS:
            return {
                ...state,
                resumeList: payload,
                isLoading: false,
            };
            break;
        case RESUME_ACTION_TYPES.FETCH_RESUME_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
            break;
        default:
            return state;
            break;
    }
};
