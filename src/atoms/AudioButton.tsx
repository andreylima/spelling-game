import useSound from 'use-sound';

interface audioData {
    url : string
}

export function AudioButton(props : audioData) {
    const [play] = useSound(props.url);
    return (
        <button onClick={() => play()}>PLAY</button>
    )
}