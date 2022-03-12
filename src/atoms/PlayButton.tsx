import useSound from 'use-sound';
import { PlayButtonCss } from '../styles/atoms/PlayButton-css';
import PlayIcon from '../assets/svg/PlayIcon.svg'

interface audioData {
    url : string
}

export const AudioButton: React.FC<audioData> = (props) => {
    const [play, { stop, duration }] = useSound(props.url);
    function animate(event : any){
        event.target.classList.add("playing")
        setTimeout(() => {
            event.target.classList.remove("playing")
        }, duration ?? 0)
    }
    return (
        <PlayButtonCss>
            <div onClick={(event) => {play(); animate(event);}}>
                <img src={PlayIcon}/>
            </div>
        </PlayButtonCss>
    )
}