import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: end;
`;
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-right: 5rem;
`;

export const NavItem = styled.li`
  color: #ddded6;
  margin: 1rem;
  text-transform: uppercase;
  font-size: 12px;
`;

export const NavBtn = styled.button`
  padding: 10px;
  font-size: 12px;
  background-color: #e7d429;
  font-weight: bold;
  color: #1a1a1a;
  outline: none;
  border-radius: 5px;
`;
