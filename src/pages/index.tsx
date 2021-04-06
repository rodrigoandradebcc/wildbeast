import React from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import { Main as Content, Title, Characteristics, Information, AdItem, Aside, Footer } from '../styles/styles'

export default function Home() {
  return (
    <>
      <div className="structure">
        <Header />
        <Sidenav />
        <Content>
          <Title>
            <h1>Lobo Cinza</h1>
            <span>da família canis lupus</span>
          </Title>
          <Characteristics>
            <div>
              <span className="number">72</span>
              <span className="label">kg</span>
            </div>

            <div>
              <span className="number">13</span>
              <span className="label">age</span>
            </div>
          </Characteristics>

          <p className="col-wide">
            É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
            cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos
            reafirmam que o lobo cinzento é ancestral do cão doméstico
          </p>

          <img src="/images/wolf1.jpg" alt="Wolf 1" className="image1" />

          <p className="featured">
            É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
            cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.
          </p>

          <img src="/images/wolf2.jpg" alt="Wolf 2" className="image2" />

          <p>
            O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral,
            a altura, medida a partir dos ombros, varia de 60 a 95 centímetros.
        </p>

          <p>
            O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de
            77 kg foram encontrados no Alasca, Canadá,[8] e na antiga União Soviética.
        </p>

          <blockquote className="mention col-wide" >
            <p>“Há algo no uivar do lobo que tira um homem do aqui e agora e o transporta para uma floresta da mente.”</p>
          </blockquote>

          <ul className="attributes">
            <li>Surgiu: 12.000 anos</li>
            <li>Tipo: Mamífero</li>
            <li>Idade Média: 13 anos</li>
            <li>Macho adulto: 80kg</li>
            <li>Fêmea adulta: 55kg</li>
            <li>Família: Lupus</li>
          </ul>

          <Information>
            <p >
              É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
              cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
            </p>
            <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
            cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
            </p>
          </Information>

          <img src="/images/wolf3.jpg" alt="Wolf 3" className="col-wide" />

        </Content>

        <Aside>
          <AdItem>
            <img src="/images/anuncio-1.jpg" alt="Anuncio 1" />
          </AdItem>
          <AdItem >
            <img src="/images/anuncio-2.jpg" alt="Anuncio 2" />
          </AdItem>
        </Aside>


        <Footer>
          <p>Origamid © 2012 - 2021. Alguns direitos reservados.</p>
        </Footer>
      </div>
    </>
  )
}
