import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Mou Brothers Property Care",
  description:
    "Reliable lawn care from two local brothers in Coquitlam. Free quotes, fast response, honest pricing.",
};

export default function HomePage() {
  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grass" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 15 Q 5 10 10 15 Q 15 10 20 15" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grass)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 slide-in-up">
            Reliable Lawn Care From Two Local Brothers
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Serving Coquitlam and surrounding areas with honest, hardworking property maintenance. Free estimates, fast response, fair pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-emerald-800 transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-emerald-800"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Why choose Mou Brothers?
            </h2>
            <div className="space-y-4">
              {[
                { icon: "👨‍👨‍👦", title: "Family-run business", desc: "Two brothers committed to quality work and honest service." },
                { icon: "⚡", title: "Fast response times", desc: "Quick scheduling and usually same-day quote responses." },
                { icon: "💰", title: "Free estimates", desc: "No hidden fees. Clear, upfront pricing for every job." },
                { icon: "📍", title: "Local to Coquitlam", desc: "We know the area and treat every customer like neighbors." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Contact</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-600 mb-2">Call or text us today:</p>
                <a
                  href="tel:7786367048"
                  className="inline-flex items-center gap-2 text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition"
                >
                  778-636-7048
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Email us:</p>
                <a
                  href="mailto:info@moubrothers.com"
                  className="text-emerald-700 hover:text-emerald-800 transition font-medium"
                >
                  info@moubrothers.com
                </a>
              </div>
              <Link
                href="/quote"
                className="block w-full rounded-full bg-emerald-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Services We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Lawn Mowing",
              "Edging & Trimming",
              "Hedge Pruning",
              "Weed Control",
              "Aeration",
              "Leaf Removal",
              "Dethatching",
              "Yard Cleanup",
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-800 p-4 text-center hover:bg-emerald-700 transition-all duration-300"
              >
                <p className="font-semibold text-sm">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-2xl bg-emerald-700 text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to transform your yard?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Call or request a free estimate today. Fast local response — usually same-day quotes.
          </p>
          <a
            href="tel:7786367048"
            className="inline-flex rounded-full bg-white px-8 py-3 text-lg font-semibold text-emerald-700 transition-all hover:bg-slate-100"
          >
            Call 778-636-7048
          </a>
        </div>
      </section>
    </div>
  );
}
