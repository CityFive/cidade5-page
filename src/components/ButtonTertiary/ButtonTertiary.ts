import styled from "styled-components";
import { NeutralColors } from "../../foundation/tokens";

const ButtonTertiary = styled.button`
  padding: 16px 24px;
  background-color: ${NeutralColors.lightest};
  color: ${NeutralColors.darkest};
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

export default ButtonTertiary;
