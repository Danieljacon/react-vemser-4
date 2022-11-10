import { List } from "phosphor-react";
import React from "react";
import { MenuButton } from "./Menu.styled";
import { MenuProps } from "./types";

export const Menu: React.FC<MenuProps> = ({
  menuText = true,
  color = "white",
  children,
}) => {
  return (
    <MenuButton>
      <List size={32} color={color} />
      {children}
    </MenuButton>
  );
};
