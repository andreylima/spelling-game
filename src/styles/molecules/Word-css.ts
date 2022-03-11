import styled from 'styled-components'

export const WordCss = styled.div`
ul.word 
{
    display: flex;
    margin-bottom: 50px;
    &.isDraggingOver
    {
        background-color: ${props => props.theme.SlangTokens.secondary.color_2.value};
    }
    height: 40px;
    width: 400px;
    border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
    border: solid 2px ${props => props.theme.SlangTokens.secondary.color_2.value};
    background-color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
    font-size: ${props => props.theme.SlangTokens.fontSize.XL.value}px;
}
`