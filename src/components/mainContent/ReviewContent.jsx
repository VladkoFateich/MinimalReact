export function ReviewContent(props) {
  const review = {
    width: "calc((100%-16%) / 2)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  };
  const text = {
    // fontFamily: "Vollkorn-Regular",
    fontSize: "26px",
    lineHeight: "33px",
  };
  const img = {
    marginTop: "24px",
    marginBottom: "10px",
  };
  const name = {
    // fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#ababab",
    textTransform: "uppercase",
  };

  return (
    <div style={review}>
      <p style={text}>{props.review.text}</p>
      <img style={img} src={props.review.url} alt={props.review.alt} />
      <p style={name}>{props.review.name}</p> <p>{props.review.surname}</p>
    </div>
  );
}
