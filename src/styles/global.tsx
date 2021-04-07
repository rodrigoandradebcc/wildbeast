import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #FFFFFF;
    --gray-line: #dcdde0;
    --text: #4C4C4C;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  img{ 
    display: block;
    max-width: 100%;
    border-radius: 5px;
  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--background);
    color: var(--text);

    
  }

  body, input, textarea, button{
    font: 400 1rem "Vollkorn", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  li{ 
    list-style: none;
  }

  
  .structure{
    display: grid;
    grid-template-columns: minmax(160px, 1fr) 3fr 300px;
    grid-template-areas: 
      "header header header"
      "sidenav content announcement"
      "footer footer footer"
    ;
  }

  @media (max-width: 1200px){
    .structure{
      grid-template-areas:
        "header header header"
        "sidenav content content"
        "sidenav announcement announcement"
        "footer footer footer"
      ;
    }
  }

  @media (max-width: 760px){
    .structure{

      grid-template-columns: 100%;
      grid-template-areas:
        "header"
        "sidenav"
        "content"
        "announcement"
        "footer"
      ;
    }
  }

  
`;