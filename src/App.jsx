import { Route, Routes } from "react-router";
import { Nav } from "./Nav/nav";
import Shop from "./Shop/shop";
import About from "./About us/about";
import Contact from "./Contact/contact";
import Categories from "./Categories/categories";
import "./pages.css";
import { Link} from "react-router";




function EntryPage() {
  return (
    <>
    <section className="home-page">

  <div className="hero-content">
    <p className="subtitle">WELCOME TO STORESHOP</p>

    <h1>
      Discover Your
      <span> Perfect Style</span>
    </h1>

    <p>
      Discover quality products and beautiful collections
      for your everyday needs.
    </p>

    <Link to="/shop" className="shop-btn">
      Shop Now
    </Link>
  </div>

  <div className="hero-image">
    <img
      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
      alt="Shopping store"
    />
  </div>

</section>

<section className="features">

  <div>
    <h3>Free Shipping</h3>
    <p>On orders over $100</p>
  </div>

  <div>
    <h3>Quality Products</h3>
    <p>Quality you can trust</p>
  </div>

  <div>
    <h3>Secure Shopping</h3>
    <p>Easy and safe shopping</p>
  </div>

</section>
    </>
  )
}

export default function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  )
}
