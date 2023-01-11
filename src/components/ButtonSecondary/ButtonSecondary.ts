import styled from "styled-components";
import { BrandColors, NeutralColors } from "../../foundation/tokens";

const ButtonSecondary = styled.button`
  padding: 16px 24px;
  background-color: ${BrandColors.colorBrand01};
  color: ${NeutralColors.lightest};
  border: none;
  border-radius: 100px;
  font-family: "Proxima Nova Semibold";
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: fit-content;


  svg {
    margin-left: 8px;
  }
`;

export default ButtonSecondary;
