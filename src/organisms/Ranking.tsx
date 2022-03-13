import { useRecoilValue } from 'recoil'
import { jumpedState, rightState, wrongState } from '../recoilAtom/counting'
import RightIcon from '../assets/svg/RightIcon.svg'
import WrongIcon from '../assets/svg/WrongIcon.svg'
import JumpIcon from '../assets/svg/JumpIcon.svg'
import { RankingCss } from "../styles/organisms/Ranking-css";

export const Ranking = () => {
    const rightCount = useRecoilValue(rightState)
    const wrongCount = useRecoilValue(wrongState)
    const jumpedCount = useRecoilValue(jumpedState)
    return (
        <RankingCss>
        <div className="rankingBox">
            <div className="column">
                <div className="chead">
                    <img src={RightIcon} alt="Right Answers" />
                </div>
                <div className="cbody">
                    {rightCount}
                </div>
            </div>
            <div className="column">
                <div className="chead">
                    <img src={WrongIcon} alt="Wrong Answers" />
                </div>
                <div className="cbody">
                    {wrongCount}
                </div>
            </div>
            <div className="column">
                <div className="chead">
                    <img src={JumpIcon} alt="Jump Answers" />
                </div>
                <div className="cbody">
                    {jumpedCount}
                </div>
            </div>
        </div>
        </RankingCss>
    )
}