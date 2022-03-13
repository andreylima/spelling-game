import { WordCss } from "../styles/molecules/Word-css";
import { AudioButton } from "../atoms/PlayButton"
import { Word } from "../molecules/Word"
import { WordBoxCss } from '../styles/organisms/WordBox-css';
import { useRecoilValue } from "recoil";
import { AnswerStatusState } from "../recoilAtom/answerValidation";
import RightIcon from '../assets/svg/RightIcon.svg'
import WrongIcon from '../assets/svg/WrongIcon.svg'

interface WordBoxInterface {
    audioUrl? : string
    notice : string
}

export const WordBox = (props? : WordBoxInterface) => {
    const AnswerStatus = useRecoilValue(AnswerStatusState)

    return (
            <WordBoxCss>
                {props?.audioUrl && 
                <div className="audioBox">
                    <div className="audioRow">
                        {AnswerStatus == "true" && 
                            <img src={RightIcon} alt="Right Answer"/>
                        }
                        {AnswerStatus != "true" && 
                        <AudioButton url={props.audioUrl}/>
                        }
                        <span className="notice">{props.notice}</span>
                    </div>
                    <div className="wordRow">
                        <Word/>
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

