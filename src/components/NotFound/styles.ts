import styled from "styled-components";

import { AlertCircle } from "react-feather";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin: auto;
  padding: 1.25rem 1.8rem;
  gap: 1rem;

  width: 15rem;

  border: 0;
  border-radius: 0.5rem;
  background: #fafafa;

  @media (min-width: 1007px) {
    grid-column: 1/3;
  }
`;

export const Icon = styled(AlertCircle)``;

export const Message = styled.h1`
  text-align: center;

  width: 100%;

  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
