import thumbnail from "./images/keychains-header-image.jpeg";
import keychain1 from "./images/keychain(1).png";
import keychain2 from "./images/keychain(2).png";
import keychain3 from "./images/keychain(3).png";
import keychain4 from "./images/keychain(4).png";
import "./Products.css";
import "./Keychains.css";
import KeychainSelect from "./KeychainSelect";

function Keychains() {
  return (
    <section className="products" id="keychains">
      <h2>Keychains</h2>
      <div className="keychains">
        <div className="card">
          <div id="carouselKeychain" className="carousel slide card-img-top">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={thumbnail}
                  class="d-block w-100"
                  alt="keychain tassels in assorted colours"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain1}
                  className="d-block w-100"
                  alt="variety of kechain tassels in brown shades"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain2}
                  className="d-block w-100"
                  alt="variety of keychain tassels in colourful shades (blue, red, pink, yellow)"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain3}
                  className="d-block w-100"
                  alt="variety of keychain tassels in yellow and white shades"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={keychain4}
                  className="d-block w-100"
                  alt="variety of multi coloured (three colour) keychain tassels in a variety of shades"
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
            <p className="card-text"> Inventory: </p>
            <p class="d-inline-flex gap-1 page-buttons">
              <a
                class="btn btn-dark"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Page 1
              </a>
              <a
                class="btn btn-dark"
                data-bs-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Page 2
              </a>
              <a
                class="btn btn-dark"
                data-bs-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
              >
                Page 3
              </a>
              <a
                class="btn btn-dark"
                data-bs-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample4"
              >
                Page 4
              </a>
              <br /> multi:<s>$5</s>$2
              <br /> single:<s>$4</s>$1
            </p>
            <KeychainSelect />
            <a href="#contact" className="btn btn-dark">
              DM to Purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keychains;
