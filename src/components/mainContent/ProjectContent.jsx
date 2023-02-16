export function ProjectContent(props) {
  const main = {
    paddingBottom: "41px",
  };
  const title = {
    textTransform: "uppercase",
    fontSize: "16px",
    lineHeight: "20px",
    marginTop: "19px",
    marginBottom: "4px",
  };
  const text = {
    // fontFamily: "Vollkorn-Regular",
    fontSize: "14px",
    lineHeight: "20px",
  };
  return (
    <div style={main}>
      <img src={props.project.url} alt={props.project.alt} />
      <h2 style={title}>{props.project.title}</h2>
      <p style={text}>{props.project.subTitle}</p>
    </div>
  );
}
