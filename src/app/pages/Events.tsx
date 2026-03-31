import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// import highlightsBanner from "../../assets/highlights2024.jpg";
import form1 from "../../assets/images/calender-events/entry-form-1.pdf";
import form2 from "../../assets/images/calender-events/premium-1.pdf";
/* ------------------ Images ------------------ */

// import agility from "../../assets/images/calender-events/agility.jpg";


/* ------------------ Colors ------------------ */

const C = {
  white: "#ffffff",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#666666",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  border: "rgba(0,0,0,0.08)",
};
const monthOrder: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

// assest 
import Hero1 from '../../assets/images/calender-events/Hero1.jpg';
import Hero2 from '../../assets/images/calender-events/Two-Dogs.jpg';
import Hero3 from '../../assets/images/calender-events/Hero3.jpg';

const heroImages = [Hero1, Hero2, Hero3];

/* ------------------ Event Data ------------------ */

const allEvents = [
  {
    id: 1,
    day: 1,
    month: "March",
    year: "2026",
    title: "Field Trial",
    type: "Field Trial",
    location: "Dick Cross WMA, Boydton, VA",
    time: "March 2026",
    chair: "Bruce Conover",
    email: "CoveyRiseBrits@gmail.com",
    cell: "540-429-3107",
    message: "Please call for Field Trial details",
  },
  {
    id: 2,
    day: 1,
    month: "November",
    year: "2026",
    title: "Field Trial",
    type: "Field Trial",
    location: "Slate River Farm, Dillwyn, VA",
    time: "November 2026",
    chair: "Bruce Conover",
    email: "CoveyRiseBrits@gmail.com",
    cell: "540-429-3107",
    message: "Please call for Field Trial details",
  },
  {
    id: 3,
    day: 11,
    month: "April",
    year: "2026",
    title: "Hunt Test Weekend",
    type: "Hunt Test",
    location: "Slate River Farm, Dillwyn, VA",
    time: "April 11 - 12, 2026",
    chair: "Mary “Kat” Shannon",
    email: "KStarBrits@gmail.com",
    cell: "804-240-2953",
    message: "Please call for Hunt Test details",
    pdf1: form1,
    pdf2: form2
  },
  {
    id: 4,
    day: 19,
    month: "June",
    year: "2026",
    title: "Specialty Show",
    type: "Dog Show",
    location: "Meadow Event Park, Doswell, VA",
    time: "June 19, 2026",
    chair: "Judy Cohen",
    email: "HyBrittin@verizon.net",
    cell: "410-952-0928 or 410-952-6970",
    message: "Please call for Show Event Details ",
  },
  {
    id: 5,
    day: 6,
    month: "April",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "April 6 - 7, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 6,
    day: 4,
    month: "May",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "May 4 - 5, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 7,
    day: 29,
    month: "June",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "June 29 - 30, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 8,
    day: 20,
    month: "July",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "July 20 - 21, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 9,
    day: 13,
    month: "August",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "August 13 - 14, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 10,
    day: 3,
    month: "September",
    year: "2026",
    title: "Agility Trial",
    type: "Agility",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "September 3 - 4, 2026",
    chair: "Sue Drazek",
    email: "SDrazek@comcast.net",
    cell: "301-221-3767",
    message: "Please call for Agility Trial details",
  },
  {
    id: 11,
    day: 1,
    month: "November",
    year: "2026",
    title: "ABC National Specialty Show",
    type: "Specialty Show",
    location: "Fort Smith, Arkansas",
    time: "November 2026",
  },
  {
    id: 12,
    day: 28,
    month: "January",
    year: "2026",
    title: "Board of Directors Meeting",
    type: "Meeting",
    location: "Zoom",
    time: "January 28, 2026 - 7 PM",
  },
  {
    id: 13,
    day: 1,
    month: "April",
    year: "2026",
    title: "Board of Directors Meeting",
    type: "Meeting",
    location: "Zoom",
    time: "April 1, 2026",
  },
  {
    id: 14,
    day: 2,
    month: "September",
    year: "2026",
    title: "Board of Directors Meeting",
    type: "Meeting",
    location: "Zoom",
    time: "September 2, 2026",
  },
  {
    id: 15,
    day: 16,
    month: "December",
    year: "2026",
    title: "Annual Membership Meeting",
    type: "Meeting",
    location: "Zoom",
    time: "December 16, 2026 - 7 PM",
  },
];

const types = ["All", "Field Trial", "Dog Show", "Hunt Test", "Agility"];

// Styling function 

// Parent container ke liye variants (staggering handle karne ke liye)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har card ke beech ka gap
      delayChildren: 0.2
    }
  }
};

// Har individual card ke liye variants
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)" // Halka blur starting mein smoothness badhata hai
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Super smooth "Out-Quint" curve
    }
  }
};




/* ------------------ Component ------------------ */

export default function Events() {
  const [viewMode, setViewMode] = useState("List");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);


  /* -------- Filter Logic -------- */
  const [activeType, setActiveType] = useState("All");
  const filtered = useMemo(() => {
    // Step 1: Filter
    let result =
      activeType === "All"
        ? allEvents
        : allEvents.filter((ev) => ev.type === activeType);

    // Step 2: Sort
    result = [...result].sort((a, b) => {
      const dateA = new Date(
        Number(a.year),
        monthOrder[a.month],
        a.day
      );
      const dateB = new Date(
        Number(b.year),
        monthOrder[b.month],
        b.day
      );

      return dateA.getTime() - dateB.getTime();
    });

    return result;

  },
    [activeType]); // Default to all events

  return (
    <div style={{ background: "#FAF7F0", minHeight: "100vh" }}>
      {/* HERO */}

      <section
        className="relative overflow-hidden"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000", // Fallback color
        }}
      >
        {/* --- Background Image with Slow Zoom Motion --- */}
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

        {/* --- Content Overlay --- */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Animated Gold Liner */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              margin: "0 auto 20px auto",
              width: "80px",
              height: "1px",
              fontSize: "18px",
              background: C.gold,
            }}
          />

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "18px",
              letterSpacing: "0.2em",
              fontWeight: 800,
            }}
          >
            NORTHERN VIRGINIA BRITTANY CLUB
          </motion.div>

          {/* Main Title with Fade-up */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(45px, 9vw, 95px)",
              fontWeight: 700,
              lineHeight: "1.1",
              marginBottom: "32px",
              fontStyle: "arial black",
            }}
          >
            Events & Activities
          </motion.h1>

          {/* Subtle Bottom Accent */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.6, duration: 1 }}
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
            Celebrating the spirit and versatility of the Brittany.
          </motion.p>
        </div>

        {/* Scroll Indicator Dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, #C9A84C, transparent)",
            }}
          />
        </motion.div>
      </section>

      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}
      >
        {/* VIEW MODE LABEL */}

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontFamily: "Playfair Display",
              color: C.charcoal,
              margin: 0,
            }}
          >
            Upcoming 2026 Events
          </h3>

          <span
            style={{
              background: "#f5f5f5",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
              color: C.textBody,
            }}
          >
            Viewing: {viewMode}
          </span>
        </div>

        {/* EVENTS LIST */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {filtered.map((ev) => (
            <motion.div
              key={ev.id}
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                borderColor: C.gold,
              }}
              className="flex flex-col md:grid md:grid-cols-[120px_1fr_200px] overflow-hidden"
              style={{
                background: "white",
                border: `1px solid ${C.border}`,
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
              }}
            >
              {/* DATE SECTION */}
              <div
                style={{
                  background: C.gold,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "20px 0",
                }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ fontSize: "36px", fontWeight: 700, lineHeight: "1" }}
                >
                  {ev.day}
                </motion.div>
                <div
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginTop: "6px",
                    opacity: 0.9,
                  }}
                >
                  {ev.month}
                </div>
              </div>
                
              {/* INFO SECTION */}
              <div className="p-7 md:py-[28px] md:px-[35px]">
                <div
                  style={{
                    display: "inline-block",
                    background: "#fdf8ec",
                    color: "#8B6A2B",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "4px 14px",
                    borderRadius: "1px",
                    letterSpacing: "0.15em",
                    marginBottom: "15px",
                    border: "1px solid #f0e1bc",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {ev.type.toUpperCase()} • {ev.year}
                </div>
                
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 5vw, 26px)", 
                    color: "#111",
                    marginBottom: "12px",
                    fontWeight: 700,
                    lineHeight: "1.2",
                  }}
                >
                  {ev.title}
                </h3>
                
                {ev.pdf1 && (
                  <div style={{ marginBottom: "15px" }}>
                    <span
                    onClick={() => setSelectedEvent(ev)} // ADD THIS LINE
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#8B6A2B",
                        background: "#fdf8ec",
                        border: "1px solid #e8c97e",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        cursor: "pointer",
                      }}
                    >
                      📄 View Forms
                    </span>
                  </div>
                )}

                <div
                  className="flex flex-wrap gap-4 md:gap-7"
                  style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={15} color={C.gold} strokeWidth={2.5} /> {ev.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={15} color={C.gold} strokeWidth={2.5} /> {ev.time}
                  </span>
                </div>
              </div>
                
              {/* BUTTON SECTION */}
              <div
                className="flex items-center justify-start md:justify-center p-7 md:p-0 md:pr-[35px]"
              >
                <motion.button
                  onClick={() => setSelectedEvent(ev)}
                  whileHover={{ backgroundColor: C.gold, color: "white" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "transparent",
                    color: "#111",
                    border: `1px solid ${C.gold}`,
                    padding: "14px 28px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    transition: "all 0.4s ease",
                    width: "100%", 
                  }}
                  className="group md:w-auto" 
                >
                  VIEW DETAILS
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "600px",
              background: "white",
              padding: "40px",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ fontSize: "32px", fontFamily: "Playfair Display" }}>
              {selectedEvent.title}
            </h2>

            <p style={{ marginTop: "10px" }}>
              <strong>Date:</strong> {selectedEvent.time}
            </p>

            <p>
              <strong>Location:</strong> {selectedEvent.location}
            </p>

            <p>
              <strong>Type:</strong> {selectedEvent.type}
            </p>

            {selectedEvent?.chair ? (
              <div className="flex flex-col">
                <p>
                  <strong>Committee Chair:</strong> {selectedEvent.chair}
                </p>
                <p>
                  <strong>Email:</strong> {selectedEvent.email}
                </p>
                <p>
                  <strong>Cell:</strong> {selectedEvent.cell}
                </p>
                <p>{selectedEvent.message}</p>
              </div>
            ) : (
              <></>
            )}

            <div>
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  marginTop: "20px",
                  background: C.gold,
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              {selectedEvent?.pdf1 && (
                <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>

                  {/* Entry Form */}
                  <a
                    href={selectedEvent.pdf1}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#C9A84C",
                      color: "white",
                      padding: "10px 18px",
                      textDecoration: "none",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Download Entry Form
                  </a>

                  {/* Premium */}
                  <a
                    href={selectedEvent.pdf2}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#111",
                      color: "white",
                      padding: "10px 18px",
                      textDecoration: "none",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Download Premium
                  </a>

                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}