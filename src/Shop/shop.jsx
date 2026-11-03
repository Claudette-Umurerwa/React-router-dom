import Sneakers from "../assets/images/sneakers.jpg";
import Handbag from "../assets/images/handbag.jpg";
import Watch from "../assets/images/watch.jpg";
import XmasTree from "../assets/images/xmas tree.jpg";

export default function Shop() {
    return (
    <>
    
    <section className="page-container">

  <div className="page-heading">
    <p className="subtitle">OUR COLLECTION</p>
    <h1>Explore Our Products</h1>
    <p>Find your favourite products here.</p>
  </div>

  <div className="product-grid">

    <div className="product-card">
      <img src={Sneakers} alt="Sneakers" />
      <h3>Sport Sneakers</h3>
      <p>$75.00</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={Handbag} alt="Handbag" />
      <h3>Elegant Handbag</h3>
      <p>$95.00</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={Watch} alt="Watch" />
      <h3>Classic Watch</h3>
      <p>$60.00</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img src={XmasTree} alt="XmasTree" />
      <h3>Xmas Tree</h3>
      <p>$100.00</p>
      <button>Add to Cart</button>
    </div>

  </div>


</section>
    </>
    )
}