import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Mou Brothers Property Care",
  description: "Honest, transparent pricing for lawn care and property maintenance in Coquitlam.",
};

export default function PricingPage() {
  return (
    <div className="animate-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Honest, competitive rates with no hidden fees. Free estimates on all services.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Lawn Mowing */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🪴</span> Lawn Mowing
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Small lawn (up to 2,000 sq ft)</span>
                <span className="text-xl font-semibold text-emerald-700">Starting at $39</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Medium lawn (2,000-4,000 sq ft)</span>
                <span className="text-xl font-semibold text-emerald-700">Starting at $59</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Large lawn (4,000+ sq ft)</span>
                <span className="text-xl font-semibold text-emerald-700">Starting at $89</span>
              </div>
            </div>
          </div>

          {/* Edging */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">✂️</span> Edging & Trimming
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Small property</span>
                <span className="text-lg font-semibold text-emerald-700">$5–$10</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Medium property</span>
                <span className="text-lg font-semibold text-emerald-700">$15–$20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Large property</span>
                <span className="text-lg font-semibold text-emerald-700">$35–$60+</span>
              </div>
            </div>
          </div>

          {/* Aeration */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">⚙️</span> Aeration
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Small lawn</span>
                <span className="text-xl font-semibold text-emerald-700">$59</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-600">Medium lawn</span>
                <span className="text-xl font-semibold text-emerald-700">$99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Large lawn</span>
                <span className="text-xl font-semibold text-emerald-700">$159</span>
              </div>
            </div>
          </div>

          {/* Variable Services */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💬</span> Variable Services
            </h3>
            <p className="text-slate-700 mb-4">
              The following services are priced based on workload and complexity:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Weed control</strong> — Varies by area size and infestation</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Hedge pruning</strong> — Based on hedge size and condition</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Leaf removal</strong> — Based on volume and complexity</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Dethatching</strong> — Quote after lawn inspection</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Yard cleanup</strong> — Custom quote based on scope</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Notes */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing Notes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            <div>
              <p className="font-semibold text-slate-900 mb-2">✓ Free Estimates</p>
              <p>We provide free estimates for all services. No obligation.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">✓ Price Variations</p>
              <p>Pricing may vary based on lawn condition, size, complexity, and travel time.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">✓ Flexible Options</p>
              <p>Customers may choose flat-rate or hourly pricing depending on the job and negotiation.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">✓ Recurring Discounts</p>
              <p>Ask about discounts for weekly or bi-weekly recurring service.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do you offer discounts for regular service?",
                a: "Yes! We offer discounted rates for recurring weekly or bi-weekly mowing and maintenance.",
              },
              {
                q: "How are estimates done?",
                a: "We visit your property, assess the work needed, and provide a free, detailed estimate with no obligation.",
              },
              {
                q: "Do you accept payment plans?",
                a: "Payment is typically due upon completion. For larger projects, we can discuss arrangements.",
              },
              {
                q: "What if my lawn needs more work than expected?",
                a: "We'll always contact you first if additional work is needed beyond the original estimate.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-emerald-600 pl-4 py-2">
                <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-2xl bg-emerald-700 text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get a Free Quote Today
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Contact us for a free, no-obligation estimate on any service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 transition hover:bg-slate-100"
            >
              Request Quote
            </Link>
            <a
              href="tel:7786367048"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-emerald-700"
            >
              Call 778-636-7048
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
