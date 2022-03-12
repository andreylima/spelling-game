import { WordCss } from "../styles/molecules/Word-css";
import { AudioButton } from "../atoms/PlayButton"
import { Word } from "../molecules/Word"
import { WordBoxCss } from '../styles/organisms/WordBox-css';

interface WordBoxInterface {
    audioUrl? : string
    word? : any
    notice : string
}

export function WordBox(props? : WordBoxInterface) {
    return (
            <WordBoxCss>
                {props?.audioUrl && 
                <div className="audioBox">
                    <div className="audioRow">
                        <AudioButton url={props.audioUrl}/>
                        <span className="notice">{props.notice}</span>
                    </div>
                    <div className="wordRow">
                        <Word word={props.word}/>
                    </div>
                </div>
                }
                {!props?.audioUrl && 
                    <div className="audioBox">
                        <div className="audioRow">
                            <img src={'/img/loader.gif'} alt="Loading" className="loading"/>
                            <span className="notice">{props?.notice}</span>
                        </div>
                        <div className="wordRow">
                            <WordCss>
                                <ul className="word">
                                    <li>l</li>
                                    <li>o</li>
                                    <li>a</li>
                                    <li>d</li>
                                    <li>i</li>
                                    <li>n</li>
                                    <li>g</li>
                                </ul>
                            </WordCss>
                        </div>
                    </div>
                }
            </WordBoxCss>
        )
}

