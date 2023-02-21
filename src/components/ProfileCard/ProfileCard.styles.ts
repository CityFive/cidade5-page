import { NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const CardLayout = styled.div`
  width: 300px;
  height: 415px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${NeutralColors.lightest};
  color: ${NeutralColors.darkest};
  border-radius: 12px;
  padding: 16px;
  img {
    width: 100%;
    height: 170px;
    border-radius: 12px;
    object-fit: cover;
  }
  h2 {
    font-size: 1.25rem;
    margin: 0;
    margin-top: 32px;
  }
  h3 {
    font-size: 1.125rem;
    color: ${NeutralColors.dark};
    font-weight: 100;
    margin: 0;
    margin-top: 8px;
  }
  p {
    font-size: 1rem;
    margin: 0;

    margin-top: 16px;
  }
`;
