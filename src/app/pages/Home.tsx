import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, ChevronRight, Star, Shield, Heart, X, Trophy, Zap, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from 'framer-motion';


// Counter File
import Counter from "../components/Counter";



/* trial popup photos */
import specialty1 from "../../assets/images/trials/specialty1.jpg";
import specialty2 from "../../assets/images/trials/specialty2.png";



import field1 from "../../assets/images/trials/Field1.jpg";
import field2 from "../../assets/images/trials/Field2.jpg";
import field3 from "../../assets/images/trials/Field3.jpg";
import field4 from "../../assets/images/trials/Field4.jpg";
import field5 from "../../assets/images/trials/Field5.jpg";

import agility1 from "../../assets/images/trials/agility1.jpg";
import agility2 from "../../assets/images/trials/Agility2.jpg";
import hunt1 from "../../assets/images/trials/Hunt1.jpg";
import hunt2 from "../../assets/images/trials/Hunt2.jpg";


import heroImg from "../../assets/images/americanbrittany.jpg";//hero section 
import dogShowImg from "../../assets/images/playing.jpg";
import outdoorDogImg from "../../assets/images/playingg.jpg";

import spanielRunImg from "../../assets/images/dog3.jpg";

/* Homepage gallery images */
import gallery1 from "../../assets/images/homepagegallery/gallery1.png";
import gallery2 from "../../assets/images/homepagegallery/gallery2.jpg";
import gallery3 from "../../assets/images/homepagegallery/gallery3.jpg";
import gallery4 from "../../assets/images/homepagegallery/gallery4.jpg";


const MotionLink = motion(Link);


/* ─── Design tokens ─────────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#f7f7f7",
  lightgrey: "#f2f2f2",
  divider: "rgba(0,0,0,0.08)",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#444444",
  textSoft: "#888888",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  goldBorder: "rgba(201,168,76,0.3)",
  goldHover: "rgba(201,168,76,0.6)",
};

const goldGrad = `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`;

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { value: "53+", label: "Years of Excellence" },
  { value: "55+", label: "Active Members" },
  {
    value: "102+",
    label: "New AKC titles",
    subLabel: "11/24 - 10/25"
  },
  { value: "25+", label: "Annual Events" },
];
 

const features = [
  {
    Icon: Shield,
    title: "Breed Preservation",
    desc: "The Northern Virginia Brittany Club is committed to preserving the Brittany as a versatile, healthy, and intelligent sporting breed. Through responsible breeding practices, education, and adherence to the official breed standard, we work to ensure future generations of Brittanys maintain their exceptional temperament, structure, and natural hunting ability.",
  },
  {
    Icon: Award,
    title: "Championship Events",
    desc: "NVBC proudly hosts a variety of competitive events throughout the year, including field trials, hunt tests, specialty shows, and other AKC-sanctioned activities. These events showcase the Brittany’s exceptional abilities, bringing together handlers, breeders, and enthusiasts to celebrate the breed’s performance, beauty, and versatility.",
  },
  {
    Icon: Users,
    title: "Vibrant Community",
    desc: "NVBC organizes AKC-sanctioned events to welcome and support the community of Britttany owners, breeders, handlers, and enthusiasts who share a passion for the breed.",
  },
  {
    Icon: Heart,
    title: "Health & Welfare",
    desc: "By encouraging participation as a community in activities featuring Brittanys, the contact amongst members and enthusiasts enables the sharing of information about the breed, insights about ownership, raising, and training of Brittanys, as well as opportunities for health testing and new research underway focused on helping Brittanys live healthy, active, and fulfilling lives. NVBC is proud of its contributions to veterinary research.",
  },
];

const trials = [
  {
    Icon: Trophy,
    title: "Specialty Shows",
    subtitle: "Conformation Excellence",
    accentColor: "#8B6914",
    paragraphs: [
      "The NVBC Specialty Show celebrates the beauty, structure, and character of the Brittany. Organized under the American Kennel Club, this prestigious event brings together Brittany owners, breeders, and enthusiasts to showcase the breed according to the official breed standard.",

      "During the show, handlers present their dogs in the ring where judges carefully evaluate each Brittany’s conformation, movement, and overall balance. The goal is to identify dogs that best represent the ideal Brittany—an athletic, energetic, and versatile sporting dog.",

      "Specialty Shows highlight the Brittany’s unique role as a true dual-purpose breed. While celebrated for its elegance in the show ring, the Brittany is equally admired for its skill and passion in the field, making it one of the most versatile pointing breeds.",

      "Beyond competition, the Specialty Show is also a gathering of the Brittany community. Members, breeders, and dog lovers come together to share knowledge, celebrate the breed, and support the preservation of the Brittany’s exceptional qualities for future generations."
    ],

    photos: [
      { src: specialty1, caption: "Best of Breed lineup at the 2024 NVBC Specialty" },
      { src: specialty2, caption: "Judge evaluating movement in the ring" },

    ],
  },


  {
    Icon: Target,
    title: "Field Trials",
    subtitle: "Natural Hunting Ability",
    accentColor: "#2d6e3e",
    paragraphs: [
      "Field trials celebrate the natural hunting abilities, athleticism, and intelligence of the Brittany breed. These events highlight the strong partnership between dog and handler while preserving the traditions of upland bird hunting.",

      "During a field trial, dogs compete in pairs known as braces and run across open terrain searching for planted game birds such as quail, grouse, or pheasant. Judges carefully observe each dog's range, speed, style, and ability to locate and point birds.",

      "When a Brittany detects the scent of a bird, it freezes in a classic pointing stance—tail raised, body still, and nose directed toward the hidden bird. This moment demonstrates the breed's remarkable instinct, discipline, and elegance in the field.",

      "Field trials are judged by experienced officials who evaluate each dog's performance throughout the run. Placements, ribbons, and championship points may be awarded to the top-performing dogs, recognizing excellence in the breed.",

      "Beyond the competition, field trials bring together Brittany enthusiasts, handlers, and breeders who share a passion for the breed and its sporting heritage."
    ],
    photos: [
      { src: field1, caption: "Brittany on point during a Senior Hunter test" },
      { src: field2, caption: "Handler and dog working a bird field in Culpeper" },
      {src: field5, caption: ""},
      {src: field4, caption: ""},
      {src: field3, caption: ""},


    ],
  },
  {
    Icon: Zap,
    title: "Agility Trials",
    subtitle: "Speed, Focus & Teamwork",
    accentColor: "#1a4a8a",
    paragraphs: [
      "Agility Trials showcase the Brittany’s remarkable speed, intelligence, and athletic ability. In this exciting sport, dogs navigate a timed obstacle course that includes jumps, tunnels, weave poles, A-frames, teeter-totters, and tire hoops, all guided by their handler’s voice and signals.",

      "Organized under the American Kennel Club and hosted by clubs across the country, agility events challenge both dog and handler to work together with precision, focus, and trust. Brittanys excel in agility thanks to their natural energy, agility, and eagerness to work closely with their owners.",

      "During the run, dogs move through the course without a leash, relying entirely on communication and teamwork with their handler. The goal is to complete the course quickly and accurately while avoiding faults.",

      "From beginner levels to advanced championship classes, agility trials provide an exciting way for Brittany owners to channel their dog’s enthusiasm and strengthen the bond between dog and handler while celebrating the breed’s versatility."
    ],
    photos: [
      { src: agility1, caption: "Brittany flying through the weave poles" },
      { src: agility2, caption: "Clean run over the double jump sequence" },

    ],
  },

  {
    Icon: Target,
    title: "Hunt Tests",
    subtitle: "AKC Hunting Evaluation",
    accentColor: "#6b4a2b",
    paragraphs: [
      "Hunt Tests celebrate the Brittany’s natural hunting instincts in a structured, non-competitive environment. Organized under the American Kennel Club, these events evaluate each dog’s ability to hunt, locate birds, point, and respond to its handler.",

      "During the test, Brittanys work through fields where game birds such as quail, pheasant, or chukar are planted. Judges observe the dog’s drive to hunt, its ability to locate birds, the intensity of its point, and its overall trainability and teamwork with the handler.",

      "Dogs participate in braces and are judged individually against a standard rather than against other dogs. Those that meet the required performance levels earn AKC titles including Junior Hunter, Senior Hunter, and Master Hunter.",

      "Hunt Tests provide Brittany owners an opportunity to develop their dog’s natural abilities while preserving the breed’s rich sporting heritage and strengthening the bond between dog and handler."
    ],
    photos: [
      { src: hunt1, caption: "Brittany locating birds during a hunt test." },
      { src: hunt2, caption: "Handler guiding dog through field." },

    ]
  }
];

const upcomingEvents = [
  {
    date: "March",
    month: "2026",
    title: "Field Trial",
    location: "Dick Cross WMA, Boydton, VA",
    type: "Field Trial"
  },
  {
    date: "April 6 - 7",
    month: "2026",
    title: "Agility Trial",
    location: "Bella Vista Training Center, Lewisberry, PA",
    type: "Agility"
  },
  {
    date: "April 11 - 12",
    month: "2026",
    title: "Hunt Test",
    location: "Slate River Farm, Dillwyn, VA",
    type: "Hunt Test"
  },
  {
    date:"June 19 ",
    month:"2026",
    titel:"Speciality show",
    location:"Meadow Event Park, Doswell, VA",
    type:"Speciality show"
  },
  
  
];

// hover and styling function for reusable 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Har element ke beech 0.2s ka gap
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
    },
  },
};

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Home() {
  const [activeTrial, setActiveTrial] = useState<number | null>(null);


  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    e.preventDefault(); // Default redirect rokne
    setShowPopup(true); // Pop-up dikhane ke liye
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate("/become-a-member");
  };

  // styling and animation part 

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 }, // Right se start hoga
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // common token this used everywhere 
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6 // line gap duration its should be increase or decrease by developer team
      }
    }
  };

  return (
    <div
      style={{
        background: C.white,
        fontFamily: "'Inter', sans-serif",
        color: C.charcoal,
      }}
    >
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 lg:pt-32"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* BG image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Brittany Spaniel"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,12,24,0.93) 0%, rgba(8,12,24,0.74) 50%, rgba(8,12,24,0.32) 100%)",
            }}
          />
          {/* Gold particle overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* 3D floating card accent */}
        <div
          className="absolute right-8 top-1/2 hidden lg:block"
          style={{
            transform:
              "translateY(-50%) perspective(800px) rotateY(-12deg) rotateX(4deg)",
            width: "380px",
          }}
        >
          <motion.div
            style={{ 
              perspective: "1200px",
              position: "relative", 
              zIndex: 10 
            }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div
              // --- Yeh hai main magic ---
              initial={{ rotateY: -6, rotateX: 2, scale: 1 }}
              animate={{ rotateY: -6, rotateX: 2, scale: 1 }} 
              whileHover={{ 
                rotateY: 0, 
                rotateX: 0, 
                scale: 1.03,
                boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 0 2px rgba(201,168,76,0.4)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 260, 
                damping: 20 
              }}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.25)",
                cursor: "pointer",
                background: "#0a0e1a",
                transformStyle: "preserve-3d",
              }}
            >
              <ImageWithFallback
                src={spanielRunImg}
                alt="Brittany in field"
                className="w-full object-cover transition-transform duration-500"
                style={{ 
                  height: "480px",
                  display: "block" 
                }}
              />

              <div
                style={{
                  background: "linear-gradient(135deg, rgba(10,14,26,0.98), rgba(15,22,45,0.98))",
                  padding: "24px",
                  borderTop: "1px solid rgba(201,168,76,0.2)",
                  transform: "translateZ(20px)", 
                }}
              >
                <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "18px", letterSpacing: "0.2em", marginBottom: "4px" }}>
                  NVBC Pride 👑
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "#f8f5ef", fontSize: "16px" }}>
                  Northern Virginia Brittany Club
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Content */}
        {/* // Component ke andar: */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* motion.div wrap kiya hai taaki stagger effect kaam kare */}
          <motion.div 
            className="max-w-2xl py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Sirf ek baar animate hoga jab screen pe aayega
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#f8f5ef",
                fontSize: "clamp(30px, 6vw, 64px)",
                lineHeight: "1.1",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              NORTHERN VIRGINIA
            </motion.h1>
            
            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(38px, 6vw, 64px)",
                lineHeight: "1.1",
                fontWeight: 700,
                background: goldGrad,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brittany Club
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              style={{
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "#f8f5ef",
                marginTop: "20px",
                marginBottom: "28px",
              }}
              className="font-bold"
            >
              WHERE EXCELLENCE MEETS PASSION
            </motion.div>
            
            <motion.p
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(248,245,239,0.78)",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "44px",
                maxWidth: "520px",
              }}
            >
              Welcome to the Northern Virginia Brittany Club, built on a deep
              love for Brittanys, our club provides a professional and welcoming
              community dedicated to the breed's advancement and legacy.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <div
                onClick={handleLinkClick}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #8B6914, #B8920F)",
                  color: "#ffffff", // C.white
                  padding: "16px 36px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.8)",
                  transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)", // Premium transition
                  cursor: "pointer",
                  border: "1px solid transparent", // To prevent layout shift
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  const arrow = el.querySelector('svg');

                  // Background change aur thoda lift
                  el.style.background = "#2a2410"; 
                  el.style.transform = "translateY(-4px) scale(1.03)";
                  el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.9)";
                  el.style.borderColor = "rgba(201,168,76,0.3)"; // Halka gold border touch
                  el.style.color = "#D4AF37"; // Text gold ho jayega hover par

                  if (arrow) {
                    arrow.style.transform = "translateX(5px)";
                    arrow.style.transition = "transform 0.3s ease";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  const arrow = el.querySelector('svg');

                  // Reset to normal
                  el.style.background = "linear-gradient(135deg, #8B6914, #B8920F)";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 8px 35px rgba(0,0,0,0.8)";
                  el.style.borderColor = "transparent";
                  el.style.color = "#ffffff";

                  if (arrow) {
                    arrow.style.transform = "translateX(0)";
                  }
                }}
              >
                BECOME A MEMBER 
                <ArrowRight size={15} style={{ transition: "transform 0.3s ease" }} />
              </div>
            </motion.div>
          </motion.div>
          {/* Simple Pop-up Overlay */}
          {showPopup && (
            <div 
              style={{
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.85)', 
                zIndex: 1000,
                            
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',    
                justifyContent: 'flex-start',

                padding: '40px 20px',
                backdropFilter: 'blur(4px)',
                overflowY: 'auto',
              }}
            >
              {/* Inner Card - SMALLER SIZE */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20 }}
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF9EF 100%)',
                  padding: '28px',              // ← Reduced from 40px to 28px
                  maxWidth: '500px',            // ← Reduced from 650px to 500px
                  width: '100%',
                  borderRadius: '20px',         // ← Reduced from 24px to 20px
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(154,123,44,0.2)',
                }}
                className="border-t-4 border-b-4 border-amber-800" // inner card top bottom border with radius 
              >
                {/* Close Button - SMALLER */}
                <button 
                  onClick={() => setShowPopup(false)} 
                  style={{
                    position: 'absolute',
                    top: '12px',               // ← Reduced from 20px to 12px
                    right: '16px',             // ← Reduced from 24px to 16px
                    background: 'rgba(154,123,44,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',             // ← Reduced from 36px to 28px
                    height: '28px',            // ← Reduced from 36px to 28px
                    cursor: 'pointer',
                    color: '#9A7B2C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(154,123,44,0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(154,123,44,0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <X size={14} />              {/* ← Reduced from 18 to 14 */}
                </button>
                
                {/* Gold Icon - SMALLER */}
                <div style={{
                  width: '50px',               // ← Reduced from 70px to 50px
                  height: '50px',             // ← Reduced from 70px to 50px
                  background: 'linear-gradient(135deg, #9A7B2C, #D4AF37)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',      // ← Reduced margin
                  boxShadow: '0 6px 15px rgba(154,123,44,0.3)',
                }}>
                  <Users size={22} color="#ffffff" />  {/* ← Reduced from 32 to 22 */}
                </div>
                <h2 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: '#1a1a1a',
                  fontSize: '22px',           // ← Reduced from 28px to 22px
                  fontWeight: 700,
                  marginBottom: '6px',
                }}>
                  Membership Information
                </h2>
                <div style={{
                  width: '40px',              // ← Reduced from 60px to 40px
                  height: '2px',
                  background: 'linear-gradient(90deg, #9A7B2C, #D4AF37)',
                  margin: '10px auto 16px',   // ← Reduced margin
                  borderRadius: '2px',
                }} />
                <p style={{ 
                  fontSize: '13px',           // ← Reduced from 15px to 13px
                  lineHeight: '1.5',         // ← Reduced from 1.7 to 1.5
                  margin: '12px 0',          // ← Reduced margin
                  color: '#444444',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  The Northern Virginia Brittany Club (NVBC), founded in 1973, is a regional member 
                  club of the American Brittany Club (ABC) – the national parent club for the Brittany 
                  breed and an official member club of the American Kennel Club (AKC).
                </p>
                <p style={{ 
                  fontSize: '13px',           // ← Reduced from 15px to 13px
                  lineHeight: '1.5',         // ← Reduced from 1.7 to 1.5
                  margin: '12px 0',          // ← Reduced margin
                  color: '#444444',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  Joining NVBC automatically includes membership in the ABC, connecting you
                  to local events in Virginia, Maryland, and DC, as well as national programs. 
                  We promote the Brittany breed through field trials, agility trials, hunt tests, 
                  conformation shows, and more.
                </p>
                <p style={{ 
                  fontSize: '13px',           // ← Reduced from 15px to 13px
                  lineHeight: '1.5',         // ← Reduced from 1.7 to 1.5
                  margin: '12px 0',          // ← Reduced margin
                  color: '#444444',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'left',
                }}>
                  To join NVBC, please fill-out the ABC membership application below, indicating 
                  your preferred home club membership in <strong style={{ color: '#9A7B2C' }}>Northern Virginia</strong>. Total 
                  annual dues for this dual membership in NVBC and ABC will be: 
                  <span style={{ 
                    display: 'block',
                    fontSize: '18px',         // ← Reduced from 24px to 18px
                    fontWeight: 'bold',
                    color: '#9A7B2C',
                    marginTop: '8px',         // ← Reduced from 12px to 8px
                    fontFamily: "'Cinzel', serif",
                  }}>$50/year for full membership</span>
                </p>
                
                <div style={{
                  background: 'linear-gradient(135deg, #F9F5E8, #FFFFFF)',
                  padding: '12px',            // ← Reduced from 20px to 12px
                  borderRadius: '12px',       // ← Reduced from 16px to 12px
                  margin: '16px 0',           // ← Reduced margin
                  border: '1px solid rgba(154,123,44,0.2)',
                }}>
                  <p style={{
                    fontSize: '14px',          // ← Reduced from 18px to 14px
                    fontWeight: 'bold',
                    color: '#9A7B2C',
                    fontFamily: "'Playfair Display', serif",
                    margin: 0,
                  }}>
                    Welcome to NVBC! 🐾
                  </p>
                </div>
                
                <button 
                  onClick={handleConfirm}
                  style={{
                    background: 'linear-gradient(135deg, #9A7B2C, #B88D2C)',
                    padding: '10px 24px',      // ← Reduced from 14px 32px to 10px 24px
                    border: 'none',
                    borderRadius: '10px',      // ← Reduced from 12px to 10px
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '11px',          // ← Reduced from 12px to 11px
                    letterSpacing: '0.1em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',                // ← Reduced from 10px to 8px
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(154,123,44,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 5px 16px rgba(154,123,44,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(154,123,44,0.3)';
                  }}
                >
                  Continue to Membership <ArrowRight size={12} />  {/* ← Reduced from 14 to 12 */}
                </button>
              </motion.div>
            </div>
          )}
        </div>
      
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div
            style={{
              width: "1px",
              height: "40px",
              background: `linear-gradient(180deg, transparent, ${C.gold})`,
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: C.gold,
            }}
          />
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────── */}
      <section
        style={{
          background: C.lightgrey,
          borderTop: `1px solid ${C.divider}`,
          borderBottom: `1px solid ${C.divider}`,
          padding: "48px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Grid use karna mobile ke liye zyada safe hota hai */}
          <div className="grid grid-cols-1 md:flex md:items-center md:justify-between gap-8 md:gap-4 text-center md:text-left">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start w-full"
                style={{
                  // Mobile par border niche aayega, Desktop par right mein
                  borderRight: window.innerWidth > 768 && i < stats.length - 1 ? `1px solid ${C.divider}` : "none",
                  borderBottom: window.innerWidth <= 768 && i < stats.length - 1 ? `1px solid ${C.divider}` : "none",
                  paddingRight: window.innerWidth > 768 ? "24px" : "0",
                  paddingBottom: window.innerWidth <= 768 ? "24px" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(32px, 5vw, 48px)", // Mobile par thoda bada kiya
                    fontWeight: 700,
                    background: goldGrad,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  <Counter value={stat.value} />
                  {typeof stat.value === 'string' && stat.value.includes('+') && '+'}
                  {typeof stat.value === 'string' && stat.value.includes('%') && '%'}
                </div>
                <div
                  style={{
                    color: C.textSoft,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    lineHeight: "1.4"//added
                  }}
                >
                  {stat.label}
                  {/*  AKC titles below date label */}
                  {stat.label === "New AKC titles" && (
                    <span style={{
                      display: "block",
                      fontSize: "12px",
                      opacity: 0.8,
                      marginTop: "4px",
                      textTransform: "none"
                    }}>
                      11/24 - 10/25
                    </span>
                  )}
 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ──────────────────────────────── */}
      <section
        style={{ background: C.white }}
        className="pt-28 pb-0 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* 3D image block */}
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div
                initial={{ opacity: 0, x: -100, rotateY: 20 }} 
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 6,  
                  rotateX: -3, 
                }}
                transition={{ 
                  duration: 1, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  rotateY: 0, 
                  rotateX: 0, 
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}

                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                  perspective: "1000px",
                  cursor: "pointer"
                }}
              >
                <ImageWithFallback
                  src={dogShowImg}
                  alt="NVBC Dog Show"
                  className="w-full object-cover"
                  style={{ height: "500px" }}
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 60%, rgba(8,12,24,0.55))",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
              {/* floating badge */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,          
                  rotateY: -8,    
                  y: -10,
                  boxShadow: "0 25px 50px rgba(66, 41, 5, 0.6)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
                  background: goldGrad,
                  borderRadius: "4px",
                  padding: "20px 24px",
                  boxShadow: "0 16px 40px rgba(66, 41, 5, 0.4)",
                  transform: "perspective(600px) rotateY(-8deg)", // Default state
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: C.navy,
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    marginBottom: "4px",
                  }}
                >
                  ESTABLISHED
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: C.navy,
                    fontSize: "36px",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  1973
                </div>
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ overflowX: "hidden", width: "100%" }}
            >
              {/* Gold rule - Yeh bhi slide hokar aayega */}
              <motion.div
                variants={fadeInRight}
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  marginBottom: "20px",
                  borderRadius: "20px",
                }}
              />

              <motion.div
                variants={fadeInRight}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: "19px",
                  letterSpacing: "0.15em",
                  marginBottom: "16px",
                  fontWeight: 800,
                  textShadow: "0 0 20px rgba(139,105,20,0.5)",
                }}
              >
                ABOUT NVBC
              </motion.div>
              
              <motion.p
                variants={fadeInRight}
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "16px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                The NVBC began its journey as a Brittany Club in 1973. Its purpose was to
                support cooperation and friendship among owners and breeders of the Brittany
                breed we all love. The NVBC provides members with local opportunities to
                work with our dogs in the field, in the showring, at obedience, in agility
                trials, hunt tests, and field trials. With many years of collective
                experience, the NVBC makes every effort to meet the needs and interests of
                all our members who are as versatile, hardworking, and multi-faceted as the
                breed itself. We are proud to say NVBC's members come from Virginia, the
                District of Columbia, Maryland, Pennsylvania, North Carolina, even as far
                away as New York.
              </motion.p>
              
              <motion.div variants={fadeInRight} className="pl-8">
                <Link
                  to="/about-nvbc"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: "0 8px 25px rgba(139,105,20,0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "linear-gradient(135deg, #8B6914 0%, #B8920F 50%, #8B6914 100%)",
                      backgroundSize: "200% auto",
                      border: "none",
                      color: "#ffffff",
                      padding: "14px 35px",
                      borderRadius: "4px",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      fontWeight: 700,
                      boxShadow: "0 4px 16px rgba(139,105,20,0.4)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundPosition = "right center";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundPosition = "left center";
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>READ OUR STORY</span>

                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(255,255,255,0.1)",
                        pointerEvents: "none"
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRIALS OF THE CLUB ──────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #d4b05a, #ecd48a, #d4b05a)",
          padding: "96px 0",
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-16">
            <div
              style={{
                width: "48px",
                height: "3px",
                background: goldGrad,
                borderRadius: "2px",
                margin: "0 auto 20px",
              }}
            />
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#1a1608",
                fontSize: "15px",
                letterSpacing: "0.35em",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              WHAT WE OFFER
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a1608",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Club Activities
            </h2>
            <p
              style={{
                color: "rgba(26,22,8,0.65)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              From the show ring to the open field, NVBC offers world-class
              competitive events for every Brittany enthusiast.
            </p>
          </div>

          {/* Trial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden p-4">
            {trials.map((trial, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTrial(i)}
                // --- Animation Logic ---
                initial={{
                  opacity: 0,
                  x: i < 2 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: i * 0.1,
                }}
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(26,22,8,0.15)",
                  borderTop: `3px solid ${trial.accentColor}`,
                  borderRadius: "4px",
                  padding: "36px 28px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  width: "100%",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.75)";
                  el.style.transform = "translateY(-8px) scale(1.05)";
                  el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.45)";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "4px",
                    background: trial.accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "20px",
                    boxShadow: `0 8px 24px ${trial.accentColor}66`,
                  }}
                >
                  <trial.Icon size={26} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                    fontWeight: 800,
                  }}
                >
                  {trial.title}
                </h3>

                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#1a1608",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    marginBottom: "14px",
                    fontWeight: 500,
                  }}
                >
                  {trial.subtitle}
                </div>

                <p
                  style={{
                    color: "rgba(26,22,8,0.6)",
                    fontSize: "13px",
                    lineHeight: "1.8",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  {trial.paragraphs[0].slice(0, 90)}…
                </p>

                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  LEARN MORE <ChevronRight size={11} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIAL POPUP MODAL ────────────────────────────── */}
      {activeTrial !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.80)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveTrial(null)}
        >
          <div
            style={{
              background: C.white,
              borderRadius: "8px",
              maxWidth: "860px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              style={{
                background: "linear-gradient(135deg, #f8f5ef, #ecd48a)",
                padding: "32px 40px",
                borderRadius: "8px 8px 0 0",
                borderBottom: `3px solid ${trials[activeTrial].accentColor}`,
                position: "relative",
              }}
            >
              <button
                onClick={() => setActiveTrial(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
              {/* PHOTO GALLERY */}
              <div
                style={{
                  fontFamily: "'Arial Black', serif",
                  color: C.gold,
                  fontSize: "19px",
                  letterSpacing: "0.2em",
                  marginBottom: "8px",
                }}
              >
                THE ACTIVITIES OF THE CLUB
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a1608",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {trials[activeTrial].title}
              </h2>
              <div
                style={{
                  color: "rgba(26,22,8,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                }}
              >
                {trials[activeTrial].subtitle}
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: "40px" }}>
              {trials[activeTrial].paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: C.textBody,
                    fontSize: "15px",
                    lineHeight: "1.9",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "18px",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Photo grid */}
              <div
                style={{
                  marginTop: "36px",
                  borderTop: `1px solid ${C.divider}`,
                  paddingTop: "32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "arial black , serif",
                    color: "#8B6914",
                    fontSize: "19px",
                    letterSpacing: "0.2em",
                    fontWeight: 800,
                    marginBottom: "20px",
                  }}
                >
                  PHOTO GALLERY
                </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                  {trials[activeTrial].photos.map((photo, i) => (
                    <div key={i} className={i < 2 ? "col-span-1 sm:col-span-3" : "col-span-1 sm:col-span-2"}
                      style={{
                        borderRadius: "4px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "220px", //  SAME HEIGHT FOR ALL
                            overflow: "hidden",
                            borderRadius: "11px",
                            position: "relative",
                          }}
                        >
                          <ImageWithFallback
                            src={photo.src}
                            alt={photo.caption}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover", // image fit
                            }}
                          />

                          {/* Caption Overlay */}
                          {/* <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: "8px 10px",
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                              color: "white",
                              fontSize: "12px",
                            }}
                          >
                            {photo.caption}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FEATURES ────────────────────────────────────── */}
      <section
        style={{
          background: C.offwhite,
          padding: "88px 0",
          borderTop: `1px solid ${C.divider}`,
          borderBottom: `1px solid ${C.divider}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-16">
            <div
              style={{
                width: "48px",
                height: "3px",
                background: goldGrad,
                borderRadius: "10px",
                margin: "0 auto 20px",
              }}
            />
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#8B6914",
                fontSize: "25px",
                letterSpacing: "0.1em",
                marginBottom: "12px",
                fontWeight: 800,
                textShadow: "0 0 20px rgba(139,105,20,0.6)",
              }}
            >
              WHAT WE STAND FOR
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.charcoal,
                fontSize: "clamp(30px, 4vw, 30px)",
                lineHeight: "1.2",
                fontWeight: 800,
                letterSpacing: "0.02em",
              }}
            >
              Our Core Commitments
            </h2>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden p-4">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                // --- Animation Logic ---
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -100 : 100, // Even index left se, Odd index right se
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 15,
                  delay: i * 0.15, // Smooth stagger effect
                }}
                // --- Existing Styles ---
                style={{
                  background: C.white,
                  border: `1px solid ${C.divider}`,
                  borderRadius: "4px",
                  padding: "36px 28px",
                  transition: "all 0.35s ease",
                  cursor: "default",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  borderTop: `3px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "#fbf5e0";
                  el.style.borderColor = C.goldBorder;
                  el.style.borderTop = `3px solid ${C.gold}`;
                  el.style.transform = "translateY(-6px) scale(1.05)";
                  el.style.boxShadow = "0 40px 48px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "transparent";
                  el.style.borderColor = C.divider;
                  el.style.borderTop = `3px solid transparent`;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "4px",
                    background: "linear-gradient(135deg, #8B6914, #B8920F)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1a1608",
                    marginBottom: "20px",
                    boxShadow: "0 8px 24px rgba(139,105,20,0.4)",
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "16px",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                    fontWeight: 800,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#333333",
                    fontSize: "16px",
                    lineHeight: "1.9",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE BRITTANY HIGHLIGHT ─────────────────────── */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: C.white, borderTop: `1px solid ${C.divider}` }}
      >
        {/* Background Overlays (Same as before) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${outdoorDogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 100%)",
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Har element ko motion.div (itemVariants) mein wrap karein */}

          <motion.div
            variants={itemVariants}
            style={{
              width: "48px",
              height: "3px",
              background: goldGrad,
              borderRadius: "2px",
              margin: "0 auto 20px",
            }}
          />

          <motion.div
            variants={itemVariants}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#161615",
              fontSize: "17px",
              letterSpacing: "0.2em",
              marginBottom: "16px",
              fontWeight: 800,
              background: "rgba(246, 248, 241, 0.6)",
              padding: "4px 16px",
              borderRadius: "2px",
              display: "inline-block",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            THE BRITTANY BREED
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.charcoal,
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: "1.2",
              marginBottom: "24px",
              fontWeight: 700,
            }}
          >
            Versatile. Intelligent. Magnificent.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1608",
              fontSize: "18px",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "0 auto 44px",
              fontWeight: 500,
            }}
          >
            Known for their boundless energy, keen nose, and affectionate
            nature, Brittanys are the perfect blend of athletic hunting dog and
            loyal family companion.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/why-a-brittany"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: goldGrad,
                color: C.navy,
                padding: "18px 44px",
                borderRadius: "2px",
                fontFamily: "'Cinzel', serif",
                fontSize: "17px",
                letterSpacing: "0.15em",
                fontWeight: 700,
                boxShadow: "0 8px 40px rgba(201,168,76,0.35)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                textDecoration: "none",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                const icon = el.querySelector('svg');

                el.style.transform = "translateY(-8px) scale(1.03)"; 
                el.style.boxShadow = "0 20px 50px rgba(201,168,76,0.55)";
                el.style.filter = "brightness(1.1)";

                if (icon) {
                  icon.style.transform = "translateX(6px)";
                  icon.style.transition = "transform 0.3s ease";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                const icon = el.querySelector('svg');

                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 8px 40px rgba(201,168,76,0.35)";
                el.style.filter = "brightness(1)";

                if (icon) {
                  icon.style.transform = "translateX(0)";
                }
              }}
            >
              EXPLORE THE BREED 
              <ArrowRight 
                size={15} 
                style={{ transition: "transform 0.3s ease" }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────────── */}
      <section
        style={{ background: C.white }}
        className="pt-28 pb-0 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-14">
            <div>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "15px",
                  letterSpacing: "0.25em",
                  marginBottom: "17px",
                  fontWeight: 800,
                  textShadow: "0 0 20px rgba(201,168,76,0.5)",
                }}
              >
                PHOTO GALLERY
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: C.charcoal,
                  fontSize: "clamp(25px, 3vw, 28px)",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                }}
              >
                Captured Moments
              </h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              style={{ display: "inline-block" }} // Isse width sirf button jitni rahegi
            >
              <Link
                to="/gallery"
                style={{
                  display: "inline-flex",
                  alignItems: "center", // Maine 'cover' ko 'center' kar diya hai jo sahi property hai
                  gap: "10px",
                  color: C.navy,
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                  padding: "12px 24px",
                  borderRadius: "2px",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.4)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  textDecoration: "none", // Link ke neeche ki line hatane ke liye
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  const arrow = el.querySelector('svg');
                  
                  el.style.transform = "translateY(-3px) scale(1.03)";
                  el.style.boxShadow = "0 8px 24px rgba(201,168,76,0.6)";
                  el.style.filter = "brightness(1.1)"; // Button thoda chamkega
                  
                  if (arrow) {
                    arrow.style.transform = "translateX(4px)";
                    arrow.style.transition = "transform 0.3s ease";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  const arrow = el.querySelector('svg');
                  
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 4px 16px rgba(201,168,76,0.4)";
                  el.style.filter = "brightness(1)";
                  
                  if (arrow) {
                    arrow.style.transform = "translateX(0)";
                  }
                }}
              >
                VIEW FULL GALLERY 
                <ArrowRight size={13} style={{ transition: "transform 0.3s ease" }} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {[
              {
                src: gallery1,
                label: "Championships",
                span: "md:col-span-2 md:row-span-2",
              },
              { src: gallery2, label: "Community" },
              { src: gallery3, label: "Portraits" },
              { src: gallery4, label: "Dog Shows", span: "md:col-span-2" },
            ].map(({ src, label, span }, i) => (
              <Link
                to="/gallery"
                key={i}
                className={`relative overflow-hidden cursor-pointer group block ${span || ""}`}
                style={{ borderRadius: "4px" }}
              >
                <div className="h-full w-full bg-gray-100 overflow-hidden">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(8,12,24,0.78))",
                  }}
                >
                  {/* <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: C.goldLight,
                      fontSize: "17px",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {label}
                  </span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ─────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #d4b05a, #ecd48a, #d4b05a)",
          padding: "88px 0",
          overflow: "hidden", // Safe side ke liye
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#1a1608",
              fontSize: "13px",
              letterSpacing: "0.2em",
              marginBottom: "14px",
              fontWeight: 800,
            }}
          >
            JOIN OUR COMMUNITY
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.navy,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Become a Member of NVBC
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            style={{
              color: "rgba(8,12,24,0.65)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: "1.85",
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            Join hundreds of passionate Brittany enthusiasts and gain access to
            exclusive events, resources, and a lifelong community of dog lovers.
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants}>
            <div
              onClick={handleLinkClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#1a1608",
                color: "#ffffff",
                padding: "16px 36px",
                borderRadius: "2px",
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                fontWeight: 700,
                boxShadow: "0 8px 30px rgba(0,0,0,0.8)",
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                cursor: "pointer",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                const arrow = el.querySelector('svg');

                el.style.background = "#2a2410"; 
                el.style.transform = "translateY(-4px) scale(1.02)";
                el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.9)";
                el.style.borderColor = "rgba(201,168,76,0.3)";
                el.style.color = "#D4AF37"; 

                if (arrow) {
                  arrow.style.transform = "translateX(5px)";
                  arrow.style.transition = "transform 0.3s ease";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                const arrow = el.querySelector('svg');

                // Reset to normal
                el.style.background = "#1a1608";
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.8)";
                el.style.borderColor = "transparent";
                el.style.color = "#ffffff";

                if (arrow) {
                  arrow.style.transform = "translateX(0)";
                }
              }}
            >
              BECOME A MEMBER 
              <ArrowRight size={15} style={{ transition: "transform 0.3s ease" }} />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}