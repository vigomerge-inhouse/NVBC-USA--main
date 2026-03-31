import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const imgLogo = new URL("../../assets/nvbc logo.png", import.meta.url).href;

const footerLinks = [
  {
    title: "Quick Links",
    links: [
     { label: "Home", path: "/" },
      { label: "About NVBC", path: "/about-nvbc" },
      { label: "The Brittany", path: "/why-a-brittany" },
      { label: "Events", path: "/calendar" },
    ],
  },
  {
    title: "Club",
    links: [
      { label: "Awards", path: "/awards" },
      { label: "Gallery", path: "/gallery" },
      { label: "Resources", path: "/resources" },
      // { label: "Become a Member", path: "/BecomeMember" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a1714 0%, #110f0c 100%)",
        borderTop: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      {/* Gold accent line */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, #C9A84C, #E8C97E, #C9A84C, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={imgLogo}
                alt="NVBC Logo"
                className="w-16 h-16 object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.4))" }}
              />
              <div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}>
                  NORTHERN VIRGINIA
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "13px", letterSpacing: "0.1em", fontWeight: 600 }}>
                  BRITTANY CLUB
                </div>
              </div>
            </div>
            
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/NorthernVirginiaBrittanyClubNvbc" },
                // { Icon: Instagram, href: "#" },
                // { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "https://www.youtube.com/@TJMauter" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.35)",
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(201,168,76,0.7)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.35)";
                  }}
                  // className="ml-8"
                >
                  <div>
                    <Icon size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#ffffff",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginBottom: "20px",
                  fontWeight: 700,
                }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3 w-fit">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "13px",
                        fontFamily: "'Inter', sans-serif",
                        transition: "color 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
                      }}
                    >
                      <span style={{ color: "#C9A84C", fontSize: "10px" }}>▶</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

         
            
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: "24px" }} />
        <div className="flex justify-center items-center gap-1">
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Northern Virginia Brittany Club.{' '}
            <a
              href="https://www.vigomerge.com/"
              style={{
                color: "#C9A84C",
                textDecoration: "none",
              }}
            >
              Designed by Vigomerge Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}