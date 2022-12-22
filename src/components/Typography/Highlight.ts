import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

const Highlight = styled.span<{ color?: BrandColors | NeutralColors }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

Highlight.defaultProps = {
  color: BrandColors.colorBrand02,
};

export default Highlight;
