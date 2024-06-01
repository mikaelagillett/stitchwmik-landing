import ravyn from "./images/ravyn-scrunchie.jpg";
import scarlet from "./images/scarlet-scrunchie.jpg";
import tapestry from "./images/tapestry-scrunchie.jpg";
import split from "./images/split-scrunchie.jpg";
import rose from "./images/rose-scrunchie.jpg";
import "./Products.css";

function Scrunchies() {
  return (
    <section className="products" id="scrunchies">
      <h2>Scrunchies</h2>
      <div className="scrunchies">
        <div className="card">
          <img
            src={ravyn}
            className="card-img-top"
            alt="black velvet scrunchie hair tie"
          />
          <div className="card-body">
            <h4 className="card-title"> Ravyn Scrunchie</h4>
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
            src={scarlet}
            className="card-img-top"
            alt="red velvet scrunchie hair tie"
          />
          <div className="card-body">
            <h4 className="card-title"> Scarlet Scrunchie</h4>
            <p className="card-text">
              {" "}
              Inventory: 2 <br /> <s>$10</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={split}
            className="card-img-top"
            alt="black and red (half and half) velvet scrunchie hair tiee"
          />
          <div className="card-body">
            <h4 className="card-title"> Split Scrunchie </h4>
            <p className="card-text">
              {" "}
              Inventory: 2 <br /> <s>$10</s>$5
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={tapestry}
            className="card-img-top"
            alt="black and white patterned scrunchie hair tie"
          />
          <div className="card-body">
            <h4 className="card-title"> Tapestry Scrunchie</h4>
            <p className="card-text">
              {" "}
              Inventory: 3
              <br /> <s>$8</s>$3
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={rose}
            className="card-img-top"
            alt="pink satin/silk scrunchie hair tie"
          />
          <div className="card-body">
            <h4 className="card-title"> Rose Scrunchie </h4>
            <p className="card-text">
              {" "}
              Inventory: 2 <br /> <s>$8</s>$3
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

export default Scrunchies;
