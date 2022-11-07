import { AlertCircle } from "react-feather";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin-top: auto;
  padding: 20px 30px;
  gap: 1rem;

  width: 15rem;

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
  text-align: center;

  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
