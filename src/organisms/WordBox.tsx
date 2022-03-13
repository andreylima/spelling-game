import { WordCss } from "../styles/molecules/Word-css";
import { AudioButton } from "../atoms/PlayButton"
import { Word } from "../molecules/Word"
import { WordBoxCss } from '../styles/organisms/WordBox-css';
import { useRecoilValue } from "recoil";
import { AnswerStatusState } from "../recoilAtom/answerValidation";
import RightIcon from '../assets/svg/RightIcon.svg'
import { audioState, isLoadingState } from "../recoilAtom/spellItem";
import {Animated} from "react-animated-css";

interface WordBoxInterface {
    notice : string
}

export const WordBox = (props : WordBoxInterface) => {
    const AnswerStatus = useRecoilValue(AnswerStatusState)
    const isLoading = useRecoilValue(isLoadingState)
    const audio = useRecoilValue(audioState) 
    console.log(audio)
    return (
            <WordBoxCss>
                {audio && 
                <div className="audioBox">
                    <div className="audioRow">
                        <div className="iconPlace">
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={400} animationOutDuration={400} isVisible={AnswerStatus == "true"}>
                            <img src={RightIcon} alt="Right Answer" />
                        </Animated>
                        
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={400} animationOutDuration={400} isVisible={AnswerStatus != "true"}>
                        <AudioButton url={audio} />
                        </Animated>
                        </div>
                        
                        <span className="notice">{props.notice}</span>
                    <div className={`progressBar ${isLoading ? "isLoading" : ""}`}></div>
                    </div>
                    <div className="wordRow">
                        <Word/>
                    </div>
                </div>
                }
                {!audio && 
                    <div className="audioBox">
                            <div className="audioRow">
                            <div className="iconPlace">
                                <img src={'/img/loader.gif'} alt="Loading" className="loading"/>
                            </div>
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

