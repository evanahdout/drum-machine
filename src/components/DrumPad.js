import React, { useRef } from "react";

function DrumPad({ id, description, sound, setDisplay, volume, isOn }) {
    const audioRef = React.useRef(null);

    function handleClick() {
        if (isOn) {
            setDisplay(description);
            audioRef.current.volume = volume;
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    function handleKeyPress(event) {
        if (event.key.toUpperCase() === id && isOn) {
            setDisplay(description);
            audioRef.current.volume = volume;
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    });

    return (
        <button className="drum-pad" id={id} onClick={handleClick}>
            {id}
            <audio src={sound} ref={audioRef} className="clip" id={id} />
        </button>
    )
}

export default DrumPad;