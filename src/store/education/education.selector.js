import { createSelector } from "reselect";

const selectEducationReducer = (state) => state.education;

export const selectEducation = createSelector(
    [selectEducationReducer],
    (education) => education.educationList
);
