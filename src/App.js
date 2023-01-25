import React from "react";
import "./App.css";
import { useState } from "react";
import DrumPad from "./components/DrumPad.js";
import VolumeMixer from "./components/VolumeMixer";
import OnOff from "./components/OnOff";


function App() {
    const [display, setDisplay] = useState("");
    const [volume, setVolume] = useState(1);
    const [isOn, setIsOn] = useState(true);

    const drumPads = [
        { id: "Q", description: "Heater 1", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
        { id: "W", description: "Heater 2", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
        { id: "E", description: "Heater 3", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
        { id: "A", description: "Heater 4", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
        { id: "S", description: "Clap", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
        { id: "D", description: "Open-HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
        { id: "Z", description: "Kick-n'-Hat", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
        { id: "X", description: "Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
        { id: "C", description: "Closed-HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
    ]

    return (
        <div className="App">
            <div id="drum-machine">
                <div id="controlsAndDisplayWrapper">
                    <div id="display">{display}</div>
                    <div id="controls">
                        <VolumeMixer 
                            volume={volume}
                            setVolume={setVolume}
                            setDisplay={setDisplay}
                        />
                        <OnOff 
                            isOn={isOn}
                            setIsOn={setIsOn}
                        />
                    </div>
                </div>
                <div id="drumPadWrapper">
                    {drumPads.map((pad) => (
                      <DrumPad
                        key={pad.id}
                        id={pad.id}
                        description={pad.description}
                        sound={pad.sound}
                        setDisplay={setDisplay}
                        volume={volume}
                        isOn={isOn}
                      />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;

