import React from "react";
import Link from "next/link";
import {
  Container,
  Content,
  List,
  Item,
  Link as StyledLink,
} from "./Header.style";

const Header = () => {
  return (
    <Container>
      <Content>
        <List>
          <Item>
            <Link href="/">
              <StyledLink>Home</StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/agents">
              <StyledLink>Agents</StyledLink>
            </Link>
          </Item>
        </List>
      </Content>
    </Container>
  );
};

export default Header;
