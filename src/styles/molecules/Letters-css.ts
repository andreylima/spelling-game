import styled from 'styled-components'

export const LettersCss = styled.div`
ul 
{
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 20px;
    li 
    {
        width: 75px;
        height: 75px;
        text-align: center;
        padding: 10px;
        border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
        border: solid 2px ${props => props.theme.SlangTokens.secondary.color_2.value};
        margin: 0 10px;
        background-color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
        font-size: ${props => props.theme.SlangTokens.fontSize.XXXL.value}px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.isDragging 
        {
            border: dotted 2px ${props => props.theme.SlangTokens.secondary.color_2.value};
        }

        &[data-rbd-placeholder-context-id='1']
        {
            border: none;
        }
    }
}
`