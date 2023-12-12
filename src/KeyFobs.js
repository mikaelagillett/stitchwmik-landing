import ravyn from "./images/rav-fob.jpg";
import scarlet from "./images/scar-fob.jpg";
import tapestry from "./images/tap-fob.jpg";
import jean from "./images/jean-fob.jpg";
import "./Products.css";

function KeyFobs() {
  return (
    <section className="products" id="fobs">
      <h2>Key Fobs</h2>
      <div className="fobs">
        <div className="card">
          <img src={ravyn} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> Ravyn Scrunchie KeyFob</h4>
            <p className="card-text">
              {" "}
              Inventory: 6 <br /> $10
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
            alt="hohoho grey beanie"
          />
          <div className="card-body">
            <h4 className="card-title"> Scarlet Scrunchie KeyFob</h4>
            <p className="card-text">
              {" "}
              Inventory: 1 <br /> $10
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
            alt="hohoho grey beanie"
          />
          <div className="card-body">
            <h4 className="card-title"> Tapestry KeyFob</h4>
            <p className="card-text">
              {" "}
              Inventory: 2
              <br /> $8
            </p>
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
        <div className="card">
          <img src={jean} className="card-img-top" alt="hohoho grey beanie" />
          <div className="card-body">
            <h4 className="card-title"> Jean KeyFob </h4>
            <p className="card-text">
              {" "}
              Inventory: 7 <br /> $8
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

export default KeyFobs;
