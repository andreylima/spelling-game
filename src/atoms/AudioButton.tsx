import useSound from 'use-sound';

export function AudioButton() {
    const [play] = useSound("https://cdn.slangapp.com/sounds/b7fcd3417c2a14be3931c1600c7f8384d2da755a/normalized.mp3");
    return (
        <button onClick={() => play()}>PLAY</button>
    )
}