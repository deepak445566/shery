import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    feedback: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Send using Web3Forms (No Backend Needed)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "fc151ba9-859d-44b2-8096-a7fef79ecea5",
        ...formData
      }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("✅ Message Sent Successfully!");
      setFormData({
        name: "",
        phone: "",
        email:"",
        service: "",
        feedback: ""
      });
    } else {
      setStatus("❌ Failed to send message!");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <form onSubmit={handleSubmit}>
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, 
              rgba(20, 184, 166, 0.1) 0%, 
              rgba(20, 184, 166, 0.2) 25%, 
              rgba(20, 184, 166, 0.4) 50%, 
              rgba(20, 184, 166, 0.2) 75%, 
              rgba(20, 184, 166, 0.1) 100%)`,
          }}
        />

        {/* Success / Error Message */}
        {status && (
          <p className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur px-6 py-2 rounded-xl text-gray-800 font-medium shadow-lg z-50">
            {status}
          </p>
        )}

        {/* Floating Colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl w-full max-w-2xl p-8 space-y-6">

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-gray-800 mb-3">
                Let's Start a Conversation
              </h1>
              <p className="text-gray-600 text-lg">
                Share your vision and let's bring it to life together
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-4 py-3 text-gray-800"
                  placeholder="What should we call you?"
                  required
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-4 py-3 text-gray-800"
                  placeholder="Where can we reach you?"
                  required
                />
              </div>
              {/* email */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                 Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-4 py-3 text-gray-800"
                  placeholder="email ?"
                  required
                />
              </div>

              {/* Service */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-4 py-3 text-gray-800 cursor-pointer"
                  required
                >
                  <option value="">What are you looking for?</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              {/* Feedback */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Vision
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-4 py-3 text-gray-800"
                  placeholder="Tell us about your project ideas and goals..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-2xl"
              >
                Start Our Journey
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </form>

      {/* Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
