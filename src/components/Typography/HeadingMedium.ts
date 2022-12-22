import styled from "styled-components";
import { BrandColors, FontFamily, FontSize } from "../../foundation/tokens";
import { margin, MarginProps } from "styled-system";

const HeadingMedium = styled.h1<MarginProps>`
  font-size: ${FontSize.md};
  letter-spacing: 0.1px;
  color: ${BrandColors.colorBrand01};
  font-family: ${FontFamily.FONT_FAMILY_01};
  ${margin};
`;

HeadingMedium.defaultProps = {
  margin: 0,
};

export default HeadingMedium;
