import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="container footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Luxora</h2>
          <p>
            Timeless design. Refined craftsmanship.  
            Luxora bags made for effortless elegance.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#projects">Collections</a>
          <a href="#footer">Contact</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Be the first to discover new luxury collections.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Follow Luxora</h4>

          <div className="icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Luxora. All rights reserved.Mohamed Alsaudi..</p>
      </div>

    </footer>
  );
}