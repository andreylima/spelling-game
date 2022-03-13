import styled from 'styled-components'

export const RankingCss = styled.div`
.rankingBox 
{
    position: absolute;
    width: auto;
    height: 80px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    border: solid 1px ${props => props.theme.SlangTokens.secondary.lightGray.value};
    border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
    left: 0%;
    top: 0;
    @media (max-width: 700px) {
        width: 162px;
        left: 50%;
        margin-left: -81px;
    }
    .column 
    {
        border: solid 1px ${props => props.theme.SlangTokens.secondary.lightGray.value};
        padding: 10px;
        .chead 
        {

            img 
            {
                width: 30px;
                height: 30px;
                margin: auto;
            }
        }
        .cbody 
        {
            padding: 10px;
            font-weight: 700;
            text-align: center;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
`;