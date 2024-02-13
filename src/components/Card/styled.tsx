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

export const Cards = styled.div`
  width: 200px;

  figure {
    height: 200px;
    width: 100%;
    margin: 0;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px;

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
      font-size: 1.2rem;
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
    }
    .description {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    button {
      width: 60%;
      background-color: white;
      border: 2px solid ${colors.gray};
      border-radius: 22px;
      padding: 6px;
      cursor: pointer;
      color: black;
      font-size: 1.4rem;

      &:hover {
        background-color: ${colors.buttongreen};
        color: white;
        border: 2px solid #a8cea8b3;
      }
    }
  }
`;
