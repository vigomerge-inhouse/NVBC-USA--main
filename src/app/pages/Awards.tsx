import { Award, Star, Trophy, Medal, Dog } from "lucide-react";
import { motion } from 'framer-motion';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
// images 

import brittanyHero from "../../assets/images/annual-awards/AnnualAwardHero.jpg";
import brittanyAward from "../../assets/images/annual-awards/stewert.jpg";
// import brittanyField from "../../assets/images/annual-awards/brittany-field.jpg";
// import brittanyAgility from "../../assets/images/annual-awards/brittany-agility.jpg";
// import brittanyShow from "../../assets/images/annual-awards/brittany-show.jpg";

import Sammi from '../../assets/images/annual-awards/Summy.jpg';
import Ty from '../../assets/images/annual-awards/Ty.jpg';
import Bowie from '../../assets/images/annual-awards/Browwie.jpg';
import Buddy from '../../assets/images/annual-awards/Buddy.jpg';
import Pink from '../../assets/images/annual-awards/Pink.jpg';
import Luc from '../../assets/images/annual-awards/Luc.jpg';
import highlightsBanner from "../../assets/highlights2025.jpg";
import Hero2 from "../../assets/images/annual-awards/Hero2.jpg";
import PresidentsCup from "../../assets/images/annual-awards/PresidentsCups.jpg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Hero3 from "../../assets/images/annual-awards/Hero3.jpg";
import Hero4 from "../../assets/images/annual-awards/Hero4.jpg";



const heroImages = [brittanyHero, Hero3, Hero2, Hero4];


/* ─── Design Tokens ─────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#FAF7F0",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#666666",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  border: "rgba(0,0,0,0.08)",
  accentBlue: "#2563eb",
};

/* ─── Data from PDF ──────────────────────────────────────────────── */
const dogsOfTheYear = [
  {
    category: "Adult Field Trial Dog of the Year",
    dog: "GFC2 RFC2 RAFC FC AFC Piney Run Samantha of Hybrittin",
    callName: "Sammi",
    owner: "Judy and Art Cohen",
    icon: Trophy,
    color: "#C9A84C",
    image: Sammi,
  },
  {
    category: "Juvenile Field Trial Dog of the Year",
    dog: "Hybrittin's Ty One On",
    callName: "Ty",
    owner: "Art Cohen and Tom and Tiffany Bass",
    icon: Award,
    color: "#2563EB",
    image: Ty,
  },
  {
    category: "Show Dog of the Year",
    dog: "GCH CH Keili's Ammo This is Ground Control",
    callName: "Bowie",
    owner: "Jessica Sielawa and Paul Twyman",
    icon: Star,
    color: "#7C3AED",
    image: Bowie,
  },
  {
    category: "Hunt Test Dog of the Year",
    dog: "K Star Pour Budweiser SH",
    callName: "Buddy",
    owner: "Kat Shannon",
    icon: Medal,
    color: "#16A34A",
    image: Buddy,
  },
  {
    category: "Agility Dog of the Year",
    dog: "AGCH MACH10 PACH5 RACH Just Another Brit in the Wall",
    callName: "Pink",
    owner: "Jan Brunner",
    icon: Award,
    color: "#F59E0B",
    image: Pink,
  },
  {
    category: "Rally Dog of the Year",
    dog: "Masterpiece of Keili's Morning Star RM2 RAE2",
    callName: "Luc",
    owner: "Jan Brunner",
    icon: Star,
    color: "#DC2626",
    image: Luc,
  },
];

const presidentsCups = [
  {
    dog: "RACH Brookewood New Moon RM3 RAE2 MX MXJ MJS MFB T2B SWM SCME SEME SWD TKN",
    callName: "Jake",
    owner: "OWNER: Beth Lobato",
    achievement: "Earned his Rally Champion title",
    isNew: true,
  },
];

const advancedTitles = [
  {
    dog: "AGCH MACH10 PACH5 RACH Just Another Brit in the Wall",
    callName: "Pink",
    owner: "OWNER: Jan Brunner",
    achievement: "Earned Preferred Agility Champion titles 2, 3, 4, and 5 and Rally Champion",
  },
  {
    dog: "GCH CH Keili's Ammo This is Ground Control",
    callName: "Bowie",
    owner: "OWNER: Jessica Sielawa and Paul Twyman",
    achievement: "Earned his Grand Champion title",
  },
  {
    dog: "CH MACH2 PACH2 Keili's Blue Sapphire Hot August Night",
    callName: "Rosie",
    owner: "OWNER: Susan Osmansky, LE Osmansky, and Sue Drazek",
    achievement: "Earned her Preferred Agility Champion 2 title",
  },
  {
    dog: "GCH CH MACH3 RACH Keili's Mystique",
    callName: "Tiki",
    owner: "OWNER: Sue Drazek",
    achievement: "Earned her Master Agility Champion titles 2 and 3",
  },
  {
    dog: "GFC2 RFC2 RAFC FC AFC Piney Run Samantha of Hybrittin",
    callName: "Sammi",
    owner: "OWNER: Judy and Art Cohen",
    achievement: "Earned her Regional Amateur Field Champion, Grand Field Champion 2, and Regional Field Champion 2 titles",
  },
];

// styling releted function 

// 1. Parent Container Variant (Timing control karne ke liye)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Badha diya (pehle 0.15 tha) - cards ek-ek karke aaram se aayenge
      delayChildren: 0.3,   // Header ke baad thoda wait karega
    }
  }
};

// 2. Card Variant (Slow & Smooth Entrance)
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Thoda jyada distance se upar aayega
    filter: "blur(5px)" // Smoothness ke liye blur
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2, // Duration badha di (slow entry)
      ease: [0.19, 1, 0.22, 1], // Cubic-Bezier for ultra-smooth "slow-down" effect
    }
  }
};

// Slow & Smooth Card Variants
const Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15 + 0.5, duration: 0.8, ease: "easeOut" }
  })
};
// NEW COMPONENT 1 - For New Recipients
const EnhancedNewRecipientCard = ({ dog, callName, owner, achievement }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -12,
      borderColor: "#C9A84C",
      boxShadow: "0 25px 50px rgba(201,168,76,0.15)",
    }}
    style={{
      background: "white",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: "24px",
      padding: "40px 32px",
      position: "relative",
      maxWidth: "500px",
      margin: "0 auto",
    }}
  >
    {/* NEW Ribbon */}
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "-12px",
        background: "#C9A84C",
        color: "#111111",
        padding: "6px 20px",
        fontSize: "11px",
        fontWeight: "bold",
        fontFamily: "'Cinzel', serif",
        borderRadius: "4px 0 0 4px",
      }}
    >
      NEW RECIPIENT
    </div>

    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          width: "60px",
          height: "60px",
          background: "#C9A84C20",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Trophy size={28} color="#C9A84C" />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Playfair Display'", fontSize: "26px", fontWeight: "bold", marginBottom: "6px" }}>
          {callName}
        </h3>
        <div style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>{dog}</div>
        <div style={{ fontSize: "11px", color: "#C9A84C", marginBottom: "16px" }}>{owner}</div>
        <div style={{ height: "2px", width: "40px", background: "#C9A84C", marginBottom: "18px" }} />
        <p style={{ fontSize: "14px", color: "#666" }}>🏆 {achievement}</p>
      </div>
    </div>
  </motion.div>
);

// NEW COMPONENT 2 - For Advanced Championship
const EnhancedAdvancedCard = ({ dog, callName, owner, achievement }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -12,
      borderColor: "#C9A84C",
      boxShadow: "0 25px 50px rgba(201,168,76,0.12)",
    }}
    style={{
      background: "white",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: "24px",
      overflow: "hidden",
    }}
  >
    {/* Gold Top Bar */}
    <div style={{ height: "4px", background: "#C9A84C" }} />

    <div style={{ padding: "40px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            background: "#C9A84C15",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Medal size={28} color="#C9A84C" />
        </div>
        <div
          style={{
            background: "#C9A84C10",
            padding: "6px 14px",
            borderRadius: "40px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#C9A84C",
          }}
        >
          ADVANCED
        </div>
      </div>

      <h3 style={{ fontFamily: "'Playfair Display'", fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
        {callName}
      </h3>
      <div style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>{dog}</div>
      <div style={{ fontSize: "10px", color: "#C9A84C", marginBottom: "20px" }}>OWNER • {owner}</div>
      <div style={{ height: "2px", width: "50px", background: "#C9A84C", marginBottom: "24px" }} />
      <p style={{ fontSize: "14px", color: "#666" }}>✦ {achievement}</p>
    </div>
  </motion.div>
);


const CupCard = ({ dog, callName, owner, achievement }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -10,
      borderColor: C.gold,
      boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
    }}
    style={{
      background: "white",
      border: `1px solid ${C.border}`,
      padding: "40px",
      display: "flex",
      gap: "24px",
      transition: "all 0.5s ease",
    }}
  >
    {/* Icon */}
    <div
      style={{
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        background: `${C.gold}10`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Trophy size={24} color={C.gold} strokeWidth={1.5} />
    </div>

    {/* Content */}
    <div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          color: C.charcoal,
          fontSize: "22px", //  SAME for all dogs
          fontWeight: 700,
          marginBottom: "6px",
        }}
      >
        {callName}
      </h3>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          color: C.textBody,
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        {dog}
      </div>

      <div
        style={{
          fontFamily: "'Cinzel', serif",
          color: C.gold,
          fontSize: "11px",
          marginBottom: "12px",
          letterSpacing: "0.1em",
        }}
      >
        OWNER: {owner}
      </div>

      <div
        style={{
          height: "1px",
          width: "40px",
          background: C.gold,
          marginBottom: "16px",
          opacity: 0.4,
        }}
      />

      <p
        style={{
          color: C.textBody,
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        {achievement}.
      </p>
    </div>
  </motion.div>
);
export default function Awards() {
  return (
    <div style={{ background: C.white, minHeight: "100vh" }}>
      {/* ═══ HERO SECTION ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100vh", width: "100%", background: "#080c18" }}
      >
        {/* --- Background Image with Cinematic Zoom --- */}
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
                  className="w-full h-full object-cover"
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

        {/* Dynamic Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,12,24,0.7) 0%, transparent 50%, rgba(8,12,24,0.9) 100%)",
          }}
        />

        {/* --- Content Container --- */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
        >
          {/* Animated Gold Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "18px",
              letterSpacing: "0.2em",
              marginBottom: "24px",
              fontWeight: 800,
            }}
          >
            {/* Expanding Liner */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                margin: "0 auto 24px auto",
                height: "1px",
                background: C.gold,
                opacity: 0.8,
              }}
            />
            RECOGNITION
          </motion.div>

          {/* Majestic Main Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(42px, 8vw, 92px)",
              fontWeight: 700,
              lineHeight: "1.05",
              marginBottom: "32px",
              fontStyle: "arial black",
              textShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          >
            Annual Awards<br />
            <span>and Recognitions</span>
          </motion.h1>

          {/* Subtext Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.9, y: 0, transition: { duration: 1 } },
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: 700,
            }}
          >
            Celebrating the Northern Virginia Brittany Club's Members and their Brittanys'
            excellence - Angel Award, Dogs of the Year, President's Cups & New Titles Report.
          </motion.p>

          {/* Scroll Indicator Accent */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "40px", opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
              width: "1px",
              background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
              margin: "48px auto 0 auto",
            }}
          />
        </motion.div>
      </section>

      {/* ═══ ANGEL AWARD ═══ */}

      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* --- Left Side: Image with Animated Border --- */}
          <div style={{ position: "relative" }}>
            {/* Decorative Gold Border - Slides in from top-left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                border: `1px solid ${C.gold}`,
                zIndex: 0,
              }}
            />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                zIndex: 1,
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={brittanyAward}
                alt="Angel Award"
                className="w-full object-contain bg-white"
                style={{ height: "550px" }}
              />
            </motion.div>
          </div>

          {/* --- Right Side: Content (Fade-Up) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                fontFamily: "'Cinzel', serif",
                color: C.gold,
                fontSize: "12px",
                letterSpacing: "0.25em",
                marginBottom: "16px",
                fontWeight: 800,
              }}
            >
              SPECIAL RECOGNITION
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.charcoal,
                fontSize: "clamp(32px, 3.5vw, 48px)",
                lineHeight: "1.2",
                marginBottom: "28px",
                fontWeight: 700,
              }}
            >
              Angel Award
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                color: C.textBody,
                lineHeight: "1.8",
                marginBottom: "24px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
              }}
            >
              Named after founding member,{" "}
              <strong style={{ color: C.charcoal }}>Fred Angel</strong>, this
              award is presented to an NVBC member who is involved in club
              activities and contributes time for the betterment of the club.
              Members of the Board of Directors are not eligible.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                color: C.textBody,
                lineHeight: "1.8",
                marginBottom: "24px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              The award is an engraved pewter cup and a Brittany angel ornament.
            </motion.p>

            {/* Recipient Box with Premium Border-left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              style={{
                background: C.offwhite,
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${C.gold}`, // Highlighting the recipient
                padding: "32px",
                marginTop: "32px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginBottom: "12px",
                  fontWeight: 800,
                }}
              >
                2025 RECIPIENT
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: C.charcoal,
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Stewart “Stu” Thomas
              </h3>
              <p
                style={{
                  color: C.textBody,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                In recognition of his many years assisting in the Brittany sports.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DOGS OF THE YEAR ═══ */}
      <section
        style={{
          background: C.offwhite,
          padding: "120px 0",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* --- Content Header Style --- */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: C.gold,
                fontSize: "14px",
                letterSpacing: "0.4em",
                marginBottom: "20px",
                fontWeight: 800,
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  margin: "0 auto 24px auto",
                  height: "1px",
                  background: C.gold,
                }}
              />
              2025 SEASON
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.charcoal,
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: "1.2",
              }}
            >
              Dogs of the Year
            </h2>
            <p
              style={{
                color: C.textBody,
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                maxWidth: "750px",
                margin: "24px auto 0",
                lineHeight: "1.8",
                fontWeight: 300,
              }}
            >
              Based on their competitive performance records in AKC events, NVBC
              recognizes Dogs of the Year in many areas.{" "}
              <span style={{ color: C.gold, fontWeight: 500 }}>
                No dog can win this award more than two years in a row.
              </span>
              <br />
              Winners receive a certificate and their photographs in the American Brittany Magazine.
            </p>
          </motion.div>

          {/* --- Cards Grid Style --- */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {dogsOfTheYear.map(
              (
                { category, dog, callName, owner, icon: Icon, color, image },
                i,
              ) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
                    },
                  }}
                  whileHover={{ y: -12 }}
                  style={{
                    background: "white",
                    border: `1px solid ${C.border}`,
                    position: "relative",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    cursor: "default",
                  }}
                  className="group"
                >
                  {/* Top Image Section with Zoom */}
                  <div
                    style={{
                      height: "260px",
                      overflow: "hidden",
                      background: "#f9f9f9",
                      position: "relative",
                    }}
                  >
                    <motion.img
                      src={image}
                      alt={callName}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "20px",
                      }}
                    />
                    {/* Overlay Gradient on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to top, ${color}10, transparent)`,
                      }}
                    />
                  </div>

                  <div style={{ padding: "40px 32px" }}>
                    {/* Category Badge & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: C.gold,
                          fontSize: "12px",
                          letterSpacing: "0.2em",
                          fontWeight: 800,
                          borderBottom: `1px solid ${C.gold}40`,
                          paddingBottom: "4px",
                        }}
                      >
                        {category.toUpperCase()}
                      </div>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          background: `${color}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: color,
                          borderRadius: "50%",
                          transition: "all 0.4s ease",
                        }}
                        className="group-hover:rotate-[360deg]"
                      >
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: C.charcoal,
                        fontSize: "24px",
                        lineHeight: "1.2",
                        marginBottom: "6px",
                        fontWeight: 700,
                      }}
                    >
                      {dog}
                    </h3>

                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: C.gold,
                        fontSize: "18px",
                        fontStyle: "italic",
                        marginBottom: "24px",
                        opacity: 0.9,
                      }}
                    >
                      "{callName}"
                    </div>

                    {/* Elegant Animated Divider */}
                    <div
                      style={{
                        position: "relative",
                        height: "1px",
                        background: C.border,
                        marginBottom: "24px",
                      }}
                    >
                      <div
                        className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-700"
                        style={{ background: C.gold }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: C.gold,
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          fontWeight: 800,
                        }}
                      >
                        OWNER
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: C.textBody,
                          fontSize: "15px",
                          fontWeight: 400,
                        }}
                      >
                        {owner}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ PRESIDENT'S CUPS ═══ */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* --- Section Header (Content Style) --- */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }} // Slowed down header
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "14px",
              letterSpacing: "0.4em",
              marginBottom: "24px",
              fontWeight: 800,
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} // Slow liner growth
              style={{
                margin: "0 auto 20px auto",
                height: "1px",
                background: C.gold,
              }}
            />
            EXCELLENCE
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.charcoal,
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 700,
              lineHeight: "1.2",
            }}
          >
            President's Cups
          </h2>
          <p
            style={{
              color: C.textBody,
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              maxWidth: "790px",
              margin: "24px auto 0",
              lineHeight: "1.8",
              fontWeight: 300,
            }}
          >
            NVBC awards engraved, pewter President's Cups to members
            in good standing whose dogs earned Championship and/or Master Hunter titles.
            <span style={{ color: C.gold, fontWeight: 500 }}>
              The award period runs from 11/01/24 - 10/31/25.
            </span>
          </p>
        </motion.div>
        <img
          src={PresidentsCup}
          height={580}
          width={580}
          alt="President Cup"
          className="mx-auto rounded-3xl"
        />
        {/* --- New Cup Recipient - Royal Champion Card --- */}
        <div className="mb-24 relative z-10 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              fontFamily: "'bold', serif",
              color: "black",
              fontSize: "20px",
              letterSpacing: "0.1em",
              marginBottom: "28px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            ✨ NEW RECIPIENTS ✨
          </motion.div>

          {presidentsCups.map(({ dog, callName, owner, achievement }, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 35px rgba(0,0,0,0.1)",
              }}
              style={{
                maxWidth: "500px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  background: "white",
                  border: `1px solid ${C.border}`,
                  borderRadius: "20px",
                  padding: "32px 28px",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Crown Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "24px",
                    background: C.gold,
                    color: C.navy,
                    padding: "4px 14px",
                    borderRadius: "30px",
                    fontSize: "11px",
                    fontWeight: 700,
                    fontFamily: "'Cinzel', serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  
                </div>

                {/* Content */}
                <div style={{ display: "flex", gap: "20px" }}>
                  {/* Crown Icon */}
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `${C.gold}10`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "26px" }}>👑</span>
                  </div>

                  <div style={{ flex: 1 }}>
                    {/* Dog Name */}
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: C.charcoal,
                        fontSize: "26px",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {callName}
                    </h3>

                    {/* Registered Name */}
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: C.textBody,
                        fontSize: "13px",
                        marginBottom: "12px",
                        lineHeight: "1.5",
                      }}
                    >
                      {dog}
                    </div>

                    {/* Owner - Changed to dark gray for readability */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "16px",
                      }}
                    >
                      <span style={{ fontSize: "12px", color: C.gold }}>👑</span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: C.charcoal,
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        {owner}
                      </span>
                    </div>


                    {/* Achievement */}
                    <p
                      style={{
                        color: C.charcoal,
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      🏆 {achievement}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Advanced Titles --- */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              fontFamily: "'bold', serif",
              color: "black",
              fontSize: "23px",
              letterSpacing: "0.1em",
              marginTop: "40px",
              marginBottom: "40px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            ✨ ADVANCED CHAMPIONSHIP  ✨
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {advancedTitles.map(({ dog, callName, owner, achievement }, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: C.gold,
                  boxShadow: "0 20px 35px rgba(0,0,0,0.08)",
                }}
                style={{
                  flex: "0 1 calc(33.333% - 27px)",
                  minWidth: "320px",
                  background: "white",
                  border: `1px solid ${C.border}`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                {/* Gold top bar */}
                <div
                  style={{
                    height: "3px",
                    background: C.gold,
                  }}
                />
                
                <div style={{ padding: "28px 24px" }}>
                  {/* Header with icon and badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        background: `${C.gold}10`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                    <Medal size={26} color="#EF4444" strokeWidth={1.5} /> 
                    </div> 
                    
                    {/* ADVANCED Badge */}
                    <div
                      style={{
                        background: `${C.gold}10`,
                        padding: "5px 14px",
                        borderRadius: "30px",
                        fontSize: "11px",
                        fontWeight: 600,
                        fontFamily: "'Cinzel', serif",
                        color: C.gold,
                      }}
                    >
                      ADVANCED
                    </div>
                  </div>

                  {/* Dog call name */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: C.charcoal,
                      fontSize: "24px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {callName}
                  </h3>

                  {/* Full registered name */}
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: C.textBody,
                      fontSize: "13px",
                      marginBottom: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {dog}
                  </div>

                  {/* Owner - Changed to dark gray for readability */}
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: C.charcoal,
                      fontSize: "13px",
                      marginBottom: "18px",
                      fontWeight: 500,
                    }}
                  >
                    👑 {owner}
                  </div>

                  

                  {/* Achievement text */}
                  <p
                    style={{
                      color: C.charcoal,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    ✦ {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ NEW TITLES RECOGNITION ═══ */}
      <section
        style={{
          background: C.goldLight,
          padding: "120px 0",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* --- Section Header --- */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: C.charcoal,
                fontSize: "16px",
                letterSpacing: "0.3em",
                marginBottom: "16px",
                fontWeight: 800,
              }}
            >
              ACHIEVEMENTS
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.charcoal,
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 700,
              }}
            >
              New Titles Recognition
            </h2>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.white,
                fontSize: "clamp(26px, 5vw, 32px)",
                fontWeight: 700,
              }}
            >
              November 1, 2024 – October 31, 2025
            </h2>
            <div className="mt-8 flex justify-center">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ height: "4px", background: C.gold }}
              />
            </div>
          </motion.div>

          <div className="gap-10 max-w-5xl mx-auto">

            {/* --- Card 2: Titles By Sport --- */}
            <motion.div
              variants={Variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              style={{
                background: "white",
                border: `1px solid ${C.border}`,
                padding: "48px",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "18px",
                  letterSpacing: "0.2em",
                  marginBottom: "32px",
                  fontWeight: 800,
                }}
              >
                NVBC Members' Brittanys Earn 102 NEW AKC TITLES 11/2024-10/2025
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { sport: "Agility", count: 55 },
                  { sport: "Scent Work", count: 27 },
                  { sport: "Rally", count: 13 },
                  { sport: "Field Trials", count: 3 },
                  { sport: "Hunt Tests", count: 3 },
                  { sport: "Show", count: 1 },
                ].map(({ sport, count }, i) => (
                  <div key={sport}>
                    <div className="flex justify-between mb-2">
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: C.textBody,
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {sport}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: C.charcoal,
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {count}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "4px",
                        background: "rgba(0,0,0,0.04)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(count / 55) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1 + 0.5,
                          ease: "circOut",
                        }}
                        style={{
                          height: "100%",
                          background: C.gold,
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- Highlights Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ borderColor: C.gold }}
            style={{
              background: "white",
              border: `1px solid ${C.border}`,
              padding: "50px",
              maxWidth: "850px",
              margin: "60px auto 0",
              transition: "all 0.6s ease",
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: C.gold,
                fontSize: "12px",
                letterSpacing: "0.2em",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              RECORDS & HIGHLIGHTS
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  color: C.textBody,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  paddingLeft: "30px",
                  position: "relative",
                  fontWeight: 300,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: C.gold,
                    fontSize: "24px",
                    top: "-5px",
                  }}
                >
                  •
                </span>
                Jan Brunner's{" "}
                <strong style={{ color: C.charcoal, fontWeight: 600 }}>
                  Pink
                </strong>{" "}
                earned{" "}
                <span style={{ color: C.gold, fontWeight: 600 }}>
                  48 titles
                </span>{" "}
                this year — 33 Agility, 10 Scent Work, and 5 Rally.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  color: C.textBody,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  paddingLeft: "30px",
                  position: "relative",
                  fontWeight: 300,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: C.gold,
                    fontSize: "24px",
                    top: "-5px",
                  }}
                >
                  •
                </span>
                Five of the eleven dogs whose owners submitted certificates titled in{" "}
                <strong style={{ color: C.charcoal, fontWeight: 600 }}>
                  two or more
                </strong>{" "}
                AKC canine sports.
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONGRATULATIONS FOOTER ═══ */}
      <section
        style={{
          background: C.navy,
          padding: "120px 0", // Thoda zyada padding for luxury feel
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Glow for Navy depth */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Gold Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              margin: "0 auto 32px auto",
              height: "1px",
              background: C.gold,
            }}
          />

          {/* Hero Heading */}
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              fontStyle: "italic",
              marginBottom: "24px",
              letterSpacing: "-0.01em",
            }}
          >
            Congratulations to All!
          </motion.h2>

          {/* Body Text with higher opacity for readability */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.75)", // Thoda bright kiya taaki Navy par saaf dikhe
              fontSize: "18px",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            NVBC congratulates all members who compete in AKC events and earn titles at any level.
            New AKC titles are published in the annual club advertisement in The American Brittany Magazine.
            Eight members submitted documentation on new AKC titles this year for eleven dogs earning a total
            of 102 new AKC titles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.75)", // Thoda bright kiya taaki Navy par saaf dikhe
              fontSize: "18px",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: 300,
            }}
            className="pt-10"
          >
            Agility titles outnumber all others with 55, earned by just five dogs.
            Four dogs participated in Scent Work tests earning 27 titles.
            There were also 13 Rally titles, three each in Field Trials and Hunt Tests, and one Show title.
            There were no Barn Hunt, FAST Cat, Canine Good Citizen or Trick Dog titles submitted this year.
          </motion.p>

          {/* Signature Footer */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }} // Expands slowly on view
            transition={{ duration: 2, delay: 0.8 }}
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "13px",
              fontWeight: 700,
              marginTop: "56px",
              opacity: 0.9,
            }}
          >
            NORTHERN VIRGINIA BRITTANY CLUB
          </motion.div>
        </motion.div>
      </section>
      <section className="w-full p-10">
        <div className="w-full">
          <img
            src={highlightsBanner}
            alt="NVBC 2024 Highlights"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "6px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
