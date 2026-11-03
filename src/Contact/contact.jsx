export default function Contact() {
    return (
        <>
        
        <section className="contact-section">

  <div className="contact-info">

    <h2>Get In Touch</h2>

    <p>
      Have questions? Contact us. We are happy to help.
    </p>

    <h3>Email</h3>
    <p>support@storeshop.com</p>

    <h3>Phone</h3>
    <p>+250 700 000 000</p>

    <h3>Location</h3>
    <p>Kigali, Rwanda</p>

  </div>

  <form className="contact-form">

    <label>Your Name</label>
    <input type="text" placeholder="Enter your name" />

    <label>Email Address</label>
    <input type="email" placeholder="Enter your email" />

    <label>Message</label>
    <textarea rows="5" placeholder="Write your message"></textarea>

    <button type="submit">Send Message</button>

  </form>

</section>
        </>
    )
}