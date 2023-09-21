"use client";

import styled, { keyframes } from "styled-components";

const ImageAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const TitleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const DescriptionAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const AbilitiesAnimation = keyframes`
  0% {
    height: 0px;
  }
  100%{
    height: 300px;
  }
`;

export const Container = styled.div`
  margin-top: 3.125rem;
  padding-inline: 4.375rem;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Info = styled.div``;

export const InfoTitle = styled.h2`
  font-size: 119px;
  font-weight: 900;
  animation: ${TitleAnimation} 1s 1s backwards;
`;

export const InfoDescription = styled.p`
  color: #acacad;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  animation: ${DescriptionAnimation} 1s 1s backwards;
`;

export const Abilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
  animation: ${AbilitiesAnimation} 2s 1s backwards;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #161515;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--red-600);
    border-radius: 5px;
  }
`;

export const AbilityContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const AbilityImage = styled.img`
  height: 50px;
`;

export const AbilityBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: #161515;
  }
`;

export const AbilityTitle = styled.h4`
  font-size: 20px;
  font-weight: 900;
`;

export const AbilityDescription = styled.p`
  font-size: 18px;
  font-weight: 200;
`;

export const Image = styled.img`
  animation: ${ImageAnimation} 2s;
  height: 90vh;
`;
