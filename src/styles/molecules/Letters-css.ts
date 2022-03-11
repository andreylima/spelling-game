import styled from 'styled-components'

export const LettersCss = styled.div`
ul 
{
    li 
    {
        display: inline-block;
        padding: 10px;
        border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
        border: solid 2px ${props => props.theme.SlangTokens.secondary.color_2.value};
        margin: 0 10px;
        background-color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
        font-size: ${props => props.theme.SlangTokens.fontSize.SM.value}px;
    }
}
`