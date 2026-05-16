import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mou Brothers Property Care",
  description:
    "Honest, hardworking local property care in Coquitlam — mowing, trimming, pruning, cleanup, aeration, and weed control.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
              Local family-run property care in Coquitlam
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-sm text-slate-600">Fast response. Honest pricing.</p>
            <a
              href="tel:7786367048"
              className="font-semibold text-slate-900 underline underline-offset-4"
            >
              778-636-7048
            </a>
          </div>
        </header>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Mou Brothers Property Care</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Honest yard care for Coquitlam homes and families.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
                We keep lawns tidy, hedges neat, and properties looking cared for with dependable service from a local family team.
                No pressure — just hardworking care when you need it.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get Free Quote
              </a>
              <a
                href="tel:7786367048"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Call 778-636-7048
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6">
              <div className="rounded-3xl bg-emerald-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Trusted neighborhood care</p>
                <p className="mt-4 text-slate-700">Local crews, fair estimates, and the kind of attention your yard deserves.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Mowing",
                  "Trimming",
                  "Hedge pruning",
                  "Cleanup",
                  "Aeration",
                  "Weed control",
                ].map((service) => (
                  <div key={service} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">A family team you can count on.</h2>
            <p className="mt-5 text-slate-700 leading-8">
              We are a family-run property care service rooted in Coquitlam. Every job is handled with pride, clear communication, and the kind of hard work that comes from doing this locally for our neighbors.
            </p>
            <ul className="mt-8 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Fast response and dependable scheduling for busy homeowners.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Family business values: honesty, respect, and work done right.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Careful attention to lawns, edges, hedges and cleanup detail.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-lg sm:p-10">
            <h3 className="text-xl font-semibold">Services designed for your property.</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Simple, honest pricing and flexible visits. We focus on the tasks that keep your yard healthy and presentable all season long.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="font-semibold">Weekly or bi-weekly mowing</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="font-semibold">Professional hedge shaping</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="font-semibold">Seasonal cleanup and bed care</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="font-semibold">Aeration and weed control support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-950">What our neighbors say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sophie R.",
                role: "Coquitlam homeowner",
                quote:
                  "They showed up on time, left the yard spotless, and were easy to work with. I trust them with our weekly mowing.",
              },
              {
                name: "Jason M.",
                role: "Family property",
                quote:
                  "Friendly service and a great price. They took care of the hedge trimming and cleanup exactly how I wanted.",
              },
              {
                name: "Priya K.",
                role: "Busy professional",
                quote:
                  "Fast response and real attention to detail. The lawn looks much healthier after their aeration and weed control visit.",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-700 leading-7">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] bg-emerald-900 px-6 py-10 text-white sm:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Ready when you are</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Call or message us for a free estimate today.
            </h2>
            <p className="mt-4 text-slate-100 sm:text-lg">
              Honest property care from a local Coquitlam family business. Fast replies and dependable scheduling.
            </p>
            <a
              href="tel:7786367048"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-950 shadow-lg transition hover:bg-slate-100"
            >
              778-636-7048
            </a>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Let’s schedule your next visit.</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Fill out the form and we’ll get back to you quickly with a clear estimate for your yard care needs.
              </p>
            </div>
            <form
              action="mailto:info@moubrothers.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
