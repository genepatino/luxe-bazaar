import styled from "styled-components";
import { colors } from "../../styles/global";

export const DiscountContainer = styled.section`
  margin-top: 20px;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    background-color: #f2f3f7; //#e0e1e5; //#f2f3f7
    padding-left: 60px;
    gap: 14px;

    h1 {
      font-size: 4rem;
      color: ${colors.green};
      margin: 0;
    }

    button {
      background-color: #335339;
      padding: 12px 20px;
      border-radius: 22px;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.6rem;
      transition: all 0.12s linear;

      &:hover {
        border: 3px solid #a8cea8b3;
        background-color: ${colors.green};
      }
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
