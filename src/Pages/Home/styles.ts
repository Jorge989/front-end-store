import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  width: 100%;
  background-color: green;
  .home-nav {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    /* max-width: 1350px; */
    max-height: 100%;
    .textos {
      max-width: 100%;
      max-height: 100%;
      background-color: red;
      p {
        max-height: 100%;
      }
    }
    img {
      width: 100%;
      height: 250px;
      max-width: 100%;
    }
  }
  h2 {
  }
`;
