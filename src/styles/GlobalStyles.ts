import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html, body, #root {
    box-sizing: border-box;
    max-height: 100vh;
    --webkit-font-smoothing: antialiased;
    width: 100%;
  }
  
*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height:100%;

    
}
*,button, input{
    border:0;
    background: none;
    font-family: --"Muli", sans-serif
}
html {
    background: var(--primary);
    
}
:root {
--bluebtn: #2A2AFC;
--blackbtn: #262626;
--white: #FFFFFF;
--primary: ##FBFBFB;
    --footer: #DBDBDB; 
}
`;
