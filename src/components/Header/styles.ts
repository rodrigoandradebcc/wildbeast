import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  background: linear-gradient(135deg, #8844ee, #b07dfb);
  padding: 1.875rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  a img {
    max-width: 200px;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;

    li + li {
      margin-left: 1.875rem;
    }
  }

  nav a {
    display: block;
    padding: 10px;
    color: white;
    font-size: 1.125rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.3125rem;
    transition: 0.1s;

  }

  nav a:hover{
    background: rgba(0, 0, 0, 0.5);
    transition: 0.1s;
  }
`;
