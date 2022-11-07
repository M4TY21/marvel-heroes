import styled from "styled-components";

export const Container = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15rem;
  height: 14rem;

  border: 0;
  border-radius: 0.5rem;
  background: #fafafa;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 100px;

  border: 2px solid #ff1734;
  border-radius: 4rem;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 4rem;
`;

export const Name = styled.h1`
  justify-self: center;
  width: 100%;
  text-align: center;

  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  color: #242424;
`;

export const DescriptionIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  margin: 4px;

  border: 0;
  background: transparent;

  cursor: pointer;
`;
