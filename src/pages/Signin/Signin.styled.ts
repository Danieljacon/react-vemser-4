import styled from "styled-components";
import loginBackground from "../../assets/login-background.png";

export const BoxImage = styled.section`
  background: linear-gradient(
      180deg,
      rgba(49, 49, 49, 0.3) -4.74%,
      rgba(0, 0, 0, 0.55) 103.32%
    ),
    url(${loginBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  color: white;

  > div {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const LogoBox = styled.i`
  display: flex;
  justify-content: center;
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 10px;

  > svg {
    border-radius: 50%;
    border: 2px solid white;
    background: white;
    cursor: pointer;
  }
`;

export const LoginBox = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .login {
      color: #2f3367;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .pleaseSelect {
      font-size: 0.8rem;
      color: #303468;
      font-weight: 500;
    }
  }
`;

export const PerfilBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;

  > img {
    max-width: 66px;
  }

  > p {
    font-weight: 500;
    font-size: 1.1rem;
    color: #6b6d92;

    > strong {
      color: #303468;
    }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 45px;

  > span {
    display: inline-block;
    font-size: 0.8rem;
  }
`;
