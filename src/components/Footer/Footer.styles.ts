import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors } from "../../foundation/tokens";

export const FooterContainer = styled.footer`
  background-color: ${BrandColors.colorBrand01};
  display: flex;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 35px 32px;

  @media ${MediaQueries.Medium} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-gap: 16px;
    padding-top: 58px;
    padding-bottom: 58px;
    align-items: flex-start;
    text-align: left;
  }
`;

export const FooterSocialList = styled.div`
  margin-top: 40px;

  a {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
