import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 24px;
`;
export const ProductDetail = styled.section`
  display: grid;
  grid-template-columns: 0.1fr 0.4fr 1fr;
  align-items: center;
  .delete {
    font-size: 2.2rem;
    color: #00000057;
    cursor: pointer;
  }
  figure {
    img {
      width: 86px;
      height: 86px;
      object-fit: contain;
    }
  }

  .details {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 0.2fr;
    gap: 20px;
  }

  div {
    justify-self: self-start;

    p {
      font-size: 1.4rem;
    }

    p::first-letter {
      text-transform: uppercase;
    }

    p:nth-child(1) {
      font-weight: bold;
      color: black;
    }
  }
`;
