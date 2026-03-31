import { useState } from "react";
import { Check, CreditCard, Mail, ChevronDown, Eye, EyeOff } from "lucide-react";

import Warning from '../../assets/images/Form/Warning.png';

const REGIONS = {
  "East Coast": [
    "Anthracite", "Central Maine", "Central New England", "Del-Val", "Hudson Valley",
    "Mid-Florida", "New England (Eastern)", "New England (Northern)", "New England (Southern)",
    "North Jersey", "Northern Virginia", "Rappahannock", "Southeastern", "Susquehanna",
    "Tarheel", "Tidewater", "Upper New York"
  ],
  "East Central": [
    "Bama", "Buckeye", "Georgia", "Greater Indianapolis", "Hoosier", "Kentucky",
    "Michigan", "Michigan-Saginaw Valley", "Music City", "Niagara Frontier", "Ohio",
    "Pennsylvania", "Western Michigan"
  ],
  "Central": [
    "Badger", "Cajun Country", "Central Arkansas", "Greater Milwaukee", "Greater St. Louis",
    "Hawkeye", "Heart of Illinois", "Illinois", "Iowa", "Lasalle", "Minnesota",
    "Missouri", "Ozark", "St. Croix Valley", "Southern Illinois", "Volunteer"
  ],
  "Midwest": [
    "Alamo", "Bluebonnet", "Central New Mexico", "Fort Worth", "Indian Nations",
    "Lone Star", "Midwest", "MO-Valley", "Nebraska", "Neosho Valley",
    "Northern Colorado", "Northern Oklahoma", "Ringneck", "Skyline", "Sooner",
    "Southern Kansas", "Texas Coastal", "Top Of Texas", "West Texas"
  ],
  "West Coast": [
    "Aloha", "California", "Central California", "Grand Canyon", "Golden Empire",
    "Greater Phoenix", "Idaho", "Inland Empire", "Montana", "Northern California",
    "Oregon", "Sahuaro", "San Diego", "Sierra View", "So. San Joaquin Valley",
    "Wasatch Front", "Washington", "Whid Isle"
  ],
  "International": ["Canada", "Mexico", "Europe", "Other"]
};

const COUNTRIES = [
  "United States", "Canada", "Mexico", "United Kingdom", "Germany", "France", "Australia",
  "India", "Japan", "China", "Brazil", "Italy", "Spain", "Netherlands", "Sweden",
  "Norway", "Denmark", "Finland", "Ireland", "New Zealand", "South Africa", "Argentina",
  "Chile", "Colombia", "Peru", "Philippines", "South Korea", "Thailand", "Vietnam",
  "Indonesia", "Malaysia", "Singapore", "Poland", "Czech Republic", "Austria",
  "Switzerland", "Belgium", "Portugal", "Greece", "Turkey", "Egypt", "Nigeria",
  "Kenya", "Ghana", "Ethiopia", "Tanzania", "Uganda", "Other"
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS",
  "KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY",
  "NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];

type FormData = {
  username: string; password: string; confirmPassword: string;
  firstName: string; lastName: string; email: string; confirmEmail: string;
  membershipType: string; clubRegion: string; clubAffiliation: string;
  signupType: string; magazine: string; giftFrom: string;
  interests: string[];
  familyCount: number;
  optInMailing: boolean;
  autoRenew: boolean;
  paymentMethod: string;
  billingFirstName: string; billingLastName: string;
  billingAddress1: string; billingAddress2: string;
  billingCity: string; billingState: string;
  billingZip: string; billingCountry: string; billingPhone: string;
  copyBilling: boolean;
  mailingFirstName: string; mailingLastName: string;
  mailingAddress1: string; mailingAddress2: string;
  mailingCity: string; mailingState: string;
  mailingZip: string; mailingCountry: string; mailingPhone: string;
  cardNumber: string; cardExpiry: string; cardCvc: string;
  discountCode: string;
};

const initialForm: FormData = {
  username: "", password: "", confirmPassword: "",
  firstName: "", lastName: "", email: "", confirmEmail: "",
  membershipType: "member-at-large", clubRegion: "", clubAffiliation: "",
  signupType: "new", magazine: "digital", giftFrom: "",
  interests: [], familyCount: 0, optInMailing: true, autoRenew: false,
  paymentMethod: "credit-card",
  billingFirstName: "", billingLastName: "",
  billingAddress1: "", billingAddress2: "",
  billingCity: "", billingState: "", billingZip: "",
  billingCountry: "United States", billingPhone: "",
  copyBilling: false,
  mailingFirstName: "", mailingLastName: "",
  mailingAddress1: "", mailingAddress2: "",
  mailingCity: "", mailingState: "", mailingZip: "",
  mailingCountry: "United States", mailingPhone: "",
  cardNumber: "", cardExpiry: "", cardCvc: "",
  discountCode: "",
};

const SPECIAL_INTERESTS = [
  "Field Trials", "Shows", "Hunt Tests", "Obedience", "Hunting", "Agility"
];

// ─── Reusable sub-components (inline) ───

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-[var(--section-shadow)] overflow-hidden">
      <div className="bg-primary px-6 py-3">
        <h2 className="text-lg font-semibold text-primary-foreground">{title}</h2>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-foreground">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass = "w-full border border-gray-300 p-2 rounded-sm focus:border-[#2c3e50] focus:ring-1 focus:ring-[#2c3e50] outline-none transition-all bg-white";
const selectClass = inputClass + " appearance-none cursor-pointer";

// ─── Main Component ───

// Main Function 

const Form = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, value: any) => setForm(f => ({ ...f, [key]: value }));

  const toggleInterest = (interest: string) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter(i => i !== interest)
        : [...f.interests, interest]
    }));
  };

  const copyBillingToMailing = () => {
    setForm(f => ({
      ...f,
      copyBilling: !f.copyBilling,
      ...(f.copyBilling ? {} : {
        mailingFirstName: f.billingFirstName,
        mailingLastName: f.billingLastName,
        mailingAddress1: f.billingAddress1,
        mailingAddress2: f.billingAddress2,
        mailingCity: f.billingCity,
        mailingState: f.billingState,
        mailingZip: f.billingZip,
        mailingCountry: f.billingCountry,
        mailingPhone: f.billingPhone,
      })
    }));
  };

  const basePrice = 50;
  const familyPrice = form.familyCount * 5;
  const total = basePrice + familyPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-[image:var(--hero-gradient)] py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
          ABC Member Checkout
        </h1>
        <p className="mt-2 text-primary-foreground/80 text-sm">The American Brittany Club</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* ── Account Information ── */}
        <SectionCard title="Account Information">
          <Field label="Username" required>
            <input className={inputClass} value={form.username} onChange={e => set("username", e.target.value)} required />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Password" required>
              <div className="relative">
                <input className={inputClass} type={showPassword ? "text" : "password"}
                  value={form.password} onChange={e => set("password", e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </Field>
            <Field label="Confirm Password" required>
              <input className={inputClass} type="password"
                value={form.confirmPassword} onChange={e => set("confirmPassword", e.target.value)} required />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="First Name" required>
              <input className={inputClass} value={form.firstName} onChange={e => set("firstName", e.target.value)} required />
            </Field>
            <Field label="Last Name" required>
              <input className={inputClass} value={form.lastName} onChange={e => set("lastName", e.target.value)} required />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Email Address" required>
              <input className={inputClass} type="email" value={form.email} onChange={e => set("email", e.target.value)} required />
            </Field>
            <Field label="Confirm Email Address" required>
              <input className={inputClass} type="email" value={form.confirmEmail} onChange={e => set("confirmEmail", e.target.value)} required />
            </Field>
          </div>
          <p className="text-xs text-muted-foreground">
            Already have an account? <a href="#" className="text-primary underline">Log in here</a>
          </p>
        </SectionCard>

        {/* ── Membership Type / Club Affiliation ── */}
        <SectionCard title="Membership Type / Club Affiliation">
          <Field label="Membership Type" required>
            <div className="flex gap-6 mt-1">
              {[
                { v: "member-at-large", l: "Member-at-Large" },
                { v: "regional-club", l: "Regional Club" }
              ].map((o) => (
                <label 
                  key={o.v} 
                  className="group flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-[#2c3e50]"
                >
                  {/* Custom Radio Wrapper */}
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="membershipType"
                      value={o.v}
                      checked={form.membershipType === o.v}
                      onChange={(e) => set("membershipType", e.target.value)}
                      className="peer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:border-[#2c3e50] transition-all cursor-pointer bg-white"
                    />
                    {/* Inner Circle (Sirf checked hone par dikhega) */}
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2c3e50] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  <span className="peer-checked:font-bold">{o.l}</span>
                </label>
              ))}
            </div>
          </Field>

          {form.membershipType === "regional-club" && (
            <>
              <p className="text-xs text-muted-foreground">
                Select your region, then choose your club from the list.
              </p>
              <Field label="Region">
                <div className="relative">
                  <select className={selectClass} value={form.clubRegion}
                    onChange={e => { set("clubRegion", e.target.value); set("clubAffiliation", ""); }}>
                    <option value="">Select Region...</option>
                    {Object.keys(REGIONS).map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </Field>
              {form.clubRegion && (
                <Field label={`Club Affiliation (${form.clubRegion})`}>
                  <div className="relative">
                    <select className={selectClass} value={form.clubAffiliation}
                      onChange={e => set("clubAffiliation", e.target.value)}>
                      <option value="">Select Club...</option>
                      {REGIONS[form.clubRegion as keyof typeof REGIONS]?.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </Field>
              )}
            </>
          )}
        </SectionCard>

        {/* ── Additional Info ── */}
        <SectionCard title="Additional Info">
          <Field label="Type of Sign-up" required>
            <div className="flex gap-6 mt-2">
              {[
                { v: "new", l: "New" }, 
                { v: "renewal", l: "Renewal" }
              ].map((o) => (
                <label 
                  key={o.v} 
                  className="group flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700"
                >
                  {/* Custom Radio Wrapper */}
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="signupType"
                      value={o.v}
                      checked={form.signupType === o.v}
                      onChange={(e) => set("signupType", e.target.value)}
                      className="peer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:border-[#2c3e50] bg-white transition-all cursor-pointer"
                    />
                    {/* Inner Dot: Sirf checked hone par dikhega */}
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2c3e50] opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 pointer-events-none"></div>
                  </div>

                  <span className="group-hover:text-[#2c3e50] transition-colors">
                    {o.l}
                  </span>
                </label>
              ))}
            </div>
          </Field>

          <Field label="Magazine Subscription" required>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { v: "digital", l: "Digital Only" },
                { v: "print", l: "Print Only" },
                { v: "both", l: "Digital + Print" },
                { v: "none", l: "No Magazine" },
              ].map(o => (
                <label key={o.v}
                  className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer transition-all
                    ${form.magazine === o.v
                      ? "border-primary bg-accent text-accent-foreground font-medium"
                      : "border-border text-muted-foreground hover:border-primary/50"}`}>
                  <input type="radio" name="magazine" value={o.v} checked={form.magazine === o.v}
                    onChange={e => set("magazine", e.target.value)} className="sr-only" />
                  {form.magazine === o.v && <Check size={14} />}
                  {o.l}
                </label>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">If you want to receive a Print Magazine you must select it here.</p>
          </Field>

          <Field label="Gift membership provided by:">
            <input className={inputClass} value={form.giftFrom} onChange={e => set("giftFrom", e.target.value)}
              placeholder="Leave blank if not a gift" />
          </Field>
        </SectionCard>

        {/* ── Special Interests ── */}
        <SectionCard title="Special Interests">
          <p className="text-xs text-muted-foreground">Check as many as you like. These can always be updated in your Member Profile.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SPECIAL_INTERESTS.map(interest => (
              <label key={interest}
                className={`flex items-center gap-2 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition-all
                  ${form.interests.includes(interest)
                    ? "border-primary bg-accent text-accent-foreground font-medium"
                    : "border-border text-muted-foreground hover:border-primary/50"}`}>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors
                  ${form.interests.includes(interest) ? "bg-primary border-primary" : "border-input"}`}>
                  {form.interests.includes(interest) && <Check size={12} className="text-primary-foreground" />}
                </div>
                {interest}
                <input type="checkbox" className="sr-only" checked={form.interests.includes(interest)}
                  onChange={() => toggleInterest(interest)} />
              </label>
            ))}
          </div>
        </SectionCard>

        {/* ── Family Associate Memberships ── */}
        <SectionCard title="Add Family Associate Membership(s)">
          <p className="text-sm text-muted-foreground">
            Choose the number of Family Associate memberships (0–12). Price: <strong className="text-[#d9534f]">$5.00</strong> each.
          </p>
          <Field label="Number of Family Members">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => set("familyCount", Math.max(0, form.familyCount - 1))}
                className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">−</button>
              <span className="text-lg font-semibold text-foreground w-8 text-center">{form.familyCount}</span>
              <button type="button" onClick={() => set("familyCount", Math.min(12, form.familyCount + 1))}
                className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">+</button>
              {form.familyCount > 0 && (
                <span className="text-sm text-muted-foreground ml-2">= ${familyPrice.toFixed(2)}</span>
              )}
            </div>
          </Field>
        </SectionCard>

        {/* ── Opt-In & Total ── */}
        <SectionCard title="Opt-In Mailing List">
          <label className="flex items-center gap-3 cursor-pointer group">
            {/* Hidden native checkbox for accessibility */}
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={form.optInMailing} 
              onChange={() => set("optInMailing", !form.optInMailing)} 
            />

            {/* Custom Styled Box */}
            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all
              ${form.optInMailing 
                ? "bg-[#2c3e50] border-[#2c3e50]" 
                : "bg-white border-gray-400 group-hover:border-[#2c3e50]"}`}
            >
              {form.optInMailing && (
                <Check size={14} className="text-white" strokeWidth={3} />
              )}
            </div>
            
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#2c3e50] transition-colors">
              ABC Club Members & Public Subscribers
            </span>
          </label>
            
          <div className="mt-6 p-4 rounded-sm border border-gray-200 bg-[#f8f9fa]">
            <p className="text-xl font-bold text-[#2c3e50]">
              Total: <span className="text-[#d9534f]">${total.toFixed(2)}</span>
            </p>
          </div>
        </SectionCard>

        {/* ── Auto Renewal ── */}
        <SectionCard title="Would you like to set up automatic renewals?">
          <label className="flex items-center gap-3 cursor-pointer group">
            {/* Hidden Native Checkbox for Accessibility */}
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={form.autoRenew} 
              onChange={() => set("autoRenew", !form.autoRenew)} 
            />
        
            {/* Custom Styled Box */}
            <div 
              className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all
                ${form.autoRenew 
                  ? "bg-[#2c3e50] border-[#2c3e50]" 
                  : "bg-white border-gray-400 group-hover:border-[#2c3e50]"}`}
            >
              {form.autoRenew && (
                <Check size={14} className="text-white" strokeWidth={3} />
              )}
            </div>
            
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#2c3e50] transition-colors">
              Yes, renew at $50.00 per Year
            </span>
          </label>
        </SectionCard>

        {/* ── Payment Method ── */}
        <SectionCard title="Choose Your Payment Method">
          <div className="flex gap-4">
            {[
              { v: "credit-card", l: "Pay by Credit Card", icon: <CreditCard size={18} /> },
              { v: "check", l: "Pay by Check", icon: <Mail size={18} /> },
            ].map(o => (
              <label key={o.v}
                className={`flex-1 flex items-center justify-center gap-2 rounded-md border px-4 py-3 cursor-pointer transition-all
                  ${form.paymentMethod === o.v
                    ? "border-primary bg-accent text-accent-foreground font-medium"
                    : "border-border text-muted-foreground hover:border-primary/50"}`}>
                <input type="radio" name="paymentMethod" value={o.v} checked={form.paymentMethod === o.v}
                  onChange={e => set("paymentMethod", e.target.value)} className="sr-only" />
                {o.icon}
                {o.l}
              </label>
            ))}
          </div>
        </SectionCard>

        {/* ── Billing Address ── */}
        <SectionCard title="Billing Address">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="First Name" required>
              <input className={inputClass} value={form.billingFirstName} onChange={e => set("billingFirstName", e.target.value)} required />
            </Field>
            <Field label="Last Name" required>
              <input className={inputClass} value={form.billingLastName} onChange={e => set("billingLastName", e.target.value)} required />
            </Field>
          </div>
          <Field label="Address 1" required>
            <input className={inputClass} value={form.billingAddress1} onChange={e => set("billingAddress1", e.target.value)} required />
          </Field>
          <Field label="Address 2">
            <input className={inputClass} value={form.billingAddress2} onChange={e => set("billingAddress2", e.target.value)} />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="City" required>
              <input className={inputClass} value={form.billingCity} onChange={e => set("billingCity", e.target.value)} required />
            </Field>
            <Field label="State" required>
              <div className="relative">
                <select className={selectClass} value={form.billingState} onChange={e => set("billingState", e.target.value)} required>
                  <option value="">Select...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </Field>
            <Field label="Postal Code" required>
              <input className={inputClass} value={form.billingZip} onChange={e => set("billingZip", e.target.value)} required />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Country" required>
              <div className="relative">
                <select className={selectClass} value={form.billingCountry} onChange={e => set("billingCountry", e.target.value)} required>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </Field>
            <Field label="Phone" required>
              <input className={inputClass} type="tel" value={form.billingPhone} onChange={e => set("billingPhone", e.target.value)} required />
            </Field>
          </div>
        </SectionCard>

        {/* ── Mailing Address ── */}
        <SectionCard title="Mailing Address">
          <label className="flex items-center gap-3 cursor-pointer mb-2">
            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors
              ${form.copyBilling ? "bg-primary border-primary" : "border-input"}`}
              onClick={copyBillingToMailing}>
              {form.copyBilling && <Check size={14} className="text-primary-foreground" />}
            </div>
            <span className="text-sm text-foreground">Copy the billing address used above</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="First Name" required>
              <input className={inputClass} value={form.mailingFirstName} onChange={e => set("mailingFirstName", e.target.value)} required />
            </Field>
            <Field label="Last Name" required>
              <input className={inputClass} value={form.mailingLastName} onChange={e => set("mailingLastName", e.target.value)} required />
            </Field>
          </div>
          <Field label="Address 1" required>
            <input className={inputClass} value={form.mailingAddress1} onChange={e => set("mailingAddress1", e.target.value)} required />
          </Field>
          <Field label="Address 2">
            <input className={inputClass} value={form.mailingAddress2} onChange={e => set("mailingAddress2", e.target.value)} />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="City" required>
              <input className={inputClass} value={form.mailingCity} onChange={e => set("mailingCity", e.target.value)} required />
            </Field>
            <Field label="State" required>
              <div className="relative">
                <select className={selectClass} value={form.mailingState} onChange={e => set("mailingState", e.target.value)} required>
                  <option value="">Select...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </Field>
            <Field label="Postal Code" required>
              <input className={inputClass} value={form.mailingZip} onChange={e => set("mailingZip", e.target.value)} required />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Country" required>
              <div className="relative">
                <select className={selectClass} value={form.mailingCountry} onChange={e => set("mailingCountry", e.target.value)} required>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </Field>
            <Field label="Phone" required>
              <input className={inputClass} type="tel" value={form.mailingPhone} onChange={e => set("mailingPhone", e.target.value)} required />
            </Field>
          </div>
        </SectionCard>

        {/* ── Payment Information (Credit Card) ── */}
        {form.paymentMethod === "credit-card" && (
          <SectionCard title="Payment Information">
            <Field label="Card Number" required>
              <input className={inputClass} placeholder="0000 0000 0000 0000"
                value={form.cardNumber} onChange={e => set("cardNumber", e.target.value)} required />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Expiration Date" required>
                <input className={inputClass} placeholder="MM/YY"
                  value={form.cardExpiry} onChange={e => set("cardExpiry", e.target.value)} required />
              </Field>
              <Field label="CVC" required>
                <input className={inputClass} placeholder="123"
                  value={form.cardCvc} onChange={e => set("cardCvc", e.target.value)} required />
              </Field>
            </div>
          </SectionCard>
        )}

        {/* ── Pay by Check ── */}
        {form.paymentMethod === "check" && (
          <SectionCard title="Pay by Check">
            <p className="text-sm text-foreground">Please make your check payable to:</p>
            <div className="p-4 rounded-md bg-muted text-sm space-y-1">
              <p className="font-semibold text-foreground">The American Brittany Club, Inc.</p>
              <p className="text-muted-foreground">Jacqui Campbell, Membership Chair</p>
              <p className="text-muted-foreground">The American Brittany Club</p>
              <p className="text-muted-foreground">PO Box 2525</p>
              <p className="text-muted-foreground">Woodinville, WA 98296</p>
            </div>
          </SectionCard>
        )}

        {/* ── Submit ── */}
        <div className="pt-2">
          <button 
            type="submit"
            disabled={submitted}
            className={`w-full py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition-all shadow-md 
              ${submitted 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#2c3e50] text-white hover:bg-[#1a252f] active:scale-[0.98] shadow-lg"
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  {/* Simple Loading Spinner */}
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                `Submit and Confirm — $${total.toFixed(2)}`
              )}
            </div>
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Directory Listing Opt-Out Available in the "Edit Your Profile" Area
          </p>
        </div>
        <img
          src={Warning}
          className="w-full h-full rounded-xl"
        />
      </form>
    </div>
  );
};

export default Form;
