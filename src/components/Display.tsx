import { useEffect } from "react";
import "particles.js";

const Display = () => {
    // TODO: Listen for changes in the ControlForm component, update Firebase then update display

    // TODO: Load in Particle.js and set it up to take in form data from ControlForm.tsx
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load(
                "particles-js",
                "/assets/particles.json",
                () => {
                    console.log("callback - particles.js config loaded");
                }
            );
        }
    }, []);

    return (
        <div className="double-border display-container d-flex flex-column align-items-center p-4 m-5">
            <div
                id="particles-js"
                className="particles-container"></div>
        </div>
    );
};

export default Display;
