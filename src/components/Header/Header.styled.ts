import styled from "styled-components";
import { WrapperProps } from "./types";

export const HeaderContainer = styled.header`
  padding: 20px;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.centered
      ? "center"
      : props.itemsEnd
      ? "flex-end"
      : props.spaceBetween
      ? "space-between"
      : "flex-start"};
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};

  > .bell-message {
    color: #8a8ea8;
    gap: 20px;
    display: flex;

    > span {
      /* display: flex;
      align-items: center; */
      position: relative;
      z-index: 1;

      &::after {
        z-index: -1;
        content: "";
        position: absolute;
        left: -3px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f75388;
      }

      svg {
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        position: relative;
        z-index: 1;

        &:hover {
          color: #0c83fa;
        }
      }
    }

    > .perfil {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      padding-left: 60px;
      transition: all 0.2s ease-in-out;

      > img {
        position: absolute;
        left: 0;
        max-width: 50px;
      }

      &:hover {
        color: #0c83fa;

        > img {
          transform: scale(1.05);
        }
      }
    }
  }
`;
