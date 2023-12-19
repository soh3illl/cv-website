import { EDUCATION_ACTION_TYPES } from "./education.types";
import { createAction } from "../../utils/reducer.utils";

export const setEducation = (education) => {
    return createAction(EDUCATION_ACTION_TYPES.SET_EDUCATION, education);
};
