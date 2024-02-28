import styled from "styled-components";
import { colors } from "../../styles/global";

export const DiscountContainer = styled.section`
  margin-top: 6px;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    background-color: #f2f3f7;
    padding-left: 60px;
    gap: 14px;

    h1 {
      font-size: 4rem;
      color: ${colors.green};
      margin: 0;
    }
  }

  figure {
    margin: 0;
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
