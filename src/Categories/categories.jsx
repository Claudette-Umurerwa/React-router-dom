import fashion from "../assets/images/fashion.jpg";
import shoes from "../assets/images/shoes.jpg";
import accessories from "../assets/images/accessories.jpg";
import bags from "../assets/images/bags.jpg";



export default function Categories() {
    return (
        <>
        
        <section className="page-container">

  <div className="page-heading">
    <p className="subtitle">EXPLORE OUR COLLECTION</p>
    <h1>Shop By Categories</h1>
  </div>

  <div className="category-grid">

    <div className="category-card">
      <img src={fashion} alt="Fashion" />
      <h2>Fashion</h2>
    </div>

    <div className="category-card">
      <img src={shoes} alt="Shoes" />
      <h2>Shoes</h2>
    </div>

    <div className="category-card">
      <img src={bags} alt="Bags" />
      <h2>Bags</h2>
    </div>

    <div className="category-card">
      <img src={accessories} alt="Accessories" />
      <h2>Accessories</h2>
    </div>

  </div>

</section>
        </>
    )
}