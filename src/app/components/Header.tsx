import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
// import imgLogo from "../../assets/Header logo.jpg";
import imgLogo from "../../assets/NVBC LG.jpg"; 

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT NVBC", path: "/about-nvbc" },
  { name: "THE BRITTANY", path: "/why-a-brittany" },
  { name: "CALENDAR OF EVENTS", path: "/calendar" }, // Matches router: "calendar"
  { name: "ANNUAL AWARDS", path: "/awards" },       // Matches router: "awards"
  { name: "GALLERY", path: "/gallery" },
  { name: "RESOURCES", path: "/resources" },    
  //{ name: "BECOME A MEMBER", path: "/become-a-member" }, // Matches router: "BecomeMember"
  { name: "CONTACT US", path: "/contact" },
];
 
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
 
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(10,14,26,0.98) 0%, rgba(15,22,45,0.98) 100%)"
          : "linear-gradient(180deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0) 100%)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Increased max-width to 1800px for better link distribution */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20 gap=6">
         
          {/* Logo Section */}
          <Link to="/" className="flex items-center shrink-0 group">
            <div
              className="relative transition-transform duration-500 group-hover:scale-105"
              style={{
                filter: "drop-shadow(0 0 12px rgba(201,168,76,0.4))",
                transition: "filter 0.3s ease",
              }}
            >
              <img
                src={imgLogo}
                alt="NVBC Logo"
                //className="w-12 h-18 lg:w-20 lg:h-20 object-contain rounded-full"
                className="h-14 lg:h-18 w-auto object-contain rounded-full"
              />
            </div>
           
          </Link>
 
          {/* Desktop Nav - Optimized spacing */}
          <nav className="hidden xl:flex items-center gap-x-6 2xl:gap-x-10 max=auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-2"
                  style={{
                    fontFamily: "'arial black', serif",
                    fontSize: "14px", // Reduced size for luxury feel
                    letterSpacing: "0.1em",
                    color: isActive ? "#C9A84C" : "rgba(255,255,255,0.7)",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "#C9A84C";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                    }
                  }}
                >
                  {link.name}
                  {/* Premium animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#C9A84C] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
 
         
 
          {/* Mobile menu toggle */}
          <button
            className="xl:hidden p-2 transition-transform active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#C9A84C" }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: menuOpen ? "100vh" : "0",
          overflow: "hidden",
          transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "linear-gradient(135deg, rgba(10,14,26,0.99) 0%, rgba(15,22,45,0.99) 100%)",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.2)" : "none",
        }}
      >
        <div className="px-8 py-10 flex flex-col gap-4 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  color: isActive ? "#C9A84C" : "rgba(255,255,255,0.85)",
                  padding: "10px 0",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {link.name}
              </Link>
            );
          })}
         
        </div>
      </div>
    </header>
  );
}