import styled from 'styled-components'

export const LinkIconCss = styled.div`
div 
{
    font-size: 14px;
    text-align: center;
    margin-top: 15px;
    color: ${props => props.theme.SlangTokens.brand.PRIMARY.color_1.value};
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
    margin-right: 10px;
    span 
    {
        margin-left: 10px;
        margin-right: 10px;
    }
    img 
    {
        vertical-align: middle;
        height: 20px;
        width: 20px;
    }
}
`