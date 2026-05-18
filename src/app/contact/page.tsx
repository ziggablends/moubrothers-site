import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Mou Brothers Property Care",
  description: "Get in touch with Mou Brothers for lawn care and property maintenance in Coquitlam.",
};

export default function ContactPage() {
  return (
    <div className="animate-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Have questions? Ready to book a service? Contact us today — we usually respond within hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📞</span> Phone
                  </h3>
                  <a
                    href="tel:7786367048"
                    className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    778-636-7048
                  </a>
                  <p className="text-sm text-slate-600 mt-2">
                    Call or text anytime. Usually respond same-day.
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✉️</span> Email
                  </h3>
                  <a
                    href="mailto:info@moubrothers.com"
                    className="text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    info@moubrothers.com
                  </a>
                  <p className="text-sm text-slate-600 mt-2">
                    Email us anytime. We'll get back to you promptly.
                  </p>
                </div>

                {/* Service Area */}
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Service Area
                  </h3>
                  <p className="text-slate-700 font-medium">
                    Coquitlam & Surrounding Areas
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    We primarily serve Coquitlam and nearby communities in Metro Vancouver.
                  </p>
                </div>

                {/* Quick CTA */}
                <Link
                  href="/quote"
                  className="block rounded-xl bg-emerald-700 text-white p-6 text-center font-semibold hover:bg-emerald-800 transition"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(778) 636-7048"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-900 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your yard and what services you need..."
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none"
              >
                Send Message
              </button>

              <p className="text-xs text-slate-600 text-center mt-4">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly do you respond to inquiries?",
                a: "We typically respond to calls, texts, and emails within a few hours during business hours. Most quote requests are completed same-day.",
              },
              {
                q: "Do you service areas outside of Coquitlam?",
                a: "Yes, we serve Coquitlam and surrounding areas. Contact us to see if your location is in our service area.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, e-transfer, and credit cards. Payment is typically due upon completion of service.",
              },
              {
                q: "Can I reschedule or cancel my appointment?",
                a: "Yes, just call or email us as soon as possible. We're flexible and understand that plans change.",
              },
              {
                q: "Do you offer seasonal services only or year-round?",
                a: "We offer both! Choose weekly/bi-weekly recurring service or schedule specific seasonal jobs as needed.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition"
              >
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between">
                  {item.q}
                  <span className="ml-2 text-emerald-700">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
