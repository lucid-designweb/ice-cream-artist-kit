import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Star, Instagram, Facebook, ArrowRight, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGelato from "@/assets/hero-gelato.jpg";
import flavorPistachio from "@/assets/flavor-pistachio.jpg";
import flavorRaspberry from "@/assets/flavor-raspberry.jpg";
import flavorChocolate from "@/assets/flavor-chocolate.jpg";
import flavorLemon from "@/assets/flavor-lemon.jpg";
import dessertWaffle from "@/assets/dessert-waffle.jpg";
import dessertLemonade from "@/assets/dessert-lemonade.jpg";
import dessertSundae from "@/assets/dessert-sundae.jpg";
import shopInterior from "@/assets/shop-interior.jpg";

const flavors = [
  { name: "Fistic", note: "Bronte • bucățele de nuci", color: "bg-pistachio", img: flavorPistachio },
  { name: "Zmeură", note: "sorbet natural", color: "bg-raspberry", img: flavorRaspberry },
  { name: "Ciocolată", note: "neagră 70%", color: "bg-cocoa", img: flavorChocolate },
  { name: "Lămâie", note: "din Sicilia", color: "bg-mango", img: flavorLemon },
];

const coppe = [
  { name: "Grandissimo", grams: "350 g", price: "23 lei", img: dessertSundae,
    desc: "Înghețată de vanilie, ciocolată și fistic, frișcă, sirop Nutella, sos de căpșuni cu un strop de granola și napolitană învelită în ciocolată." },
  { name: "Hot Berry Gelato", grams: "230 g", price: "15,5 lei", img: dessertWaffle,
    desc: "Un glazur de zmeură, căpșuni și mure cald, peste înghețata de vanilie." },
  { name: "Limonată de casă", grams: "500 ml", price: "18 lei", img: dessertLemonade,
    desc: "Lămâie stoarsă manual, zmeură proaspătă, mentă din grădină și gheață." },
];

const reviews = [
  { name: "Borsi István", time: "acum un an",
    text: "Cupe de înghețată decorative și foarte gustoase. Servesc și cafea, gofre și limonade.", rating: 5 },
  { name: "Emma Rigo", time: "acum o lună",
    text: "Înghețata aici este foarte bună. Și au grijă de animalele tale (ex. îi dau apă).", rating: 5 },
  { name: "Marian Pijen", time: "acum 4 ani",
    text: "Foarte bună înghețata 👌", rating: 5 },
];

// Full menu drawn from the booklet photos
const cafea = [
  ["Espresso", "30 ml", "6 lei"],
  ["Espresso Dublu", "60 ml", "7 lei"],
  ["Espresso Americano", "90 ml", "6 lei"],
  ["Espresso Macchiato", "60 ml", "6,5 lei"],
  ["Gibraltar", "100 ml", "7 lei"],
  ["Cappuccino", "180 ml", "7,5 lei"],
  ["Flat White", "180 ml", "9 lei"],
  ["Latte", "300 ml", "9 lei"],
  ["Spice Latte", "300 ml", "9 lei"],
  ["Gelato Cafe", "150 ml", "9 lei"],
  ["Café Bombon", "100 ml", "9 lei"],
  ["Mocca", "300 ml", "11 lei"],
  ["Espresso con Panna", "100 ml", "8 lei"],
  ["Caramelo Frappe", "350 ml", "14 lei"],
  ["Ciocolato Frappe", "350 ml", "13 lei"],
  ["Pistachio Matcha Tea Frappe", "350 ml", "15 lei"],
  ["Almond Iced Coffee", "350 ml", "10 lei"],
];

const waffles = [
  ["Perla Waffle", "200 g", "13 lei"],
  ["Avocado Waffle", "160 g", "14 lei"],
  ["Banana Waffle", "250 g", "15,5 lei"],
  ["Frutissima Waffle", "200 g", "13,5 lei"],
  ["Apple Waffle", "250 g", "15,5 lei"],
];

const patiserie = [
  ["Pavlova", "180 g", "18 lei"],
  ["Brownie", "180 g", "18 lei"],
  ["Profiterol", "250 g", "14 lei"],
  ["Tartă de Mere", "200 g", "19 lei"],
];

const ceaiuri = [
  ["Moroccan Mint", "350 ml", "12 lei"],
  ["Green Mango Peach", "350 ml", "12 lei"],
  ["White Ginger Pear", "350 ml", "12 lei"],
  ["Raspberry Nectar", "350 ml", "12 lei"],
  ["Chamomile Citron", "350 ml", "12 lei"],
  ["Bombay Chai", "350 ml", "12 lei"],
  ["Ceai Aloe Vera", "350 ml", "12 lei"],
  ["Ceaiul Casei de Ghimbir", "350 ml", "8 lei"],
];

const racoritoare = [
  ["Apă plată / minerală", "330 ml", "4 lei"],
  ["Gama Coca-Cola", "250 ml", "6 lei"],
  ["Fentimans Botanically Drinks", "275 ml", "12 lei"],
  ["Fresh Simplu", "250 ml", "10 lei"],
  ["Fresh Mixt", "250 ml", "12 lei"],
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-driven hero transforms
  const progress = Math.min(scrollY / 600, 1);
  const heroScale = 1 + progress * 1.6;            // pops out
  const heroOpacity = 1 - progress * 1.05;
  const heroY = -progress * 80;
  const heroLetterSpace = 0.02 + progress * 0.15;
  const stickerRot = scrollY * 0.15;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-cocoa/5">
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-raspberry text-cream font-display text-2xl shadow-pop transition-transform group-hover:rotate-12">A</span>
            <span className="font-display text-3xl tracking-wide leading-none pt-1">
              Gelateria <span className="text-raspberry">Aniela</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-display text-2xl">
            <a href="#meniu" className="hover:text-raspberry transition-colors">Meniu</a>
            <a href="#cupe" className="hover:text-raspberry transition-colors">Cupe</a>
            <a href="#cafea" className="hover:text-raspberry transition-colors">Cafea</a>
            <a href="#recenzii" className="hover:text-raspberry transition-colors">Recenzii</a>
            <a href="#vizita" className="hover:text-raspberry transition-colors">Vizită</a>
          </nav>
          <a href="tel:+40744601167" className="hidden md:inline-flex">
            <Button variant="default" className="rounded-full bg-cocoa hover:bg-cocoa/90 text-cream gap-2 font-body">
              <Phone className="h-4 w-4" /> 0744 601 167
            </Button>
          </a>
        </div>
      </header>

      {/* HERO — giant scroll-reactive title */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 grain overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-scoop" />
        <div className="pointer-events-none absolute -top-10 -left-20 h-72 w-72 bg-mango/40 blob animate-float-slow" />
        <div className="pointer-events-none absolute top-40 -right-16 h-80 w-80 bg-pistachio/40 blob-2 animate-float-slower" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 bg-raspberry/20 blob animate-float-slow" />

        {/* Tagline above */}
        <div
          className="relative z-10 inline-flex items-center gap-3 rounded-full border border-cocoa/15 bg-cream/80 px-5 py-2 text-sm font-medium tracking-widest uppercase font-body"
          style={{ opacity: 1 - progress }}
        >
          <span className="h-2 w-2 rounded-full bg-raspberry animate-pulse" />
          Bistrița · Piața Unirii 3 · din 2014
        </div>

        {/* THE GIANT WORD */}
        <div className="relative z-10 mt-6 w-full text-center">
          <h1
            className="font-display font-bold text-cocoa select-none will-change-transform"
            style={{
              fontSize: "clamp(6rem, 22vw, 22rem)",
              letterSpacing: `${heroLetterSpace}em`,
              transform: `translateY(${heroY}px) scale(${heroScale})`,
              opacity: heroOpacity,
              lineHeight: 0.85,
              transition: "transform 60ms linear, opacity 60ms linear",
            }}
          >
            ÎNGHEȚATĂ
          </h1>
          <div
            className="font-script text-raspberry -mt-4 md:-mt-8"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              transform: `translateY(${-progress * 60}px) rotate(${-2 + progress * 8}deg)`,
              opacity: 1 - progress * 1.2,
            }}
          >
            artizanală &amp; cu drag
          </div>
        </div>

        {/* Floating hero scoop image */}
        <div
          className="relative z-10 mt-10 mx-auto"
          style={{
            transform: `translateY(${progress * 120}px) scale(${1 - progress * 0.3})`,
            opacity: 1 - progress * 0.8,
          }}
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-raspberry/15 blob animate-float-slower" />
            <div className="relative h-56 w-56 md:h-72 md:w-72 overflow-hidden rounded-full shadow-pop border-8 border-cream">
              <img
                src={heroGelato}
                alt="Cupe colorate de înghețată artizanală"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            {/* rotating circular text sticker */}
            <div
              className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cocoa text-cream flex items-center justify-center shadow-cream"
              style={{ transform: `rotate(${stickerRot}deg)` }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text className="font-display fill-cream" fontSize="14" letterSpacing="3">
                  <textPath href="#circ">PROASPĂTĂ · ZILNIC · CU DRAG · </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute -top-4 -left-8 -rotate-12 bg-mango text-cocoa font-script text-3xl px-5 py-2 rounded-2xl shadow-soft animate-wiggle">
              gelato!
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: 1 - progress * 1.3 }}
        >
          <a href="#meniu">
            <Button size="lg" className="rounded-full bg-raspberry hover:bg-raspberry-deep text-cream shadow-pop h-14 px-8 text-base gap-2 group font-body">
              Vezi meniul
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#vizita">
            <Button size="lg" variant="outline" className="rounded-full border-cocoa text-cocoa hover:bg-cocoa hover:text-cream h-14 px-8 text-base font-body">
              Găsește gelateria
            </Button>
          </a>
        </div>

        {/* rating */}
        <div
          className="relative z-10 mt-8 flex items-center gap-4"
          style={{ opacity: 1 - progress * 1.4 }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-mango text-mango" />
            ))}
          </div>
          <div className="font-body text-sm">
            <span className="font-display text-2xl">4,8</span>
            <span className="text-cocoa/60"> · 634 recenzii Google</span>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-script text-cocoa/50 text-2xl animate-float-slow">
          scroll ↓
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-cocoa text-cream py-6 overflow-hidden border-y-2 border-cocoa">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display text-5xl tracking-wide">
              {["Înghețată artizanală", "Sorbeturi", "Gofre", "Limonate", "Cafea de specialitate", "Cupe speciale"].map((w, i) => (
                <span key={i} className="flex items-center gap-12">
                  {w}
                  <span className="h-3 w-3 rounded-full bg-mango" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MENIU */}
      <section id="meniu" className="py-24 md:py-36 relative bg-blush/40 grain overflow-hidden">
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <span className="font-display text-cocoa/20 text-8xl tracking-[0.3em]">ÎNGHEȚATĂ</span>
        </div>

        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-6">
              <p className="text-xs font-medium tracking-widest uppercase text-raspberry font-body">01 — Sortimente</p>
              <h2 className="mt-4 font-display text-7xl md:text-9xl leading-[0.85] tracking-wide">
                Peste douăzeci<br/>de <span className="font-script text-raspberry text-6xl md:text-8xl">cupe</span>,<br/>niciun compromis.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-lg text-cocoa/75 leading-relaxed font-body">
                Înghețata noastră este preparată în fiecare dimineață cu lapte din ferme locale,
                fructe adevărate și răbdare ca la bunica. Sorbeturile sunt fără lactate, vibrant colorate
                și incredibil de răcoritoare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {flavors.map((f) => (
              <article
                key={f.name}
                className="group relative overflow-hidden rounded-[2rem] bg-card shadow-cream transition-all duration-500 hover:shadow-pop hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={f.img}
                    alt={`Înghețată de ${f.name}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-4xl tracking-wide">{f.name}</h3>
                    <span className={`h-3 w-3 rounded-full ${f.color}`} />
                  </div>
                  <p className="mt-1 text-sm text-cocoa/60 font-body">{f.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { qty: "1 cupă", price: "8 lei" },
              { qty: "2 cupe", price: "14 lei" },
              { qty: "3 cupe", price: "20 lei" },
              { qty: "Cupă specială", price: "28 lei" },
            ].map((p) => (
              <div key={p.qty} className="rounded-2xl border border-cocoa/15 bg-cream px-5 py-4 flex items-baseline justify-between">
                <span className="text-sm text-cocoa/70 font-body">{p.qty}</span>
                <span className="font-display text-3xl">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUPE */}
      <section id="cupe" className="py-24 md:py-36 bg-cocoa text-cream relative grain overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 bg-raspberry/30 blob animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 bg-pistachio/20 blob-2 animate-float-slower" />

        <div className="container relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-mango font-body">02 — Cupele casei</p>
              <h2 className="mt-4 font-display text-7xl md:text-9xl leading-[0.85] tracking-wide max-w-4xl">
                Gofre, coppe &amp; <span className="font-script text-mango text-6xl md:text-8xl">limonate</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coppe.map((d, i) => (
              <article
                key={d.name}
                className={`group relative overflow-hidden rounded-[2rem] bg-cream text-cocoa shadow-soft hover:shadow-pop transition-all duration-500 hover:-translate-y-2 ${
                  i === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl tracking-wide">{d.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-cocoa/50 font-body">{d.grams}</span>
                    </div>
                    <span className="font-display text-3xl text-raspberry">{d.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-cocoa/70 leading-relaxed font-body">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Other gelato cups */}
          <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-2 max-w-3xl text-cream/90">
            {[
              ["Banana Split", "400 g", "19 lei"],
              ["Fruttissima", "280 g", "19 lei"],
              ["Pinocchio", "130 g", "13 lei"],
              ["Yogo Macaroons Gelato", "160 g", "17 lei"],
              ["Choco Goodness", "235 g", "15 lei"],
              ["Hot Berry Gelato", "230 g", "15,5 lei"],
            ].map(([n, g, p]) => (
              <div key={n} className="flex items-baseline gap-3 border-b border-cream/15 py-3">
                <span className="font-display text-2xl tracking-wide">{n}</span>
                <span className="text-xs text-cream/50 font-body">{g}</span>
                <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-4px]" />
                <span className="font-display text-2xl">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAFFLES + PATISERIE */}
      <section className="py-24 md:py-36 relative bg-cream grain">
        <div className="container grid md:grid-cols-2 gap-16">
          {/* Waffles */}
          <div>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-7xl md:text-8xl tracking-wide">Waffles</h2>
              <span className="font-script text-raspberry text-3xl rotate-3">#delicios</span>
            </div>
            <div className="mt-2 h-1 w-24 bg-raspberry rounded-full" />
            <div className="mt-8 space-y-2">
              {waffles.map(([n, g, p]) => (
                <MenuRow key={n} name={n} grams={g} price={p} />
              ))}
            </div>
          </div>
          {/* Patiserie */}
          <div>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-7xl md:text-8xl tracking-wide">Patiserie</h2>
              <span className="font-script text-pistachio-deep text-3xl -rotate-2">de casă</span>
            </div>
            <div className="mt-2 h-1 w-24 bg-pistachio-deep rounded-full" />
            <div className="mt-8 space-y-2">
              {patiserie.map(([n, g, p]) => (
                <MenuRow key={n} name={n} grams={g} price={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAFEA */}
      <section id="cafea" className="py-24 md:py-36 bg-blush/50 grain relative overflow-hidden">
        <div className="container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs font-medium tracking-widest uppercase text-raspberry font-body">03 — De băut</p>
            <h2 className="mt-4 font-display text-8xl md:text-[10rem] leading-[0.8] tracking-wide">
              Cafea<br/>
              <span className="font-script text-raspberry text-5xl md:text-7xl block mt-2">de specialitate</span>
            </h2>
            <p className="mt-6 text-cocoa/75 font-body leading-relaxed max-w-md">
              Cafea 100% Arabica, de origine, proaspăt prăjită și preparată cu grijă. Cine e harnic
              și își bea cafeaua înainte de ora 12:00 primește o prăjitură din partea casei.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-cocoa text-cream px-5 py-3 font-script text-2xl">
              + prăjitura casei
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
              {cafea.map(([n, ml, p]) => (
                <MenuRow key={n} name={n} grams={ml} price={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEAIURI + RĂCORITOARE */}
      <section className="py-24 md:py-36 bg-cream grain">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-7xl md:text-8xl tracking-wide">Ceaiuri</h2>
            <div className="mt-2 h-1 w-24 bg-mango rounded-full" />
            <p className="mt-4 font-script text-2xl text-cocoa/60">de la dimineață până seara</p>
            <div className="mt-8 space-y-1">
              {ceaiuri.map(([n, g, p]) => (
                <MenuRow key={n} name={n} grams={g} price={p} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-7xl md:text-8xl tracking-wide">Răcoritoare &amp; Fresh-uri</h2>
            <div className="mt-2 h-1 w-24 bg-raspberry rounded-full" />
            <p className="mt-4 font-script text-2xl text-cocoa/60">stoarse pe loc</p>
            <div className="mt-8 space-y-1">
              {racoritoare.map(([n, g, p]) => (
                <MenuRow key={n} name={n} grams={g} price={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section className="py-24 md:py-36 relative bg-blush/40">
        <div className="container grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 relative">
            <div className="absolute -inset-6 bg-mango/30 blob animate-float-slow" />
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-cream">
              <img
                src={shopInterior}
                alt="În interiorul Gelateriei Aniela din Bistrița"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="text-xs font-medium tracking-widest uppercase text-raspberry font-body">04 — Despre noi</p>
            <h2 className="mt-4 font-display text-7xl md:text-8xl leading-[0.85] tracking-wide">
              Un colțișor de <span className="font-script text-raspberry">Italie</span> în Piața Unirii.
            </h2>
            <p className="mt-6 text-lg text-cocoa/75 leading-relaxed font-body">
              Aniela a deschis ușa cu o singură regulă: nimic nu pleacă de la tejghea dacă nu ar servi-o
              propriei familii. Adică ingrediente reale, fără scurtături — și un bol cu apă pentru
              fiecare oaspete cu patru lăbuțe.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { k: "4,8★", v: "634 recenzii" },
                { k: "10–60", v: "min petrecute aici" },
                { k: "24+", v: "sortimente rotative" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-raspberry pl-4">
                  <div className="font-display text-4xl">{s.k}</div>
                  <div className="text-sm text-cocoa/60 mt-1 font-body">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENZII */}
      <section id="recenzii" className="py-24 md:py-36 bg-cream relative grain">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-raspberry font-body">05 — Ce spun clienții</p>
            <h2 className="mt-4 font-display text-7xl md:text-9xl leading-[0.85] tracking-wide">
              Dulceață <span className="font-script text-raspberry block text-6xl md:text-8xl">de cinci stele</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className={`relative bg-blush/50 rounded-[2rem] p-8 shadow-cream hover:shadow-pop transition-all duration-500 hover:-translate-y-2 ${
                  i === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-mango text-mango" />
                  ))}
                </div>
                <blockquote className="font-script text-3xl leading-snug">„{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm font-body">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-cocoa/50">{r.time}</span>
                </figcaption>
                <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-raspberry text-cream flex items-center justify-center font-display text-2xl shadow-pop">
                  „
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VIZITĂ */}
      <section id="vizita" className="py-24 md:py-36 bg-cocoa text-cream relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] bg-raspberry/15 blob animate-float-slower" />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-mango font-body">06 — Treci pe la noi</p>
              <h2 className="mt-4 font-display text-7xl md:text-9xl leading-[0.85] tracking-wide">
                Ne vedem la <span className="font-script text-mango">tejghea</span>.
              </h2>
              <p className="mt-6 text-lg text-cream/75 max-w-md font-body">
                Deschis zilnic de la 11:00. Intră, comandă la pachet sau așază-te la una dintre
                măsuțele noastre și privește piața.
              </p>

              <div className="mt-10 space-y-5 font-body">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-mango shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg">Piața Unirii 3</div>
                    <div className="text-cream/60">420036 Bistrița, România</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-mango shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg">Program</div>
                    <div className="text-cream/60">Zilnic · 11:00 — 22:00</div>
                  </div>
                </div>
                <a href="tel:+40744601167" className="flex gap-4 group">
                  <Phone className="h-6 w-6 text-mango shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg group-hover:text-mango transition-colors">0744 601 167</div>
                    <div className="text-cream/60">Sună-ne pentru comenzi speciale</div>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="https://www.google.com/maps?q=Gelateria+Aniela+Bistrita" target="_blank" rel="noreferrer">
                  <Button size="lg" className="rounded-full bg-mango hover:bg-mango/90 text-cocoa h-14 px-8 font-body">
                    Vezi pe hartă
                  </Button>
                </a>
                <a href="#" aria-label="Instagram" className="h-14 w-14 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-cocoa transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="h-14 w-14 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-cocoa transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-pistachio/30 blob animate-float-slow" />
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square shadow-pop border-4 border-cream/10">
                <iframe
                  title="Locația Gelateriei Aniela"
                  src="https://www.google.com/maps?q=Piata+Unirii+3,+Bistrita&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cream py-12">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-raspberry text-cream font-display text-2xl">A</span>
            <span className="font-display text-3xl tracking-wide">Gelateria Aniela</span>
          </div>
          <p className="text-sm text-cocoa/60 flex items-center gap-2 font-body">
            <Cookie className="h-4 w-4" /> Făcută cu lapte, fructe și drag, în Bistrița.
          </p>
          <p className="text-xs text-cocoa/50 font-body">© {new Date().getFullYear()} · Toate drepturile rezervate</p>
        </div>
      </footer>
    </div>
  );
};

const MenuRow = ({ name, grams, price }: { name: string; grams: string; price: string }) => (
  <div className="flex items-baseline gap-3 py-2">
    <span className="font-display text-2xl md:text-3xl tracking-wide">{name}</span>
    <span className="text-xs text-cocoa/50 font-body">{grams}</span>
    <span className="flex-1 border-b border-dotted border-cocoa/30 translate-y-[-4px]" />
    <span className="font-display text-2xl md:text-3xl text-raspberry">{price}</span>
  </div>
);

export default Index;
