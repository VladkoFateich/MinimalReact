export const TeamContent = (props) => {
  const title = {
    textTransform: "uppercase",
    // fontFamily: "Montserrat-Regular",
    fontSize: "23px",
    marginTop: "20px",
    marginBottom: "6px",
  };
  const specialization = {
    // fontFamily: "Vollkorn-Regular",
    fontSize: "14px",
  };
  return (
    <div>
      <img src={props.team.url} alt={props.team.alt} />
      <h3 style={title}>
        {props.team.name} {props.team.surname}
      </h3>
      <p style={specialization}>{props.team.specialization}</p>
    </div>
  );
};
