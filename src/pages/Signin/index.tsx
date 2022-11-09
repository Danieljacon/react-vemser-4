import React from "react";
import { Container, Row, Col } from "../../components/common.styled";
import { Menu } from "../../components/Menu";
import { BoxImage, LogoBox, MenuBox, SocialBox } from "./Signin.styled";
import iconLogo from "../../assets/icon-logo.png";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export const Signin = () => {
  return (
    <Container>
      <Row>
        <Col col={5} colMd={12}>
          <BoxImage>
            <div>
              <MenuBox>
                <Menu />
              </MenuBox>
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
          Teste2
        </Col>
      </Row>
    </Container>
  );
};
