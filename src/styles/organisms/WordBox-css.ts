import styled from 'styled-components'

export const WordBoxCss = styled.div`
width: 590px;
max-width: 90%;
border: solid 2px ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
position: relative;
.progressBar 
{
    position: absolute;
    height: 3px;
    background-color: ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
    bottom: 0;
    left: 0;
    &.isLoading 
    {
        animation: progress 2s forwards;
    }
}
.audioRow 
{
    height: 178px;
    border-bottom: solid 2px ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .hide 
    {
        display: none;
    }

    .notice 
    {
        font-size: 12px;
        margin-top: 12px;
    }
    .iconPlace 
    {
        width: 109px;
        height: 109px;
        position: relative;
    }
    img, button 
    {
        position: absolute;
        left: 0;
    }
}
.wordRow 
{
    height: 119px;
    text-align: center;
    width: 100%;
    > div {
        height: 100%;
    }
}
.loading 
{
    width: 109px;
    height: 109px;
    display: block;
}
@keyframes progress {
	0% {
		width: 0;
	}

	100% {
		width: 100%;
	}
}
`