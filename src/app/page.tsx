'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  Scissors,
  Leaf,
  Trees,
  Droplet,
  Wind,
  MapPin,
  Phone,
  Mail,
  Star,
  Check,
  Menu,
  X,
  ChevronRight,
  Gift,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Animated counter component
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(() => {
    springValue.on('change', v => setDisplay(Math.round(v).toString()));
  }, [springValue]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [formError, setFormError] = useState('');

  // Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isQuoteOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isQuoteOpen]);

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.service) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    const subject = encodeURIComponent(`Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message || 'N/A'}`
    );
    window.open(`mailto:info@moubrothers.com?subject=${subject}&body=${body}`, '_blank');
    setIsQuoteOpen(false);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const services = [
    { icon: Scissors, title: 'Lawn Mowing', desc: 'Precise, consistent cuts that keep your lawn healthy and looking great. From $40.', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80' },
    { icon: Leaf, title: 'Edging', desc: 'Sharp, clean borders that give your property a polished, professional finish.', img: 'https://plus.unsplash.com/premium_photo-1677691714251-451b79d6de47?w=400&q=80' },
    { icon: Trees, title: 'Hedge Pruning', desc: 'Expert shaping and trimming to keep your hedges neat and healthy.', img: 'https://images.unsplash.com/photo-1667072927318-0aa05b0a010d?w=400&q=80' },
    { icon: Wind, title: 'Aeration', desc: 'Core aeration to improve drainage, reduce compaction, and promote root growth.', img: 'https://images.unsplash.com/photo-1588701047364-ebd987f3166d?w=400&q=80' },
    { icon: Droplet, title: 'Weed Control', desc: 'Targeted treatment to eliminate weeds and keep your lawn clean all season.', img: 'https://images.unsplash.com/photo-1599811720507-3754ff02cd0b?w=400&q=80' },
    { icon: Leaf, title: 'Dethatching', desc: 'Remove built-up thatch to let water and nutrients reach the roots.', img: 'https://images.unsplash.com/photo-1705250123707-554ff40ec5e3?w=400&q=80' },
    { icon: Wind, title: 'Leaf Removal', desc: 'Full fall cleanup to protect your lawn heading into the colder months.', img: 'https://images.unsplash.com/photo-1601690586711-6160688c4c2e?w=400&q=80' },
    { icon: Scissors, title: 'Yard Cleanup', desc: 'General tidying and maintenance to keep your whole property looking sharp.', img: 'https://images.unsplash.com/photo-1628340981113-fe1949fe5cc0?w=400&q=80' },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── STICKY CTA BAR ── */}
      <AnimatePresence>
        {showStickyBar && !isQuoteOpen && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-3 bg-green-600 text-white px-7 py-4 rounded-full font-bold text-base shadow-2xl shadow-green-300 hover:bg-green-700 hover:scale-105 transition-all"
            >
              <Gift size={18} />
              Get a Free Quote — No Obligation
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── QUOTE MODAL ── */}
      <AnimatePresence>
        {isQuoteOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsQuoteOpen(false)}
            />
            <motion.div
              className="relative z-10 bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setIsQuoteOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                <X size={22} />
              </button>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Get a Free Quote</h2>
                <p className="text-gray-500 text-sm">We will get back to you within 24 hours. No obligation.</p>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition bg-gray-50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition bg-gray-50"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition bg-gray-50"
                />
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full text-gray-900 focus:outline-none focus:border-green-500 transition bg-gray-50"
                >
                  <option value="" disabled>Select a Service *</option>
                  <option>Lawn Mowing</option>
                  <option>Edging</option>
                  <option>Hedge Pruning</option>
                  <option>Aeration</option>
                  <option>Weed Control</option>
                  <option>Dethatching</option>
                  <option>Leaf Removal</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Any additional details..."
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition bg-gray-50 resize-none"
                />
                {formError && (
                  <p className="text-red-500 text-sm font-medium">{formError}</p>
                )}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition"
                >
                  Send Quote Request
                </button>
                <p className="text-gray-400 text-xs text-center">
                  This will open your email app with your details pre-filled.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NAVBAR ── */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-green-700 tracking-tight">
            Mou Brothers <span className="text-gray-400 font-normal">Property Care</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'services', 'pricing', 'membership', 'contact'].map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => smoothScroll(e, id)}
                className="capitalize text-gray-600 hover:text-green-700 transition font-medium text-sm"
              >
                {id}
              </a>
            ))}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition text-sm"
            >
              Get Quote
            </button>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-4">
                {['home', 'services', 'pricing', 'contact'].map(id => (
                  <a key={id} href={`#${id}`} onClick={e => smoothScroll(e, id)}
                    className="block capitalize text-gray-700 hover:text-green-700 transition font-medium">
                    {id}
                  </a>
                ))}
                <button
                  onClick={() => { setIsQuoteOpen(true); setIsMobileMenuOpen(false); }}
                  className="block w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── HERO with PARALLAX ── */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y: heroY }}>
          {/* TODO: replace with real photo */}
          <Image
            src="https://images.unsplash.com/photo-1729058015948-592a8e4a1772?w=1920&q=85"
            alt="Beautiful lawn care"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div className="max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.div
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Serving Coquitlam & Surrounding Areas
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Honest Work.
              <br />
              <span className="text-green-600">Fair Prices.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Coquitlam's trusted lawn care team. We are 20% cheaper than competitors
              and back every job with a price match guarantee.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 hover:scale-105 transition transform shadow-lg shadow-green-200"
              >
                Get a Free Quote <ChevronRight size={20} />
              </button>
              <a
                href="tel:7786367048"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:border-green-600 hover:text-green-600 transition"
              >
                <Phone size={18} /> 778-636-7048
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {['5 Years Experience', '20% Below Market', 'Price Match Guarantee', 'Free Estimates'].map(badge => (
                <div key={badge} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <Check size={16} className="text-green-600" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS COUNTER STRIP ── */}
      <section className="bg-green-600 text-white py-14 px-4">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: 5, suffix: '+', label: 'Years Experience' },
            { value: 20, suffix: '%', label: 'Below Competitor Prices' },
            { value: 150, suffix: '+', label: 'Happy Customers' },
            { value: 100, suffix: '%', label: 'Satisfaction Guaranteed' },
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <p className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-green-100 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Professional property care tailored to your lawn, your schedule, and your budget.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-44 relative overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">No Surprises</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Clear, upfront pricing. No hidden fees. If you find a lower price anywhere, we will beat it.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Lawn Mowing',
                tiers: [
                  { label: 'Small Lawn', price: 'From $40', sub: 'Up to ~2,000 sq ft' },
                  { label: 'Medium Lawn', price: 'From $60', sub: 'Up to ~4,000 sq ft' },
                  { label: 'Large Lawn', price: 'From $90', sub: '4,000+ sq ft' },
                ],
              },
              {
                title: 'Edging & Trimming',
                tiers: [
                  { label: 'Small Lawn', price: '$5–$10', sub: 'Basic border cleanup' },
                  { label: 'Medium Lawn', price: '$15–$20', sub: 'Standard edging' },
                  { label: 'Large Lawn', price: '$30–$60+', sub: 'Full property edging' },
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-green-300 transition"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Free Estimate
                  </span>
                </div>
                <div className="space-y-5">
                  {card.tiers.map(t => (
                    <div key={t.label} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                      <div>
                        <p className="font-semibold text-gray-900">{t.label}</p>
                        <p className="text-gray-400 text-sm">{t.sub}</p>
                      </div>
                      <p className="text-2xl font-bold text-green-600">{t.price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Hedge Pruning, Aeration, Weed Control, Dethatching & Leaf Removal</span>
              {' '}are priced based on workload and property condition.
            </p>
            <p className="text-green-700 font-semibold">All services include a FREE on-site estimate. No obligation, ever.</p>
          </motion.div>

          {/* ── REFERRAL CARD ── */}
          <motion.div
            className="relative overflow-hidden bg-gray-900 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-green-500/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-500/5 rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-5">
                  <Gift size={16} /> Referral Program
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Refer a Friend — <span className="text-green-400">You Both Save $10</span>
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Tell a neighbor or friend about us. When they book their first service and mention your name, you both get <span className="text-white font-semibold">$10 off</span> your next job. Simple as that.
                </p>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Book Now & Start Referring <ChevronRight size={18} />
                </button>
              </div>

              <div className="flex-1 w-full">
                <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-4">How It Works</p>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Tell your friend or neighbor about Mou Brothers' },
                    { step: '2', text: 'They book a service and mention your name' },
                    { step: '3', text: 'You both get $10 credit on your next job' },
                  ].map(item => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <p className="text-gray-300 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Credit applies to any service. Cannot be combined with other discounts. Referral must complete a paid service for reward to apply.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MEMBERSHIP SECTION ── */}
      <section id="membership" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Lawn Care Memberships</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">No Hassle Lawn Maintenance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Keep your lawn consistently maintained without needing to book every time. We handle scheduling, mowing, and upkeep so your property always looks clean.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {['No contracts', 'Cancel anytime', 'Priority scheduling', 'Small & medium lawns'].map(badge => (
              <span key={badge} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full">
                <Check size={14} className="text-green-600" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Basic Plan */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">Basic</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-400 mb-2">/month</span>
                </div>
                <p className="text-gray-500 text-sm">2 visits per month</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'Mowing + basic edging',
                  '2 scheduled visits/month',
                  'Small to medium lawns',
                  'Priority booking over non-members',
                ].map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full border-2 border-green-600 text-green-600 py-3 rounded-xl font-bold hover:bg-green-600 hover:text-white transition"
              >
                Get Started
              </button>
            </motion.div>

            {/* Standard Plan — Most Popular */}
            <motion.div
              variants={itemVariants}
              className="relative bg-green-600 rounded-2xl p-8 flex flex-col shadow-2xl shadow-green-200 scale-105"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-2">Standard</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">$179</span>
                  <span className="text-green-200 mb-2">/month</span>
                </div>
                <p className="text-green-200 text-sm">4 visits per month</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'Weekly mowing (4 visits/month)',
                  'Edging included every visit',
                  'Light cleanup — clippings & debris',
                  'Priority scheduling',
                  'Small to medium lawns',
                ].map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-white" />
                    </div>
                    <p className="text-green-50 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full bg-white text-green-600 py-3 rounded-xl font-bold hover:bg-green-50 transition"
              >
                Get Started
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-2">Premium</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">$249</span>
                  <span className="text-gray-400 mb-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">4 visits/month + extras</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'Weekly mowing + full edging',
                  'Light hedge trimming',
                  'Weed spot treatment',
                  'Seasonal cleanup priority',
                  'Fastest response time',
                  'Small to medium lawns',
                ].map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-400" />
                    </div>
                    <p className="text-gray-300 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* Large lawn note */}
          <motion.p
            className="text-center text-gray-400 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Have a large lawn? <button onClick={() => setIsQuoteOpen(true)} className="text-green-600 font-semibold hover:underline">Contact us for a custom quote.</button>
          </motion.p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Mou Brothers Difference</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We are a small, local team that takes pride in every job. No subcontractors,
                no shortcuts. Just honest work at fair prices from people who care about their community.
              </p>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Book a Free Estimate <ChevronRight size={18} />
              </button>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: '20% Cheaper Than Competitors', desc: 'We keep overhead low and pass the savings directly to you.' },
                { title: 'Price Match Guarantee', desc: 'Find a lower price? Show us and we will beat it. Simple as that.' },
                { title: '5 Years of Local Experience', desc: 'We know Coquitlam lawns. We know what works here.' },
                { title: 'Satisfaction Guaranteed', desc: 'Not happy with the job? We come back and make it right. No questions asked.' },
              ].map((item, i) => (
                <motion.div key={i} variants={slideLeft} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'Sarah M.', location: 'Coquitlam', text: 'The Mou Brothers showed up on time and did excellent work. Very fair pricing and they cleaned up everything after. Will definitely be using them again.' },
              { name: 'James T.', location: 'Port Coquitlam', text: 'Been using their service for over a year. Consistent quality, great communication, and they always go the extra mile. Genuinely one of the best local businesses I have dealt with.' },
              { name: 'Lisa R.', location: 'Burnaby', text: 'Got three quotes for lawn care. Mou Brothers came in the cheapest and honestly did the best job of anyone. Really impressed.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-500 text-lg mb-12">
              Contact us today for your free estimate. Serving Coquitlam and surrounding areas.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Phone, label: 'Call Us', value: '778-636-7048', href: 'tel:7786367048', sub: 'Mon–Sat, 8am–6pm' },
              { icon: Mail, label: 'Email Us', value: 'info@moubrothers.com', href: 'mailto:info@moubrothers.com', sub: 'Reply within 24 hours' },
              { icon: MapPin, label: 'Service Area', value: 'Coquitlam & Area', href: '#', sub: 'Port Coquitlam, Burnaby & more' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center hover:border-green-300 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                  <p className="font-bold text-gray-900 text-center">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 hover:scale-105 transition transform shadow-lg shadow-green-200"
            >
              Get Your Free Quote <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-1">Mou Brothers Property Care</h3>
            <p className="text-gray-400 text-sm">Honest work. Fair prices. Trusted service.</p>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            {['home', 'services', 'pricing', 'membership', 'contact'].map(id => (
              <a key={id} href={`#${id}`} className="capitalize hover:text-white transition">{id}</a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">© 2025 Mou Brothers Property Care</p>
        </div>
      </footer>

    </div>
  );
}
