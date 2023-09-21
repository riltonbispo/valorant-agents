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

  @media (max-width: 768px) {
    padding-inline: 1.25rem;
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
  font-weight: 900;
  font-size: clamp(1rem, 10vw, 8.125rem);
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-size: clamp(1rem, 10vw, 1.4375rem);
  width: clamp(20rem, 75%, 42.375rem);
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
