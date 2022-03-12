import styled from 'styled-components'

export const WordBoxCss = styled.div`
width: 590px;
max-width: 90%;
border: solid 2px ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
border-radius: ${props => props.theme.SlangTokens.border.XXS.value}px;
margin: auto;

.audioRow 
{
    height: 178px;
    border-bottom: solid 2px ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .notice 
    {
        font-size: 12px;
        margin-top: 12px;
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
`