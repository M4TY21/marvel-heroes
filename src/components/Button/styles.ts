import styled from "styled-components";

export const Container = styled.button`
  align-items: center;

  width: 65%;
  min-width: 177.3px;
  min-height: 35px;

  border: 0;
  border-radius: 0.3rem;
  background: #ff1734;

  cursor: pointer;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;

  color: #fafafa;
`;
