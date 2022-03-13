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
        border: solid 2px ${props => props.theme.SlangTokens.secondary.lightGray.value};
        width: 100%;
        max-width: 75px;
        height: 75px;
        font-size: ${props => props.theme.SlangTokens.fontSize.XXXL.value}px;
        display: flex;
        justify-content: center;
        border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;

        &.wrong 
        {
            border: dotted 2px ${props => props.theme.SlangTokens.secondary.redWarning.value};
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }
    }
    &.isDraggingOver
    {
        background-color: ${props => props.theme.SlangTokens.secondary.lightBlue.value};
    }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`