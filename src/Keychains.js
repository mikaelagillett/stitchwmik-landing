import thumbnail from "./images/keychains-header-image.jpeg";
import keychain1 from "./images/keychain(1).png";
import keychain2 from "./images/keychain(2).png";
import keychain3 from "./images/keychain(3).png";
import keychain4 from "./images/keychain(4).png";
import "./Products.css";

function Keychains() {
  return (
    <section className="products">
      <h2>Keychains</h2>
      <div className="keychains">
        <div className="card">
          <div id="carouselKeychain" className="carousel slide card-img-top">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={thumbnail}
                  class="d-block w-100"
                  alt="keychain thumbnail"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain1}
                  className="d-block w-100"
                  alt="list of keychain tassels"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain2}
                  className="d-block w-100"
                  alt="list of keychain tassels"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain3}
                  className="d-block w-100"
                  alt="list of keychain tassels"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain4}
                  className="d-block w-100"
                  alt="list of keychain tassels"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselKeychain"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselKeychain"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h4 className="card-title"> Keychains</h4>
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

export default Keychains;
