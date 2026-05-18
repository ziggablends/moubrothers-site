export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Mou Brothers Property Care
            </h3>
            <p className="text-sm text-slate-400 leading-7">
              Honest, hardworking local lawn care and property maintenance in Coquitlam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-400 hover:text-emerald-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-400 hover:text-emerald-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-slate-400 hover:text-emerald-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-slate-400 hover:text-emerald-400 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Lawn Mowing</li>
              <li>Edging & Trimming</li>
              <li>Hedge Pruning</li>
              <li>Weed Control</li>
              <li>Yard Cleanup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                <span className="font-medium text-white">Phone:</span>
                <br />
                <a
                  href="tel:7786367048"
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  778-636-7048
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Email:</span>
                <br />
                <a
                  href="mailto:info@moubrothers.com"
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  info@moubrothers.com
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Service Area:</span>
                <br />
                Coquitlam & Surrounding Areas
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>&copy; {currentYear} Mou Brothers Property Care. All rights reserved.</p>
          <p>Honest lawn care from two local brothers in Coquitlam.</p>
        </div>
      </div>
    </footer>
  );
}
