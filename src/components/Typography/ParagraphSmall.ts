import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, FontSize, NeutralColors } from "../../foundation/tokens";

const ParagraphSmall = styled.p<{ color?: BrandColors | NeutralColors }>`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  color: ${(props) => props.color};
  font-size: ${FontSize.xs};
  line-height: 21px;

  @media ${MediaQueries.Medium} {
    font-size: ${FontSize.xxs};
  }
`;

ParagraphSmall.defaultProps = {
  color: BrandColors.colorBrand01,
};

export default ParagraphSmall;
