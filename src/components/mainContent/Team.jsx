import { TeamContent } from "./TeamContent";

export const Team = (props) => {
  const teamElem = props.teamData.map((team) => (
    <TeamContent key={team.id} team={team} />
  ));
  const main = {
    padding: "79px 17.4% 74px 17.4%"
  };
  const title = {
    textTransform: "uppercase",
    marginBottom: "25px",
    fontSize: "23px",
    fontFamily: "Montserrat-Regular"
  };
  const element = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2%",
    marginTop: "43px"
  };
  return (
    <div style={main}>
      <h2 style={title}>our team</h2>
      <div style={element}>{teamElem}</div>
    </div>
  );
};
