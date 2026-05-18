import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Mou Brothers Property Care",
  description: "Professional lawn care and property maintenance services in Coquitlam.",
};

const services = [
  {
    name: "Lawn Mowing",
    icon: "🪴",
    description: "Regular lawn mowing with precision edging. Weekly or bi-weekly schedules available.",
  },
  {
    name: "Edging & Trimming",
    icon: "✂️",
    description: "Clean edges along driveways and walkways. String trimming for neat, polished results.",
  },
  {
    name: "Hedge Pruning",
    icon: "🌲",
    description: "Professional hedge shaping and pruning. Keeps hedges healthy and attractive.",
  },
  {
    name: "Weed Control",
    icon: "🚫",
    description: "Targeted weed removal and control strategies. Keeps your beds and lawn weed-free.",
  },
  {
    name: "Aeration",
    icon: "⚙️",
    description: "Lawn aeration to improve soil health and grass growth. Spring and fall availability.",
  },
  {
    name: "Leaf Removal",
    icon: "🍂",
    description: "Seasonal leaf cleanup and removal. Keeps your yard looking tidy year-round.",
  },
  {
    name: "Dethatching",
    icon: "🧹",
    description: "Remove built-up thatch from your lawn. Improves water and nutrient absorption.",
  },
  {
    name: "General Yard Cleanup",
    icon: "🧺",
    description: "Spring cleaning, fall cleanup, and general yard maintenance services.",
  },
];

export default function ServicesPage() {
  return (
    <div className="animate-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Complete lawn care and property maintenance services for Coquitlam homeowners. Professional, honest, and reliable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Section */}
      <section className="bg-slate-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">How We Work</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "Contact us via phone or email. We'll discuss your yard's needs and give you a free estimate.",
              },
              {
                step: "2",
                title: "Professional Service",
                desc: "Our experienced crew arrives on schedule, performs quality work, and leaves your property looking great.",
              },
              {
                step: "3",
                title: "Ongoing Care",
                desc: "Set up recurring service (weekly, bi-weekly, or as-needed) to keep your yard maintained year-round.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
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
            Ready to get started?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Contact us today for a free quote on any of our services.
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
