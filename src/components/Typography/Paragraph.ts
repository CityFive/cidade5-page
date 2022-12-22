import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";
import { BrandColors, FontSize, NeutralColors } from "../../foundation/tokens";
import { margin, MarginProps } from "styled-system";
interface Props extends MarginProps {
  color?: BrandColors | NeutralColors;
}

const Paragraph = styled.p<Props>`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  color: ${(props) => props.color};
  font-size: ${FontSize.xs};
  margin: 0;
  padding: 0;
  ${margin};

  @media ${MediaQueries.Medium} {
    font-size: ${FontSize.md};
    line-height: 33.6px;
  }
`;

Paragraph.defaultProps = {
  color: BrandColors.colorBrand01,
};

export default Paragraph;
