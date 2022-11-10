import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./Button.styled";
import { TButtonProps } from "./types";

export const Button: React.FC<TButtonProps> = ({
  children,
  buttonType = "light",
  to = "",
}) => {
  return (
    <Link to={to}>
      <StyledButton buttonType={buttonType}>{children}</StyledButton>
    </Link>
  );
};
