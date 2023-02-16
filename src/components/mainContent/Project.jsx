import { ProjectContent } from "./ProjectContent";

export const Project = (props) => {
  const projectsElem = props.projectsData.map((project) => (
    <ProjectContent key={project.id} project={project} />
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
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2%",
    marginTop: "43px"
  };
  return (
    <div style={main}>
      <h2 style={title}>recent projects</h2>
      <div style={element}>{projectsElem}</div>
    </div>
  );
};
