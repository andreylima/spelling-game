import styled from 'styled-components'

export const WordBoxCss = styled.div`
min-width: 590px;
max-width: 90%;
border: solid 2px ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
position: relative;
@media (max-width: 700px) {
    min-width: auto;
    width: 100%;
}

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
    @media (max-width: 700px) {
        height: 100px;
    }
    .hide 
    {
        display: none;
    }

    .notice 
    {
        font-size: 12px;
        margin-top: 12px;
        @media (max-width: 700px) {
            margin-top: 5px;
        }
    }
    .iconPlace 
    {
        width: 109px;
        height: 109px;
        position: relative;
        @media (max-width: 700px) {
            height: 60px;
            width: 60px;
            text-align: center;
        }
    }
    img, button 
    {
        position: absolute;
        left: 0;
        @media (max-width: 700px) {
            height: 60px;
            width: 60px;
        }
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
    @media (max-width: 700px) {
        min-height: 60px;
        height: auto;
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