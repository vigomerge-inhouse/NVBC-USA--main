import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import countryImg from "../../assets/images/contact-us/country.jpg";
import countryImg1 from "../../assets/images/contact-us/country1.jpg";
import formSide from '../../assets/images/contact-us/Gallery-NVBC.jpg';
import logo from "../../assets/images/logo.png";
const heroImages = [countryImg, countryImg1];

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "BBice1@verizon.net",
    sub: "Barbara Bice",
    iconColor: "#A855F7",      // Vibrant Purple
    cardBg: "linear-gradient(135deg, #FFFFFF 0%, #FAF5FF 100%)",  // Soft purple gradient
    borderColor: "#C084FC",
    hoverColor: "#9333EA"
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+1 410-660-7290",
    sub: "NVBC Secretary",
    iconColor: "#06B6D4",      // Vibrant Cyan/Turquoise
    cardBg: "linear-gradient(135deg, #FFFFFF 0%, #ECFEFF 100%)",  // Soft cyan gradient
    borderColor: "#22D3EE",
    hoverColor: "#0891B2"
  },
];
// { Icon: MapPin, label: "Location", value: "Northern Virginia, VA", sub: "United States" },
// { Icon: Clock, label: "Office Hours", value: "Mon–Fri: 9am – 5pm", sub: "Weekend: By appointment" },


const departments = [
  "General Inquiry",
  "Membership",
  "Events & Entries",
  "Breeder Referral",
  "Media & Press",
  "Awards & Recognition",
  "Other",
];


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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Added for password toggle

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Inquiry", 
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputStyle = {
    background: "#ffffff",
    border: "1px solid rgba(154, 123, 44, 0.2)",
    borderRadius: "16px",
    color: "#1a1a1a",
    padding: "14px 16px",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
  };
  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    color: "#9A7B2C",
    fontSize: "13px",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  return (
    <div style={{ background: "#FAF9F6", minHeight: "100vh" }}>
      {/* Page Header */}
     {/* Page Header */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* 1. Swiper Background - LOWEST LAYER */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: index === 0 ? "center center" : "center bottom",  // ← First image center, Second image bottom
                    width: "100%",
                    height: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2. Dark Overlay - MIDDLE LAYER */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

        {/* 3. Content - TOP LAYER */}
        <motion.div
          className="relative z-20 max-w-9xl mx-auto px-6 lg:px-8 text-center"
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
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{
              margin: "0 auto 24px auto",
              height: "2px",
              background: C.gold,
              opacity: 0.8,
            }}
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#9A7B2C",
              fontSize: "20px",
              letterSpacing: "0.2em",
              marginBottom: "26px",
              fontWeight: 600,
            }}
          >
            GET IN TOUCH
          </motion.div>
          
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
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
              textShadow: "0 10px 40px rgba(0,0,0,0.6)",
              fontSize: "clamp(36px, 8vw, 74px)",
              fontWeight: 800,
              lineHeight: "1.15",
              marginBottom: "24px",
            }}
          >
            Contact Us
          </motion.h1>
          
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
              margin: "0 auto",
              lineHeight: "1.8",
              fontWeight: 300,
            }}
          >
            We'd love to hear from you. Reach out with questions, membership
            inquiries, or just to share your love of Brittanys.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "60px" }}
            transition={{ delay: 2, duration: 1.5 }}
            style={{
              width: "1px",
              background: "linear-gradient(to bottom, #9A7B2C, transparent)",
              margin: "50px auto 0",
            }}
          />
        </motion.div>
      </section>
          
      {/* Contact Info Cards */}
      <section className="pt-16 pb-8 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-20 overflow-hidden px-4">
          {contactInfo.map(({ Icon, label, value, sub, iconColor, cardBg, borderColor, hoverColor }, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i < 2 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 2.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                borderColor: iconColor,
              }}
              style={{
                background: cardBg,
                border: `1px solid ${iconColor}30`,
                borderRadius: "0px",
                padding: "40px 24px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon Circle */}
              {/* Icon Circle */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: `${iconColor}10`,
                  border: `1px solid ${iconColor}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: iconColor,
                  margin: "0 auto 24px",
                }}
              
              >
                <Icon size={26} strokeWidth={1.5} />
              </div>
              
              {/* Label - Cinzel Font */}
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: iconColor,
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.2em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
              
              {/* Value - Playfair Display */}
              <div
                style={{
                  fontFamily: "serif",
                  color: "#1a1a1a",
                  fontSize: "20px",
                  marginBottom: "8px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                }}
              >
                {value}
              </div>
              
              {/* Subtext - Inter Font */}
              <div
                style={{
                  color: "rgba(0,0,0,0.55)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                {sub}
              </div>
              
              {/* Subtle Hover Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ background: "#9A7B2C", originX: 0 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Contact Form + Sidebar */}
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* --- Form Section with Animation --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
             background: "linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)",
              borderRadius: "32px",
              padding: "48px",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.15), 0 0 0 1px rgba(154,123,44,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
            className="gap-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8 }}
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #9A7B2C, #D4AF37)",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            />
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#9A7B2C",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                marginBottom: "38px",
                borderLeft: "4px solid #9A7B2C",
                paddingLeft: "20px",
              }}
            >
              SEND US A MESSAGE
              <div className="absolute top-14 md:top-4 right-8 z-20">
                <img 
                  src={logo} 
                  alt="Northern Virginia Brittany Club Logo"
                  className="h-18 w-auto md:h-32 lg:h-40 object-contain drop-shadow-lg rounded-lg border-t-4 border-b-4 border-amber-800"
                />
              </div>
            </div>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <CheckCircle
                  size={56}
                  style={{ color: "#9A7B2C", margin: "0 auto 20px" }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#35afd7",
                    fontSize: "24px",
                  }}
                >
                  Message Sent!
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Account Section */}
                <div className="mb-10 border-b border-gray-100 pb-8">

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">


                    </div>
                    <div>

                    </div>
                  </div>
                </div>

                {/* Personal Section */}
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="email@address.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Phone (Optional)</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>subject</label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      {departments.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>



                <div className="mb-6">
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #9A7B2C 0%, #B88D2C 100%)",
                    color: "#ffffff",
                    padding: "16px",
                    borderRadius: "16px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    boxShadow: "0 4px 15px rgba(154,123,44,0.3)",
                  }}
                >
                  SEND MESSAGE <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* --- Sidebar Section with Animation --- */}
         <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Add card wrapper */}
  <div
    style={{
      background: "#FDF8F0",
      borderRadius: "32px",
      padding: "40px",
      boxShadow: "0 30px 60px -20px rgba(0,0,0,0.1)",
    }}
  >
    <div
      style={{
        fontFamily: "'Cinzel', serif",
        color: "#9A7B2C",
        fontSize: "32px",
        fontWeight: 700,
        letterSpacing: "0.05em",
        marginBottom: "24px",
        borderLeft: "4px solid #9A7B2C",
        paddingLeft: "20px",
      }}
    >
      MEET US
    </div>
    </div>
    
            {/* <div
              style={{
                width: "100%",           // 100vw ki jagah 100% use karein
                height: "100vh",          
                overflow: "hidden",
                background: "#ffffff",
                margin: "0",
                padding: "0",
                display: "block",        // Taaki extra space na le
                boxSizing: "border-box", // Border ko width ke andar rakhne ke liye
                border: "1px solid rgba(154,123,44,0.15)",
              }}
            >
              
            </div> */}

            {/* <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(154,123,44,0.12)",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a1a1a",
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                Club Meetings
              </h3>
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  lineHeight: "1.8",
                  marginBottom: "16px",
                }}
              >
                NVBC skips quarterly meetings in favor of a grand year-end 
                assembly every December—the definitive time for Membership 
                drives, Awards, and key Special Announcements.
              </p>
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.05)",
                  margin: "16px 0",
                }}
              />
              <div className="flex flex-col gap-3">
                {[
                  { label: "Club Meeting", val: "None (Except December)" },
                  { label: "December Events", val: 'Annual Membership Invitation' },
                  { label: ' ', val: 'Awards & Recognitions'},
                  { label: ' ', val: 'Special Announcements'}
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between">
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: "#9A7B2C",
                        fontSize: "12px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(0,0,0,0.5)",
                        fontSize: "12px",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <div
              style={{
                marginTop: "20px",
                background: "#F3EEE0",
                borderLeft: "4px solid #9A7B2C",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a1a1a",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  fontStyle: "italic",
                }}
              >
                "The best conversations happen between people who share a love
                of Brittanys. We're always happy to talk dogs."
              </p>
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#9A7B2C",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  marginTop: "12px",
                  fontWeight: "bold",
                }}
              >
                — MARGARET HOLLOWAY,  FORMER PRESIDENT
              </p>
            </div> */}
          </motion.div>
        </div>
      </section>
      <ImageWithFallback
        src={formSide}
        alt="Northern Virginia"
        className="w-screen h-screen object-cover block"
      />
    </div>
  );
}