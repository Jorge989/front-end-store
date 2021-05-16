import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Sidebar = styled.aside`
  background-color: grey;
  flex: 1;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  nav {
    padding: 40px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    li {
      padding: 10px 0;
    }
  }
  @media (max-width: 576px) {
    background-color: grey;
    flex: 1;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    nav {
      width: 300px;
      padding: 30px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;

      li {
        font-size: 40px;
        margin-left: 20px;
        padding: 10px 0;
      }
    }
  }
`;
export const Wrapper = styled.div`
  flex: 3;
  padding: 10px;
`;
export const Banner = styled.div`
  width: 100%;
  @media (max-width: 576px) {
    margin-top: 200px;
    img {
      height: 300px;
      width: 200px;
    }
  }
  img {
    width: 100%;
  }
`;
export const Info = styled.div`
  margin-top: 10px;
  @media screen and (max-width: 769px) {
    width: 1000px;
    height: 900px;
    font-size: 30px;
  }
  @media (max-width: 576px) {
    margin-top: 0px;
    width: 900px;
    height: 1600px;
    h2 {
      font-size: 60px;
    }
    p {
      font-size: 42px;
    }
  }
`;
