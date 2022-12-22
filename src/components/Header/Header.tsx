import React, { useState } from "react";
import { Box, Flex } from "reflexbox";
import { SocialInfo } from "../../api/data";
import { BrandColors } from "../../foundation/tokens";
import Grid from "../Grid";
import Icon, { Icons } from "../Icons";
import Typography from "../Typography";
import {
  HamburgerMenu,
  HeaderContainer,
  HeaderIconList,
  HeaderNavLink,
  HeaderNavList,
  MobileCloseIcon,
  MobileMenu,
  MobileMenuLink,
} from "./Header.styles";

interface Props {
  social: SocialInfo;
}

const Header: React.FC<Props> = ({ social }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Grid.Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Typography.Subtitle color={BrandColors.colorBrand02}>
            Cidade Cinco
          </Typography.Subtitle>
          <HeaderNavList>
            <HeaderNavLink href="#sobre">Sobre</HeaderNavLink>
            <HeaderNavLink href="#confissao">Confissão</HeaderNavLink>
            <HeaderNavLink href="#seminaristas">Seminaristas</HeaderNavLink>
            <HeaderNavLink href="#galeria">Galeria</HeaderNavLink>
            <HeaderNavLink href="#mais-info">Mais informações</HeaderNavLink>
          </HeaderNavList>
          <HeaderIconList>
            <a href={social.instagramUrl} target="_blank">
              <Icon
                icon={Icons.Instagram}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </a>
            <a href={social.youtubeUrl} target="_blank">
              <Icon
                icon={Icons.Youtube}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </a>
            <a href={social.spotifyUrl} target="_blank">
              <Icon
                icon={Icons.Spotify}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </a>
          </HeaderIconList>
          <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              icon={Icons.Burger}
              size="24px"
              color={BrandColors.colorBrand02}
            />
          </HamburgerMenu>
          {menuOpen && (
            <MobileMenu>
              <MobileCloseIcon onClick={() => setMenuOpen(false)}>
                X
              </MobileCloseIcon>

              <MobileMenuLink>
                <HeaderNavLink href="#sobre" onClick={() => setMenuOpen(false)}>
                  Sobre
                </HeaderNavLink>
              </MobileMenuLink>
              <MobileMenuLink>
                <HeaderNavLink
                  href="#confissao"
                  onClick={() => setMenuOpen(false)}
                >
                  Confissão
                </HeaderNavLink>
              </MobileMenuLink>
              <MobileMenuLink>
                <HeaderNavLink
                  href="#seminaristas"
                  onClick={() => setMenuOpen(false)}
                >
                  Seminaristas
                </HeaderNavLink>
              </MobileMenuLink>
              <MobileMenuLink>
                <HeaderNavLink
                  href="#galeria"
                  onClick={() => setMenuOpen(false)}
                >
                  Galeria
                </HeaderNavLink>
              </MobileMenuLink>
              <MobileMenuLink>
                <HeaderNavLink
                  href="#mais-info"
                  onClick={() => setMenuOpen(false)}
                >
                  Mais informações
                </HeaderNavLink>
              </MobileMenuLink>
            </MobileMenu>
          )}
        </Flex>
      </Grid.Container>
    </HeaderContainer>
  );
};

export default Header;
