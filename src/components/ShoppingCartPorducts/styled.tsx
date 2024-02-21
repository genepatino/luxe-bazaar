import styled from "styled-components";
import { colors } from "../../styles/global";

export const ShoppingContainer = styled.section<{ $display?: boolean }>`
  width: 400px;
  display: ${(props) => (props.$display ? "flex" : "none")};
  gap: 14px;
  flex-direction: column;
  background: white;
  padding: 30px;
  border-radius: 14px;
  position: absolute;
  border: 1px solid ${colors.gray};
  z-index: 1;

  .icon-close {
    position: absolute;
    right: 7px;
    top: 6px;
    font-size: 3rem;
    color: #00000059;
    transition: font-size 0.3s ease;

    &:hover {
      font-size: 3.4rem;
    }
  }
`;

export const ShoppingCartDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.lightgray};

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
    width: 60px;
    height: 54px;
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
    font-size: 1.6rem;
  }
`;
