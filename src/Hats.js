import hohoho from "./images/hohoho-beanie.jpg";
import svibes from "./images/svibes-beanie.jpg";
import car from "./images/car-beanie.jpg";
import dnd from "./images/dnd-pink-hat.jpeg";
import "./Products.css";

function Hats() {
  return (
    <section className="products">
      <h2>Hats</h2>
      <div className="hats">
        <div className="card">
          <img src={hohoho} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> HOHOHO Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory: 5 <br /> $10
            </p>
            <a href="/" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img src={svibes} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> Santa Vibes Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory: 4 <br /> $10
            </p>
            <a href="/" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img src={car} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> Car Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory:
              <span className="green">1</span>,{" "}
              <span className="orange">2</span>
              <br /> $10
            </p>
            <a href="/" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img src={dnd} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> "do not disturb" Cap</h4>
            <p className="card-text">
              {" "}
              Inventory: 5 <br /> $10
            </p>
            <a href="/" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hats;