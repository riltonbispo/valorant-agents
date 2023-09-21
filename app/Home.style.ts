"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-image: url("../public/bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 6.875rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 1;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  text-transform: uppercase;
  font-size: 8.125rem;
  font-weight: 900;
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-size: 23px;
  width: 678px;
  font-weight: 500;
`;

export const Link = styled.a`
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color: inherit;

  &:hover {
    box-shadow: inset 140px 0 0 0 var(--red-500);
    color: var(--black);
  }
`;
