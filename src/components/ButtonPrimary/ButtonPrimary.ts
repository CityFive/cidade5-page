import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

const ButtonPrimary = styled.button`
  padding: 12px 24px;
  background-color: ${BrandColors.colorBrand02};
  color: ${NeutralColors.lightest};
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

export default ButtonPrimary;
