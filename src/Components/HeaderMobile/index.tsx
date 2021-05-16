import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import open from "../../assets/file1.svg";
import close from "../../assets/file2.svg";
import WebJumpLogo from "../../assets/webjump.png";
import { FiSearch } from "react-icons/fi";
//ROTAS DA PÁGINA, ALTERE AQUI TAMBÉM
const NavRoutes = [
  {
    to: "/camisetas",
    Name: "camisetas",
  },

  {
    to: "/calças",
    Name: "calças",
  },
  {
    to: "/sapatos",
    Name: "sapatos",
  },
  {
    to: "/contato",
    Name: "contato",
  },
];

interface effect {
  show: boolean;
}

const Header = styled.header`
  position: fixed;
  left: 0;
  display: flex;
  width: 100%;
  top: 0;
  align-items: center;
  right: 0;
  z-index: 9999;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  padding: 0 40px;
  margin: 0 auto;
  z-index: 9999;

  background-color: #fff;

  svg {
    width: 8%;
    color: #cb0d1f;
    height: 10%;
    margin-right: 10px;
  }
`;

const Brand = styled(NavLink)`
  img {
    display: flex;
    margin-right: 80%;
    width: 400px;
    height: 300px;
    height: auto;
    max-width: 400px;
  }
`;

const ToggleMenu = styled.img`
  display: flex;

  width: 90px;
  height: 200px;
  position: relative;
  z-index: 9999;
  margin-left: 17px;
`;

const Navgation = styled.div<effect>`
  position: absolute;
  background-color: #cb0d1f;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 400vh;
  ${(props) =>
    props.show &&
    css`
      transition: transform: scale(1.3);
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3) 0.8s;
    `}

  ul {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  li {
    padding: 30px 0;
    text-decoration: none;
    list-style: none;

    a {
      color: var(--white);
      font-size: 50px;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const Mobile: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <Header>
        <Container>
          <ToggleMenu src={menu ? close : open} onClick={showMenu} />
          {!menu && (
            <Navgation show={true}>
              <ul>
                {NavRoutes.map(({ to, Name }) => (
                  <li key={Name}>
                    <NavLink to={to}>{Name}</NavLink>
                  </li>
                ))}
              </ul>
            </Navgation>
          )}
          <Brand to="/">
            <img src={WebJumpLogo} alt="Loja" />
          </Brand>
          <FiSearch />
        </Container>
      </Header>
    </>
  );
};

export default Mobile;
