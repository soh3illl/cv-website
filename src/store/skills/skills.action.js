import { SKILLS_ACTION_TYPES } from "./skills.types";
import { createAction } from "../../utils/reducer.utils";

export const setSkills = (skills) => {
    return createAction(SKILLS_ACTION_TYPES.SET_SKILLS, skills);
};
