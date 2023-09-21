"use client";

import styled from "styled-components";
import bgImage from "@/public/image6.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  padding-inline: 70px;
  justify-content: center;
  z-index: -3;
`;

export const ContainerBefore = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(bgImage);
  opacity: 0.05;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
`;

export const Description = styled.p`
  font-size: 23px;
  font-weight: 400;
`;

export const List = styled.ul`
  margin-top: 1.875rem;
  background-color: #1b1b1b;
  box-shadow: rgba(0px 7px 20px rgba(0, 0, 0, 0.3));
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.125rem;
  padding: 1.875rem;
`;

export const Item = styled.li`
  width: 348px;
`;
