import React from "react";
import Link from "next/link";
import {
  Container,
  Content,
  Title,
  Description,
  Link as StyledLink,
} from "./Home.style";

export default function Home() {
  return (
    <Container>
      <Content>
        <Title>Valorant Agents</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          delectus fuga possimus natus laudantium eveniet expedita in nostrum
          reprehenderit rerum. Atque non quod modi hic explicabo sint nam
          nesciunt facilis?
        </Description>
        <Link href="/agents">Ver Agents</Link>
      </Content>
    </Container>
  );
}
