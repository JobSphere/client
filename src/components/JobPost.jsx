import React from "react";
import "./JobPost.css";

export default function jobPost() {
    return (
        <>
            <div className="job-post flex flex-col rounded-xl items-center p-5 gap-5">
                <h2 className="text-xl">Software Engineer - I</h2>
                <p className="px-10 text-justify">
                    Passionate code building tomorrow's tech. Innovating at Google HQ. #TechGuru
                </p>
                <i>Silicon Valley, United States</i>
                <div className="flex flex-row gap-8 justify-evenly">
                    <button>Apply</button>
                    <button>Save</button>
                </div>
            </div>
        </>
    );
}
