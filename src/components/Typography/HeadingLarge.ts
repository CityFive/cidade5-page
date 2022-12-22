import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, FontFamily, FontSize } from "../../foundation/tokens";
import { margin, MarginProps } from "styled-system";

const HeadingLarge = styled.h1<MarginProps>`
  font-size: ${FontSize.lg};
  letter-spacing: 0.1px;
  color: ${BrandColors.colorBrand01};
  font-family: ${FontFamily.FONT_FAMILY_01};
  line-height: 100%;
  ${margin};

  @media ${MediaQueries.Medium} {
    font-size: ${FontSize.xxl};
  }
`;

HeadingLarge.defaultProps = {
  margin: 0,
};

export default HeadingLarge;
