import styled from "styled-components";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const Container = styled.div`
  width: 1078px;
  height: 400px;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.lightest};

  }
  h2 {
    text-align: left;
    margin: 0;
    font-size: 3rem;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.lightest};
  }
`;

export const SectionWhatsApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 528px;
  background-color: ${BrandColors.colorBrand02};
`;

export const PlayButton = styled(ButtonPrimary)`
  display: flex;
  width: 100%;
  justify-content: center;

  @media ${MediaQueries.Medium} {
    width: 230px;
    justify-content: space-between;
  }
`;
