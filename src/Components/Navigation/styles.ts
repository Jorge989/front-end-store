import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  p {
    color: #cb0d1f;
    font-weight: 500;
  }
  svg {
    margin-top: 3px;
  }
  @media (max-width: 576px) {
    display: flex;
    padding: 15px;
    align-items: flex-start;

    gap: 20px;
    width: 600px;
    font-size: 50px;
    margin-top: 220px;
    p {
      color: #cb0d1f;
      font-weight: 500;
    }
    svg {
      margin-top: 10px;
    }
  }
`;
