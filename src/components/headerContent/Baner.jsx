import back from "../img/background.jpg";
import buttonX from "../icon/buttonX.png";
import "./Description.css";

export const Baner = ({ open, setOpen, ...props }) => {
  const baner = {
    backgroundImage: `url(${back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "105px 26.5% 101px 26.5%",
    position: "relative"
  };
  const title = {
    fontSize: "50px",
    lineHeight: "55px",
    marginBottom: "30px",
    color: "white"
  };
  const subTitle = {
    fontSize: "20px",
    color: "white",
    marginTop: "50px"
  };
  const descriptionBlock = {
    backgroundColor: "#fefec9"
  };
  const p = {
    fontFamily: "Vollkorn-Regular",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#47474f",
    padding: "60px 17.5% 59px 17.5%"
  };
  return (
    <>
      <div style={baner}>
        <h1>
          <a style={title} href="#0">
            {props.baner.title}
          </a>
        </h1>
        <p style={subTitle}>{props.baner.subTitle}</p>
      </div>
      <div style={descriptionBlock}>
        <button onClick={() => setOpen(false)} className="X">
          <img className="img" src={buttonX} alt="buttonX" />
        </button>
        <div>
          <div className={`description ${open ? "open" : ""}`}>
            <p style={p}>{props.baner.description}</p>
          </div>
          <button className="buttonOpen" onClick={() => setOpen(true)}>
            <img
              className="imgDown"
              src="https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-206.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};
