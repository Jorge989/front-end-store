import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 18%;
  background-color: #fff;

  max-width: 100%;
  a {
    padding-left: 32px;

    list-style: circle;
    line-height: 40px;

    cursor: pointer;
  }
  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 20px;
    background-color: #fff;

    max-width: 100%;
    a {
      padding-left: 32px;

      list-style: circle;
      line-height: 40px;

      cursor: pointer;
    }
  }
`;
