import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import {
  BrandColors,
  FontFamily,
  FontSize,
  NeutralColors,
} from "../../foundation/tokens";

export const MobileMenuLink = styled.div`
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid ${BrandColors.colorBrand02};

  &:last-child {
    border: none;
  }
`;

export const MobileCloseIcon = styled.div`
  position: absolute;
  top: 32px;
  right: 24px;
  cursor: pointer;
  color: ${BrandColors.colorBrand02};
`;

export const MobileMenu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  color: white;
  right: 0;
  top: 0;
  background-color: ${BrandColors.colorBrand01};
  padding-top: 50px;
`;

export const HeaderContainer = styled.header`
  height: 88px;
  width: 100%;
  background-color: ${BrandColors.colorBrand01};
  display: flex;
  align-items: center;
`;

export const HeaderNavLink = styled.a`
  color: ${NeutralColors.lightest};
  font-size: 18px;
  margin-right: 32px;
  cursor: pointer;
  text-decoration: none;

  :last-child {
    margin-right: 0;
  }
`;

export const HeaderNavList = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    display: flex;
  }
`;

export const HeaderIconList = styled.div`
  display: none;
  align-items: center;

  a {
    margin-right: 24px;
    line-height: 0;

    :last-child {
      margin-right: 0;
    }
  }

  @media ${MediaQueries.Medium} {
    display: flex;
  }
`;

export const HamburgerMenu = styled.div`
  display: block;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;
