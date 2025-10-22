import React from "react";

/**
 * Graphic Design Quotation Component
 * - Keeps the same teal-glow design as your pricing sections
 * - Shows only 2 plans: Starter & Pro (content in Hindi as requested)
 * - Ready to copy-paste into your React + Tailwind project
 */

/* Reusable Check Icon */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path
      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
      fill="currentColor"
    />
  </svg>
);

/* Single Plan Card */
const QuotationCard = ({ plan, bg, text, recommended }) => (
  <div className={`w-72 ${bg} ${text} relative text-center border border-gray-200 p-6 pb-16 rounded-lg`}>
    {recommended && (
      <span className="absolute top-[-10px] left-3.5 px-3 py-1 text-sm bg-[#49dccd] rounded-full">
        Recommended
      </span>
    )}
    <p className="font-semibold">{plan.title}</p>
    <h2 className="text-2xl font-bold mt-2">{plan.price}</h2>
    <ul className="mt-6 text-sm text-left list-none space-y-2">
      {plan.items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 text-[#67D1C6]">
            <CheckIcon />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>

  </div>
);

/* Main Quotation Component */
export default function Digit() {
  const plans = [
    {
      title: "Starter Plan",
      price: "₹2,499",
      items: [
        "5 Social Media Posts (static)",
        "1 Cover / Banner (Facebook/YouTube/LinkedIn)",
        "1 Logo concept (simple)",
        "2 Revised",
        "Delivery: 3-5 business days",
        "Files: PNG / JPEG (print-ready on request)",
      ],
    },
    {
      title: "Pro Plan",
      price: "₹4,999",
      items: [
        "15 Social Media Posts (static + simple carousel)",
        "2 Cover / Banner (platform-specific)",
        "3 Logo concepts + source file (vector .svg/.ai)",
        "1 Branding board (color palette + fonts)",
        "3 रिविज़न तक शामिल",
        "Social media ready export (1080×1080, 1080×1350 etc.)",
        "Delivery: 5-8 business days",
      ],
    },
  ];

  return (
    <div className="h-auto min-h-screen w-full relative py-16">
      {/* Teal Glow Background (same as your other sections) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)",
          backgroundSize: "100% 100%",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold big">Graphic Design Quotation</h1>
          <p className="text-sm text-gray-700 mt-2">Two simple plans — same clean design. Choose as per requirement.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <QuotationCard plan={plans[0]} bg="bg-white" text="text-gray-800" />
          <QuotationCard plan={plans[1]} bg="bg-[#67D1C6]" text="text-white" recommended />
        </div>

        {/* Footer / Terms (compact) */}
        
      </div>
    </div>
  );
}
