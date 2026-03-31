import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,

  HeartPulse,
  FileText,
  ExternalLink,
  Mail,

  ShieldCheck,
  MapPin,
  Stethoscope,
  Leaf,
  Send,
  BookOpen,
  Facebook
} from 'lucide-react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import hero from "../../assets/images/Resource/ResourceHero.jpg";
import maggieMagzine from "../../assets/images/Resource/Maggie_Magzine.pdf";

import Hero1 from "../../assets/images/Resource/Hero1.jpg";
import Hero2 from "../../assets/images/Resource/Hero2.jpg";
import Hero3 from "../../assets/images/Resource/Hero3.jpg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImages = [hero, Hero1, Hero2, Hero3];

const BRITTANY_IMAGE_URL =
  hero;

/* ── Design Tokens (Extracted from Contact Page) ── */
const C = {
  gold: "#9A7B2C",
  goldLight: "rgba(154, 123, 44, 0.12)",
  goldHover: "rgba(154, 123, 44, 0.2)",
  bg: "#FAF9F6",
  white: "#ffffff",
  textDark: "#1a1a1a",
  textMuted: "rgba(0,0,0,0.6)",
  border: "rgba(154, 123, 44, 0.15)",
};

const fontCinzel = { fontFamily: "'Cinzel', serif" };
const fontPlayfair = { fontFamily: "'Playfair Display', serif" };
const fontInter = { fontFamily: "'Inter', sans-serif" };

/* ── Shared Components ── */

const SectionHeader = ({
  badge,
  title,
  description,
  center = false,
}: {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <div style={{ ...fontCinzel, color: C.gold, fontSize: "20px", fontWeight: "bold", letterSpacing: "0.2em", marginBottom: "16px", textTransform: "uppercase" }}>
      {badge}
    </div>
    <h2 style={{ ...fontPlayfair, color: C.textDark, fontSize: "clamp(32px, 4vw, 28px)", fontWeight: "bold", marginBottom: "16px" }}>
      {title}
    </h2>
    {description && (
      <p style={{ ...fontInter, color: C.textMuted, fontSize: "16px", maxWidth: "700px", lineHeight: "1.7", margin: center ? "0 auto" : "0" }}>
        {description}
      </p>
    )}
  </div>
);

const ResourceCard = ({
  children,
  className = '',
  isDark = false
}: {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}) => (
  <div
    style={{
      background: isDark ? C.goldLight : C.white,
      border: `1px solid ${C.goldLight}`,
      borderTop: isDark ? `4px solid ${C.gold}` : `1px solid ${C.goldLight}`,
      padding: "32px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      height: "100%"
    }}
    className={`transition-all duration-300 hover:bg-[#9A7B2C]/5 ${className}`}

  >
    {children}
  </div>
);



const ContactRow = ({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
}) => (
  <a
    href={href}
    className="group/item flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-all duration-300 px-2 no-underline"
  >
    <div className="flex flex-col text-left">
      <span style={{ ...fontCinzel, color: C.gold, fontSize: "10px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ ...fontPlayfair, color: C.textDark, fontWeight: "bold", fontSize: "16px" }}>
        {value}
      </span>
    </div>

    {/* Icon Container with Forced Visibility */}
    <div
      className="flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#9A7B2C]"
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: C.goldLight,
        border: `1px solid ${C.goldLight}`,
        flexShrink: 0
      }}
    >
      <Icon
        size={16}
        // Inline style overrides Tailwind conflicts. 
        // stroke use karte hain Lucide icons ke liye.
        style={{
          transition: "all 0.3s ease",
          color: "inherit", // Allows group-hover:text-white to work
        }}
        className="text-[#9A7B2C] group-hover/item:text-white"
      />
    </div>
  </a>
);



// Styling realeted function 


// Animation Settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};


/* ── Hero ───────────────────────────────────────────────── */

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden"
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#06080B",
    }}
  >
    <div className="absolute inset-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        // effect="fade" // smooth fade like your current setup
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
              style={{ objectPosition: "center 25%", opacity: 1.0 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Your existing gradient overlay — untouched */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        }}
      />
    </div>

    {/* Your existing text content — completely untouched */}
    <motion.div
      className="pt-20 relative max-w-9xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      }}
    >
      {/* --- 1. Enhanced Gold Liner (Contact Us Style) --- */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "160px" }} // Increased from 80px to 160px
        transition={{ duration: 2.2, ease: "easeInOut" }}
        style={{
          margin: "0 auto 24px auto",
          height: "2px", // Slightly thicker for impact
          background: "#9A7B2C", // Darker premium gold
          opacity: 0.8,
        }}
      />

      {/* --- 2. Cinematic Sub-header --- */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#9A7B2C",
          fontSize: "18px", // Increased for brand consistency
          letterSpacing: "0.2em", // Wider tracking
          marginBottom: "26px",
          fontWeight: 600,
        }}
      >
        CLUB DIRECTORY
      </motion.div>

      {/* --- 3. Majestic Title with Deep Blur Reveal --- */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, // Heavier blur
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
          fontSize: "clamp(36px, 8vw, 74px)",
          fontWeight: 900,
          lineHeight: "1.15",
          marginBottom: "24px",
          fontStyle: "arial black",
          textShadow: "0 10px 40px rgba(0,0,0,0.6)", // Deeper shadow
        }}
      >
        Helpful <span>Resources</span>
      </motion.h1>

      {/* --- 4. Refined Subtext --- */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 0.9, y: 0, transition: { duration: 1 } },
        }}
        style={{
          color: "rgba(255,255,255,0.9)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "19px",
          maxWidth: "600px",
          lineHeight: "1.8",
          fontWeight: 300,
          margin: "0 auto 40px",
        }}
      >
        Official breed standards, health certifications, and trusted breeder referral guidance.
      </motion.p>

      {/* --- 5. Premium CTA Button --- */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
        className="flex flex-wrap justify-center gap-6"
      >
        <a
          href="#directory"
          style={{
            background: "#9A7B2C",
            color: "#ffffff",
            padding: "16px 40px",
            fontFamily: "'Cinzel', serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            fontWeight: "bold",
            boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
          }}
          className="hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
        >
          EXPLORE DIRECTORY
        </a>
      </motion.div>

      {/* --- 6. Scroll Indicator Accent --- */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "60px" }}
        transition={{ delay: 1.5, duration: 1.5 }}
        style={{
          width: "1px",
          background: "linear-gradient(to bottom, #9A7B2C, transparent)",
          margin: "50px auto 0",
        }}
      />
    </motion.div>
  </section>
);

/* ── Directory ──────────────────────────────────────────── */



const Directory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section
      id="directory"
      style={{ background: C.bg }}
      className="py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Orgs + Puppies - Reveals when 20% visible */}
        <motion.div
          className="grid lg:grid-cols-3 gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <ResourceCard isDark className="h-full">
              <SectionHeader
                badge="Official Organizations"
                title="Standards & Health"
                description="Access the primary governing bodies for the Brittany breed and canine health certifications."
              />

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {[
                  {
                    name: "AKC",
                    full: "American Kennel Club",
                    url: "https://akc.org",
                  },
                  {
                    name: "ABC",
                    full: "American Brittany Club",
                    url: "https://theamericanbrittanyclub.org",
                  },
                ].map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between w-full max-w-[320px] mx-auto items-center border border-[#9A7B2C]/30 rounded-lg p-4 bg-[#9A7B2C]/5 hover:bg-[#9A7B2C]/10 hover:border-[#9A7B2C]/60 transition-all duration-300 group"
                  >
                    <div>
                      <div style={{ ...fontPlayfair, fontWeight: "bold" }}>
                        {org.name}
                      </div>
                      <div style={{ ...fontCinzel, fontSize: "12px", color: C.gold }}>
                        {org.full}
                      </div>
                    </div>

                    <ExternalLink
                      size={18}
                      className="text-[#9A7B2C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </a>
                ))}
              </div>
              <a
                href="https://ofa.org/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between mt-4 w-full max-w-[320px] mx-auto items-center border border-[#9A7B2C]/30 rounded-lg p-4 bg-[#9A7B2C]/5 hover:bg-[#9A7B2C]/10 hover:border-[#9A7B2C]/60 transition-all duration-300 group"
              >
                <div>
                  <div style={{ ...fontPlayfair, fontWeight: "bold" }}>
                    OFA
                  </div>
                  <div style={{ ...fontCinzel, fontSize: "12px", color: C.gold }}>
                    Orthopedic Foundation for Animals.
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-[#9A7B2C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </ResourceCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ResourceCard isDark className="h-full bg-[#9A7B2C]/5">
              <div className="flex items-center gap-4 mb-8">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(154, 123, 44, 0.05)",
                    border: `1px solid ${C.goldLight}`,
                  }}
                  className="flex items-center justify-center text-[#9A7B2C]"
                >
                  <ShieldCheck size={24} />
                </div>
                <h3
                  style={{
                    ...fontPlayfair,
                    fontSize: "23px",
                    fontStyle: "arial",
                    fontWeight: "bold",
                    color: C.textDark,
                  }}
                >
                  Puppy & Rescue Referral
                </h3>
              </div>
              <p
                style={{
                  ...fontInter,
                  color: C.textMuted,
                  fontSize: "14px",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >  For inquiries about available litters and breeder referrals, please contact our NVBC Committee Chair, Kat Shannon.
                
              </p>
              <div className="space-y-2">
                <ContactRow
                  label=" Committee Chair"
                  value="Kat Shannon"
                  href="mailto:kstarbrits@gmail.com"
                  icon={Mail}
                />
                <ContactRow
                  label="Email"
                  value="kstarbrits@gmail.com"
                  href="mailto:kstarbrits@gmail.com"
                  icon={Mail}
                />

              </div>
            </ResourceCard>
          </motion.div>
        </motion.div>
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionHeader
            badge="Breeder Referral"
            title="Finding the Right Brittany"
            description="NVBC takes pride in our member breeders but does not post ads or guarantee breeding programs."
            center
          />

          <div className="max-w-3xl mx-auto mt-10">
            <ResourceCard isDark className="h-full">
              <p style={{
                ...fontInter,
                color: C.textMuted,
                lineHeight: "1.8",
                marginBottom: "20px"
              }}>
                NVBC Committee Chair Kat Shannon is pleased to assist prospective owners in connecting with reputable breeders, available puppies, and rescue opportunities in the area.
              </p>

              <ContactRow
                label="Breeder Referral Contact"
                value="KStarBrits@gmail.com"
                href="mailto:KStarBrits@gmail.com"
                icon={Mail}
              />
            </ResourceCard>
            {/* <Facebook/> */}
            <a
              href="https://www.facebook.com/NorthernVirginiaBrittanyClubNvbc"
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 justify-between max-w-[250px] mx-auto items-center mt-8 p-4 rounded-lg bg-[#9A7B2C]/5 border border-[#9A7B2C]/20 hover:bg-[#9A7B2C]/10 hover:border-[#9A7B2C]/40 transition-all duration-300 group"
            >
              <div>
                <div style={{ ...fontPlayfair, fontWeight: "bold" }}>
                  Facebook
                </div>
                <div style={{ ...fontCinzel, fontSize: "12px", color: C.gold }}>
                  Social media
                </div>
              </div>
              <Facebook size={26} className="text-[#9A7B2C] group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
        {/* Row 3: Rescue + Vets */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
            <ResourceCard isDark className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <HeartPulse
                  style={{ color: "blue" }}
                  size={40}
                  className="animate-pulse"
                />
                <h3
                  style={{
                    ...fontPlayfair,
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Brittany Rescue
                </h3>
              </div>
              <p
                style={{
                  ...fontInter,
                  color: C.textMuted,
                  lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                NVBC is dedicated to “rehoming” Brittanys in need within the Northern Virginia area. We ensure every dog finds a loving, active home.

              </p>
              <ContactRow
                label="Rescue Coordinator"
                value="Mary K Shannon"
                href="mailto:KStarBritts@gmail.com"
                icon={Mail}
              />
              <div className="mt-4 space-y-2">
                <a
                  href="https://www.AmericanBrittanyRescue.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#9A7B2C] font-semibold text-sm hover:underline"
                >
                  American Brittany Rescue, Inc. <ExternalLink size={14} />
                </a>

                <a
                  href="https://www.nbran.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#9A7B2C] font-semibold text-sm hover:underline"
                >
                  National Brittany Rescue (NBRAN) <ExternalLink size={14} />
                </a>
              </div>
            </ResourceCard>

          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
            <ResourceCard isDark className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <HeartPulse style={{ color: 'purple' }} size={40} />
                <h3
                  style={{
                    ...fontPlayfair,
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Adoption Guidance
                </h3>
              </div>

              <p
                style={{
                  ...fontInter,
                  color: C.textMuted,
                  lineHeight: "1.8",
                }}
              >
                Learn how to choose, prepare, and care for your Brittany before adoption.
                From selecting a responsible breeder or rescue to understanding the
                breed’s needs, this guidance helps ensure a successful and lifelong match.
              </p>
            </ResourceCard>
          </motion.div>

        </motion.div>
        {/* Row 4: Conservation & Habitat */}
        <motion.div
          className="grid lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <ResourceCard
              isDark
              className="h-full transition-all duration-500"
              style={{ borderLeft: `4px solid ${C.gold}` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Leaf style={{ color: 'green' }} size={40} />
                <h3
                  style={{
                    ...fontPlayfair,
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Conservation & Habitat
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p
                    style={{
                      ...fontInter,
                      color: C.textMuted,
                      fontSize: "15px",
                      lineHeight: "1.7",
                    }}
                  >
                    Quail Forever Liaison & Habitat Improvement Members working
                    to preserve the natural sporting environment.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Kenny Wilkinson", phone: "540-255-2423" },
                    { name: "Ron Somers", phone: "202-258-3575" },
                  ].map((person) => (
                    <div
                      key={person.name}
                      className="flex justify-between border-b border-[#9A7B2C]/10 pb-3 hover:border-[#9A7B2C]/40 transition-colors"
                    >
                      <span
                        style={{
                          ...fontCinzel,
                          fontSize: "12px",
                          color: C.gold,
                          fontWeight: "bold",
                        }}
                      >
                        {person.name}
                      </span>
                      <span
                        style={{
                          ...fontInter,
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: C.textDark,
                        }}
                      >
                        {person.phone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ResourceCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard isDark className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen style={{ color: 'green' }} size={40} />
                <h3
                  style={{
                    ...fontPlayfair,
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  NVBC Guest/Member Contributions & Articles
                </h3>
              </div>
              <div
                style={{
                  ...fontCinzel,
                  color: C.gold,
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                
              </div>
              <div
                style={{
                  ...fontPlayfair,
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: C.textDark,
                }}
              >
                "Maggie" — by Barry Kogut
              </div>
              <div
                className="flex items-center gap-2 mt-4 text-[#9A7B2C] font-bold text-sm cursor-pointer transition-all duration-300 hover:text-[#7a5f21] hover:gap-3"
                onClick={() => {
                  setIsPopupOpen(true);
                }}
              >
                READ ARTICLE <ArrowRight size={14} />
              </div>
            </ResourceCard>
          </motion.div>
        </motion.div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl mx-4 h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Article</h2>
              <div className="flex items-center gap-4">
                <a
                  href={maggieMagzine}
                  download
                  className="text-[#9A7B2C] font-semibold text-sm hover:underline"
                >
                  ⬇ Download
                </a>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={maggieMagzine}
              className="w-full flex-1"
              title="Article PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};


/* ── Page ────────────────────────────────────────────────── */

export default function BrittanyClubPage() {
  return (
    <div className="min-h-screen antialiased" style={{ background: C.bg }}>
      <Hero />
      <Directory />
    </div>
  );
}