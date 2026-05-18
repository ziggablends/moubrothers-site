import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Free Quote | Mou Brothers Property Care",
  description: "Request a free, no-obligation quote for lawn care and property maintenance services.",
};

export default function QuotePage() {
  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 slide-in-up">
            Get Your Free Quote Today
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 mb-2">
            Fast local response — usually same-day quotes
          </p>
          <p className="text-emerald-200 font-medium">
            No obligation. No hidden fees. Just honest pricing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quick Contact Options */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Three Quick Ways to Get Started
            </h2>

            {/* Phone */}
            <div className="rounded-2xl border-2 border-emerald-700 bg-white p-8 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📞</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-600 mb-4">
                    Fastest way to get your quote. We'll discuss your needs and give you a price same-day.
                  </p>
                  <a
                    href="tel:7786367048"
                    className="inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
                  >
                    Call 778-636-7048
                  </a>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💬</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Text Us</h3>
                  <p className="text-slate-600 mb-4">
                    Send a text to the same number. Include photos of your yard if possible.
                  </p>
                  <a
                    href="sms:7786367048"
                    className="inline-flex rounded-full border border-emerald-700 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    Text 778-636-7048
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">✉️</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-600 mb-4">
                    Detailed request? Email us with your property details and photos.
                  </p>
                  <a
                    href="mailto:info@moubrothers.com"
                    className="inline-flex rounded-full border border-emerald-700 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    Email Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Quote Form</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="q_name" className="block text-sm font-medium text-slate-900 mb-1">
                  Full Name
                </label>
                <input
                  id="q_name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="q_phone" className="block text-sm font-medium text-slate-900 mb-1">
                  Phone Number
                </label>
                <input
                  id="q_phone"
                  type="tel"
                  placeholder="(778) 636-7048"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="q_email" className="block text-sm font-medium text-slate-900 mb-1">
                  Email Address
                </label>
                <input
                  id="q_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="q_address" className="block text-sm font-medium text-slate-900 mb-1">
                  Service Address
                </label>
                <input
                  id="q_address"
                  type="text"
                  placeholder="Your address in Coquitlam"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="q_service" className="block text-sm font-medium text-slate-900 mb-1">
                  Service Needed
                </label>
                <select
                  id="q_service"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                >
                  <option value="">Select a service...</option>
                  <option value="mowing">Lawn Mowing</option>
                  <option value="edging">Edging & Trimming</option>
                  <option value="hedge">Hedge Pruning</option>
                  <option value="weed">Weed Control</option>
                  <option value="aeration">Aeration</option>
                  <option value="leaf">Leaf Removal</option>
                  <option value="dethatching">Dethatching</option>
                  <option value="cleanup">Yard Cleanup</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="q_lawn_size" className="block text-sm font-medium text-slate-900 mb-1">
                  Approximate Lawn Size
                </label>
                <select
                  id="q_lawn_size"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                >
                  <option value="">Select size...</option>
                  <option value="small">Small (up to 2,000 sq ft)</option>
                  <option value="medium">Medium (2,000-4,000 sq ft)</option>
                  <option value="large">Large (4,000+ sq ft)</option>
                </select>
              </div>

              <div>
                <label htmlFor="q_message" className="block text-sm font-medium text-slate-900 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="q_message"
                  rows={3}
                  placeholder="Describe your project or any special requests..."
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none"
              >
                Get Free Quote
              </button>

              <p className="text-xs text-slate-600 text-center">
                We'll contact you within 24 hours with your estimate.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-emerald-50 border-t border-b border-emerald-200 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Why get a quote from us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "⚡", title: "Fast Response", desc: "Usually same-day quotes" },
              {
                emoji: "✓",
                title: "No Obligation",
                desc: "Free estimate with no hidden fees",
              },
              {
                emoji: "💰",
                title: "Honest Pricing",
                desc: "Clear, upfront costs from local pros",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-4xl mb-2">{item.emoji}</p>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Don't wait — contact us today
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            The sooner you reach out, the sooner we can help transform your yard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7786367048"
              className="inline-flex rounded-full bg-emerald-700 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-800"
            >
              Call 778-636-7048
            </a>
            <Link
              href="/contact"
              className="inline-flex rounded-full border-2 border-emerald-700 px-8 py-3 text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
