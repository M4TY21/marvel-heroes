import styled from "styled-components";

import { Field, Form } from "formik";
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
  flex: 7;

  padding: 30px 0;

  background: #242424;
`;

export const Content = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 65%;
`;

export const SearchInput = styled(Field)`
  padding-left: 0.5rem;

  height: 2rem;

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

export const Radio = styled(Field)`
  margin-right: 6px;
`;

export const SelectInput = styled(Select)``;

export const Button = styled.button``;

export const TodoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 8;

  background: #0e1647;
`;
