import styled from 'styled-components'

export const LettersCss = styled.div`
max-width: 100%;
.headerPlaceholder 
{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 75px;
    @media (max-width: 700px) {
      width: 100vw;
      max-width: 90%;
      min-height: 40px;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      overflow: hidden;
    }
    &.isDraggingOver 
        {
            background-color: ${props => props.theme.SlangTokens.secondary.lightBlue.value};
        }
    .letter 
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
        @media (max-width: 700px) {
            width: 40px;
            height: 40px;
            font-size: ${props => props.theme.SlangTokens.fontSize.SM.value}px;
            margin-bottom: 5px;
            margin-top: 5px;
        }
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