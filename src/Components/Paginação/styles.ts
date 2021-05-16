import styled from "styled-components";
export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  cursor: pointer;
  svg {
    color: #28a3aa;
    width: 20px;
    height: 20px;
  }
  .pagina1 {
    color: #cc0d1d;
  }
  @media (max-width: 769px) {
    height: 60px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-size: 30px;
    svg {
      color: #28a3aa;
      width: 40px;
      height: 50px;
    }
    .pagina1 {
      color: #cc0d1d;
    }
  }
  @media (max-width: 576px) {
    height: 60px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-size: 60px;
    margin-left: 650px;
    margin-top: 250px;
    svg {
      color: #28a3aa;
      width: 40px;
      height: 50px;
    }
    .pagina1 {
      color: #cc0d1d;
    }
  }
`;
