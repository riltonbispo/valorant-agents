"use client";

import styled from "styled-components";

export const Container = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  height: 3.125rem;
  background-color: var(--black);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.nav`
  padding-inline: 4.375rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

export const Item = styled.li``;

export const Link = styled.a`
  font-size: 20px;
  font-weight: 900;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: inset 140px 0 0 0 var(--red-500);
    color: var(--black);
  }
`;
