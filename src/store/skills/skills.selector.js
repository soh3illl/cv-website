import { createSelector } from "reselect";

const selectSkillsReducer = (state) => state.skills;

export const selectSkills = createSelector([selectSkillsReducer], (skills) => {
    return skills.skillsMap;
});
