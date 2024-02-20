import styled from "styled-components";
import { colors } from "../../styles/global";

export const MainCategory = styled.header`
  margin-top: 20px;
  padding: 0 60px;
  border-top: 2px solid ${colors.lightgray};
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

  .delivery-return {
    border: 2px solid ${colors.lightgray};
    border-radius: 12px;
    display: grid;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;

export const ProductImage = styled.figure`
  margin: 0;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: ${colors.lightgray};
  img {
    border-radius: 24px;
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

export const Details = styled.section`
  display: grid;
  gap: 30px;
  width: 80%;
  p {
    margin: 0;
  }

  .title-product--container {
    border-bottom: 1px solid ${colors.lightgray};
    display: flex;
    flex-direction: column;
    gap: 10px;

    p:nth-child(1) {
      font-size: 2.4rem;
      font-weight: bolder;
    }
    p:nth-child(2) {
      font-size: 1.46rem;
    }
    span {
      margin: 0;
    }

    div {
      display: flex;
      align-items: flex-start;
      margin-bottom: 30px;

      .icon-rating {
        font-size: 1.6rem;
        color: #dc5f05; // #0eb52d;
      }
    }
    span {
      font-size: 1.28rem;
    }
  }

  .suggeted-payments {
    border-bottom: 1px solid ${colors.lightgray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    p:nth-child(1) {
      font-size: 2.2rem;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 1.46rem;
      margin-bottom: 30px;
    }
  }

  .quantity-product {
    display: flex;
    gap: 20px;
    div {
      display: flex;
      align-items: center;
      background: ${colors.lightgray};
      width: 140px;
      height: 42px;
      border-radius: 24px;
      justify-content: center;
      gap: 10px;

      p {
        font-size: 1.8rem;
      }

      .button {
        cursor: pointer;
        padding: 20px;
        transition: font-size 0.3s ease;

        &:hover {
          font-size: 3rem;
        }
      }
    }
  }
`;
export const Button = styled.button`
  height: 42px;
  //background-color: white;
  background-color: ${colors.green};
  padding: 10px 20px;
  border-radius: 22px;
  border: none;
  //border: 2px solid ${colors.gray};
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
  transition: all 0.12s linear;

  &:hover {
    background-color: #304a35;
    //color: white;
  }
`;

export const DeliveryContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 4px;
  flex-direction: column;

  &:nth-child(1) {
    border-bottom: 2px solid ${colors.lightgray};
  }
  .right {
    display: flex;
    gap: 8px;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    .icon {
      font-size: 2rem;
      color: #dc5f05;
    }
    span {
      margin: 0;
      color: black;
    }
  }
  p {
    font-size: 1.6rem;
    padding-left: 28px;
  }

  .left {
    display: flex;
    gap: 8px;
    align-items: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    .icon {
      font-size: 2rem;
      color: #dc5f05;
    }
    span {
      margin: 0;
      color: black;
    }
  }
`;
