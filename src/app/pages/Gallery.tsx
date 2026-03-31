import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ZoomIn } from "lucide-react";
import { GalleryImage } from "../../types/gallery";
import portrait from "../../assets/images/gallery/Brittany-Portrait.jpg";
import { motion } from 'framer-motion';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
/* ─── Assets ─────────────────────────────────────────────────────── */
import hero1 from "../../assets/images/gallery/Hero1.jpg";
import hero2 from "../../assets/images/gallery/Hero2.jpg";
import logo from "../../assets/images/logo.png";

// gallery  shows images
import shows1 from '../../assets/images/gallery/Gallery or Home Page or Why the Brittany.jpg';
import shows2 from '../../assets/images/gallery/Gallery.10.jpg'; 
import shows3 from '../../assets/images/gallery/Gallery.JPG';
import shows4 from '../../assets/images/gallery/Gallery.25.jpg';
import shows5 from '../../assets/images/gallery/Gio.jpg';


// Field images
import field1 from '../../assets/images/gallery/Gallery.5.jpg';
import field2 from '../../assets/images/gallery/gallery.6.jpg';
import field3 from '../../assets/images/gallery/DoggRon.jpg';
import field4 from '../../assets/images/gallery/Gallery.14.jpg';
import field5 from '../../assets/images/gallery/Gallery_4.jpg';


// Events images
import event1 from '../../assets/images/gallery/gallery.7.jpg';
import event2 from '../../assets/images/gallery/gallery.9.jpg';
import event3 from '../../assets/images/gallery/Gallery.12.jpg';
import event4 from '../../assets/images/gallery/Gallery.19.JPG';
import event5 from '../../assets/images/gallery/Gallery.26.jpg';
import event6 from '../../assets/images/gallery/Gallery.jpg';


// portrait images
import portrait1 from '../../assets/images/gallery/Gallery.8.jpg';
import portrait2 from '../../assets/images/gallery/gallery.13.jpg';
import portrait3 from '../../assets/images/gallery/Gallery.18.jpg';
//import portrait4 from '../../assets/images/gallery/Gallery.20.jpg';
import portrait5 from '../../assets/images/gallery/Gallery.21.jpg';
import portrait6 from '../../assets/images/gallery/gallery.24.jpg';
import gallery26 from "../../assets/images/gallery/gallery26.jpg";
import gallery27 from "../../assets/images/gallery/gallery27.jpg";
import gallery28 from "../../assets/images/gallery/gallery28.jpg";
import gallery29 from "../../assets/images/gallery/gallery29.png";
import gallery30 from "../../assets/images/gallery/gallery30.jpg";
import gallery31 from "../../assets/images/gallery/gallery31.jpg";
import gallery32 from "../../assets/images/gallery/gallery32.jpg";

const heroImages = [portrait, hero1, hero2];

const images: GalleryImage[] = [

  {
    src: shows1,
    title: "Championship Show",
    cat: "Shows",
  },
  {
    src: field1,
    title: "Autumn Trail",
    cat: "Field",
  },
  {
    src: field2,
    title: "Golden Hour Run",
    cat: "Field",
  },
  {
    src: event1,
    title: "Club Members",
    cat: "Events",
  },
  {
    src: portrait1,
    title: "Studio Portrait",
    cat: "Portraits",
  },
  {
    src: event2,
    title: "Award Ceremony",
    cat: "Events",
  },
  {
    src: shows2,
    title: "Blue Ribbon",
    cat: "Shows",
  },
  {
    src: field3,
    title: "Agility Action",
    cat: "Field",
  },
  {
    src: event3,
    title: "Virginia Estate",
    cat: "Events",
  },
  {
    src: portrait2,
    title: "Elegant Portrait",
    cat: "Portraits",
  },
  {
    src: field4,
    title: "Hunting Field",
    cat: "Field",
  },
  {
    src: portrait3,
    title: "Puppy Joy",
    cat: "Portraits",
  },

  {
    src: shows3,
    title: 'Snowfall Show',
    cat: 'Shows'
  },
  {
    src: shows4,
    title: 'Puppy',
    cat: 'Shows'
  },
  {
    src: shows5,
    title: 'Hunting',
    cat: 'Shows'
  },
  {
    src: field5,
    title: 'litle Puppy',
    cat: 'Field'
  },
  {
    src: event5,
    title: 'Focusing',
    cat: 'Events'
  },
  {
    src: event6,
    title: 'Snowfall Show',
    cat: 'Events'
  },
  //{
  // src: portrait4,
  //title: 'Training Style',
  //cat: 'Portraits'
  //},
  {
    src: portrait5,
    title: 'Portrait',
    cat: 'Portraits'
  },
  {
    src: portrait6,
    title: 'Railly',
    cat: 'Portraits'
  },
  {
    src: gallery26,
    title: "",
    cat: ""
  },
  {
    src: gallery27,
    title: "",
    cat: ""
  },
  {
    src: gallery28,
    title: "",
    cat: ""
  },
  {
    src: gallery29,
    title: "",
    cat: ""
  },
  {
    src: gallery30,
    title: "",
    cat: ""
  },
  {
    src: gallery31,
    title: "",
    cat: ""
  },
  {
    src: gallery32,
    title: "",
    cat: ""
  },

];

/* ─── Design Tokens ──────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#FAF7F0",
  navy: "#080c18",
  gold: "#C9A84C",
  charcoal: "#111111",
  textBody: "#666666",
  border: "rgba(0,0,0,0.08)",
};

//const categories = ["All", "Portraits", "Field", "Shows", "Events"];

export default function Gallery() {

  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const filtered = images;

  return (
    <div style={{ background: C.gold, minHeight: "100vh" }}>
      {/* --- FULL PAGE HERO SECTION --- */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100vh", width: "100%", background: C.navy }}
      >
        {/* --- Background Image with Ken Burns Effect --- */}
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay]}
            effect="fade" // smooth fade like your current setup
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((img, index) => (
              <SwiperSlide key={index}>
                <ImageWithFallback
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover bg-black"
                  style={{ objectPosition: "center 25%", opacity: 0.55 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Your existing gradient overlay — untouched */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* --- Animated Top Divider --- */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            style={{
              margin: "0 auto 32px auto",
              height: "2px",
              background: C.gold,
            }}
          />

          {/* --- Subtitle: Visual Archive --- */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em", y: 10 }}
            animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A84C",
              fontSize: "18px",
              letterSpacing: "0.2em",
              marginBottom: "16px",
              fontWeight: 800,
            }}
          >
            VISUAL ARCHIVE
          </motion.div>

          {/* --- Main Heading: Our Club --- */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(55px, 10vw, 130px)", // Slightly larger for impact
              fontWeight: 700,
              lineHeight: "0.9",
              marginBottom: "48px",
              fontStyle: "arial black",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            Special Moments
          </motion.h1>

          {/* --- Bottom Reveal Element --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.5)",
                fontSize: "12px",
                letterSpacing: "0.2em",
                marginBottom: "12px",
              }}
            >
              SCROLL TO EXPLORE
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: "1px",
                height: "60px",
                background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* --- MAIN GALLERY SECTION --- */}
      <section className="relative pt-32 pb-24 w-full overflow-hidden">
        {/* LOGO - TOP LEFT 
        <div className="absolute top-8 left-8 z-20">
          <img 
            src={logo} 
            alt="Northern Virginia Brittany Club Logo"
            className="h-32 w-auto md:h-40 lg:h-48 object-contain drop-shadow-lg"
          />
        </div> */}
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#EAD9A0,#C9A84C,#8A6A1F)]" />
        {/* PAW PATTERN */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pawBg" width="120" height="120" patternUnits="userSpaceOnUse">
                <g fill="#ffffff">
                  <circle cx="30" cy="30" r="4" />
                  <circle cx="50" cy="22" r="4" />
                  <circle cx="70" cy="30" r="4" />
                  <circle cx="50" cy="40" r="4" />
                  <ellipse cx="50" cy="60" rx="10" ry="7" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pawBg)" />
          </svg>
        </div>

        
        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Editorial Heading */}
          {/* Editorial Heading - ENHANCED */}
          <div className="text-center mb-16">
            {/* Animated gold bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-[#C9A84C] mx-auto mb-6"
            />

            {/* COLLECTIONS with gold background */}
            <div className="inline-block px-8 py-2 mb-4">
              <div
                className="text-[25px] md:text-[28px] lg:text-[32px] tracking-[0.3em] font-[600]"
                style={{ 
                  color: "#C9A84C",
                  fontFamily: "'bold', serif",
                  letterSpacing: "0.3em",
                }}
              >
                COLLECTIONS
              </div>
            </div>
              

            <div className="absolute top-14 left-8 z-20">
              <img 
                src={logo} 
                alt="Northern Virginia Brittany Club Logo"
                className="h-24 w-auto md:h-32 lg:h-40 object-contain drop-shadow-lg rounded-lg border-t-4 border-b-4 border-amber-800"
              />
            </div>
            {/* Main heading with gold highlight */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a1a2e",
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Meet Our Members’ <span style={{ color: "aurora" }}>Brittanys</span>
            </h2>
            
            {/* Enhanced CTA with icon */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-22 h-px bg-[#C9A84C]/50" />
              <p
                style={{
                  color: "#666",
                  fontFamily: "'bold', sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              >
                <b>🐾 Come Join The Fun! 🐾</b>
              </p>
              <div className="w-22 h-px bg-[#C9A84C]/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-16">
            {filtered.map((img, i) => (
              <motion.div
                key={i}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.08 }}
                onClick={() => setLightboxImg(img)}
              >
                {/* CARD */}
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">

                  {/* IMAGE */}
                  <ImageWithFallback
                    src={img.src}
                    alt="gallery image"
                    className="w-full h-[440px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
                  />

                  {/* GRADIENT OVERLAY */}


                  {/* TEXT CONTENT */}

                  {/* TEXT CONTENT */}

                  {/* GOLD GLOW */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 shadow-[0_30px_80px_rgba(201,168,76,0.25)]" />

                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full py-6 border-t border-[#9A7B2C]/20">
            <p className="text-center text-[14px] tracking-[0.1em] text-white/80 uppercase font-bold">
              Photos Provided by NVBC’s Members & Friends :
            </p>
            <p className="text-center text-[27px] text-white/70 mt-2 font-arial">
              Patricia Mattes · Scott Edwards · Sue Drazek · Ron Somers · Barbara
              Bice · Bruce Conover · Barry R. Kogut · Jim Harrison · Kat Shannon
            </p>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX (MODAL) --- */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden">

          {/* GOLD BACKGROUND */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF6D5,#EAD9A0_40%,#D4AF37_100%)]" />

          {/* PAW PATTERN */}
          <div className="absolute inset-0 opacity-[0.90] pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="pawPattern"
                  x="0"
                  y="0"
                  width="140"
                  height="140"
                  patternUnits="userSpaceOnUse"
                >
                  <g fill="white" opacity="0.4">
                    {/* toes */}
                    <circle cx="30" cy="30" r="4" />
                    <circle cx="50" cy="22" r="4" />
                    <circle cx="70" cy="30" r="4" />
                    <circle cx="50" cy="40" r="4" />

                    {/* pad */}
                    <ellipse cx="50" cy="60" rx="10" ry="7" />
                  </g>
                </pattern>
              </defs>

              <rect width="100%" height="100%" fill="url(#pawPattern)" />
            </svg>
          </div>
          {/* DARK OVERLAY (to balance contrast) */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 transition-transform hover:rotate-90 duration-300"
            style={{
              color: C.charcoal,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: 'bold',
            }}
            onClick={() => setLightboxImg(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>

          <div
            style={{
              maxWidth: "1100px",
              width: "100%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex justify-center items-center">

              {/* GOLD GLOW LAYER */}
              <div className="absolute w-[65%] h-[65%] bg-[#C9A84C]/30 blur-[120px] rounded-full" />

              {/* IMAGE */}
              <ImageWithFallback
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="relative z-10 max-h-[75vh] object-contain rounded-xl"
                style={{
                  boxShadow: "0 40px 120px rgba(0,0,0,0.35)",
                }}
              />
            </div>
            <div style={{ padding: "24px 0" }} />
          </div>
        </div>
      )}
    </div>
  );
}