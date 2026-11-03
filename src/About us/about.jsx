import store from "../assets/images/store.jpg";



export default function About() {
    return (
        <>
        
        <section className="about-section">

  <div className="about-image">
    <img
      src={store}
      alt="Our store"
    />
  </div>

  <div className="about-content">

    <p className="subtitle">OUR STORY</p>

    <h2>Welcome to StoreShop</h2>

    <p>
      We are passionate about providing quality products
      and creating a convenient shopping experience.
    </p>

    <p>
      Our mission is to make shopping simple, enjoyable
      and accessible to everyone.
    </p>

  </div>

</section>

<section className="mission-grid">

  <div>
    <h2>Our Mission</h2>
    <p>To provide quality products and excellent service.</p>
  </div>

  <div>
    <h2>Our Vision</h2>
    <p>To become a trusted destination for online shopping.</p>
  </div>

</section>
        </>
    )
}