import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// Routes
import Home from "./routes/home.component";
import Resume from "./routes/resume.component";
import Layout from "./routes/layout.component";
import { getEducation, getResume, getSkills } from "./utils/supabase.utils";
import { setEducation } from "./store/education/education.action";
import { setSkills } from "./store/skills/skills.action";
import Projects from "./routes/projects.component";
import Contact from "./routes/contact.component";
import { fetchResumeAsync } from "./store/resume/resume.action";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchResumeAsync());
    });

    useEffect(() => {
        const fetchingEducation = async () => {
            const data = await getEducation();
            dispatch(setEducation(data));
        };

        fetchingEducation();
    }, []);

    useEffect(() => {
        const fethcingSkills = async () => {
            const data = await getSkills();
            dispatch(setSkills(data));
        };

        fethcingSkills();
    });

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="resume" element={<Resume />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
