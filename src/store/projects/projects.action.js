import { PROJECTS_ACTION_TYPES } from "./projects.types";
import { createAction } from "../../utils/reducer.utils";

export const setProjects = (projects) => {
    return createAction(PROJECTS_ACTION_TYPES.SET_PROJECTS, projects);
};
