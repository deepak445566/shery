import React from "react";

// ✅ Reusable Check Icon
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
      fill="currentColor"
    />
  </svg>
);

// ✅ Pricing Card Component
const PricingCard = ({ title, price, popular, bg, text, features }) => (
  <div className={`w-80 lg:w-90 ${bg} ${text} relative text-center border p-6 pb-16 rounded-lg`}>
    {popular && (
      <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#49dccd] rounded-full">
        Most Popular
      </p>
    )}
    <p className="font-semibold pt-2">{title}</p>
    <h1 className="text-3xl font-semibold">{price}</h1>
    <ul className="list-none text-sm mt-6 space-y-1">
      {features.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckIcon />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

function Front() {
  // ✅ Pricing Plans Data
  const plans = [
    {
      title: "Basic Website",
      price: "₹5,999",
      bg: "bg-white",
      text: "text-gray-800/80",
      features: [
        "5 Pages Website",
        "1 Year Free Domain (.com .in .org)",
        "1 Year Free Cloud Hosting",
        "Dynamic Website (Premium Design)",
       
        "Lifetime 24/7 Free Hosting Support",
       
        "Free SSL Certificates",
        "5 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
      
        "Social Media Integration",
      
       
        "Inquiry Form",
        "1 Year Free Technical Support",
        "Annual Hosting Renewal ₹4000",
      ],
    },
    {
      title: "Premium (Pro)",
      price: "₹12,999",
      bg: "bg-[#67D1C6]",
      text: "text-white",
      popular: true,
      features: [
        "12 Pages Website",
        "1 Year Free Domain (.com .in .org)",
        "1 Year Free Cloud Hosting",
        "Dynamic Website (Premium Design)",
        "Admin Access",
     
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
     
        "Payment Gateway Integration",
        "Social Media Integration",
     
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year Free Technical Support",
        "Annual Hosting Renewal ₹4000",
      ],
    },
    {
      title: "Custom Plan",
      price: "₹??,???",
      bg: "bg-white",
      text: "text-gray-800/80",
      features: [
        "Pages: According to Requirement",
        "1 Year Free Domain (.com .in .org)",
   
        "Dynamic Website",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
     
        "Payment Gateway Integration",
        "Social Media Integration",
    
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year 24/7 Free Support",
        "Annual Renewal ₹4000",
      ],
    },
  ];

  return (
    <div className="h-[100vh] w-full relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 py-1">
        <h1 className="text-6xl big text-center mt-15">
          WEBSITE DEVELOPMENT PRICING
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Front;
