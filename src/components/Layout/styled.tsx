import styled from "styled-components";
import { colors } from "../../styles/global";

export const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100dvh;
`;

export const DiscountBar = styled.div`
  background-color: ${colors.green};
  padding: 6px 60px;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .iconLanguage {
    font-size: 1rem;
    position: absolute;
    color: ${colors.green};
  }

  .iconLanguageES {
    top: 5px;
    left: 5px;
  }

  .iconLanguageEN {
    top: 5px;
    right: 5px;
  }
`;
