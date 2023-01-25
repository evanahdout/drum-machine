import React from "react";

function OnOff({ isOn, setIsOn }) {
    return (
        <div id="onOffWrapper">
            <label id="onOffLabel" htmlFor="on-off">On/Off</label>
            <input 
                type="checkbox"
                id="on-off"
                checked={isOn}
                onChange={() => setIsOn(!isOn)}
            />
        </div>
    )
}

export default OnOff;