import React from "react";

/**
 * SEO Optimization Plans Component
 * - Same teal glow design & card structure as previous pricing sections
 * - 2 SEO Plans: Starter & Pro
 * - Ready to plug into your React + Tailwind website
 */

/* Reusable Check Icon */
const CheckIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path
      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
      fill={color}
    />
  </svg>
);


/* Plan Card Component */
const SEOPlanCard = ({ plan, bg, text, recommended }) => {
  const checkColor = text === "text-white" ? "#ffffff" : "#67D1C6"; // White card -> teal, Pro card -> white

  return (
    <div className={`w-72 ${bg} ${text} relative text-center border border-gray-200 p-6 pb-16 rounded-lg`}>
      {recommended && (
        <span className="absolute top-[-10px] left-3.5 px-3 py-1 text-sm bg-[#49dccd] rounded-full">
          Recommended
        </span>
      )}
      <p className="font-semibold">{plan.title}</p>
      <h2 className="text-2xl font-bold mt-2">{plan.price}</h2>
      <ul className="mt-6 text-sm text-left space-y-2">
        {plan.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1">
              <CheckIcon color={checkColor} />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


/* SEO Plans Component */
export default function Seo() {
  const plans = [
    {
      title: "Starter SEO",
      price: "₹2,999 / Month",
      items: [
        "SEO Audit (Technical + On-Page)",
        "5 Keyword Optimization",
        "Meta Tags (Title & Description)",
        "Image Alt Tag Optimization",
        "Google Search Console Setup",
        "5 Backlinks Creation (Monthly)",
        "Monthly Performance Report",
      ],
    },
    {
      title: "Pro SEO",
      price: "₹4,999 / Month",
      items: [
        "Complete SEO Audit (Technical + On-Page + Off-Page)",
        "15+ Keyword Optimization",
        "Advanced Schema Markup",
        "High Authority Backlinks (15+/Month)",
        "Content Optimization (Blogs & Pages)",
        "Local SEO + Google Business Profile Ranking",
        "Competitor Analysis & Strategy",
        "Weekly Performance Report & Consulting",
      ],
    },
  ];

  return (
    <div className="h-auto min-h-screen w-full relative py-16">
      {/* Background with teal glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold big">SEO Optimization Plans</h1>
          <p className="text-sm text-gray-700 mt-2">
            Improve your ranking & grow traffic with tailored SEO services.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <SEOPlanCard plan={plans[0]} bg="bg-white" text="text-gray-800" />
          <SEOPlanCard plan={plans[1]} bg="bg-[#67D1C6]" text="text-white" recommended />
        </div>

        {/* Terms */}
       
      </div>
    </div>
  );
}
