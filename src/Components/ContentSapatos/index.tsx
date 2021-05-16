import React, { useEffect, useState } from "react";
import Menu1 from "../../assets/menu1.svg";
import Menu2 from "../../assets/menu2.svg";
// import { FiArrowRight } from "react-icons/fi";
// import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Tenis from "../Tenis";
import Paginacao from "../../Components/Paginação";
import { Container, Sidebar2, Wrapper, Info } from "./styles";

interface Item {
  id: number;
  name: string;
  path: string;
}
const ContentSapatos: React.FC = () => {
  const [camisas, setCamisas] = useState<Item[]>([]);
  const [tenis, setTenis] = useState<Item[]>([]);

  console.log(tenis);
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
        <Sidebar2>
          <div className="titulos">
            {" "}
            <h1>FILTRE POR</h1>
            <h3>CATEGORIAS</h3>
          </div>

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
            <div className="cores">
              <h3>CORES</h3>
              <div className="cores2">
                <div className="red"></div>
                <div className="orange"></div>
                <div className="blue"></div>
              </div>
              <div className="tipo">
                <h3>TIPO</h3>
                <ul>
                  <li>corrida</li>
                  <li>corrida</li>
                  <li>caminhada</li>
                  <li>causal</li>
                  <li>social</li>
                </ul>
              </div>
            </div>
          </nav>
        </Sidebar2>

        <Wrapper>
          <Info>
            <h2>Sapatos</h2>
            <hr></hr>
            <div className="options">
              {" "}
              <img src={Menu2} className="grid2" />
              <img src={Menu1} className="grid" />
            </div>

            <div className="filtro">
              <p>ORDENAR POR</p>
              <select
                className="inputsel1"
                name="qtd"
                placeholder="Qtd.advogados"
              >
                <option className="tip" value="0">
                  Preço:
                </option>
                <option id="maior" value="maior">
                  Maior Preço
                </option>
                <option id="menor" value="menor">
                  Menor Preço
                </option>
              </select>
            </div>
            <hr className="hr2"></hr>
            <Tenis />
          </Info>

          <Paginacao />
        </Wrapper>
      </Container>
    </>
  );
};

export default ContentSapatos;
