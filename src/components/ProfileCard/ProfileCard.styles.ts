import styled from "styled-components";
import { BrandColors } from "../../foundation/tokens";

export const CardLayout = styled.div`
  width: 320px;
`;

export const CardImage = styled.div`
  margin-bottom: -5px;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 18px;
  position: absolute;
  bottom: 0;
`;

export const CardBody = styled.div`
  padding-top: 32px;
  padding-right: 24px;
  padding-left: 24px;
  border: 2px solid ${BrandColors.colorBrand05};
  border-top: none;
  position: relative;
  height: 300px;
`;

export const CardIcon = styled.a`
  margin-right: 24px;
  cursor: pointer;
`;
