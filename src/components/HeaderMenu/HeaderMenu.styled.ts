import styled from "styled-components";

export const Box = styled.div`
  > a {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    color: #8a8ea8;
    gap: 5px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #0c83fa;
    }
  }
`;
