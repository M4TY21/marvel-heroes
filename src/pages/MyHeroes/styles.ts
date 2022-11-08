import styled from "styled-components";

import ReactStars from "react-rating-stars-component";

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
  align-items: center;
  padding: 1.5rem 2rem;
  gap: 0.3rem;

  min-height: 14rem;

  border-radius: 1rem;
  background: #393939;
`;

export const SearchInput = styled.input`
  align-items: center;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;

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

export const Label = styled.label`
  margin-bottom: -0.5rem;

  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fafafa;
`;

export const Rating = styled(ReactStars)``;

export const TodoContainer = styled.section`
  display: flex;
  flex: 8;

  background: #181919;
`;

export const TodoGrid = styled.ul`
  display: grid;
  justify-content: center;

  padding: 1.875rem 0px;
  grid-gap: 1.2rem 0px;

  height: fit-content;
  max-height: 100%;
  width: 100%;

  overflow-y: scrollbar;
  overflow-x: hidden;

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
