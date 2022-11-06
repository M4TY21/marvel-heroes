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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 7;

  min-height: 300px;

  background: #242424;
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
  font-size: 1rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  color: #fafafa;
`;

export const Radio = styled.input`
  margin-right: 6px;
`;

export const SelectInput = styled(Select)``;

export const TodoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 8;
  padding-bottom: 1rem;

  background: #0e1647;
`;

export const TodoGrid = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0 2rem;
  gap: 1rem;

  height: 100%;
  width: 100%;

  overflow-y: scrollbar;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
