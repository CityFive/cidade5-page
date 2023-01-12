import { NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const CardLayout = styled.div`
  width: 265px;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${NeutralColors.darkest};
  img {
    width: 264.45px;
    height: 256.67px;
    object-fit: cover;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.125rem;
  }
`;
