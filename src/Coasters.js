import lgwavy from "./images/red-wavy-lg.jpg";
import lgsmiley from "./images/red-smiley-lg.jpg";
import smsmiley from "./images/red-smiley-sm.jpg";
import smwsmiley from "./images/white-smiley-sm.jpg";
import smpsmiley from "./images/pumpkin-coaster.jpeg";
import smosmiley from "./images/orange-smiley-coaster.jpeg";

import "./Products.css";

function Coasters() {
  return (
    <section className="products" id="coasters">
      <h2>Coasters</h2>
      <div className="coasters">
        <div className="card">
          <img
            src={lgwavy}
            className="card-img-top"
            alt="red and pink wavy designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              Red Wavy Coaster <br />
              <em>(large)</em>
            </h4>
            <p className="card-text">
              {" "}
              Inventory: 1 <br /> <s>$15</s>$10
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={lgsmiley}
            className="card-img-top dim"
            alt="red and white smiley face designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              Red Smiley Coaster <br />
              <em>(large)</em>
            </h4>
            <p className="card-text">
              {" "}
              Inventory: 4 <br /> <s>$15</s> $10
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={smsmiley}
            className="card-img-top"
            alt="red and white smiley face designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title"> Red Smiley Car Coaster</h4>
            <p className="card-text">
              {" "}
              Inventory: 2
              <br /> <s>$10</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={smwsmiley}
            className="card-img-top"
            alt="white and red smiley face designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title"> White Smiley Car Coaster</h4>
            <p className="card-text">
              {" "}
              Inventory: 1 <br /> <s>$10</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={smpsmiley}
            className="card-img-top"
            alt="white and black pumpkin face designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title"> Pumpkin Car Coaster</h4>
            <p className="card-text">
              {" "}
              Inventory: 1 <br /> <s>$8</s>$3
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={smosmiley}
            className="card-img-top"
            alt="white and ornage smiley face designed fluffy coaster"
          />
          <div className="card-body">
            <h4 className="card-title"> Orange Smiley Car Coaster</h4>
            <p className="card-text">
              {" "}
              Inventory: 1 <br /> <s>$8</s>$3
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

export default Coasters;
