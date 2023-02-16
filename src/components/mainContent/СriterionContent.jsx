export function СriterionContent(props) {
  const title = {
    textTransform: "uppercase",
    /* fontFamily: "Montserrat-Regular", */
    fontSize: "16px",
    margin: "50px 0 20px 0"
  };
  const text = {
    fontFamily: "Vollkorn-Regular",
    fontSize: "15px"
  };
  return (
    <div>
      <img src={props.criterion.url} alt={props.criterion.alt} />
      <h3 style={title}>{props.criterion.title}</h3>
      <p style={text}>{props.criterion.subTitle}</p>
    </div>
  );
}
