import styled from "styled-components";
import { colors } from "../../styles/global";

export const GlobalContainer = styled.div`
  margin-top: -6px;
  padding: 0 60px;
  width: 100%;

  .categories {
    span {
      display: inline-block;
      margin: 40px 8px 40px 0;
      font-size: 1.6rem;
      color: ${colors.gray};
      font-weight: bold;

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
  .noProducts {
    margin: 40px 8px 40px 0;
    font-size: 1.6rem;
    color: ${colors.gray};
    font-weight: bold;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
  padding-bottom: 24px;
  position: relative;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .leftColumn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ProductDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.gray};
  border-radius: 14px;

  h2 {
    margin: 24px;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    color: #b9afaf;
    font-weight: bold;
    padding-left: 24px;
    padding-bottom: 24px;
  }
`;
