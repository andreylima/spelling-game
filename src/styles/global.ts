import { createGlobalStyle } from 'styled-components'
export {Fonts} from'./font-css'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background: #fff;
  font-family: ${props => props.theme.SlangTokens.fontFamilies.Slang.value};
}
body * {
  font-family: Tenda;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
.main
{
  padding-top: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
h1 
{
  font-size: ${props => props.theme.SlangTokens.fontSize.XXXL.value}px;
  text-align: center;
  margin-bottom: 33px;
  @media (max-width: 700px) {
    font-size: ${props => props.theme.SlangTokens.fontSize.LG.value}px;
  }
}
`
