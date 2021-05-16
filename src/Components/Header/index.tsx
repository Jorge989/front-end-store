import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import WebJumpLogo from "../../assets/webjump.png";
import { Container } from "./styles";
import Filtro from "../Filtro";
import Button from "../Button";
interface IPropsButtons {
  id: number;
  name: string;
  link: string;
}
[];
const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [buttons, setButtons] = useState<IPropsButtons[]>([]);
  const botoes = [
    { id: 1, name: "Camisas", link: "/camisas" },
    { id: 1, name: "Calças", link: "/calcas" },
    { id: 1, name: "sapatos", link: "/sapatos" },
  ];
  const history = useHistory();
  const search = () => {
    let link = "";
    botoes.forEach((element) => {
      if (element.name === searchTerm) {
        link = element.link;
      }
    });
    history.push(link);
    // return <Redirect to={link} />;
  };

  return (
    <Container>
      <header>
        <div className="login">
          <a>Acesse sua Conta</a>
          <p>ou</p>
          <a>Cadastre-se</a>
        </div>
      </header>
      <div className="nav-header">
        <img src={WebJumpLogo} />
        <div className="filtro2">
          <Filtro
            name=""
            className="filtro"
            onChange={(event) => {
              setSearchTerm(event.target.value);
              console.log(searchTerm);
            }}
          />
          <Button className="botao" onClick={search}>
            BUSCAR
          </Button>
        </div>
        {/* {buttons.map((item) => (
          <a href={item.link} key={item.id}>
            {item.name}
          </a>
        ))}
        {botoes
          .filter(
            ({ name }) =>
              name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              name.length === 0
          )
          .map(({ name }) => name)} */}
      </div>
      <nav></nav>
    </Container>
  );
};

export default Header;
