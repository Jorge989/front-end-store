import React from "react";

import {
  Header,
  HeaderMobile,
  NavHeader,
  ContentSapatos,
  Footer,
  Navigation,
  Filtro,
  Button,
} from "../../Components";

const Sapatos: React.FC = () => {
  return (
    <>
      <Header />
      <NavHeader />
      <Navigation />
      <HeaderMobile />
      <ContentSapatos />
      <Footer />
    </>
  );
};

export default Sapatos;
