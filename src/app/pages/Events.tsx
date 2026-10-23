import { MapPin, Clock, ArrowRight, Mail, Phone, X, ChevronDown, User, Users, Navigation } from "lucide-react";
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ------------------ Colors ------------------ */

const C = {
  white: "#ffffff",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#3d3d3d", // darker body grey (was #666666)
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  border: "rgba(0,0,0,0.08)",
};

// Accent colour per event type (used for the small type badge dot)
const typeColor: Record<string, string> = {
  "Field Trial": "#2F6B4F",
  "Hunt Test": "#8A5A2B",
  "Rally": "#3B5B8A",
  "Dog Show": "#8A3B6B",
  "Specialty Show": "#8A3B6B",
  "Futurity": "#B8860B",
  "Meeting": "#555555",
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
/*
  NOTE FOR FUTURE UPDATES
  - `day` = start day. Optional `endDay` = last day of a multi-day event
    (add `endMonth` if it ends in a different month).
    Events are hidden automatically once the last day has passed.
  - Optional fields: sponsor, description, chair, email, cell, message,
    pdf1 / pdf2 (entry form / premium PDFs), highlight (true = featured box).
*/

// Futurity weekend dates live in one place (Ron's email: Apr 21-23; the
// newsletter says 4/21-25 - confirm with the club, then change here only).
const FUTURITY = { day: 21, endDay: 25, month: "April", year: "2027", time: "April 21 - 25, 2027" };

const allEvents: any[] = [
  /* ---------- 2026 ---------- */
  {
    id: 1,
    day: 29,
    endMonth: "November", // event spans two months
    endDay: 1,
    month: "October",
    year: "2026",
    title: "Fall Field Trial",
    type: "Field Trial",
    location: "Slate River Farm, Dillwyn, VA",
    time: "October 29 - November 1, 2026",
    sponsor: "Hosted by NVBC",
    chair: "Bruce Conover",
    email: "coveyrisebrits@yahoo.com",
    cell: "540-429-3107",
    message: "Please call for Field Trial details",
  },
  {
    id: 2,
    day: 7,
    endDay: 8,
    month: "November",
    year: "2026",
    title: "ABC Rally Trials",
    type: "Rally",
    location: "Bella Vista Training Center, Lewisberry, PA",
    time: "November 7 - 8, 2026",
    sponsor: "Run by NVBC and WHWTC",
    chair: "Sue Drazek",
    email: "sdrazek@comeast.net",
    cell: "301-221-3767",
    message: "Please call for Rally Trial details",
  },
  {
    id: 3,
    day: 14,
    endDay: 15,
    month: "November",
    year: "2026",
    title: "Fall Hunt Tests",
    type: "Hunt Test",
    location: "Slate River Farm, Dillwyn, VA",
    time: "November 14 - 15, 2026",
    sponsor: "Hosted by NVBC",
    chair: "Kathy Shannon",
    email: "kstarbrits@gmail.com",
    cell: "804-240-2953",
    message: "Please call for Hunt Test details",
  },
  {
    id: 4,
    day: 20,
    month: "November",
    year: "2026",
    title: "ABC National Specialty Show",
    type: "Specialty Show",
    location: "Fort Smith, Arkansas",
    time: "November 20, 2026",
  },
  {
    id: 5,
    day: 16,
    month: "December",
    year: "2026",
    title: "Annual Membership Meeting",
    type: "Meeting",
    location: "Zoom",
    time: "December 16, 2026 - 7 PM",
    sponsor: "Hosted by NVBC",
    description:
      "All full members are eligible to vote and all members are welcome. The agenda includes elections, presentation of awards, and reports from event committees.",
  },

  /* ---------- 2027 ---------- */
  {
    id: 6,
    day: 21,
    endDay: 23,
    month: "February",
    year: "2027",
    title: "Spring Field Trial",
    type: "Field Trial",
    location: "Dick Cross WMA, Boydton, VA",
    time: "February 21 - 23, 2027",
    sponsor: "Hosted by NVBC",
    chair: "Bruce Conover",
    email: "coveyrisebrits@yahoo.com",
    cell: "540-429-3107",
    message: "Please call for Field Trial details",
  },
  {
    id: 7,
    day: 27,
    endDay: 28,
    month: "February",
    year: "2027",
    title: "Spring Hunt Tests",
    type: "Hunt Test",
    location: "Slate River Farm, Dillwyn, VA",
    time: "February 27 - 28, 2027",
    sponsor: "Hosted by NVBC",
    chair: "Kathy Shannon",
    email: "kstarbrits@gmail.com",
    cell: "804-240-2953",
    message: "Please call for Hunt Test details",
  },
  {
    id: 8,
    ...FUTURITY,
    title: "ABC Eastern Futurity",
    type: "Futurity",
    highlight: true,
    location: "Slate River Farm, Dillwyn, VA",
    sponsor: "Hosted by NVBC",
    description:
      "Includes a Specialty Show and a Field Trial (both listed separately in this calendar). Details on premiums, judges, and entries will be posted as they are set.",
    chair: "Karen Hanson (Eastern Region Futurity Chair)",
    email: "hansonkrn1@aol.com",
    message: "Questions may also be directed to NVBC Secretary Barbara Bice (bbice1@verizon.net).",
  },
  {
    id: 9,
    ...FUTURITY,
    title: "Eastern Futurity Specialty Show",
    type: "Dog Show",
    location: "Slate River Farm, Dillwyn, VA",
    sponsor: "Hosted by NVBC",
    description: "A second specialty show, held with the ABC Eastern Futurity.",
    chair: "Karen Hanson",
    email: "hansonkrn1@aol.com",
    message: "Details on premiums, judges, and entries will be posted as they are set.",
  },
  {
    id: 10,
    ...FUTURITY,
    title: "Eastern Futurity Field Trial",
    type: "Field Trial",
    location: "Slate River Farm, Dillwyn, VA",
    sponsor: "Hosted by NVBC",
    description: "A second spring field trial, held with the ABC Eastern Futurity.",
    chair: "Jeff Currier",
    email: "jcchbritt@gmail.com",
    message: "Details on premiums, judges, and entries will be posted as they are set.",
  },
  {
    id: 11,
    day: 19,
    month: "June",
    year: "2027",
    title: "Specialty Show",
    type: "Dog Show",
    location: "Meadow Event Park, Doswell, VA",
    time: "June 19, 2027",
    sponsor: "Hosted by NVBC",
    chair: "Judy Cohen",
    email: "hybrittin@verizon.net",
    cell: "410-952-0928 or 410-952-6970",
    message: "Details forthcoming. Please call for Show Event details.",
  },
];

// Filter chip order (chips only appear when that type has upcoming events)
const types = ["All", "Field Trial", "Rally", "Hunt Test", "Futurity", "Dog Show", "Specialty Show", "Meeting"];

const futurityEvent = allEvents.find((ev) => ev.highlight);

/* ------------------ Helpers ------------------ */

const startOf = (ev: any) => new Date(Number(ev.year), monthOrder[ev.month], ev.day);
const endOf = (ev: any) =>
  new Date(Number(ev.year), monthOrder[ev.endMonth ?? ev.month], ev.endDay ?? ev.day);

const shortMonth = (m: string) => m.slice(0, 3).toUpperCase();

// Date block text, e.g. "29-1" / "OCT-NOV", "21-23" / "FEB"
const dateBlock = (ev: any) => {
  if (!ev.endDay) return { big: String(ev.day), small: shortMonth(ev.month) };
  return {
    big: `${ev.day}–${ev.endDay}`,
    small: ev.endMonth ? `${shortMonth(ev.month)}–${shortMonth(ev.endMonth)}` : shortMonth(ev.month),
  };
};

const statusOf = (ev: any, today: Date) => {
  const s = startOf(ev).getTime();
  const e = endOf(ev).getTime();
  const t = today.getTime();
  if (t >= s && t <= e) return "Happening now";
  const days = Math.round((s - t) / 86400000);
  if (days === 1) return "Tomorrow";
  if (days <= 30) return `In ${days} days`;
  return "";
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const FUTURITY_PARAGRAPHS = [
  "The American Brittany Club has asked the Northern Virginia Brittany Club to host the 2027 ABC Eastern Region Futurity, set for April 21–25 at Slate River Farm in Dillwyn, Virginia, The event will include a Specialty Show and Field Trial, with experienced breeders already helping organize it.",
  "A Futurity is one of the breed’s most important events. Created by the ABC in the late 1940s, it showcases breeding programs and rewards promising young Brittanys in the field and ring. At its core it is a breeders’ stake that highlights those producing the next generation of dual dogs and shares the purse between owner and breeder.",
  
  "The 2027 Futurity is open to properly nominated dogs whelped in 2025. Hosting offers NVBC a chance to welcome the wider Brittany community. Premiums, judges, and entry details will follow. Members interested in helping should speak up at the December meeting. Questions may go to NVBC Secretary Barbara Bice at bbice1@verizon.net.",
];

/* ------------------ Component ------------------ */

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [futurityOpen, setFuturityOpen] = useState(false);
  const [activeType, setActiveType] = useState("All");

  // Close the details popup with the Escape key and lock page scroll while open
  useEffect(() => {
    if (!selectedEvent) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedEvent(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedEvent]);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  // Events that have not finished yet, sorted by date
  const upcoming = useMemo(
    () =>
      allEvents
        .filter((ev) => endOf(ev).getTime() >= today.getTime())
        .sort((a, b) => startOf(a).getTime() - startOf(b).getTime()),
    [today]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: upcoming.length };
    upcoming.forEach((ev) => (c[ev.type] = (c[ev.type] || 0) + 1));
    return c;
  }, [upcoming]);

  const filtered = useMemo(
    () => (activeType === "All" ? upcoming : upcoming.filter((ev) => ev.type === activeType)),
    [upcoming, activeType]
  );

  const nextUpId = upcoming[0]?.id;

  const phoneLinks = (cell: string) =>
    cell.split(" or ").map((n, i) => (
      <React.Fragment key={n}>
        {i > 0 && " or "}
        <a href={`tel:${n.replace(/[^0-9+]/g, "")}`} style={{ color: "#8B6A2B", fontWeight: 700 }}>
          {n}
        </a>
      </React.Fragment>
    ));

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
        {/* HEADING + COUNT */}

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: C.charcoal,
              margin: 0,
            }}
          >
            Upcoming Events
          </h3>

          <span
            style={{
              background: "#f0ead8",
              padding: "8px 18px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: 700,
              color: C.textBody,
            }}
          >
            {filtered.length} {filtered.length === 1 ? "event" : "events"}
          </span>
        </div>

        {/* FILTER CHIPS */}

        <div
          role="group"
          aria-label="Filter events by type"
          style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "22px" }}
        >
          {types
            .filter((t) => counts[t])
            .map((t) => {
              const active = activeType === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  aria-pressed={active}
                  style={{
                    background: active ? C.charcoal : "white",
                    color: active ? "white" : "#222",
                    border: `1px solid ${active ? C.charcoal : "rgba(0,0,0,0.25)"}`,
                    borderRadius: "999px",
                    padding: "9px 18px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {t} <span style={{ opacity: 0.7, marginLeft: "4px" }}>{counts[t]}</span>
                </button>
              );
            })}
        </div>

        {/* FEATURED: ABC EASTERN FUTURITY - invitation style, double gold frame */}

        {futurityEvent && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: "32px",
              background: "#fdf8ec",
              border: `1px solid ${C.gold}`,
              padding: "8px",
            }}
          >
            <div
              style={{
                border: `1px solid ${C.goldLight}`,
                padding: "34px 30px 30px",
                textAlign: "center",
              }}
            >
              {/* label with small ornament */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span style={{ width: 50, height: 1, background: C.gold }} />
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    letterSpacing: "0.3em",
                    color: "#8B6A2B",
                  }}
                >
                  FEATURED EVENT
                </span>
                <span style={{ width: 50, height: 1, background: C.gold }} />
              </div>

              <h4
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 4.5vw, 34px)",
                  color: "#111",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  margin: "0 auto",
                  maxWidth: "820px",
                }}
              >
                The American Brittany Club Eastern Futurity – Hosted by NVBC in 2027
              </h4>

              {/* diamond divider */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
                <span style={{ width: 70, height: 1, background: C.goldLight }} />
                <span style={{ width: 9, height: 9, background: C.gold, transform: "rotate(45deg)" }} />
                <span style={{ width: 70, height: 1, background: C.goldLight }} />
              </div>

              {/* three key facts */}
              <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginBottom: "22px" }}>
                {[
                  { label: "DATE", value: FUTURITY.time },
                  { label: "VENUE", value: "Slate River Farm, Dillwyn, VA" },
                  { label: "EVENTS", value: "Specialty Show + Field Trial" },
                ].map((f, i) => (
                  <div
                    key={f.label}
                    className={i > 0 ? "border-t md:border-t-0 md:border-l" : ""}
                    style={{ borderColor: C.goldLight, padding: "12px 16px" }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        color: "#8B6A2B",
                        marginBottom: "6px",
                      }}
                    >
                      {f.label}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", fontWeight: 700, color: "#111" }}>
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  fontWeight: 500,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "860px",
                  margin: "0 auto",
                }}
              >
                {(futurityOpen ? FUTURITY_PARAGRAPHS : FUTURITY_PARAGRAPHS.slice(0, 1)).map((p, i) => (
                  <p key={i} style={{ margin: "0 0 12px 0" }}>
                    {p}
                  </p>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <motion.button
                  onClick={() => setSelectedEvent(futurityEvent)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: C.gold,
                    color: "white",
                    border: `1px solid ${C.gold}`,
                    padding: "14px 30px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                  }}
                >
                  VIEW EVENT DETAILS <ArrowRight size={15} />
                </motion.button>

                <button
                  onClick={() => setFuturityOpen((o) => !o)}
                  aria-expanded={futurityOpen}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#8B6A2B",
                    fontWeight: 800,
                    fontSize: "15px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: 0,
                  }}
                >
                  {futurityOpen ? "Show less" : "Read more"}
                  <ChevronDown
                    size={16}
                    style={{ transform: futurityOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* EVENTS LIST */}

        <motion.div
          key={activeType}
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
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "50px 0", color: C.textBody, fontSize: "18px", fontWeight: 600 }}>
              No upcoming events in this category.
            </div>
          )}

          {filtered.map((ev, idx) => {
            const showYear = idx === 0 || filtered[idx - 1].year !== ev.year;
            const db = dateBlock(ev);
            const status = statusOf(ev, today);
            const dot = typeColor[ev.type] || C.gold;
            return (
              <React.Fragment key={ev.id}>
                {showYear && (
                  <motion.div
                    variants={itemVariants}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginTop: idx === 0 ? 0 : "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: C.charcoal,
                      }}
                    >
                      {ev.year}
                    </span>
                    <span style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.18)" }} />
                  </motion.div>
                )}

                <motion.div
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
                    <div style={{ fontSize: db.big.length > 3 ? "30px" : "36px", fontWeight: 700, lineHeight: "1" }}>
                      {db.big}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        marginTop: "6px",
                      }}
                    >
                      {db.small}
                    </div>
                  </div>

                  {/* INFO SECTION */}
                  <div className="p-7 md:py-[28px] md:px-[35px]">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", marginBottom: "15px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "#fdf8ec",
                          color: "#8B6A2B",
                          fontSize: "11px",
                          fontWeight: 800,
                          padding: "4px 14px",
                          borderRadius: "1px",
                          letterSpacing: "0.15em",
                          border: "1px solid #f0e1bc",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot }} />
                        {ev.type.toUpperCase()} • {ev.year}
                      </div>

                      {ev.id === nextUpId && (
                        <span style={{ background: C.charcoal, color: "white", fontSize: "11px", fontWeight: 800, letterSpacing: "0.12em", padding: "4px 10px" }}>
                          NEXT UP
                        </span>
                      )}
                      {status && (
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: status === "Happening now" ? "#2F6B4F" : "#8B6A2B",
                          }}
                        >
                          {status}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px, 5vw, 26px)",
                        color: "#111",
                        marginBottom: ev.sponsor ? "6px" : "12px",
                        fontWeight: 700,
                        lineHeight: "1.2",
                      }}
                    >
                      {ev.title}
                    </h3>

                    {ev.sponsor && (
                      <div style={{ fontSize: "16px", color: "#8B6A2B", fontWeight: 700, marginBottom: "12px" }}>
                        {ev.sponsor}
                      </div>
                    )}

                    {ev.pdf1 && (
                      <div style={{ marginBottom: "15px" }}>
                        <span
                          onClick={() => setSelectedEvent(ev)}
                          style={{
                            fontSize: "14px",
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
                      style={{ color: "#444", fontSize: "16px", fontWeight: 600 }}
                    >
                      <span className="flex items-center gap-2">
                        <MapPin size={17} color={C.gold} strokeWidth={2.5} /> {ev.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={17} color={C.gold} strokeWidth={2.5} /> {ev.time}
                      </span>
                    </div>
                  </div>

                  {/* BUTTON SECTION */}
                  <div className="flex items-center justify-start md:justify-center p-7 md:p-0 md:pr-[35px]">
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
                        fontSize: "11px",
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
              </React.Fragment>
            );
          })}
        </motion.div>
      </section>

      {/* DETAILS POPUP */}

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={() => setSelectedEvent(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,12,24,0.72)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "16px",
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedEvent.title}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "640px",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                position: "relative",
                background: "linear-gradient(135deg, #D4AF37 0%, #C9A84C 55%, #B8902F 100%)",
                padding: "34px 32px 28px",
              }}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.28)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "14px" }}>
                <span
                  style={{
                    background: "white",
                    color: "#8B6A2B",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedEvent.type.toUpperCase()}
                </span>
                {statusOf(selectedEvent, today) && (
                  <span style={{ color: "white", fontSize: "14px", fontWeight: 800 }}>
                    {statusOf(selectedEvent, today)}
                  </span>
                )}
              </div>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 5vw, 32px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "white",
                  textShadow: "0 1px 3px rgba(0,0,0,0.25)",
                  margin: 0,
                  paddingRight: "30px",
                }}
              >
                {selectedEvent.title}
              </h2>

              {selectedEvent.sponsor && (
                <div style={{ marginTop: "10px", color: "white", fontSize: "15px", fontWeight: 700, fontFamily: "'Inter', sans-serif", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
                  {selectedEvent.sponsor}
                </div>
              )}
            </div>

            {/* BODY */}
            <div style={{ padding: "26px 32px", overflowY: "auto", fontFamily: "'Inter', sans-serif" }}>
              {[
                { icon: <Clock size={18} />, label: "Date", value: selectedEvent.time },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: selectedEvent.location,
                  link:
                    selectedEvent.location !== "Zoom"
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedEvent.location)}`
                      : null,
                },
                ...(selectedEvent.sponsor
                  ? [{ icon: <Users size={18} />, label: "Sponsorship", value: selectedEvent.sponsor }]
                  : []),
              ].map((row: any) => (
                <div key={row.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "18px" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#fdf8ec",
                      border: "1px solid #f0e1bc",
                      color: "#8B6A2B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.15em", color: "#6b6b6b", textTransform: "uppercase" }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: "17px", color: "#111", fontWeight: 600, marginTop: "2px" }}>{row.value}</div>
                    {row.link && (
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          marginTop: "4px",
                          fontSize: "14px",
                          fontWeight: 800,
                          color: "#8B6A2B",
                        }}
                      >
                        <Navigation size={14} /> Get directions
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {selectedEvent.description && (
                <p style={{ margin: "6px 0 20px", fontSize: "16px", lineHeight: 1.7, fontWeight: 500, color: "#333" }}>
                  {selectedEvent.description}
                </p>
              )}

              {selectedEvent.chair && (
                <div
                  style={{
                    marginTop: "8px",
                    padding: "18px 20px",
                    background: "#fdf8ec",
                    border: "1px solid #f0e1bc",
                    borderLeft: `4px solid ${C.gold}`,
                    borderRadius: "6px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.15em", color: "#8B6A2B", marginBottom: "10px" }}>
                    COMMITTEE CHAIR
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>
                    <User size={18} color={C.gold} /> {selectedEvent.chair}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px" }}>
                    {selectedEvent.email && (
                      <div className="flex items-center gap-2">
                        <Mail size={16} color={C.gold} />
                        <a href={`mailto:${selectedEvent.email}`} style={{ color: "#8B6A2B", fontWeight: 700, wordBreak: "break-all" }}>
                          {selectedEvent.email}
                        </a>
                      </div>
                    )}
                    {selectedEvent.cell && (
                      <div className="flex items-center gap-2">
                        <Phone size={16} color={C.gold} />
                        <span style={{ fontWeight: 600 }}>{phoneLinks(selectedEvent.cell)}</span>
                      </div>
                    )}
                  </div>
                  {selectedEvent.message && (
                    <div style={{ marginTop: "12px", fontSize: "15px", fontWeight: 500, color: "#333", lineHeight: 1.6 }}>
                      {selectedEvent.message}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "flex-end",
                padding: "16px 32px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                background: "#fafafa",
              }}
            >
              {selectedEvent.pdf1 && (
                <>
                  {/* Entry Form */}
                  <a
                    href={selectedEvent.pdf1}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: C.gold, color: "white", padding: "11px 20px", textDecoration: "none", fontWeight: 700, fontSize: "14px", borderRadius: "6px" }}
                  >
                    Download Entry Form
                  </a>

                  {/* Premium */}
                  <a
                    href={selectedEvent.pdf2}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#111", color: "white", padding: "11px 20px", textDecoration: "none", fontWeight: 700, fontSize: "14px", borderRadius: "6px" }}
                  >
                    Download Premium
                  </a>
                </>
              )}
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  background: "white",
                  color: "#111",
                  border: `1px solid ${C.gold}`,
                  padding: "11px 24px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "14px",
                  borderRadius: "6px",
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}