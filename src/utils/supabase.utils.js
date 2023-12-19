import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key);

export const getResume = async () => {
    const { data, error } = await supabase.from("resume").select();
    if (error) {
        console.error(error);
        return;
    }

    return data;
};

export const getEducation = async () => {
    const { data, error } = await supabase.from("education").select();
    if (error) {
        console.error(error);
        return;
    }

    return data;
};

export const getSkills = async () => {
    const { data, error } = await supabase
        .from("skill_categories")
        .select("* , skills(*)");

    if (error) {
        console.error(error);
        return;
    }

    return data;
};

export const getProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
        console.error(error);
        return;
    }

    return data;
};
