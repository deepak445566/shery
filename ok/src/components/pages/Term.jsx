import React from "react";

// Craftoweb — Terms & Conditions React component (Tailwind CSS)
// Save as: src/components/TermsPage.jsx
// Usage: import TermsPage from './components/TermsPage'; then render <TermsPage /> inside your app.
// Customize the placeholders (country, city, email, phone) as needed.

export default function Term() {
  const lastUpdated = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY format

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-slate-500">Craftoweb — Website Development · Digital Marketing · SEO · Graphic Designing</p>
          <p className="mt-1 text-xs text-slate-400">Last Updated: {lastUpdated}</p>
        </header>

        <section className="space-y-6 text-sm leading-7">
          <article>
            <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-2">By using Craftoweb's website or any of our services (Website Development, Digital Marketing, SEO, Graphic Designing), you confirm that you are at least 18 years old and agree to be bound by these Terms &amp; Conditions and our Privacy Policy.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">2. Services</h2>
            <p className="mt-2">We provide the following services: <strong>Website Development</strong> (business sites, portfolios, e‑commerce), <strong>Digital Marketing</strong> (social campaigns, ads, lead generation), <strong>SEO</strong> (on‑page, off‑page, technical), and <strong>Graphic Designing</strong> (logos, branding, creatives).</p>
            <p className="mt-2">Craftoweb reserves the right to modify, update or discontinue any service at any time without prior notice.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">3. Client Responsibilities</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Provide accurate project requirements, content and branding materials.</li>
              <li>Respond to queries, approvals and feedback promptly to avoid delays.</li>
              <li>Ensure legal rights to any images, logos or content provided to Craftoweb.</li>
              <li>Make timely payments as per the agreed invoice schedule.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold">4. Payments &amp; Refunds</h2>
            <p className="mt-2">Work will commence only after an agreed advance payment. Final deliverables are released after full payment. Unless explicitly stated in writing, payments are non‑refundable once work has started or deliverables have been shared.</p>
            <p className="mt-2">Any additional work or revisions outside the agreed scope will be billed separately and invoiced to the client.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">5. Project Timeline &amp; Delivery</h2>
            <p className="mt-2">Project timelines are estimated and agreed upon before starting. Delays caused by the client (late feedback, missing content, domain/hosting issues) may extend deadlines. Craftoweb is not responsible for delays caused by third‑party platforms or providers.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">6. Revisions &amp; Modifications</h2>
            <p className="mt-2">Each project includes a limited number of revision rounds as specified in the project proposal. Major changes or new features not covered in the original scope will incur additional charges, and timelines will be adjusted accordingly.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">7. Ownership &amp; Intellectual Property</h2>
            <p className="mt-2">All final deliverables (design files, source code, assets) will be transferred to the client after full payment. Until full payment is received, Craftoweb retains ownership of the delivered work and associated intellectual property rights.</p>
            <p className="mt-2">Craftoweb may showcase completed projects in our portfolio, case studies, and marketing materials unless the client requests confidentiality in writing prior to project start.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">8. Third‑Party Tools &amp; Services</h2>
            <p className="mt-2">We may integrate or use third‑party libraries, plugins, hosting providers, or APIs as part of our services. Craftoweb is not liable for downtime, changes, or additional fees imposed by those third parties. Costs for premium third‑party services (licenses, hosting, domains) are the responsibility of the client unless explicitly agreed otherwise.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">9. Confidentiality</h2>
            <p className="mt-2">We treat client information, strategies, and business data as confidential. Craftoweb will not disclose confidential client information publicly without written consent. Clients are expected to respect the confidentiality of Craftoweb's proposals, pricing, and internal processes.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">10. Limitation of Liability</h2>
            <p className="mt-2">To the maximum extent permitted by law, Craftoweb will not be liable for any indirect, incidental, consequential, or special damages (including loss of profits or data) arising from the use of our services. Client‑supplied content that causes legal disputes is the sole responsibility of the client.</p>
          </article>

          <article>
            <h2 className="text-lg font-semibold">11. Termination</h2>
            <p className="mt-2">Craftoweb may suspend or terminate services if the client fails to make payments, violates these Terms, or behaves unethically. Outstanding invoices and fees remain due upon termination. Termination does not remove the client's obligation to pay for work already completed.</p>
          </article>


          <article>
            <h2 className="text-lg font-semibold">13. Contact Information</h2>
            <p className="mt-2">If you have questions regarding these Terms, contact Craftoweb:</p>
            <ul className="mt-3 space-y-1">
              <li>📧 Email: <a href="mailto:hello@craftoweb.com" className="underline">helpcraftoweb12@gmail.com</a></li>
              <li>📞 Phone: <a href="tel:+919557888062" className="underline">+91 95578 88062</a> / <a href="tel:+917982474628" className="underline">+91 79824 74628</a></li>
              <li>🌐 Website: <a href="https://www.craftoweb.com" target="_blank" rel="noreferrer" className="underline">craftoweb.com</a></li>
            </ul>
          </article>

          <article>
            <p className="mt-4 text-xs text-slate-400">By using Craftoweb's services you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.</p>
          </article>
        </section>

       
      </div>
    </main>
  );
}
