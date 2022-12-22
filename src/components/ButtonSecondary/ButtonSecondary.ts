import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

const ButtonSecondary = styled.button`
  padding: 12px 24px;
  color: ${BrandColors.colorBrand02};
  background-color: ${NeutralColors.lightest};
  border: none;
  text-transform: uppercase;
  font-family: "Proxima Nova";
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }
`;

export default ButtonSecondary;
