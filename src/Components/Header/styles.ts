import styled from "styled-components";

export const Container = styled.div`
  background-color: #fbfbfb;
  display: flex;

  flex-direction: column;
  width: 100%;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    background-color: #231f20;
    .login {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-right: 1%;
      width: 235px;
      a {
        color: #fff;
        cursor: pointer;

        text-decoration: underline;
      }
      p {
        color: #fff;
      }
    }
  }
  .nav-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    max-width: 1700px;

    img {
      margin-left: 5px;
      max-width: 100%;
    }
    .filtro2 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 70%;

      .botao {
        background-color: #cb0d1f;
        width: 19%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    background-color: #fbfbfb;
    display: flex;

    flex-direction: column;
    width: 1550px;
  }
  @media screen and (max-width: 768px) {
    background-color: #fbfbfb;
    display: flex;

    flex-direction: column;
    width: 1200px;
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 30px;

      background-color: #231f20;
      .login {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 1%;
        width: 235px;
        a {
          color: #fff;
          cursor: pointer;

          text-decoration: underline;
        }
        p {
          color: #fff;
        }
      }
    }
    .nav-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      align-items: center;
      max-width: 1700px;

      img {
        margin-left: 5px;
        max-width: 100%;
      }
      .filtro2 {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 70%;

        .botao {
          background-color: #cb0d1f;
          width: 19%;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
