import { combineReducers } from "redux";
import { resumeReducer } from "./resume/resume.reducer";
import { educationReducer } from "./education/education.reducer";
import { skillsReducer } from "./skills/skills.reducer";
import { projectsReducer } from "./projects/projects.reducer";

export const rootReducer = combineReducers({
    resume: resumeReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
});
