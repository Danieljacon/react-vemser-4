import styled, { css } from "styled-components";
import { TColStyled, TRowStyled } from "./types.styled";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div<TRowStyled>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${(props) => props.gap}px;
`;

export const Col = styled.div<TColStyled>`
  min-width: 300px;
  grid-column: span ${(props) => props.col || 12};

  ${(props) =>
    props.colMd &&
    css`
      @media (max-width: 768px) {
        grid-column: span ${props.colMd};
      }
    `}
`;
