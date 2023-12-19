import { createSelector } from "reselect";

const selectResumetReducer = (state) => state.resume;

export const selectResume = createSelector(
    [selectResumetReducer],
    (resume) => resume.resumeList
);

export const selectResumeIsLoading = createSelector(
    [selectResumetReducer],
    (resume) => resume.isLoading
);
