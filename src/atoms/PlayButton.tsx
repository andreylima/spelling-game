import useSound from 'use-sound';
import { PlayButtonCss } from '../styles/atoms/PlayButton-css';
import PlayIcon from '../assets/svg/PlayIcon.svg'
import DatalayerService from '../utils/datalyerService'

interface audioData {
    url : string
}

export const AudioButton = (props : audioData) => {
    const { sendCustomEvent } = DatalayerService()
    const [play, { duration }] = useSound(props.url);
    function animate(event : any){
        event.target.classList.add("playing")
        setTimeout(() => {
            event.target.classList.remove("playing")
        }, duration ?? 0)
    }
    return (
        <PlayButtonCss>
            <div onClick={(event) => {play(); animate(event); sendCustomEvent("Home", "Play audio", "Sound Icon")}}>
                <img src={PlayIcon} alt="Play Icon"/>
            </div>
        </PlayButtonCss>
    )
}