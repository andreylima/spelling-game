import styled from 'styled-components'

export const ButtonCss = styled.div`
text-align: center;
button 
{
    background: transparent;
    outline: none;
    border: 0;
    margin: auto;
    cursor: pointer;
    min-width: 262px;
    padding-left: 20px;
    padding-right: 20px;
    height: 62px;
    border-radius: ${props => props.theme.SlangTokens.border.LLG.value}px;
    background-color: ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
    color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
    font-size: ${props => props.theme.SlangTokens.fontSize.MD.value}px;
    text-align: center;
    margin: auto;
    transition: ${props => props.theme.SlangTokens.transitions[2].value};
    &:hover 
    {
        background-color: ${props => props.theme.SlangTokens.secondary.darkBlue.value};
    }
}
`