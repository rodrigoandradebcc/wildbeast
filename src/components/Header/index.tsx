
import { Container } from './styles';


function Header() {
  return (
    <Container>
      <a href=""><img src="/images/wildbeast.svg" alt=""/></a>
        <nav>
          <ul>
            <li><a href="#">sobre</a></li>
            <li><a href="#">animais</a></li>
            <li><a href="#">contato</a></li>
          </ul>
        </nav>
    </Container>
  );
};

export default Header;
