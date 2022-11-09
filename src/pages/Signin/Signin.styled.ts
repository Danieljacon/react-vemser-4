import styled from "styled-components";
import loginBackground from "../../assets/login-background.png";

export const BoxImage = styled.div`
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

export const MenuBox = styled.div`
  width: 100%;
`;

export const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
