import { RESUME_ACTION_TYPES } from "./resume.types";
import { createAction } from "../../utils/reducer.utils";
import { getResume } from "../../utils/supabase.utils";

export const setResume = (resume) => {
    // return createAction(RESUME_ACTION_TYPES.SET_RESUME, resume);
};

export const fetchResumeStart = () => {
    return createAction(RESUME_ACTION_TYPES.FETCH_RESUME_START);
};

export const fetchResumeSuccess = (resumeList) => {
    return createAction(RESUME_ACTION_TYPES.FETCH_RESUME_SUCCESS, resumeList);
};

export const fetchResumeFailed = (error) => {
    return createAction(RESUME_ACTION_TYPES.FETCH_RESUME_FAILED, error);
};

export const fetchResumeAsync = () => async (dispatch) => {
    dispatch(fetchResumeStart());
    try {
        const resume = await getResume();
        console.log(resume, "111");
        dispatch(fetchResumeSuccess(resume));
    } catch (error) {
        dispatch(fetchResumeFailed(error));
    }
};
