import { Container } from './styles';



function Sidenav() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">
            <img src="/icones/cervo.svg" alt="Cervo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/leao.svg" alt="Leão" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/gato.svg" alt="Gato" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/vaca.svg" alt="Vaca" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/ovelha.svg" alt="Ovelha" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/abelha.svg" alt="Abelha" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Sidenav;
