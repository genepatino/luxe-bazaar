import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: 1/2;
  border: 1px solid #b9afaf;
  border-radius: 14px;
  padding: 24px;
  height: 332px;
  position: sticky;
  top: 90px;

  @media (max-width: 1160px) {
    grid-area: 3;
    position: static;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 24px;
  }
`;
export const BillingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .price-visa {
    display: flex;
    justify-content: space-between;
    .price {
      span {
        font-size: 1.2rem;
      }
      span:nth-child(1) {
        font-size: 3rem;
      }
    }
    .visa {
      display: flex;
      align-items: flex-start;
      gap: 6px;

      .icon-visa {
        font-size: 2rem;
      }
      p {
        font-size: 1.6rem;
      }
      img {
        width: 100px;
        object-fit: cover;
      }
    }
  }

  .delivery {
    display: flex;
    flex-direction: column;
    gap: 4px;
    span {
      display: block;
      font-size: 1.4rem;
      color: ${colors.gray};
    }
    span:nth-child(1) {
      color: black;
      font-size: 1.6rem;
    }
    a {
      color: ${colors.blue};
      font-size: 1.36rem;
      text-underline-offset: 4px;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;
