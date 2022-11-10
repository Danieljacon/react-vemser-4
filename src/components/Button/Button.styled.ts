import styled, { css } from "styled-components";
import { TStyledButtonProps } from "./types";

export const StyledButton = styled.button<TStyledButtonProps>`
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.buttonType === "light" &&
    css`
      color: #007dfa;
      font-size: 0.8rem;
    `}

  ${(props) =>
    props.buttonType === "primary" &&
    css`
      background-color: #007dfa;
      color: #fff;
      font-size: 1rem;
    `}

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
