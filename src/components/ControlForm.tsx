import { useState } from "react";
import { db, ref, set } from "../firebase.js";
import {
    ControlFormInputs,
    OnHoverBehaviour,
    ConnectingLineOptions,
} from "../types.ts";

const ControlForm = () => {
    const [date, setDate] = useState<ControlFormInputs["date"]>("000000");
    const [color, setColor] = useState<ControlFormInputs["color"]>("");
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
        <div className="mt-4">
            <form className="text-left">
                <div className="form-group mb-3">
                    <label
                        htmlFor="date"
                        className="form-label">
                        Enter a date of significance to you. Must be 6 digits in
                        any order (ex. DDMMYY, YYMMDD, MMDDYY etc.)
                    </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="date"
                        aria-describedby="date"
                        maxLength={6}
                    />
                </div>

                <div className="form-group mb-3">
                    <label
                        htmlFor="color"
                        className="form-label">
                        Pick a color.
                    </label>
                    <input
                        type="color"
                        className="form-control"
                        id="color"
                    />
                </div>

                <div className="form-group mb-3">
                    <label
                        htmlFor="speed"
                        className="form-label">
                        Was this a positive or negative experience? Select a
                        value, with 0 being the most negative and 200 being
                        euphoria.
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        id="speed"
                        name="speed"
                        aria-describedby="speed"
                        min="0"
                        max="200"
                    />
                </div>

                <div className="form-group mb-3">
                    Was this experience alone or with others?
                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor="alone">
                            Alone
                            <input
                                className="form-check-input"
                                type="radio"
                                value="alone"
                                name="connectingLine"
                                id="alone"
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor="others">
                            Others
                            <input
                                className="form-check-input"
                                type="radio"
                                value="others"
                                name="connectingLine"
                                id="others"
                            />
                        </label>
                    </div>
                </div>

                <div className="form-group mb-3">
                    Did you want to share this experience or experience it
                    alone?
                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor="solo">
                            Alone
                            <input
                                className="form-check-input"
                                type="radio"
                                value="repulse"
                                name="hover"
                                id="repulse"
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor="others">
                            Share
                            <input
                                className="form-check-input"
                                type="radio"
                                value="grab"
                                name="hover"
                                id="grab"
                            />
                        </label>
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label
                        htmlFor="opacity"
                        className="form-label">
                        How intense did this experience feel? 0 is not at all, 1
                        is all-consuming.
                    </label>
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

                <div className="form-group mb-3">
                    <label
                        htmlFor="density"
                        className="form-label">
                        How long did this experience last?
                    </label>
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
    );
};
export default ControlForm;
