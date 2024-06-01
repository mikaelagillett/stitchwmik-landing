import hohoho from "./images/hohoho-beanie.jpg";
import svibes from "./images/svibes-beanie.jpg";
import car from "./images/car-beanie.jpg";
import dnd from "./images/dnd-pink-hat.jpeg";
import "./Products.css";

function Hats() {
  return (
    <section className="products" id="hats">
      <h2>Hats</h2>
      <div className="hats">
        <div className="card">
          <img
            src={hohoho}
            className="card-img-top"
            alt="grey beanie with red writting hohoho "
          />
          <div className="card-body">
            <h4 className="card-title"> HOHOHO Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory: 5 <br /> <s>$15</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={svibes}
            className="card-img-top"
            alt="dark grey beanie with circular santa vibes logo (red, white, green) "
          />
          <div className="card-body">
            <h4 className="card-title"> Santa Vibes Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory: 4 <br /> <s>$15</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={car}
            className="card-img-top"
            alt="black beanies with one green and one orange car with tree on top"
          />
          <div className="card-body">
            <h4 className="card-title"> Car Beanie</h4>
            <p className="card-text">
              {" "}
              Inventory:
              <span className="green">1</span>,{" "}
              <span className="orange">2</span>
              <br /> <s>$15</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={dnd}
            className="card-img-top"
            alt="pink ball cap with do not disturb written on front"
          />
          <div className="card-body">
            <h4 className="card-title"> "do not disturb" Cap</h4>
            <p className="card-text">
              {" "}
              Inventory: 5 <br /> <s>$20</s>$8
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hats;
