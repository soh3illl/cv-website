import { createSelector } from "reselect";

const selectProjectsReducer = (state) => state.projects;

export const selectProjects = createSelector(
    [selectProjectsReducer],
    (projects) => projects.projectsList
);
