import styled from "styled-components";

import { Loader } from "react-feather";

export const Container = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`;

export const LoadIcon = styled(Loader)`
  animation: spin 3s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
