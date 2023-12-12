import "./App.css";
import hatHeaderImg from "./images/hohoho-beanie.jpg";
import coasterHeaderImg from "./images/coasters-header-image.jpg";
import stickerHeaderImg from "./images/santa-vibes-sticker.jpg";
import keyfobHeaderImg from "./images/key-fobs-header-image.jpg";
import keychainHeaderImg from "./images/keychains-header-image.jpeg";
import scrunchieHeaderImg from "./images/scarlet-scrunchie.jpg";
import Top from "./Top";
import Hats from "./Hats";
import Coaster from "./Coasters";
import Stickers from "./Stickers";
import KeyFobs from "./KeyFobs";
import Keychains from "./Keychains";
import Scrunchies from "./Scrunchies";

function App() {
  return (
    <div className="App container">
      <header className="App-header" id="top">
        <h1>Stitch with Mik</h1>
        <h3>Closing Sale - DM to Purchase</h3>
      </header>
      <section className="product-categories">
        <a className="product" href="#hats">
          <img src={hatHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Hats</h3>
          </div>
        </a>
        <a className="product" href="#coasters">
          <img src={coasterHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Coaster</h3>
          </div>
        </a>
        <a className="product" href="#stickers">
          <img src={stickerHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Stickers</h3>
          </div>
        </a>
        <a className="product" href="#fobs">
          <img src={keyfobHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Key Fobs</h3>
          </div>
        </a>
        <a className="product" href="#keychains">
          <img src={keychainHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Keychains</h3>
          </div>
        </a>
        <a className="product" href="#scrunchies">
          <img src={scrunchieHeaderImg} alt="beanie" />{" "}
          <div className="img-overlay">
            <h3>Scrunchies</h3>
          </div>
        </a>
      </section>
      <Hats />
      <Top />
      <Coaster />
      <Top />
      <Stickers />
      <Top />
      <KeyFobs />
      <Top />
      <Keychains />
      <Top />
      <Scrunchies />
      <Top />
      <footer>
        <h4>Message me to Purchase</h4>
        <p>
          Stitch with Mik on Facebook and Instagram <br /> or email me: <br />{" "}
          <br />
          <a
            className="btn btn-dark"
            role="button"
            href="mailto:stitchwithmik@gmail.com"
          >
            stitchwithmik@gmail.com
          </a>
        </p>
        <div>
          <a
            href="https://www.instagram.com/stitchwithmik"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/stitchwithmik"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <em>
          *Payment via Etransfer or Cash* <br />
          *Shipping Available*
        </em>
      </footer>
    </div>
  );
}

export default App;
