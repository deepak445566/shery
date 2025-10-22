import React from "react";

import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <section className="w-full py-10 lg:mt-20 mt-10 " id="project">
      <h1 className="text-4xl lg:text-6xl mont ml-6 lg:ml-25 big">SERVICES</h1>

      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 alan">
        <ProjectCards
          title="Website Development"
          subtitle="Web Design"
          image="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          iconColor="#76D6CB"
          Color="#FFFFFF"
          TextColor="#000000"
          ParaColor="#000000"
          path="/front" // ✅ navigate on click
        />

        <ProjectCards
          title="Graphic Designing"
          subtitle="Designing"
          image="./graph.avif"
          iconColor="#FFFFFF"
          Color="#76D6CB"
          TextColor="#FFFFFF"
          ParaColor="#FFFFFF"
          path="/Digit" // ✅ navigate on click
        />

        <ProjectCards
          title="Social Media Handleing"
          subtitle="Media"
          image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
          iconColor="#76D6CB"
          Color="#FFFFFF"
          TextColor="#000000"
          ParaColor="#000000"
          path="/Social" // ✅ navigate on click
        />
          <ProjectCards
          title="SEO Optimization"
          subtitle="SEO"
          image="./seo.avif"
          iconColor="#76D6CB"
          Color="#FFFFFF"
          TextColor="#000000"
          ParaColor="#000000"
          path="/Seo" // ✅ navigate on click
        />
      </div>
    </section>
  );
}
