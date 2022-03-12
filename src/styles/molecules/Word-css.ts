import styled from 'styled-components'

export const WordCss = styled.div`

ul.word 
{
    background-color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
    font-size: ${props => props.theme.SlangTokens.fontSize.XL.value}px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    li 
    {
        border: solid 2px ${props => props.theme.SlangTokens.secondary.color_2.value};
        width: 100%;
        max-width: 75px;
        height: 75px;
        font-size: ${props => props.theme.SlangTokens.fontSize.XXXL.value}px;
        display: flex;
        justify-content: center;
        border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
    }
    &.isDraggingOver
    {
        background-color: ${props => props.theme.SlangTokens.secondary.lightBlue.value};
    }
}
`