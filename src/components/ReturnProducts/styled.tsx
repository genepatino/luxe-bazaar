import styled from "styled-components";
import { colors } from "../../styles/global";

export const CardContainer = styled.div`
  margin: 40px 0px;
  padding: 0 60px;
  display: grid;
  gap: 20px;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`;

export const ProductCard = styled.div`
  width: 200px;

  figure {
    height: 200px;
    width: 100%;
    margin: 0;
    position: relative;
    border-radius: 8px;
    border: 2px solid ${colors.lightgray};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 8px;
    }

    div {
      position: absolute;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: white;
      top: 8px;
      right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .heart-icon {
        font-size: 1.6rem;
        color: ${colors.gray};

        &:hover {
          font-size: 1.8rem;
        }
      }
    }
  }
  .description-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      margin: 0;
      font-size: 1.4rem;
    }

    .title-product {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 10px;

      p {
        font-size: 1.4rem;
        font-weight: bold;
      }

      p:nth-child(1)::first-letter {
        text-transform: uppercase;
      }
    }
    .description {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const Button = styled.button<{ $active?: boolean }>`
  width: 100px;
  background-color: ${(props) =>
    props.$active ? "#dedede" : `${colors.green}`};
  border: ${(props) =>
    props.$active ? `2px solid #adb2adb3` : "2px solid #a8cea8b3"};
  border-radius: 22px;
  padding: 6px;
  cursor: ${(props) => (props.$active ? "not-allowed" : "pointer")};
  color: ${(props) => (props.$active ? "#000000" : "#ffffff")};
  font-size: 1.4rem;
  transition: all 0.12s linear;

  &:hover {
    background-color: #dedede;
    border: 2px solid #adb2adb3;
    color: black;
  }
`;
