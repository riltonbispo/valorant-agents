"use client";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img<{ $bgColor: string }>`
  width: 100%;

  background-color: var(--white);
  transition: all ease-in 0.1s;

  ${Container}:hover & {
    background-color: ${(props) => `#${props.$bgColor}`};
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div<{ $bgColor: string }>`
  padding: 1.5625rem;
  z-index: 20;
  background-color: #282828;
  transition: all ease-in 0.1s;

  ${Container}:hover & {
    background-color: ${(props) => `#${props.$bgColor}`};
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 900;
`;

export const Details = styled.div`
  font-size: 17px;
  font-weight: 400;
`;
