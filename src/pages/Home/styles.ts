import styled from "styled-components";

import Select from "react-select";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  height: 100vh;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.aside`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 7;

  min-height: 23.75rem;

  background: #242424;

  @media (min-width: 700px) {
    max-width: 31.25rem;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 11rem;

  margin: 0.625rem;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 2rem;
  gap: 0.625rem;

  min-height: 14rem;

  border-radius: 1rem;
  background: #393939;
`;

export const SearchInput = styled.input`
  align-items: center;
  padding-left: 0.5rem;

  height: 2.2rem;

  border: 0;
  border-radius: 0.4rem;

  font-size: 1rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: #3f3f3f;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #3f3f3f;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;

  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fafafa;
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  margin: 0;

  width: 1.15rem;
  height: 1.15rem;
  border: 0.15rem solid #ff1734;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s transform ease-in-out;
    box-shadow: inset 0.5rem 0.5rem #ff1734;
  }

  :checked::before {
    transform: scale(1);
  }

  :focus {
    outline: none;
  }
`;

export const SelectInput = styled(Select)`
  max-width: 11rem;

  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  color: #3f3f3f;
`;

export const TodoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 8;

  background: #181919;
`;

export const TodoGrid = styled.ul`
  display: grid;
  justify-content: center;
  padding: 1.875rem 0px;
  grid-gap: 1.875rem 0px;

  height: 100%;
  width: 100%;

  overflow-y: scrollbar;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (min-width: 1007px) {
    grid-template-columns: auto auto;
    grid-gap: 1rem 1.875rem;
  }

  @media (min-width: 1268px) {
    grid-template-columns: auto auto auto;
    grid-gap: 1rem 1rem;
  }

  @media (min-width: 1560px) {
    grid-template-columns: auto auto auto auto;
    grid-gap: 1.25rem 1.25rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  justify-self: center;
  margin-top: auto;

  width: 15rem;
  height: 3.4rem;

  border: 0;
  border-radius: 0.3rem;
  background: #ff1734;

  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fafafa;

  cursor: pointer;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.7;
  }

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  @media (min-width: 1007px) {
    grid-column: 1/3;
  }

  @media (min-width: 1268px) {
    grid-column: 2/3;
  }

  @media (min-width: 1560px) {
    grid-column: 2/4;
  }
`;
