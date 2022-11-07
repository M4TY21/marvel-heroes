import { AlertCircle } from "react-feather";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: auto;
  padding: 15px 30px;
  gap: 2rem;

  width: 17rem;

  border: 0;
  border-radius: 0.5rem;
  background: #fafafa;

  @media (min-width: 1007px) {
    grid-column: 1/3;
  }

  @media (min-width: 1439px) {
    grid-column: 2/4;
  }
`;

export const Icon = styled(AlertCircle)``;

export const Message = styled.h1`
  width: 100%;

  font-size: 1.3rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
`;
