import React, { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";



// LOCAL ASSET IMPORTS (Based on your folder structure)
import brittanyPortrait from '../../assets/images/why a brittany/brittanyPortrait.jpg';
import huntingImg from '../../assets/images/why a brittany/huntingImg.jpg';
import outdoorImg from '../../assets/images/why a brittany/outdoorImg.jpg';
import puppyImg from '../../assets/images/why a brittany/puppyImg.jpg';
import Hero2 from '../../assets/images/why a brittany/Hero2.jpg';
import Hero3 from '../../assets/images/why a brittany/Why-choose-a-brittany.2.jpg';
import resourceVideo from "../../assets/images/why a brittany/videos/resource-video.mp4";
const heroImages = [brittanyPortrait, Hero2, Hero3];

const characteristics = [
  { label: "Height", value: "17.5 – 20.5 inches" },
  { label: "Weight", value: "30 – 40 pounds" },
  { label: "Life Expectancy", value: "12 – 14 years" },
  { label: "Coat Type", value: "Dense, flat or slightly wavy (never curly)" },
  { label: "Colors", value: "Orange & White, Liver & White (clear or roan patterns)" },
  { label: "Group", value: "Sporting Group (American Kennel Club)" },
  { label: "Temperament", value: "Bright, eager, alert, friendly, and responsive" },
  { label: "Exercise Needs", value: "Very high — requires daily vigorous physical and mental activity" },
];

const traits = [
  "Exceptional hunting instincts and excellent sense of smell",
  "Highly versatile in field work and performance events",
  "Affectionate and gentle with family members",
  "Highly trainable and eager to please",
  "Generally good with children and other pets (with proper socialization)",
  "Alert, energetic, and thrives in active outdoor environments",
  "Compact, athletic, and agile build",
  "Low to moderate grooming requirements",
];

const breedHistory = [
  {
    title: "Origins in France",
    desc: "The Brittany originated in the Brittany region of France, with roots tracing back to the 17th century. Early artwork depicts orange-and-white dogs resembling modern Brittanys working closely with hunters and falconers.",
  },
  {
    title: "Development in the 1800s",
    desc: "During the 19th century, the breed was further refined through selective breeding, likely including crosses with English Setters. This enhanced its pointing ability, agility, and versatility in the field.",
  },
  {
    title: "AKC Recognition",
    desc: "The American Kennel Club officially recognized the Brittany in 1934. Originally called the 'Brittany Spaniel', the word 'Spaniel' was later dropped in the U.S. to better reflect the breed’s pointing characteristics.",
  },
  {
    title: "Modern-Day Versatility",
    desc: "Today, the Brittany is known as one of the most versatile sporting breeds, excelling in hunting, field trials, agility, and obedience. It remains highly valued for its balance of performance ability and affectionate companionship.",
  },
];


// Styling function

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

const profileItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const MotionLink = motion(Link);


const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

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


export default function WhyBrittany() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* SECTION 1: HERO HEADER (Centered) */}
      <section
        className="relative overflow-hidden"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06080B",
        }}
      >
        {/* --- Background Image with Slow Zoom --- */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
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
                // style={{ objectPosition: "center 25%", opacity: 0.55 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "",
            zIndex: 1,
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
        >
          {/* Gold Liner - Expanding from center */}
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "60px",
                opacity: 1,
                transition: { duration: 1 },
              },
            }}
            style={{
              height: "1px",
              background: "#C9A84C",
              marginBottom: "32px",
            }}
          />

          {/* Subheading */}
          <motion.div
            variants={heroItemVariants}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A84C",
              fontSize: "12px",
              letterSpacing: "0.4em",
              marginBottom: "16px",
              fontWeight: 800,
            }}
          >
            BREED INFORMATION
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={heroItemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(48px, 8vw, 90px)",
              fontWeight: 400,
              fontStyle: "arial black",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Why a Brittany
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={heroItemVariants}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              maxWidth: "650px",
              lineHeight: "1.7",
              fontWeight: 300,
            }}
          >
            Versatile. Spirited. Devoted. The perfect partnership between field
            champion and beloved companion.
          </motion.p>

          {/* Scroll Indicator (Optional but recommended for 100vh) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-0 flex flex-col items-center gap-2"
          >
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "linear-gradient(to bottom, #C9A84C, transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: BREED PROFILE (Left Aligned Content) */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 items-start">
          <div>
            {/* Gold Liner */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.2 }}
              style={{ maxWidth: "600px" }} // Optional: alignment ke liye
            >
              {/* Expanding Gold Liner */}
              <motion.div
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: "40px",
                    opacity: 1,
                    transition: { duration: 0.8 },
                  },
                }}
                style={{
                  height: "1px",
                  background: "#8B6914",
                  marginBottom: "24px",
                }}
              />

              {/* Subheading */}
              <motion.div
                variants={profileItemVariants}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: "18px",
                  letterSpacing: "0.2em",
                  marginBottom: "16px",
                  fontWeight: 800,
                }}
              >
                BREED PROFILE
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={profileItemVariants}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#111111",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: "1.2",
                  marginBottom: "28px",
                  fontWeight: 700,
                }}
              >
                Breed Standard Overview
              </motion.h2>

              {/* Description Text */}
              <motion.p
                variants={profileItemVariants}
                style={{
                  color: "rgba(0,0,0,0.65)",
                  lineHeight: "1.9",
                  marginBottom: "40px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                The Brittany is a masterpiece: a devoted family pet, relentless
                hunter, and show ring dazzler. Athletic and refined, it races
                through the wind, sniffing out birds with sharp instinct,
                pointing and retrieving from land or water in the field. It is a
                whirlwind of energy, bounding through terrain with endless
                stamina.
              </motion.p>
              <motion.a
                href="https://www.akc.org/dog-breeds/brittany/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: "inline-block",
                  marginBottom: "50px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "18px",
                  letterSpacing: "0.2em",
                  fontWeight: 800,
                  color: "#8B6914",
                  textDecoration: "none",
                  padding: "12px 24px",
                  border: "1px solid #C9A84C",
                  background: "rgba(201,168,76,0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                AKC BREED STANDARD
              </motion.a>
            </motion.div>

            {/* Characteristics Grid with Gold Top Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {characteristics.map(({ label, value }, i) => (
                <motion.div
                  key={i}
                  // Logic: Mobile par sab slide-up honge,
                  // Tablet/Desktop par: Even index (left col) left se, Odd index (right col) right se
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 18,
                    delay: i * 0.1, // Staggered delay for cascading effect
                  }}
                  // Subtle Hover Effect for interactivity
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(201,168,76,0.3)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                  }}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderTop: "3px solid #C9A84C",
                    borderRadius: "2px",
                    padding: "24px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                    transition: "border-color 0.3s ease", // Smooth border transition
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#8B6914",
                      fontSize: "14px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      marginBottom: "6px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#111111",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="relative h-[600px] lg:block"
            style={{ perspective: "1500px" }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "rotateY(-5deg)",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.12)",
              }}
            >
              <ImageWithFallback
                src={huntingImg}
                alt="Brittany Hunting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRAITS (Gold Background) */}
      <section
        style={{
          background: "#f8de91",
          padding: "120px 0",
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: Content Grid Card (Slides from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Gold Liner - Expanding from center */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  height: "1px",
                  background: "#644c10",
                  marginBottom: "24px",
                }}
              />

              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#644c10",
                  fontSize: "18px",
                  letterSpacing: "0.25em",
                  marginBottom: "16px",
                  fontWeight: 800,
                }}
              >
                TEMPERAMENT & TRAITS
              </div>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#111111",
                  fontSize: "clamp(32px, 4vw, 42px)",
                  lineHeight: "1.3",
                  marginBottom: "32px",
                  fontWeight: 700,
                }}
              >
                What Makes the Brittany Unique
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {traits.map((trait, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.8, duration: 0.5 }}
                  >
                    <CheckCircle
                      size={18}
                      style={{ color: "#8B6914", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        color: "#333333",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      {trait}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            <motion.div
              style={{
                borderRadius: "2px",
                overflow: "hidden",
                border: "8px solid #ffffff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            >
              <ImageWithFallback
                src={outdoorImg}
                alt="Brittany Outdoors"
                className="w-full object-cover"
                style={{ height: "550px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HISTORY (Centered Header + Gold Top Border Cards) */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* --- Header Section (Content Style) --- */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Centered Gold Liner - Expands from 0 */}
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "40px",
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
            style={{
              height: "1px",
              background: "#8B6914",
              marginBottom: "24px",
            }}
          />

          <motion.div
            variants={headerItemVariants}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#8B6914",
              fontSize: "18px",
              letterSpacing: "0.3em",
              marginBottom: "12px",
              fontWeight: 800,
            }}
          >
            HERITAGE
          </motion.div>

          <motion.h2
            variants={headerItemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#111111",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
            }}
          >
            A Rich Breed History
          </motion.h2>
        </motion.div>

        {/* --- History Cards (Card Style) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {breedHistory.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              // Slide up with stagger
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: i * 0.1,
              }}
              // Premium Hover Effect
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                borderColor: "rgba(201, 168, 76, 0.4)",
              }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderTop: "4px solid #C9A84C",
                padding: "45px",
                borderRadius: "2px",
                position: "relative",
                cursor: "default",
              }}
            >
              {/* Animated Number Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#C9A84C",
                  fontSize: "18px",
                  fontWeight: 800,
                  marginBottom: "20px",
                }}
              >
                0{i + 1}
              </motion.div>

              <h3
                style={{
                  fontFamily: " serif",
                  color: "#111111",
                  fontSize: "26px",
                  marginBottom: "18px",
                  fontWeight: 700,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "rgba(0,0,0,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8",
                }}
              >
                {desc}
              </p>

              {/* Subtle Bottom Accent Line on Hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#C9A84C]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                style={{ background: "#C9A84C" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA (Centered Footer) */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: "#080c18" }}
      >
        {/* --- Background with Subtle Zoom --- */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <ImageWithFallback
            src={puppyImg}
            alt="Brittany Puppies"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Radial Glow Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, #080c18 100%)",
          }}
        />

        {/* --- Content Container --- */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Expanding Gold Liner */}
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "50px",
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
            style={{
              height: "1px",
              background: "#C9A84C",
              marginBottom: "32px",
            }}
          />

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(32px, 5vw, 56px)",
              marginBottom: "24px",
              lineHeight: "1.2",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Looking for a Brittany Puppy?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "48px",
              fontWeight: 300,
              maxWidth: "600px",
            }}
          >
            For inquiries about available litters and breeder referrals, please contact our NVBC Committee Chair,{" "}
            <strong>Kat Shannon</strong>{" "}
            directly at{" "}
            <a
              href="mailto:kstarbrits@gmail.com"
              style={{ color: "#F7B80B", textDecoration: "underline" }}
            >
              kstarbrits@gmail.com
            </a>
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #F7B80B, #E8C97E)",
                color: "#080c18",
                padding: "20px 52px",
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              CONTACT US
            </Link>

            {/* PUPPY VIDEO BUTTON */}
            <button
              onClick={() => setShowVideo(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #F7B80B, #E8C97E)",
                color: "#080c18",
                padding: "20px 52px",
                border: "1px solid rgba(255,255,255,0.4)",
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              PUPPY VIDEO
            </button>
          </motion.div>
          
        </motion.div>

      </section>
      {/* {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: "900px",
              aspectRatio: "16/9",
              background: "#000",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-40px",    
                right: "0px",      
                background: "none",
                border: "none",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
                fontWeight: "bold",
                padding: "5px",
              }}
            >
              &times;
            </button>
            
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              style={{ objectFit: "cover" }}
            >
              <source src={resourceVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )} */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)", // Darker background for focus
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "10px", // Mobile par safe gap ke liye
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              maxHeight: "85vh", 
              background: "#000",
              position: "relative",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-45px", // Video ke upar set kiya gaya hai
                right: "0px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "35px",
                cursor: "pointer",
                fontWeight: "300", // Taki 'x' clean dikhe
                zIndex: 10001,
              }}
            >
              &times;
            </button>
            
            <video
              key={resourceVideo} // Video source change hone par reload karega
              controls
              autoPlay
              playsInline // Mobile browsers ke liye zaroori
              style={{
                width: "100%",
                height: "auto", // Height auto taaki ratio na bigde
                maxHeight: "85vh",
                objectFit: "contain", // ✅ Sabse zaroori: Video crop nahi hogi
                display: "block",
              }}
            >
              <source src={resourceVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}