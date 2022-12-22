import styled from "styled-components";
import {
  FontFamily,
  BrandColors,
  FontSize,
  NeutralColors,
} from "../../foundation/tokens";

const Subtitle = styled.h2<{ color?: BrandColors | NeutralColors }>`
  font-family: ${FontFamily.FONT_FAMILY_01};
  color: ${(props) => props.color};
  line-height: 32px;
  font-size: ${FontSize.md};
  text-transform: uppercase;
`;

Subtitle.defaultProps = {
  color: BrandColors.colorBrand01,
};

export default Subtitle;
