import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;

  > .location {
    padding: 0 20px;
    p {
      color: #8d91ab;
    }
  }

  > .my-tickets {
    margin-top: 20px;
    > h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2f3367;
    }

    > .ticket {
      margin-top: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2f3367;
        margin-top: 60px;
        text-align: center;
      }

      > p {
        font-size: 1rem;
        color: #868aa5;
        margin-bottom: 60px;
        text-align: center;
      }

      > a button {
        padding: 10px 20px;
      }
    }
  }
`;
