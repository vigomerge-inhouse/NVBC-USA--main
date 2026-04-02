import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight, Star, Users, Award, Target,
  Shield, Heart, Zap, Instagram, Mail, X, ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from 'framer-motion';

// Assets
import dogShowImg from "../../assets/images/about/dogshow.jpg";
import memberImg from "../../assets/images/about/member.jpg";
import countryImg from "../../assets/images/about/country.jpg";
import Hero from "../../assets/images/about/About hero.jpg";
import { title } from "node:process";

/* ─── Types ──────────────────────────────────────────────────────── */
interface BoardMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  article: string;
}


/* ─── Design Tokens ───────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#f7f7f7",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#444444",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  goldBorder: "rgba(201,168,76,0.3)",
  divider: "rgba(0,0,0,0.08)",

  fadedGold: "#F9F4E8",
  cardBg: "#F1E7C7",
  iconGold: "#916B22",
  iconPurple: "#7A438E",
  iconGreen: "#2D6A3E",
  iconBlue: "#1B4D8F",
  lightgrey: "#f2f2f2",
  textSoft: "#888888",
  goldHover: "rgba(201,168,76,0.6)",
};

const goldGrad = `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`;

/* ─── Content Data ────────────────────────────────────────────────── */
const milestones = [
  {
    year: "1973",
    title: "Club Founded",
    desc: "The Northern Virginia Brittany Club was established in 1973 by a group of dedicated Brittany owners and breeders in Virginia and the Metropolitan Washington region, dedicated to the Brittany breed. It is affiliated with the American Brittany Club (ABC), the national parent organization, and is officially sanctioned by the American Kennel Club (AKC).",
  },
  {
    year: "1974",
    title: "Early Specialty Shows & Field Activities",
    desc: "NVBC offered its first AKC sanctioned field trial in April 1974. The Club also organized its first conformation show and planned numerous training events and club hunts.",
  },
  {
    year: "1980's",
    title: "Growth of Club Events",
    desc: "The AKC introduced “hunt tests” in 1986, the club expanded its schedule of events, including field trials and training activities that allowed members to demonstrate their dogs’ hunting abilities and field performance.",
  },
  {
    year: "1988",
    title: "AKC Recognition",
    desc: " The Club began naming Dogs of the Year to recognize outstanding competitors in field trials, hunt tests, and conformation shows.",
  },
  {
    year: "1990",
    title: "Expanding Competitive Programs",
    desc: "NVBC continued to grow its competitive programs, with more members participating in field trials, hunt tests, agility, and obedience competitions.The club continued its social traditions with Summer picnics, fun trials, and an annual Christmas dinner.The Obedience Trial Dog of the Year award was added in 1996.",
  },
  {
    year: "2000's",
    //title: "Hunt Test participation",
    desc: "The Club continued to offer field trials, hunt tests, agility trials, and a specialty show each year. It added Agility to its Dog of the Year program; created the Angel Award, named for founding member, Fred Angel, for a deserving volunteer; and set up its first website.",
  },
  {
    year: "2010’s and 2020’s",
    title: "Community Growth & Member Achievements",
    desc: "The Club continued to be strong financially and was able to significantly increase its annual contributions to support ABC national events, the National Bird Dog Museum, Brittany rescue, and veterinary research.The Rally Dog of the Year award was added in 2022.",
  },  
  {
    year: "2023",
    title: "Celebrated 50th Anniversary",
    desc: "NVBC celebrated 50 years of dedication to the Brittany breed, recognizing the contributions of founding members and the continued growth of the club and its community.",
  },
  {
    year: "2026",
    title: "Upcoming Initiatives",
    desc: " This year, NVBC is focused on growing our community and honoring the breed’s dual-purpose heritage. We are proposing to expand the club’s performance activities – recruiting new participants to join us in field and agility trials, hunt and water tests, and other AKC-sanctioned competitive activities. We’re also pitching-in on the conservation front, restoring upland bird habitat with like-minded groups across Virginia. Please do join us for educational and social events as we plan the next 50 years of NVBC’s future.",
  },
];

const boardMembers: BoardMember[] = [
  {
    name: "Harriett Condon",
    role: "President",
    phone: "703-850-4824",
    email: "hmc1812@me.com",
    article:
      "Harriett Condon leads the Northern Virginia Brittany Club as President, guiding the organization’s mission to support Brittany owners, breeders, and enthusiasts while promoting responsible ownership and breed preservation."
  },
  {
    name: "Ron Somers",
    role: "1st Vice President",
    phone: "202-250-3575",
    email: "rsomers@indiafirstgroup.com",
    article:
      "Ron Somers assists the President and helps coordinate club initiatives, events, and programs that support the Brittany community."
  },
  {
    name: "Doug Welsh",
    role: "2nd Vice President",
    phone: "443-865-0414",
    email: "dougcwelsh@yahoo.com",
    article:
      "Doug Welsh supports leadership activities within the club and contributes to organizing events and strengthening the NVBC community."
  },
  {
    name: "Bruce Conover",
    role: "Treasurer",
    phone: "434-476-1453",
    email: "coveyrisebrits@yahoo.com",
    article:
      "Bruce Conover manages the financial health of NVBC and helps ensure the club can successfully host events and support its members."
  },
  {
    name: "Barbara Bice",
    role: "Secretary",
    phone: "410-660-7290",
    email: "bbice1@verizon.net",
    article:
      "Barbara Bice maintains official club records and communications, helping ensure the smooth administration of NVBC."
  },
  {
    name: "Jim Harrison",
    role: "Director at Large",
    phone: "540-908-6735",
    email: "jimanddebharrison@gmail.com",
    article:
      "Jim Harrison serves on the Board of Directors Northern, supporting leadership decisions and helping guide the club’s programs."
  },
  {
    name: "Kat Shannon",
    role: "Director at Large",
    phone: "804-240-2953",
    email: "kstarbrits@gmail.com",
    article:
      "Kath Shannon contributes to the leadership of NVBC while also supporting breeder referrals and hunt test coordination."
  }
];

const values = [
  {
    Icon: Award,
    title: "Excellence",
    color: C.iconGold,
    desc: "We strive for the highest standards in breeding, training, and responsible ownership, honoring the Brittany’s natural abilities and character.",
  },
  {
    Icon: Heart,
    title: "Community",
    color: C.iconPurple,
    desc: "We bring together Brittany owners and enthusiasts to build lasting friendships, share experiences, and support one another through a shared passion.",
  },
  {
    Icon: Target,
    title: "Heritage",
    color: C.iconGreen,
    desc: "We preserve the Brittany’s dual-purpose heritage through ethical breeding and sporting excellence to ensure this versatile breed thrives for future generations.",
  },
  {
    Icon: Zap,
    title: "Education",
    color: C.iconBlue,
    desc: "We encourage learning and mentorship, providing resources and guidance to help owners give their Brittanys the healthiest and happiest lives possible.",
  },
];

// styling function 

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3, // Hero section mein thoda delay acha lagta hai
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const headingItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};



/* ─── Main Component ─────────────────────────────────────────────── */
export default function About() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  const [activeTrial, setActiveTrial] = useState<number | null>(null);
  

  return (
    <div
      style={{ background: C.white, color: C.charcoal, overflowX: "hidden" }}
    >
      {/* 1. Page Header */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#06080B" }}
      >
        {/* Fixed Background - No animation here to maintain parallax feel */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,8,11,0.9) 0%, rgba(6,8,11,0.3) 50%, rgba(6,8,11,0.6) 100%)",
          }}
        />

        {/* Animate-on-Scroll Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Gold Top Line */}
          <motion.div
            variants={itemVariants}
            style={{
              width: "100px",
              height: "1px",
              background: C.gold,
              marginBottom: "32px",
            }}
          />

          {/* Established Text */}
          <motion.div
            variants={itemVariants}
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "18px",
              letterSpacing: "0.5em",
              marginBottom: "25px",
              fontWeight: 900,
            }}
          >
            ESTABLISHED 1973
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(48px, 10vw, 92px)",
              lineHeight: "1.05",
              fontWeight: 400,
              fontStyle: "arial black",
              marginBottom: "36px",
              letterSpacing: "-0.02em",
            }}
          >
            About NVBC
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={itemVariants}
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 2vw, 22px)",
              maxWidth: "800px",
              lineHeight: "1.8",
              fontWeight: 300,
              textShadow: "0 2px 15px rgba(0,0,0,0.5)",
            }}
          >
             Five decades of devotion to the Brittany Breed -  our Story, our Mission, and our Community.
          </motion.p>
          {/* Scroll Indicator - Ispe alag se floating animation add ki hai */}
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
            />
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
        </motion.div>
      </section>

      {/* 2. Mission & Story */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE: Content Card (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "600px" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                height: "4px",
                background: goldGrad,
                marginBottom: "20px",
              }}
            />

            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#8B6914",
                fontSize: "25px",
                letterSpacing: "0.1em",
                marginBottom: "16px",
                fontWeight: 800,
              }}
            >
              OUR MISSION
            </div>

            <motion.div
              style={{
                background: C.cardBg,
                borderRadius: "4px",
                padding: "40px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              }}
              // Is card ke andar ke content ko animate karne ke liye
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            >
              <motion.h2
                variants={contentVariants}
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "48px",
                  marginBottom: "30px",
                  lineHeight: "1.2",
                }}
              >
                Preserving Excellence, Building Community
              </motion.h2>

              <motion.p
                variants={contentVariants}
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "22px",
                  fontSize: "16px",
                }}
              >
                Founded in 1973, the Northern Virginia Brittany Club (NVBC) is a
                vibrant community of Brittany owners, breeders, and enthusiasts
                united by their passion for this remarkable and versatile breed.
              </motion.p>

              <motion.p
                variants={contentVariants}
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "22px",
                  fontSize: "16px",
                }}
              >
                Built on a foundation of care, respect, and professionalism, the
                club promotes cooperation and friendship while encouraging the
                highest standards in breeding, training, and responsible
                ownership.
              </motion.p>

              <motion.p
                variants={contentVariants}
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "22px",
                  fontSize: "16px",
                }}
              >
                NVBC provides members with valuable opportunities to work with
                their dogs through field trials, hunt tests, agility, obedience,
                and specialty shows.
              </motion.p>

              <motion.p
                variants={contentVariants}
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                With members from Virginia, Washington DC, Maryland,
                Pennsylvania, and beyond, NVBC brings together decades of
                collective expertise dedicated to supporting the well-being of
                Brittanys.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Photo Card (Slides from Right) */}
          <motion.div
            style={{ perspective: "1000px" }}
            initial={{ opacity: 0, x: 100, rotateY: 10 }} // Thoda 3D rotate hokar aayega
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              style={{
                transform: "rotateY(-6deg) rotateX(2deg)",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                transition: "transform 0.5s ease", // Hover effect smooth karne ke liye
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "rotateY(0deg) rotateX(0deg) scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "rotateY(-6deg) rotateX(2deg) scale(1)")
              }
            >
              <ImageWithFallback
                src={dogShowImg}
                alt="Dog Show"
                className="w-full mt-16 object-cover"
                style={{ height: "800px" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-32 overflow-hidden" style={{ background: C.fadedGold }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* --- Top Heading Section (Staggered Content Style) --- */}
          <motion.div 
            className="text-center mb-16 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              variants={headingItemVariants}
              style={{ width: "100px", height: "5px", background: goldGrad, marginBottom: "30px" }} 
            />
            <motion.div 
              variants={headingItemVariants}
              style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "17px", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 800 }}
            >
              OUR VALUES
            </motion.div>
            <motion.h2 
              variants={headingItemVariants}
              style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 800 }}
            >
              The NVBC Standard
            </motion.h2>
          </motion.div>

          {/* --- Cards Grid (Split Entrance: 2 Left, 2 Right) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map(({ Icon, title, color, desc }, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i < 2 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1, 
                  ease: [0.25, 1, 0.5, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group" 
                style={{ 
                  background: C.cardBg, 
                  borderTop: `4px solid ${color}`, 
                  borderRadius: "4px", 
                  padding: "48px 32px", 
                  display: "flex", 
                  flexDirection: "column", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)", 
                  height: "100%",
                  cursor: "pointer",
                  willChange: "transform"
                }}
                // --- Updated Hover Logic with Golden Glow ---
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  /* Box Shadow Breakdown:
                     1. 0 20px 40px rgba(0,0,0,0.2) -> Deep dark shadow for lift
                     2. 0 0 25px rgba(154, 123, 44, 0.4) -> Soft golden outer glow
                  */
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 25px rgba(154, 123, 44, 0.3)", 
                }}
                
              >
                <motion.div 
                  className="icon-container"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  style={{ 
                    width: "52px", 
                    height: "52px", 
                    background: color, 
                    borderRadius: "6px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "32px", 
                    // Icon shadow also gets a slight boost
                    boxShadow: `0 8px 20px ${color}44`,
                    transition: "0.3s ease" 
                  }}
                >
                  <Icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                </motion.div>
                
                <h3 style={{ 
                  fontFamily: "'Cinzel', serif", 
                  color: C.charcoal, 
                  fontSize: "16px", 
                  fontWeight: 800, 
                  marginBottom: "12px",
                  transition: "color 0.3s ease"
                }}
                  // Yahan text color bhi gold ho jayega hover par
                  className="group-hover:text-[#9A7B2C]" 
                >
                  {title}
                </h3>
              
                <p style={{ 
                  color: C.textBody, 
                  fontSize: "14px", 
                  lineHeight: "1.7", 
                  fontFamily: "'Inter', sans-serif" 
                }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8ecd0, #ecd48a, #d4b05a)",
          padding: "120px 0",
          borderTop: `1px solid ${C.goldBorder}`,
          borderBottom: `1px solid ${C.goldBorder}`,
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* --- Header Section --- */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              variants={headingItemVariants}
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#1a1608",
                fontSize: "17px",
                letterSpacing: "0.2em",
                fontWeight: 900,
                marginBottom: "12px",
              }}
            >
              OUR JOURNEY
            </motion.div>
            <motion.h2
              variants={headingItemVariants}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a1608",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
              }}
            >
              Club History & Milestones
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* --- Vertical Timeline Line --- */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                width: "2px",
                background: "rgba(26,22,8,0.2)",
                transform: "translateX(-50%)",
              }}
            />

            {/* --- Timeline START Marker (Fixed) --- */}
            {/* <motion.div
              className="hidden md:block absolute left-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                top: "-30px", // Adjusted for better alignment
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#C9A84C",
                transform: "translateX(-50%)",
                boxShadow: "0 0 0 6px rgba(201,168,76,0.25)",
                border: "3px solid #1a1608",
                zIndex: 10
              }}
            /> */}

            <div className="flex flex-col gap-16 py-8">
              {" "}
              {/* Gap and padding adjusted */}
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-8 items-center group ${ // Added group class
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* --- Content Card --- */}
                  <motion.div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <motion.div
                      // --- Enhanced Hover Effects ---
                      whileHover={{ 
                        scale: 1.05, 
                        y: -8,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                        borderColor: "rgba(154, 123, 44, 0.5)", // Gold border on hover
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      style={{
                        background: "rgba(255,255,255,0.45)",
                        backdropFilter: "blur(12px)",
                        padding: "32px",
                        borderRadius: "4px",
                        maxWidth: "420px",
                        display: "inline-block",
                        textAlign: "left",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        cursor: "pointer",
                        willChange: "transform",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: "#1a1608",
                          fontSize: "28px",
                          fontWeight: 900,
                          marginBottom: "4px",
                          transition: "color 0.3s ease"
                        }}
                        className="group-hover:text-[#9A7B2C]" // Year turns gold on hover
                      >
                        {m.year}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          marginBottom: "10px",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(26,22,8,0.75)",
                          fontSize: "15px",
                          lineHeight: "1.8",
                        }}
                      >
                        {m.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                      
                  {/* --- Central Active Point with Hover Sync --- */}
                  <motion.div
                    className="hidden md:flex relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    // Point expands when the card is hovered
                    animate={{
                      scale: 1,
                      backgroundColor: "#1a1608",
                    }}
                    whileHover={{ scale: 1.5 }} 
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#1a1608",
                      zIndex: 5,
                      boxShadow: "0 0 0 4px white",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {/* Soft pulse effect behind the point */}
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#9A7B2C] opacity-0 group-hover:opacity-20" />
                  </motion.div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>

            {/* --- Timeline END Marker (New) --- */}
            {/* <motion.div
              className="hidden md:block absolute left-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }} // Delayed to appear after line growth
              style={{
                bottom: "-30px", // Exact bottom alignment
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#1a1608",
                transform: "translateX(-50%)",
                boxShadow: "0 0 0 6px rgba(26,22,8,0.1)",
                border: "3px solid #C9A84C",
                zIndex: 10
              }}
            /> */}
          </div>
        </div>
      </section>

      {/* 5. Leadership Board */}
      <section
        className="py-32 px-6 lg:px-8 overflow-hidden"
        style={{ background: C.offwhite }}
      >
        <div className="max-w-7xl mx-auto">
          {/* --- Header Section (Staggered) --- */}
          <motion.div
            className="text-center mb-20 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              variants={headingItemVariants}
              style={{
                width: "100px",
                height: "3px",
                background: C.gold,
                marginBottom: "20px",
              }}
            />
            <motion.h2
              variants={headingItemVariants}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.navy,
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 700,
              }}
            >
             Our Board of Directors
            </motion.h2>
          </motion.div>

          {/* --- Members Grid (Split Entrance) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedMember(member)}
                // Directional Slide Logic:
                // Left card (i%3===0) -> Left se aayega
                // Middle card (i%3===1) -> Center (y-axis) se aayega
                // Right card (i%3===2) -> Right se aayega
                initial={{
                  opacity: 0,
                  x: i % 3 === 0 ? -50 : i % 3 === 2 ? 50 : 0,
                  y: i % 3 === 1 ? 40 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: i * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                  borderColor: `${C.gold}44`,
                }}
                className="group cursor-pointer flex flex-col"
                style={{
                  background: C.white,
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderTop: `4px solid ${C.gold}`,
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                }}
              >
                <div className="p-8 flex-1">
                  {/* Initials Circle with Pop Effect */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-8"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: C.iconGold,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C.white,
                      fontFamily: "'Cinzel', serif",
                      fontSize: "20px",
                      fontWeight: 800,
                      boxShadow: "0 10px 20px rgba(145, 107, 34, 0.2)",
                      transition:
                        "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </motion.div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: C.navy,
                      fontSize: "26px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "12px" }}
                      transition={{ delay: 0.5 }}
                      style={{ height: "1px", background: C.gold }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: C.textBody,
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                      }}
                    >
                     
                    </span>
                  </div>
                </div>

                {/* Footer of Card */}
                <div
                  style={{
                    marginTop: "auto",
                    padding: "20px 32px",
                    borderTop: "1px solid #f0f0f0",
                    background: "#fafafa",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#8B6914",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                      {member.role.toUpperCase()}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Bottom Glow Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  style={{ background: C.gold }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Profile Article Overlay */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(8, 12, 24, 0.95)",
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white max-h-[90vh] overflow-y-auto"
            style={{
              borderRadius: "4px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} color={C.charcoal} />
            </button>

            <div className="p-8 md:p-16">
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  marginBottom: "16px",
                  fontWeight: 800,
                }}
              >
                {selectedMember.role.toUpperCase()}
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  color: C.navy,
                  marginBottom: "32px",
                  fontWeight: 700,
                }}
              >
                {selectedMember.name}
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background: goldGrad,
                  marginBottom: "40px",
                }}
              />

              <div className="prose prose-lg">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: C.textBody,
                    fontSize: "18px",
                    lineHeight: "1.8",
                    fontWeight: 300,
                  }}
                >
                  {selectedMember.article}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Community CTA */}
      <section
        className="py-32 px-6 lg:px-8 text-center"
        style={{
          background: "#06080B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image with subtle fade-in */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${memberImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
          }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Gold Line */}
          <motion.div
            variants={contentItemVariants}
            style={{
              width: "100px",
              height: "4px",
              background: C.gold,
              marginBottom: "24px",
            }}
          />

          {/* Heading */}
          <motion.h2
            variants={contentItemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(36px, 5vw, 56px)",
              marginBottom: "28px",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Join the Heritage
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={contentItemVariants}
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "19px",
              maxWidth: "600px",
              margin: "0 auto 48px",
              fontWeight: 300,
              lineHeight: "1.8",
            }}
          >
            Whether you are a seasoned field trialer or a first-time Brittany
            owner, there is a place for you in our club.
          </motion.p>

        </motion.div>
      </section>
    </div>
  );
}