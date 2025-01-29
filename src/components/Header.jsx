import heroImg from "../assets/hero.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>
        All the Movies you want from <span className="text-gradient">Eve</span>{" "}
        Platform
      </h1>
      <div className="flex justify-center items-center">
        <img src={heroImg} alt="hero-png" />
      </div>
      <hr className="w-3/4 text-white text-center"/>
    </div>
  );
};

export default Header;
