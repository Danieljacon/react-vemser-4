import { List } from "phosphor-react";
import React from "react";
import { MenuButton } from "./Menu.styled";

type MenuProps = {
  menuText?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ menuText = true }) => {
  return (
    <MenuButton>
      <List size={32} color="#fff0f0" />
      {menuText ? <span>Menu</span> : null}
    </MenuButton>
  );
};
