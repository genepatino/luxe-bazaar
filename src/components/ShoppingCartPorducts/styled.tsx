import styled from "styled-components";
import { colors } from "../../styles/global";

export const ShoppingContainer = styled.section<{ $display?: boolean }>`
  width: 400px;
  height: 480px;
  display: ${(props) => (props.$display ? "flex" : "none")};
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 14px;
  position: absolute;
  border: 1px solid ${colors.gray};
  z-index: 1;

  .icon-close {
    position: absolute;
    right: 7px;
    top: 6px;
    font-size: 3rem;
    color: #00000036;
    transition: font-size 0.3s ease;
    cursor: pointer;

    &:hover {
      font-size: 3.4rem;
    }
  }

  .list-products-details {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 372px;
    padding: 0 20px;
    overflow-y: auto;
    margin: 22px 0;
  }
`;

export const ShoppingCartDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 3fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.lightgray};

  .iconDeleteProduct {
    font-size: 2.2rem;
    color: #00000057;
    transition: font-size 0.3s ease;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  span {
    font-size: 1.38rem;
  }

  span {
    justify-self: end;
  }

  img {
    width: 56px;
    height: 48px;
    object-fit: contain;
    border-radius: 10px;
  }

  .quantity {
    display: flex;
    align-items: center;
    background: ${colors.lightgray};
    width: 70px;
    height: 24px;
    border-radius: 24px;
    justify-content: center;

    p {
      font-size: 1.8rem;
    }

    .button {
      user-select: none;
      cursor: pointer;
      transition: font-size 0.3s ease;

      &:hover {
        font-size: 3rem;
      }
    }
  }
`;

export const TotalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
