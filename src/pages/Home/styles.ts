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

  min-height: 380px;

  background: #242424;

  @media (min-width: 700px) {
    max-width: 500px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 177.3px;

  margin: 10px;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 2rem;
  gap: 10px;

  min-height: 226px;

  border-radius: 1rem;
  background: #393939;
`;

export const SearchInput = styled.input`
  align-items: center;
  padding-left: 0.5rem;

  height: 35px;

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

  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #2f6de0;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 0.5em 0.5em #2f6de0;
  }

  :checked::before {
    transform: scale(1);
  }

  :focus {
    outline: none;
  }
`;

export const SelectInput = styled(Select)`
  max-width: 177px;

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
  padding: 30px 0;
  grid-gap: 30px 0px;

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
    grid-gap: 15px 30px;
  }

  @media (min-width: 1244px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1439px) {
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px 20px;
  }
`;

export const Button = styled.button`
  align-items: center;
  justify-self: center;
  margin-top: auto;

  width: 15rem;
  height: 55px;

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

  @media (min-width: 1439px) {
    grid-column: 2/4;
  }
`;
