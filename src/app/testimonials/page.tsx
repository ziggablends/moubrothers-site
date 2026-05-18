import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Mou Brothers Property Care",
  description: "See what our happy customers say about our lawn care and property maintenance services.",
};

const testimonials = [
  {
    name: "Sophie R.",
    location: "Coquitlam",
    stars: 5,
    quote:
      "They showed up on time, the work was done perfectly, and my yard looks amazing. I'll definitely be calling them back for regular service. Great price too!",
    service: "Weekly Mowing",
  },
  {
    name: "Jason M.",
    location: "Coquitlam",
    stars: 5,
    quote:
      "Friendly, professional, and they took care of our hedge trimming exactly how we wanted. No mess left behind. Highly recommend!",
    service: "Hedge Pruning",
  },
  {
    name: "Priya K.",
    location: "Port Coquitlam",
    stars: 5,
    quote:
      "Fast response time and real attention to detail. The lawn looks so much healthier after their aeration and weed control service.",
    service: "Aeration & Weed Control",
  },
  {
    name: "David L.",
    location: "Coquitlam",
    stars: 5,
    quote:
      "Two brothers who actually care about their work. They're honest about pricing and the results speak for themselves. Worth every dollar.",
    service: "Full Yard Maintenance",
  },
  {
    name: "Maria T.",
    location: "Burke Mountain",
    stars: 5,
    quote:
      "I've tried several lawn care services before, and these guys are the best. Professional, reliable, and they treat your property with respect.",
    service: "Bi-weekly Mowing",
  },
];

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < stars ? "text-yellow-400" : "text-slate-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="animate-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Real reviews from happy homeowners in Coquitlam and the surrounding area.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <StarRating stars={testimonial.stars} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.location}</p>
                <p className="text-xs text-emerald-600 font-medium mt-2">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "5★", label: "Average Rating" },
            { number: "5+ yrs", label: "In Business" },
          ].map((stat, idx) => (
            <div key={idx} className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
              <p className="text-4xl font-bold text-emerald-700 mb-2">{stat.number}</p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why People Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "✓",
                title: "Local & Reliable",
                desc: "We're family-run and treat every customer like neighbors.",
              },
              {
                icon: "✓",
                title: "Fast Response",
                desc: "We get back to you quickly and usually provide same-day quotes.",
              },
              {
                icon: "✓",
                title: "Honest Pricing",
                desc: "No hidden fees, no surprises. Clear estimates upfront.",
              },
              {
                icon: "✓",
                title: "Quality Work",
                desc: "We take pride in every job and it shows in the results.",
              },
              {
                icon: "✓",
                title: "Free Estimates",
                desc: "No obligation. Get a clear idea of what your service will cost.",
              },
              {
                icon: "✓",
                title: "Flexible Service",
                desc: "One-time, weekly, bi-weekly, or seasonal services available.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-2xl font-bold text-emerald-700 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-2xl bg-emerald-700 text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join our satisfied customers
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Get your free quote today and see why homeowners love Mou Brothers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 transition hover:bg-slate-100"
            >
              Get Free Quote
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
