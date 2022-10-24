import React from "react";
import { NavBtn, NavContainer, NavItem, NavList } from "./navigation.styled";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>home</NavItem>
        <NavItem>about</NavItem>
        <NavItem>projects</NavItem>
        <NavItem>skills</NavItem>
        <NavItem>contact</NavItem>
        <NavItem>
          <NavBtn>Download my CV</NavBtn>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
