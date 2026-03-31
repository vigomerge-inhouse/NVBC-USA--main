import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  CheckCircle,
  Star,
  //ArrowRight,
  Users,
  Award,
  Calendar,
  BookOpen,
  ShieldCheck,
  //Mail,
  //Phone,
  //MapPin,
} from "lucide-react";
//import React, { useState } from "react";

// Form
//import Form from './Form';

/* ─── DESIGN SYSTEM ───────────────── */

const C = {
  gold: "#C9A84C",
  offWhite: "#FAF9F6",
  border: "rgba(201,168,76,0.25)",
};

import member from "../../assets/images/become-member/memberHero.jpg";

/* ─── BENEFITS WITH COLORS ───────────────── */

const benefits = [
  {
    Icon: Users,
    title: "Community",
    desc: "Connect with Brittany enthusiasts across Northern Virginia.",
    color: "#C9A84C",
  },
  {
    Icon: Award,
    title: "Events",
    desc: "Access specialty shows and club gatherings.",
    color: "#E67E22",
  },
  {
    Icon: Calendar,
    title: "Activities",
    desc: "Year-round events and training opportunities.",
    color: "#3498DB",
  },
  {
    Icon: BookOpen,
    title: "Resources",
    desc: "Breed library and breeder referrals.",
    color: "#8E44AD",
  },
  {
    Icon: Star,
    title: "Recognition",
    desc: "Eligibility for awards and club spotlight.",
    color: "#2ECC71",
  },
  {
    Icon: CheckCircle,
    title: "Support",
    desc: "Advice from experienced breeders and trainers.",
    color: "#E74C3C",
  },
];

/* ─── MEMBERSHIP TIERS ───────────────── */

const tiers = [
  {
    name: "Full Membership",
    price: "$50",
    period: "per year",
    description: "Perfect for enthusiasts dedicated to the Brittany breed.",
    features: [
      "Club communications",
      "Participation in events",
      "American Brittany Club membership",
      "ABC Magazine subscription",
    ],
    cta: "Join ",
  },
  {
    name: "Associate Membership",
    price: "$5",
    period: "per year ",
    description: "For members interested in Brittany events.",
    features: [
      "Included in club communications",
      "Participation in social events",
    ],

  },
];
export default function BecomeMember() {
  return (
    <div style={{ background: C.offWhite, minHeight: "100vh" }}>
      {/* HERO */}

      <section className="relative h-screen flex items-center overflow-hidden">

        <ImageWithFallback
          src={member}
          alt="NVBC"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Join the Northern Virginia  <span style={{ color: "#C9A84C" }}>Brittany Club</span>
          </h1>

          <p className="mb-10 text-lg text-white/80 max-w-xl mx-auto">
            Become part of a welcoming community dedicated to the Brittany breed.
          </p>


          <button
            onClick={() =>
              window.open("https://www.theamericanbrittanyclub.org", "_blank", "noopener,noreferrer")
            }
            className="px-10 py-4 bg-[#C9A84C] text-black uppercase text-xs tracking-widest hover:bg-white transition"
          >
            Apply via ABC Website →
          </button>
        </div>
      </section>

      {/* HOW TO JOIN */}

      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="rounded-2xl p-12 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #ffffff, #f8f4e8)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-black text-center">
                How to Join
              </h2>

              <p className="text-gray-600 mb-8 text-base leading-relaxed text-center">
                To join NVBC, please complete your membership through the American Brittany Club (ABC). This ensures a simple and streamlined application process.
              </p>

              {/* Step-by-Step Guide */}
              <div className="space-y-6 mb-10">
                {/* Step 1 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-black font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Visit the ABC Website</h3>
                    <a
                      href="https://www.theamericanbrittanyclub.org"
                      target="_blank"
                      className="text-[#C9A84C] font-medium text-sm hover:underline break-all"
                    >
                      www.theamericanbrittanyclub.org
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-black font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Complete Membership Registration</h3>
                    <p className="text-gray-600 text-sm">
                      Fill out the membership application form with your personal information.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-black font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Select Northern Virginia as Your Regional Club</h3>
                    <p className="text-gray-600 text-sm">
                      During registration, be sure to choose{" "}
                      <span className="font-bold text- black">Northern Virginia Brittany Club</span>{" "}
                      from the regional club dropdown menu.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-black font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Submit Payment</h3>
                    <p className="text-gray-600 text-sm">
                      Complete your membership with payment through the ABC secure checkout.
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional: Add a helpful note */}
              <div className="bg-amber-50 border-l-4 border-[#C9A84C] p-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">💡 Note:</span> Membership is processed through ABC, and you'll receive confirmation emails from both organizations.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="https://www.theamericanbrittanyclub.org"
                  target="_blank"
                  className="inline-block px-12 py-5 bg-[#C9A84C] text-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition"
                >
                  Apply via ABC Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}

      <section className="py-32 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl hover:-translate-y-3 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg,#fff9e6,#f7e6b1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                style={{ background: `${b.color}20` }}
              >
                <b.Icon size={26} style={{ color: b.color }} />
              </div>

              <h3 className="text-xl font-bold mb-3">{b.title}</h3>

              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* MEMBERSHIP TIERS */}

      <section
        className="py-32"
        style={{
          background: "linear-gradient(180deg, #FAF3D6 0%, #E8CC80 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20 text-black">
            Membership Plans
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {tiers.map((tier, i) => (
              <div
                key={i}
                className="p-14 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(201,168,76,0.3)"
                }}
              >
                <h3
                  className="uppercase tracking-widest text-sm mb-4"
                  style={{ color: C.gold }}
                >
                  {tier.name}
                </h3>

                <p className="text-gray-500 mb-8">{tier.description}</p>

                <div className="text-6xl font-bold mb-10 text-black">
                  {tier.price}
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-gray-700">
                      <ShieldCheck size={16} className="text-[#C9A84C]" />
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>
      </section>




      <footer className="py-20 bg-[#FAF9F6] text-center">

        {/* Logo / Title */}
        <div className="text-3xl font-bold mb-4 text-[#C9A84C] tracking-wide">
          Northern Virginia Brittany Club
        </div>

        <p className="text-gray-500 text-sm mb-6">
          EST. 1973 · Excellence in the Brittany Breed
        </p>

        {/* Social Links
        <div className="flex justify-center gap-10 text-sm text-gray-500 mb-8">

          <a href="#" className="hover:text-[#C9A84C] transition">
            Instagram
          </a>

          <a href="#" className="hover:text-[#C9A84C] transition">
            Facebook
          </a>

          <a href="#" className="hover:text-[#C9A84C] transition">
            Twitter
          </a>

        </div> */}

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2026 Northern Virginia Brittany Club. All rights reserved.
        </p>

      </footer>
    </div>
  );
}