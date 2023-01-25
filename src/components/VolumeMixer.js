import React from "react";

function VolumeMixer({ volume, setVolume, setDisplay }) {
    return (
        <div id="volumeMixerWrapper">
            <label id="volumeLabel" htmlFor="volume">Volume</label>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                id="volume"
                onChange={(event) => {
                    setVolume(event.target.value);
                    setDisplay("Volume: " + Math.round(event.target.value * 100) + "%");
                }}
            />
        </div>
    )
}

export default VolumeMixer;