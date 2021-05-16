import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Magento from "../../assets/m2.jpg";
import { Container, Sidebar, Wrapper, Banner, Info } from "./style";
interface Item {
  id: number;
  name: string;
  path: string;
}
const Content: React.FC = () => {
  const [camisas, setCamisas] = useState<Item[]>([]);

  useEffect(() => {
    api.get(`list`).then((response) => {
      const items = response.data.filtro[0].items;
      setCamisas(items);
    });
  }, []);
  useEffect(() => {
    console.log(camisas);
  }, [camisas]);
  return (
    <>
      <Container>
        <Sidebar>
          <nav>
            <ul>
              <li>
                <Link to="/"></Link>Pâgina Inicial
              </li>
              {camisas.map((item) => (
                <li key={item.id}>
                  <Link to="/"></Link>
                  {item.name}
                </li>
              ))}
              <li>Contato</li>
            </ul>
          </nav>
        </Sidebar>
        <Wrapper>
          <Banner>
            <img src={Magento} />
          </Banner>
          <Info>
            <h2>Seja bem vindo!</h2>
            <p>
              Magento é uma das plataformas líderes em comércio eletrônico no
              mundo, fato atestado pelo Quadrante Mágico do Gartner . Magento é
              um sistema web completo, robusto e customizável, podendo ser
              utilizado por lojas virtuais de qualquer porte ou segmento. Você
              deseja criar uma loja virtual? Quer saber se o Magento é uma boa
              opção? Esse artigo é para você. Magento é lider no e-commerce
              devido à sua ampla utilização no mercado. Grandes marcas no Brasil
              e no mundo confiam nessa plataforma. Confira alguns exemplos de
              marcas globais que utilizam a plataforma: Coca-Cola, Nike, Burger
              King, Ford, Samsung, entre várias outras. No Brasil, ele também é
              amplamente utilizado por milhares de lojas virtuais, sendo uma das
              plataformas mais utilizadas no país. Conheça algumas lojas
              virtuais no Brasil que utilizam essa plataforma em 2018 Já falamos
              por aqui sobre a história do Magento. Agora, vamos conversar sobre
              as definições da plataforma, como ela funciona e as suas
              particularidades. Venha conosco descobrir o que é Magento.
            </p>
          </Info>
        </Wrapper>
      </Container>
    </>
  );
};

export default Content;
