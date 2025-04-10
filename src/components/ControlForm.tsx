import { useState } from "react";
import { db, ref, set } from "../firebase.js";
import {
    ControlFormInputs,
    OnHoverBehaviour,
    ConnectingLineOptions,
} from "../types.ts";

const ControlForm = () => {
    const [date, setDate] = useState<ControlFormInputs["date"]>("000000");
    const [color, setColor] = useState<ControlFormInputs["color"]>("#ACFB09");
    const [speed, setSpeed] = useState<ControlFormInputs["speed"]>(0);
    const [connectingLine, setConnectingLine] = useState<
        ControlFormInputs["connectingLine"]
    >(ConnectingLineOptions.Alone);
    const [hover, setHover] = useState<ControlFormInputs["hover"]>(
        OnHoverBehaviour.None
    );
    const [enableHover, setEnableHover] =
        useState<ControlFormInputs["enableHover"]>(false);
    const [opacity, setOpacity] = useState<ControlFormInputs["opacity"]>(0);
    const [density, setDensity] = useState<ControlFormInputs["density"]>(0);

    const handleSubmit = () => {
        const currentTime = Date.now();
        const date = new Date(currentTime);
        // set allows real-time updating (write, overwrite) of inputs in state to Firebase's database
        // creates a reference to the display path
        set(ref(db, "display"), {
            date,
            color,
            speed,
            connectingLine,
            hover,
            enableHover,
            opacity,
            density,
            timestamp: date.toISOString(),
        });
    };
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="double-border bg-black text-white p-3">
                <form>
                    <div className="form-group border p-4 mb-5 form-group-container">
                        <label
                            htmlFor="date"
                            className="form-label">
                            Date
                        </label>
                        <div
                            className="form-text text-white mb-3"
                            id="date-text">
                            Enter a date of significance to you. Must be 6
                            digits in any order (ex. DDMMYY, YYMMDD, MMDDYY
                            etc.)
                        </div>
                        <input
                            required
                            type="text"
                            className="form-control text-input bg-white"
                            id="date"
                            aria-describedby="date date-text"
                            maxLength={6}
                        />
                    </div>

                    <div className="form-group border p-4 mb-5 form-group-container d-flex justify-content-between align-items-center">
                        <div>
                            <label
                                htmlFor="color"
                                className="form-label">
                                Colour
                            </label>
                            <div
                                className="form-text text-white mb-3"
                                id="color-text">
                                Pick a color.
                            </div>
                        </div>

                        <input
                            type="color"
                            className="form-control color-input"
                            id="color"
                            aria-describedby="color color-text"
                            value={color}
                        />
                    </div>

                    <div className="form-group form-group border p-4 mb-5 form-group-container">
                        <label
                            htmlFor="speed"
                            className="form-label">
                            Perception
                        </label>
                        <div
                            className="form-text text-white mb-4"
                            id="speed-text">
                            Was this a positive or negative experience? Select a
                            value, with 0 being the most negative and 200 being
                            euphoria.
                        </div>
                        <input
                            type="range"
                            className="form-range range-input"
                            id="speed"
                            name="speed"
                            aria-describedby="speed"
                            min="0"
                            max="200"
                            step="1"
                            value={connectingLine}
                        />
                    </div>

                    <div className="form-group border p-4 mb-5 d-flex flex-wrap justify-content-between align-items-center form-group-container">
                        <div>
                            <span className="form-label">Solitude</span>
                            <div
                                className="form-text text-white mb-3"
                                id="connectingLine-text">
                                Was this experience alone or with others?
                            </div>
                        </div>
                        <div>
                            <div className="form-check mb-3">
                                <label
                                    className="form-check-label"
                                    htmlFor="alone">
                                    I was alone
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={ConnectingLineOptions.Alone}
                                        name="connectingLine"
                                        id="alone"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <label
                                    className="form-check-label"
                                    htmlFor="others">
                                    I was with others
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={ConnectingLineOptions.Others}
                                        name="connectingLine"
                                        id="others"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group border d-flex flex-wrap justify-content-between align-items-center p-4 mb-5 form-group-container">
                        <div>
                            <span className="form-label">Sharing</span>
                            <div
                                className="form-text text-white mb-3"
                                id="hover-text">
                                Did you want to share this experience or
                                experience it alone?
                            </div>
                        </div>
                        <div>
                            <div className="form-check mb-3">
                                <label
                                    className="form-check-label"
                                    htmlFor="repulse">
                                    I wanted be alone
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={OnHoverBehaviour.Repulse}
                                        name="hover"
                                        id="repulse"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <label
                                    className="form-check-label"
                                    htmlFor="grab">
                                    I wanted to share
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={OnHoverBehaviour.Grab}
                                        name="hover"
                                        id="grab"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group border p-4 mb-5 form-group-container">
                        <label
                            htmlFor="opacity"
                            className="form-label">
                            Intensity
                        </label>
                        <div
                            className="form-text text-white mb-3"
                            id="opacity-text">
                            How intense did this experience feel? 0 is not at
                            all, 1 is all-consuming.
                        </div>
                        <input
                            type="range"
                            className="form-range"
                            id="opacity"
                            name="opacity"
                            aria-describedby="opacity"
                            min="0"
                            max="1"
                            step="0.01"
                        />
                    </div>

                    <div className="form-group border p-4 mb-5 form-group-container">
                        <label
                            htmlFor="density"
                            className="form-label">
                            Duration
                        </label>
                        <div
                            className="form-text text-white mb-3"
                            id="density-text">
                            How long did this experience last?
                        </div>
                        <input
                            type="range"
                            className="form-range"
                            id="density"
                            name="density"
                            aria-describedby="density"
                            min="0"
                            max="600"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ControlForm;
