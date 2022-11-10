import React from "react";
import { Link } from "react-router-dom";
import { Box } from "./HeaderMenu.styled";
import { HeaderMenuProps } from "./types";

export const HeaderMenu: React.FC<HeaderMenuProps> = ({text, to = "", icon}) => {
  return (
    <Box>
      <Link to={to}>
        {icon}
        <span>{text}</span>
      </Link>
    </Box>
  );
};
