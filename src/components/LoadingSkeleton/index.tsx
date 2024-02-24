import { Skeleton, Container } from "./styled";

function LoadingSkeleton() {
  return (
    <Container>
      <Skeleton>
        <div className="skeleton_container skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton"></div>
      </Skeleton>
      <Skeleton>
        <div className="skeleton_container skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton"></div>
      </Skeleton>
      <Skeleton>
        <div className="skeleton_container skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton"></div>
      </Skeleton>
      <Skeleton>
        <div className="skeleton_container skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton"></div>
      </Skeleton>
      <Skeleton>
        <div className="skeleton_container skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton-div skeleton"></div>
        <div className="skeleton"></div>
      </Skeleton>
    </Container>
  );
}

export { LoadingSkeleton };
