import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import products from "../../data/projects";
import "./ProjectDetails.css";
import PageWrapper from "../../component/PageWrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "../../sections/Footer/Footer";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const swiperRef = useRef(null);
  const [hoverSide, setHoverSide] = useState(null);

  const productIndex = products.findIndex((p) => p.id == id);
  const product = products[productIndex];

  // ✅ SCROLL TO TOP FIX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (!product) return <h2 className="not-found">Not Found</h2>;

  const images = product.images || [];
  const enableLoop = images.length > 1;

  const phoneNumber = "201234567890";

  // ✅ IMAGE + MESSAGE FIX
  const imageUrl = product.images?.[0];

  const message = `🛍️ Luxora Order Request

👜 Product: ${product.name}
💰 Price: $${product.price}
🖼️ Image: ${imageUrl}

Please confirm availability.`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x > rect.width / 2) {
      swiperRef.current?.slideNext();
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverSide(x > rect.width / 2 ? "right" : "left");
  };

  return (
    <PageWrapper>
      <section className="project-page">
        <div className="container">
          <div className="project-box">

            {/* IMAGE */}
            <div className="image-section">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                slidesPerView={1}
                loop={enableLoop}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="image-wrapper"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setHoverSide(null)}
                      onClick={handleClick}
                    >
                      <img src={img} alt={product.name} className="slide-img" />
                      <div className={`cursor ${hoverSide || ""}`}></div>

                      <div className="overlay">
                        <span>←</span>
                        <span>→</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* CONTENT */}
            <div className="content-section">

              <span className="tag">Luxury bag</span>

              <h1>{product.name}</h1>

              <h2 className="price">${product.price}</h2>

              <p className="desc">{product.description}</p>

              <div className="info-box">
                <p>✔ Original Luxury Quality</p>
                <p>✔ Free Delivery</p>
                <p>✔ 1 Year Warranty</p>
              </div>

              <div className="buttons">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Buy on WhatsApp 📲
                </a>
              </div>

              {/* NAV */}
              <div className="nav-buttons">

                {products[productIndex + 1] && (
                  <button
                    onClick={() =>
                      navigate(`/project/${products[productIndex + 1].id}`)
                    }
                  >
                    Next →
                  </button>
                )}

                {products[productIndex - 1] && (
                  <button
                    onClick={() =>
                      navigate(`/project/${products[productIndex - 1].id}`)
                    }
                  >
                    ← Previous
                  </button>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}