import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const CardActivity = styled.div<{ id: number }>`
  width: 950px;
  height: 400px;
  background-color: ${BrandColors.colorBrand05};
  border-radius: 24px 0px 0px 0px;
  border-radius: ${(props) =>
    props.id % 2 === 0 ? "24px 0px 0px 0px" : "0px 24px 0px 0px"};

  display: flex;
  align-items: center;
  overflow: hidden;
  flex: 1;
  img {
    width: 500px;
    height: 400px;
    background-size: 500px 150px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 300px;
  gap: 56px;
  flex: 1;
  margin: 48px;

  h3 {
    color: ${NeutralColors.darkest};
    font-size: 2rem;
    margin-top: 0;
  }
  p {
    color: ${NeutralColors.darkest};
  }
`;
