import React from "react";
import { Container, Row, Col } from "../../components/common.styled";
import { Menu } from "../../components/Menu";
import {
  BoxImage,
  ButtonsBox,
  LoginBox,
  LogoBox,
  PerfilBox,
  SocialBox,
} from "./Signin.styled";
import iconLogo from "../../assets/icon-logo.png";
import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "phosphor-react";
import perfilImage from "../../assets/perfil-img.png";
import { Button } from "../../components/Button";

export const Signin: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col col={5} colMd={12}>
          <BoxImage>
            <div>
              <Menu />
              <LogoBox>
                <img src={iconLogo} alt="Logo" />
              </LogoBox>
              <SocialBox>
                <FacebookLogo size={32} color="#070707" />
                <InstagramLogo size={32} color="#070707" />
                <TwitterLogo size={32} color="#070707" />
              </SocialBox>
            </div>
          </BoxImage>
        </Col>
        <Col col={7} colMd={12}>
          <LoginBox>
            <div>
              <p className="login">Login</p>
              <p className="pleaseSelect">Please select your account</p>
              <PerfilBox>
                <img src={perfilImage} alt="" />
                <p>
                  Welcome back, <strong>Hamid</strong>
                </p>
              </PerfilBox>
              <ButtonsBox>
                <span>Login to a different account</span>
                <Button buttonType="primary">
                  Login
                  <CaretRight size={16} color="#fff0f0" weight="bold" />
                </Button>

                <span>Don’t haven an account?</span>
                <Button buttonType="light">Create account</Button>
              </ButtonsBox>
            </div>
          </LoginBox>
        </Col>
      </Row>
    </Container>
  );
};
