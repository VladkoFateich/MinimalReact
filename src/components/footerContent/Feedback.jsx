import logo2 from "../icon/logo2.png";

export const Feedback = () => {
  const feedbackField = {
    display: "flex",
    flexDirection: "column"
  };
  const field = {
    padding: "18px 0 17px 5%",
    backgroundColor: "rgba(255, 255, 255, 0.2)"
  };
  const fieldFourth = {
    padding: "18px 0 88px 5%",
    backgroundColor: "rgba(255, 255, 255, 0.2)"
  };
  const fieldOdd = {
    padding: "18px 0 17px 5%",
    backgroundColor: "rgba(255, 255, 255, 0.18)"
  };
  const feedbackButton = {
    maxWidth: "230px",
    margin: "auto",
    marginTop: "22px",
    marginBottom: "37px",
    padding: "15px 60px 16px 60px",
    backgroundColor: "#000000",
    fontFamily: "Vollkorn-Regular",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#8bcac3",
    border: "solid #8bcac3 1px"
  };
  const footerLogo = {
    marginBottom: "14px"
  };
  const rightText = {
    fontFamily: "Vollkorn-Regular",
    fontSize: "15px",
    lineHeight: "22px",
    color: "rgba(255, 255, 255, 0.4)"
  };

  return (
    <div>
      <form action="#0" style={feedbackField}>
        <input
          style={fieldOdd}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          style={field}
          type="email"
          placeholder="Email"
          name="name"
          required
        />
        <input style={fieldOdd} type="text" placeholder="Budget" required />
        <input
          style={fieldFourth}
          type="text"
          placeholder="Describe youre project..."
          required
        />
        <button type="submit" style={feedbackButton}>
          Send Message
        </button>
      </form>
      <img style={footerLogo} src={logo2} alt="Р›РѕРіРѕС‚РёРї" />
      <div>
        <span style={rightText}>
          Minimal Template made in Webflow. All rights reserved.
        </span>
      </div>
    </div>
  );
};
