import React, { useState } from "react";
import { Box, Flex } from "reflexbox";
import { SocialInfo } from "../../api/data";
import { BrandColors, NeutralColors } from "../../foundation/tokens";
import Grid from "../Grid";
import Icon, { Icons } from "../Icons";
import Typography from "../Typography";
import {
  ButtonNavLink,
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
          <Typography.Subtitle color={NeutralColors.lightest}>
            Cidade Cinco
          </Typography.Subtitle>
          <HeaderNavList>
            <HeaderNavLink href="#sobre">Nossa História</HeaderNavLink>
            <HeaderNavLink href="#confissao">Confissão De Fé</HeaderNavLink>
            <HeaderNavLink href="#seminaristas">Atividades</HeaderNavLink>
            <HeaderNavLink href="#galeria">Equipe Pastoral</HeaderNavLink>
            <ButtonNavLink href="#galeria">Contribuir</ButtonNavLink>
          <HeaderIconList>
            <a href={social.instagramUrl} target="_blank">
              <Icon
                icon={Icons.Instagram}
                size="18px"
                color={NeutralColors.lightest}
                />
            </a>
            <a href={social.youtubeUrl} target="_blank">
              <Icon
                icon={Icons.Youtube}
                size="18px"
                color={NeutralColors.lightest}
                />
            </a>
            <a href={social.spotifyUrl} target="_blank">
              <Icon
                icon={Icons.Spotify}
                size="18px"
                color={NeutralColors.lightest}
                />
            </a>
          </HeaderIconList>
                </HeaderNavList>
          <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              icon={Icons.Burger}
              size="18px"
              color={NeutralColors.lightest}
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
