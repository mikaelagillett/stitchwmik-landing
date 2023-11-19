import "./App.css";
import hatHeaderImg from "./images/hohoho-beanie.jpg";
import coasterHeaderImg from "./images/coasters-header-image.jpg";
import stickerHeaderImg from "./images/santa-vibes-sticker.jpg";
import keyfobHeaderImg from "./images/key-fobs-header-image.jpg";
import keychainHeaderImg from "./images/keychains-header-image.jpeg";
import scrunchieHeaderImg from "./images/scarlet-scrunchie.jpg";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Stitch with Mik</h1>
        <h2>Closing Sale - DM to Purchase</h2>
      </header>
      <section className="product-categories">
        <div className="product">
          <img src={hatHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Hats</h3>
          </div>
        </div>
        <div className="product">
          <img src={coasterHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Coaster</h3>
          </div>
        </div>
        <div className="product">
          <img src={stickerHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Stickers</h3>
          </div>
        </div>
        <div className="product">
          <img src={keyfobHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Key Fobs</h3>
          </div>
        </div>
        <div className="product">
          <img src={keychainHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Keychains</h3>
          </div>
        </div>
        <div className="product">
          <img src={scrunchieHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Scrunchies</h3>
          </div>
        </div>
      </section>

      <footer>
        <h4>Message me to Purchase</h4>
        <p>Stitch with Mik</p>
        <div>
          <a
            href="https://www.instagram.com/stitchwithmik"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/stitchwithmik"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-facebook"></i>
          </a>
        </div>
        <p>
          Payment via Etransfer or Cash <br />
          Shipping Available
        </p>
      </footer>
    </div>
  );
}

export default App;
