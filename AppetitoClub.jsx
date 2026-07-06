import React, { useEffect, useRef, useState } from "react";

/**
 * APPETITO CLUB — premium single-page site
 * Café · Mini Golf · Pickleball · Cycling Track — Knowledge Park II, Greater Noida
 *
 * Design tokens
 * ---------------------------------------------------------
 * Background   #FAF7F1  (warm off-white linen)
 * Ink          #2A2A24  (near-black, warm)
 * Ink-soft     #6B6A60
 * Sage         #8FA687  (fairway / court green)
 * Sage-deep    #5F7A56
 * Blush        #F0D9C9  (warm terracotta-blush, food warmth)
 * Gold         #B79762  (foil accent, CTAs / dividers)
 * Card         rgba(255,255,255,0.6) glass
 *
 * Type: Fraunces (display, editorial serif) + Manrope (body/UI)
 * Signature element: the hero "split-flap" activity board — a physical
 * departures-board flip animation cycling CAFÉ / GOLF / PICKLEBALL / CYCLING,
 * echoing the brand's real signature: one address, four different things to do.
 * ---------------------------------------------------------
 */

const PLACEHOLDER = (seed, w = 900, h = 700) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Visit" },
];

const ACTIVITIES = [
  {
    key: "golf",
    name: "ParView Mini Golf",
    tag: "18 holes · all ages",
    desc:
      "An 18-hole course laid through the lawns, built for a slow evening and a friendly scorecard rivalry.",
    price: "From ₹400 / person",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 7l16 6-16 6V7z" fill="currentColor" opacity="0.9" />
        <ellipse cx="14" cy="41" rx="9" ry="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    img: PLACEHOLDER("appetito-golf", 900, 700),
  },
  {
    key: "pickleball",
    name: "PickleNow Pickleball",
    tag: "indoor courts · coaching on request",
    desc:
      "Two courts, proper paddles, and the fastest-growing racket sport in the country waiting on the other side of the net.",
    price: "From ₹944 / hour",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="18" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M14 12l4 4M20 10l0 6M26 12l-4 4" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <path d="M27 27l10 10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="39" cy="39" r="2.4" fill="currentColor" />
      </svg>
    ),
    img: PLACEHOLDER("appetito-pickleball", 900, 700),
  },
  {
    key: "cycling",
    name: "Bikonic Pump Track",
    tag: "300m circuit · bring your own or borrow",
    desc:
      "A rolling pump track built for momentum, not pedalling — carve the berms and let gravity do the rest.",
    price: "From ₹413 / session",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="34" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="34" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M12 34l9-16h9l6 16M21 18l6 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    img: PLACEHOLDER("appetito-cycling", 900, 700),
  },
  {
    key: "menu",
    name: "The All-Day Menu",
    tag: "Indian · Pan-Asian · Continental · Italian",
    desc:
      "Aglio e olio, Thai highway rolls, wood-fired pizza and a butter chicken worth the detour — one table, four cuisines.",
    price: "À la carte, ₹700 avg / person",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6v18M11 6v10a3 3 0 003 3 3 3 0 003-3V6M14 27v15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 6c-4 2-5 7-5 11 0 3 2 5 5 5s5-2 5-5c0-4-1-9-5-11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M34 22v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    img: PLACEHOLDER("appetito-food", 900, 700),
  },
];

const GALLERY = [
  { seed: "appetito-g1", w: 700, h: 900, cap: "Wood-fired pizza, table-side" },
  { seed: "appetito-g2", w: 700, h: 560, cap: "Evening light on the fairway" },
  { seed: "appetito-g3", w: 700, h: 700, cap: "The courtyard bar" },
  { seed: "appetito-g4", w: 700, h: 900, cap: "Pickleball, court one" },
  { seed: "appetito-g5", w: 700, h: 560, cap: "Butter chicken, slow-simmered" },
  { seed: "appetito-g6", w: 700, h: 700, cap: "First light on the pump track" },
];

const TESTIMONIALS = [
  {
    name: "Ritika M.",
    meta: "Visited for a birthday brunch",
    rating: 5,
    quote:
      "We came for lunch and stayed four hours — nobody wanted to leave the golf course. The kind of place you end up recommending to everyone you know.",
  },
  {
    name: "Arjun S.",
    meta: "Regular, Knowledge Park",
    rating: 5,
    quote:
      "Booked the pickleball court on a whim and the food afterwards sealed it. It's rare to find a place that takes both the sport and the kitchen seriously.",
  },
  {
    name: "Neha & Karan",
    meta: "Date night",
    rating: 5,
    quote:
      "Genuinely one of the best-designed spaces in the city right now. Calm, green, unhurried — and the aglio e olio held its own against anywhere in Delhi.",
  },
  {
    name: "The Bhatia Family",
    meta: "Weekend with kids",
    rating: 5,
    quote:
      "Our kids did three rounds of mini golf while we actually finished a hot meal for once. Well run, well staffed, worth the drive.",
  },
];

const STATS = [
  { n: "4.7 / 5", l: "average rating, 900+ reviews" },
  { n: "3", l: "sports under one roof" },
  { n: "18", l: "holes on the fairway course" },
  { n: "300m", l: "of pump track" },
];

const FLIP_WORDS = ["CAFÉ", "MINI GOLF", "PICKLEBALL", "CYCLING"];

function FlipBoard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % FLIP_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="flipboard" aria-live="polite">
      <span key={i} className="flipboard-word">
        {FLIP_WORDS[i]}
      </span>
    </span>
  );
}

function Stars({ count = 5 }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg key={idx} width="14" height="14" viewBox="0 0 20 20" fill={idx < count ? "#B79762" : "#E7E1D5"}>
          <path d="M10 1.5l2.6 5.6 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.8l6-.7L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function AppetitoClub() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const galleryIndexRef = useRef(0);

  useEffect(() => {
    document.title = "Appetito Club — Café, Mini Golf, Pickleball & Cycling · Greater Noida";
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    // JSON-LD structured data for SEO
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: "Appetito Club",
      image: PLACEHOLDER("appetito-hero", 1200, 800),
      address: {
        "@type": "PostalAddress",
        streetAddress: "R3, Knowledge Park II",
        addressLocality: "Greater Noida",
        addressRegion: "UP",
        postalCode: "201310",
        addressCountry: "IN",
      },
      telephone: "+918958950707",
      servesCuisine: ["Indian", "Pan-Asian", "Continental", "Italian"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "900",
      },
    });
    document.head.appendChild(ld);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.head.removeChild(ld);
    };
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ac-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .ac-root {
          --bg: #FAF7F1;
          --ink: #2A2A24;
          --ink-soft: #6B6A60;
          --sage: #8FA687;
          --sage-deep: #5F7A56;
          --blush: #F0D9C9;
          --gold: #B79762;
          --line: rgba(42,42,36,0.1);
          background: var(--bg);
          color: var(--ink);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        .ac-root .font-display { font-family: 'Fraunces', Georgia, serif; }
        .ac-root .font-display-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }

        .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.8s cubic-bezier(.2,.7,.2,1), transform 0.8s cubic-bezier(.2,.7,.2,1); }
        .reveal-in { opacity: 1; transform: translateY(0); }

        .glass {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.6);
        }

        .nav-glass {
          background: rgba(250,247,241,0.7);
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
        }
        .nav-glass.scrolled { box-shadow: 0 1px 0 var(--line), 0 12px 30px -20px rgba(42,42,36,0.35); }

        .btn-primary {
          background: var(--ink);
          color: var(--bg);
          transition: transform .35s cubic-bezier(.2,.8,.2,1), background .35s ease, box-shadow .35s ease;
        }
        .btn-primary:hover { transform: translateY(-2px); background: var(--sage-deep); box-shadow: 0 14px 26px -14px rgba(95,122,86,0.6); }

        .btn-ghost { border: 1.5px solid var(--ink); transition: all .3s ease; }
        .btn-ghost:hover { background: var(--ink); color: var(--bg); transform: translateY(-2px); }

        .link-underline { position: relative; }
        .link-underline::after {
          content: ""; position: absolute; left:0; bottom: -3px; width: 0; height: 1.5px; background: var(--sage-deep);
          transition: width .3s ease;
        }
        .link-underline:hover::after { width: 100%; }

        .flipboard { display:inline-block; position: relative; height: 1.15em; overflow: hidden; vertical-align: bottom; min-width: 8ch; }
        .flipboard-word {
          display: inline-block; color: var(--sage-deep);
          animation: flipIn .55s cubic-bezier(.2,.9,.25,1);
        }
        @keyframes flipIn {
          0% { transform: translateY(70%) rotateX(60deg); opacity: 0; }
          100% { transform: translateY(0) rotateX(0); opacity: 1; }
        }

        .card-lift { transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease, border-color .45s ease; }
        .card-lift:hover { transform: translateY(-8px); box-shadow: 0 30px 50px -30px rgba(42,42,36,0.35); }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 1.1s cubic-bezier(.16,.9,.2,1); }
        .img-zoom:hover img { transform: scale(1.08); }

        .caption-rise { transform: translateY(12px); opacity: 0; transition: all .4s ease; }
        .img-zoom:hover .caption-rise { transform: translateY(0); opacity: 1; }

        .marquee-track { display: flex; width: max-content; animation: marquee 26s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .testi-scroll { scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none; }
        .testi-scroll::-webkit-scrollbar { display: none; }
        .testi-card { scroll-snap-align: start; }

        .whatsapp-float { animation: floatPulse 2.6s ease-in-out infinite; }
        @keyframes floatPulse { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }

        .dot-nav a { transition: transform .25s ease, background .25s ease; }
        .dot-nav a:hover { transform: scale(1.4); }

        .texture-dots {
          background-image: radial-gradient(rgba(42,42,36,0.06) 1px, transparent 1px);
          background-size: 18px 18px;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .flipboard-word, .card-lift, .img-zoom img, .whatsapp-float, .marquee-track { animation: none !important; transition: none !important; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* ===================== NAV ===================== */}
      <header className={`nav-glass fixed top-0 left-0 right-0 z-50 ${scrolled ? "scrolled" : ""}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4" aria-label="Primary">
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("#top"); }} className="font-display text-xl md:text-2xl tracking-tight">
            Appetito <span className="font-display-italic text-[var(--sage-deep)]">Club</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  className="link-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918958950707?text=Hi%20Appetito%20Club%2C%20I%27d%20like%20to%20reserve%20a%20table"
              target="_blank" rel="noreferrer"
              className="btn-ghost rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Reserve a Table
            </a>
          </div>
          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="w-6 h-[1.5px] bg-[var(--ink)] mb-1.5" />
            <div className="w-6 h-[1.5px] bg-[var(--ink)]" />
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden glass border-t border-[var(--line)] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="text-lg font-medium">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn-primary rounded-full px-5 py-3 text-center font-semibold">
              Reserve a Table
            </a>
          </div>
        )}
      </header>

      <main id="top">
        {/* ===================== HERO ===================== */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-5 md:px-10 texture-dots">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-5">
                Knowledge Park II · Greater Noida
              </p>
              <h1 className="font-display text-[13vw] leading-[0.98] md:text-[4.2vw] md:leading-[1.02] font-light mb-6">
                One address.<br />
                <span className="font-display-italic">Four</span> reasons to stay all day.
              </h1>
              <p className="text-lg text-[var(--ink-soft)] max-w-md mb-3">
                A <FlipBoard /> destination — India's first café built around a fairway,
                a court and a cycling track, not just a kitchen.
              </p>
              <p className="text-[15px] text-[var(--ink-soft)] max-w-md mb-9">
                Multi-cuisine dining, mini golf, pickleball and a pump track, set across
                landscaped lawns designed for long afternoons.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold">
                  Reserve a Table
                </a>
                <a href="#activities" onClick={(e) => { e.preventDefault(); scrollTo("#activities"); }} className="btn-ghost rounded-full px-7 py-3.5 text-sm font-semibold">
                  Explore Activities
                </a>
              </div>
              <div className="flex items-center gap-3 mt-9">
                <Stars count={5} />
                <span className="text-sm text-[var(--ink-soft)]">4.7 average · 900+ verified reviews</span>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="grid grid-cols-5 grid-rows-6 gap-3 h-[440px] md:h-[560px]">
                <div className="col-span-3 row-span-4 rounded-3xl overflow-hidden img-zoom shadow-xl">
                  <img src={PLACEHOLDER("appetito-hero-a", 700, 900)} alt="Landscaped lawns and dining courtyard at Appetito Club" className="w-full h-full object-cover" loading="eager" />
                </div>
                <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden img-zoom shadow-xl">
                  <img src={PLACEHOLDER("appetito-hero-b", 500, 500)} alt="Plated pasta dish at Appetito Club" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden img-zoom shadow-xl">
                  <img src={PLACEHOLDER("appetito-hero-c", 500, 500)} alt="Guests playing mini golf on the lawn" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="col-span-3 row-span-2 rounded-3xl overflow-hidden img-zoom shadow-xl">
                  <img src={PLACEHOLDER("appetito-hero-d", 700, 350)} alt="Pickleball court at Appetito Club" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lg hidden md:block">
                <p className="font-display text-2xl leading-none">18</p>
                <p className="text-xs text-[var(--ink-soft)] mt-1">holes of mini golf</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== MARQUEE / TRUST STRIP ===================== */}
        <div className="border-y border-[var(--line)] py-5 overflow-hidden bg-white/40">
          <div className="marquee-track gap-16 text-sm font-semibold tracking-wide text-[var(--ink-soft)]">
            {[...Array(2)].flatMap((_, dup) =>
              ["GREATER NOIDA'S #1 RATED CAFÉ & SPORTS LAWN", "FEATURED ON MAGICPIN & DISTRICT", "900+ FIVE-STAR REVIEWS", "FAMILY-RUN SINCE DAY ONE", "WHEELCHAIR ACCESSIBLE"].map((t, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-16">
                  {t}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                </span>
              ))
            )}
          </div>
        </div>

        {/* ===================== ABOUT ===================== */}
        <section id="about" className="px-5 md:px-10 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <Reveal className="order-2 md:order-1 relative">
              <div className="rounded-[2rem] overflow-hidden img-zoom shadow-xl aspect-[4/5]">
                <img src={PLACEHOLDER("appetito-about", 800, 1000)} alt="Interior seating at Appetito Club" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -top-6 -right-4 md:-right-8 glass rounded-2xl p-5 shadow-lg max-w-[200px]">
                <p className="font-display-italic text-lg leading-snug">"Radically different from anywhere else in the city."</p>
                <p className="text-xs text-[var(--ink-soft)] mt-2">— a first-time guest</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 md:order-2">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-4">About Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                Built for the whole afternoon, <span className="font-display-italic">not just the meal.</span>
              </h2>
              <p className="text-[var(--ink-soft)] mb-4 leading-relaxed">
                Appetito Club began with a simple question: why should a great meal end
                the moment the plates are cleared? We built our courtyard around that
                answer — a fairway, a court, a track, and a kitchen that takes four
                cuisines seriously enough to keep you at the table in between.
              </p>
              <p className="text-[var(--ink-soft)] mb-8 leading-relaxed">
                Every detail, from the landscaped lawns to the pass, is run by people who
                live in this neighbourhood and wanted a place worth the drive for
                everyone else.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-3xl">{s.n}</p>
                    <p className="text-sm text-[var(--ink-soft)] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== ACTIVITIES ===================== */}
        <section id="activities" className="px-5 md:px-10 py-24 md:py-32 bg-white/40 border-y border-[var(--line)]">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-xl mb-14">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-4">Activities</p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
                Four ways to spend your afternoon.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {ACTIVITIES.map((a, idx) => (
                <Reveal key={a.key} delay={idx * 90} className="card-lift glass rounded-3xl overflow-hidden flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 img-zoom aspect-[4/3] sm:aspect-auto">
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="w-11 h-11 rounded-full bg-[var(--sage)]/20 text-[var(--sage-deep)] flex items-center justify-center mb-4">
                      <span className="w-6 h-6 block">{a.icon}</span>
                    </div>
                    <p className="text-xs uppercase tracking-wide text-[var(--gold)] font-semibold mb-1">{a.tag}</p>
                    <h3 className="font-display text-2xl mb-2">{a.name}</h3>
                    <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-5 flex-1">{a.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{a.price}</span>
                      <a
                        href="https://wa.me/918958950707"
                        target="_blank" rel="noreferrer"
                        className="text-sm font-semibold link-underline text-[var(--sage-deep)]"
                      >
                        Book a slot →
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== GALLERY ===================== */}
        <section id="gallery" className="px-5 md:px-10 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-xl mb-14">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-4">Gallery</p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
                The food. The lawns. The games.
              </h2>
            </Reveal>
            <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
              {GALLERY.map((g, idx) => (
                <Reveal key={g.seed} delay={idx * 70} className="mb-4 break-inside-avoid">
                  <div className="img-zoom rounded-2xl overflow-hidden relative group">
                    <img
                      src={PLACEHOLDER(g.seed, g.w, g.h)}
                      alt={g.cap}
                      className="w-full h-auto object-cover block"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="caption-rise text-white text-sm font-medium">{g.cap}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section id="reviews" className="px-5 md:px-10 py-24 md:py-32 bg-white/40 border-y border-[var(--line)]">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-xl mb-14 flex items-end justify-between flex-wrap gap-6">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-4">Reviews</p>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
                  Guests keep coming back <span className="font-display-italic">for a reason.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="testi-scroll flex gap-6 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="testi-card card-lift glass rounded-3xl p-7 min-w-[280px] sm:min-w-[320px] max-w-sm flex-shrink-0">
                    <Stars count={t.rating} />
                    <p className="font-display-italic text-lg leading-snug mt-4 mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--sage)]/30 text-[var(--sage-deep)] flex items-center justify-center font-semibold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-[var(--ink-soft)]">{t.meta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contact" className="px-5 md:px-10 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <Reveal className="glass rounded-3xl p-8 md:p-10 flex flex-col">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--sage-deep)] mb-4">Visit</p>
              <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-6">
                Come find out why the drive is worth it.
              </h2>

              <dl className="space-y-5 mb-8 text-sm">
                <div>
                  <dt className="font-semibold mb-1">Address</dt>
                  <dd className="text-[var(--ink-soft)]">R3, Knowledge Park II, Greater Noida, Uttar Pradesh 201310</dd>
                </div>
                <div>
                  <dt className="font-semibold mb-1">Hours</dt>
                  <dd className="text-[var(--ink-soft)]">Mon – Sun · 11:00 AM – 11:30 PM</dd>
                </div>
                <div>
                  <dt className="font-semibold mb-1">Phone</dt>
                  <dd className="text-[var(--ink-soft)]">+91 89589 50707</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href="https://wa.me/918958950707?text=Hi%20Appetito%20Club%2C%20I%27d%20like%20to%20reserve%20a%20table"
                  target="_blank" rel="noreferrer"
                  className="btn-primary rounded-full px-6 py-3.5 text-sm font-semibold flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" /></svg>
                  Chat on WhatsApp
                </a>
                <a href="tel:+918958950707" className="btn-ghost rounded-full px-6 py-3.5 text-sm font-semibold">
                  Call Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="rounded-3xl overflow-hidden shadow-xl min-h-[360px] border border-[var(--line)]">
              <iframe
                title="Appetito Club location on Google Maps"
                src="https://www.google.com/maps?q=Appetito%20Club%20Knowledge%20Park%20II%20Greater%20Noida&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360, height: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-[var(--line)] px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-display text-2xl mb-3">
              Appetito <span className="font-display-italic text-[var(--sage-deep)]">Club</span>
            </p>
            <p className="text-sm text-[var(--ink-soft)] max-w-xs">
              Café, mini golf, pickleball and a cycling track — one address in
              Knowledge Park II, Greater Noida.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold mb-4 text-[var(--sage-deep)]">Explore</p>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="hover:text-[var(--ink)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold mb-4 text-[var(--sage-deep)]">Contact</p>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              <li>R3, Knowledge Park II, Greater Noida</li>
              <li>+91 89589 50707</li>
              <li>Open daily, 11 AM – 11:30 PM</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--ink-soft)]">
          <p>© {new Date().getFullYear()} Appetito Club. All rights reserved.</p>
          <p>Designed for guests who stay for more than one course.</p>
        </div>
      </footer>

      {/* ===================== FLOATING WHATSAPP ===================== */}
      <a
        href="https://wa.me/918958950707?text=Hi%20Appetito%20Club%2C%20I%27d%20like%20to%20reserve%20a%20table"
        target="_blank" rel="noreferrer"
        aria-label="Chat with Appetito Club on WhatsApp"
        className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" /></svg>
      </a>
    </div>
  );
}
