import { СriterionContent } from "./СriterionContent";

export const Сriterion = (props) => {
  const criterionElem = props.criterionData.map((criterion) => (
    <СriterionContent key={criterion.id} criterion={criterion} />
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
    gap: "3.2%"
  };
  return (
    <div style={main}>
      <h2 style={title}>how we make brands thrive</h2>
      <div style={element}>{criterionElem}</div>
    </div>
  );
};
