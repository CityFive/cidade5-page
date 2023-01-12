import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

const ButtonPrimary = styled.button`
  width: fit-content;
  padding: 16px 24px;
  background-color: ${BrandColors.colorBrand05};
  color: ${NeutralColors.darkest};
  border: none;
  border-radius: 100px;
  font-family: "Proxima Nova Semibold";
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
