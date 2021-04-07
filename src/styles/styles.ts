import styled from 'styled-components';

export const Main = styled.main`
  grid-area: content;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  .featured {
    font-size: 0.875em;
    color: #b07dfb;
    max-width: 16em;
  }

  .col-wide {
    grid-column: 1 / -1;
  }

  .image1 {
    grid-row: span 2;
    align-self: end;
  }

  .image2 {
    align-self: end;
  }

  .mention,
  .attributes {
    align-self: start;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    background: linear-gradient(135deg, #8844ee, #b07dfb);
  }

  .mention p {
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    color: white;
  }

  .attributes li {
    color: white;
    font-family: Courier, monospace;
    font-size: 1.125em;
    padding: 15px;
  }
  .attributes li + li {
    border-top: 2px solid #b07dfb;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0.7);
  }
`;

export const Title = styled.div`
  color: #b07dfb;

  h1 {
    font-size: 3.75em;
    line-height: 1;
    font-weight: 700;
  }

  span {
    font-size: 0.975em;
    font-style: italic;
  }
`;

export const Characteristics = styled.div`
  display: flex;
  align-items: flex-start;

  & > div {
    width: 80px;
    text-align: center;
    background: linear-gradient(135deg, #8844ee, #b07dfb);
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    position: relative;
  }

  > div:first-child {
    margin-right: 30px;
  }

  span {
    display: block;
    color: #b07dfb;
  }

  .number {
    font-size: 3em;
    line-height: 1;
    margin-top: 10px auto;
  }

  .label {
    background: white;
    border-radius: 0 0 5px 5px;
    padding: 5px 0;
    position: relative;
    top: 2px;
  }
`;

export const Information = styled.div`
  p + p {
    margin-top: 30px;
  }
`;

export const Aside = styled.aside`
  grid-area: announcement;
  background: #fafbfc;
  display: grid;
  align-content: start;
  padding: 30px;
  grid-gap: 30px;
`;

export const AdItem = styled.div``;

export const Footer = styled.footer`
  grid-area: footer;
  background: linear-gradient(135deg, #8844ee, #b07dfb);

  font-size: 1.2em;
  line-height: 1.6;
  letter-spacing: -0.005em;

  p {
    color: white;
    text-align: center;
    padding: 30px;
    font-weight: bold;
  }
`;
