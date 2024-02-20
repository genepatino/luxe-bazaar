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
    //transition: all 0.3s ease;

    &:hover {
      //width: 210px;
      //height: 190px;
    }

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
  width: 60%;
  background-color: ${(props) =>
    props.$active ? `${colors.green}` : "#ffffff"};
  border: ${(props) =>
    props.$active ? "2px solid #a8cea8b3" : `2px solid ${colors.gray}`};
  border-radius: 22px;
  padding: 6px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#ffffff" : "#000000")};
  font-size: 1.4rem;

  &:hover {
    background-color: ${colors.buttongreen};
    color: white;
    border: 2px solid #a8cea8b3;
  }
`;
