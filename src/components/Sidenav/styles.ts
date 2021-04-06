import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sidenav;
  background: #fafbfc;
  padding: 1.875rem;

  li a {
    display: block;
    min-width: 60px;
    max-width: 100px;
    margin: 0 auto 1.875rem auto;
    background: white;

    padding: 1.25rem;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    transition: .1 ease-out
  }

  li a:hover {
    background: #b07dfb;
  }
`;
