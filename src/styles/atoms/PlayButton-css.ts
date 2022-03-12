import styled from 'styled-components'

export const PlayButtonCss = styled.div`
div 
{
    img 
    {
        background: transparent;
        outline: none;
        border: 0;
        margin: auto;
        cursor: pointer;
        height: 109px;
        width: 109px;
        border-radius: 100%;
    }
    .playing 
    {
        animation: pulse 2s infinite;
    }
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 ${props => props.theme.SlangTokens.secondary.lightBlue.value};
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px ${props => props.theme.SlangTokens.secondary.lightBlue.value};
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 ${props => props.theme.SlangTokens.secondary.lightBlue.value};
	}
}
`