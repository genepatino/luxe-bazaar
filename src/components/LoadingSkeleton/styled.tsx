import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 40px 0px;
  padding: 0 60px;
  display: flex;
  gap: 20px;
  place-items: center;
`;

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .skeleton {
    animation: skeleton-loading 1s ease-out infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(190, 10%, 90%);
    }

    100% {
      background-color: hsl(190, 10%, 84%);
    }
  }

  .skeleton_container {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    gap: 4px;
  }

  .skeleton-div {
    width: 200px;
    height: 14px;
    border-radius: 4px;
  }
  .skeleton-div:nth-child(4) {
    width: 102px;
  }
`;
