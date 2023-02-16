export const Contacts = (props) => {
  const img = {
    height: "65px"
  };
  const title = {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Regular",
    fontSize: "16px",
    lineHeight: "20px",
    marginTop: "28px",
    marginBottom: "20px"
  };
  const contactBox = {
    display: "flex",
    gap: "5px"
  };
  return (
    <address>
      <img style={img} src={props.contact.url} alt={props.contact.alt} />
      <h3 style={title}>{props.contact.title}</h3>
      <div>
        {" "}
        <p>{props.contact.street}</p>
        <p>{props.contact.unit}</p>
        <p>{props.contact.sity}</p>
        <p>{props.contact.country}</p>
      </div>
      <p>{props.contact.email}</p>

      <div style={contactBox}>
        {" "}
        <img src={props.contact.firstIcon} alt="" />
        <p>{props.contact.firstSocial}</p>
      </div>
      <div style={contactBox}>
        {" "}
        <img src={props.contact.secondIcon} alt="" />
        <p>{props.contact.secondSocial}</p>
      </div>
      <div style={contactBox}>
        {" "}
        <img src={props.contact.thirdIcon} alt="" />
        <p>{props.contact.thirdSocial}</p>
      </div>
    </address>
  );
};
