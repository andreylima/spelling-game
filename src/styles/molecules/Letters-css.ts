import styled from 'styled-components'

export const LettersCss = styled.div`
ul 
{
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 20px;
    min-height: 75px;
    li 
    {
        width: 75px;
        height: 75px;
        text-align: center;
        padding: 10px;
        border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
        border: solid 2px ${props => props.theme.SlangTokens.secondary.lightGray.value};
        margin: 0 10px;
        background-color: ${props => props.theme.SlangTokens.contrast.BASE.light.value};
        font-size: ${props => props.theme.SlangTokens.fontSize.XXXL.value}px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.shake {
            border: dotted 2px ${props => props.theme.SlangTokens.secondary.redWarning.value};
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }

        &.isDragging 
        {
            border: dotted 2px ${props => props.theme.SlangTokens.secondary.lightGray.value};
        }

        &[data-rbd-placeholder-context-id='1']
        {
            border: none;
        }
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