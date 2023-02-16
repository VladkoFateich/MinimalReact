import { ReviewContent } from "./ReviewContent";
import comment from "../icon/comment.png";

export const Review = (props) => {
  const reviewsElem = props.reviewsData.map((review) => (
    <ReviewContent key={review.id} review={review} />
  ));
  const main = {
    padding: "79px 17.4% 74px 17.4%"
  };
  const reviewsImg = {
    marginBottom: "65px"
  };
  const element = {
    display: "flex",
    justifyContent: "center",
    gap: "16%",
    alignItems: "flex-end"
  };
  return (
    <div style={main}>
      <img style={reviewsImg} src={comment} alt="comment" />
      <div style={element}>{reviewsElem}</div>
    </div>
  );
};
