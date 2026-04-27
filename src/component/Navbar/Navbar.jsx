import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "../../theme/ThemeToggle/ThemeToggle";
import logo from "../../assets/images/logo.webp";

export default function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "collection", "footer"];

  const handleScroll = (id) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="LUXORA logo" />
          <h3>
            <span>LUX</span>ORA
          </h3>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* HAMBURGER */}
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* LINKS */}
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            {sections.map((id) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => handleScroll(id)}
              >
                {id}
              </button>
            ))}

            {/* THEME */}
            <ThemeToggle />
          </div>

        </div>

      </div>
    </nav>
  );
}