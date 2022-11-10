import React from "react";
import { Col, Row } from "../common.styled";
import { Menu } from "../Menu";
import { HeaderContainer, Wrapper } from "./Header.styled";
import iconLogo from "../../assets/icon-logo-black.png";
import {
  Bell,
  CaretDown,
  Chats,
  CirclesFour,
  CirclesThreePlus,
  ShoppingBag,
  Wallet,
} from "phosphor-react";
import { HeaderMenu } from "../HeaderMenu";
import perfilImg from "../../assets/perfil-img.png";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Row gap={12}>
        <Col col={3} colMd={12}>
          <Wrapper>
            <Menu color="black">
              <img src={iconLogo} alt="logo" />
            </Menu>
          </Wrapper>
        </Col>
        <Col col={6} colMd={12}>
          <Wrapper spaceBetween gap={15}>
            <HeaderMenu
              text="Dashboard"
              icon={<CirclesFour size={32} weight="fill" />}
            />
            <HeaderMenu
              text="Business"
              icon={<ShoppingBag size={32} weight="fill" />}
            />
            <HeaderMenu
              text="Tickets"
              icon={<CirclesThreePlus size={32} weight="fill" />}
            />
            <HeaderMenu
              text="Payments"
              icon={<Wallet size={32} weight="fill" />}
            />
          </Wrapper>
        </Col>
        <Col col={3} colMd={12}>
          <Wrapper itemsEnd>
            <div className="bell-message">
              <span>
                <Bell size={32} weight="fill" />
              </span>
              <span>
                <Chats size={32} weight="fill" />
              </span>

              <div className="perfil">
                <img src={perfilImg} alt="perfil" />
                <p>Peter</p>
                <CaretDown size={32} />
              </div>
            </div>
          </Wrapper>
        </Col>
      </Row>
    </HeaderContainer>
  );
};
