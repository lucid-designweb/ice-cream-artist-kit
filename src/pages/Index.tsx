import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Star, Instagram, Facebook, ArrowRight, Coffee, IceCream, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCone from "@/assets/hero-cone.png";
import logoAniela from "@/assets/logo-gelateria-aniela.png";
import dessertWaffle from "@/assets/dessert-waffle.jpg";
import dessertSundae from "@/assets/real-fried-icecream.jpg";
import dessertPavlova from "@/assets/real-raspberry-cup.jpg";
import dessertBrownie from "@/assets/real-pavlova.jpg";
import shopInterior from "@/assets/shop-exterior.jpg";
import coffeeBean from "@/assets/coffee-bean.png";

/* ───────── Menu data — strictly from the printed booklet ───────── */

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
  ["Mocca", "180 ml", "11 lei"],
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
];

const freshuri = [
  ["Fresh Simplu", "250 ml", "10 lei"],
  ["Fresh Mixt", "250 ml", "12 lei"],
];

const reviews = [
  { name: "Borsi István", time: "acum un an",
    text: "Cupe de înghețată decorative și foarte gustoase. Servesc și cafea, gofre și limonade.", rating: 5 },
  { name: "Emma Rigo", time: "acum o lună",
    text: "Înghețata aici este foarte bună. Și au grijă de animalele tale (ex. îi dau apă).", rating: 5 },
  { name: "Marian Pijen", time: "acum 4 ani",
    text: "Foarte bună înghețata 👌", rating: 5 },
];

/* ───────── Reusable menu row ───────── */

const MenuRow = ({ name, qty, price, dark = false }: { name: string; qty: string; price: string; dark?: boolean }) => (
  <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 py-2.5">
    <div className="flex min-w-0 items-baseline gap-2.5">
      <span className="min-w-0 font-display text-xl leading-[1.05] break-words md:text-2xl">{name}</span>
      <span className={`shrink-0 text-xs uppercase tracking-widest ${dark ? "text-cream/50" : "text-cocoa/50"}`}>{qty}</span>
    </div>
    <span className="row-span-2 shrink-0 self-center whitespace-nowrap pl-2 font-display text-xl md:text-2xl">{price}</span>
    <span
      className="col-start-1 min-w-0"
      style={{ borderBottom: `2px dotted ${dark ? "hsl(var(--cream) / 0.25)" : "hsl(var(--cocoa) / 0.3)"}` }}
    />
  </div>
);

/* ───────── Page ───────── */

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero scroll progression — image stays put, fades out as you scroll.
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const p = Math.min(scrollY / (vh * 0.9), 1);
  const coneOpacity = Math.max(0, 1 - p * 1.1);
  const textOpacity = Math.max(0, 1 - p * 1.2);
  const ctaOpacity = Math.max(0, 1 - p * 1.6);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ───── NAV ───── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/75 border-b border-cocoa/5 overflow-visible">
        <div className="container flex items-center justify-between py-3 sm:py-4">
          <a href="#top" className="flex items-center gap-2 sm:gap-2.5 group" aria-label="Gelateria Aniela — acasă">
            <img
              src={logoAniela}
              alt="Gelateria Aniela — înghețată tradițională"
              width={180}
              height={180}
              className="h-16 sm:h-20 md:h-24 w-auto -my-6 transition-transform group-hover:-rotate-3"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium">
            <a href="#inghetata" className="hover:text-rose transition-colors">Înghețată</a>
            <a href="#cafea" className="hover:text-rose transition-colors">Cafea</a>
            <a href="#patiserie" className="hover:text-rose transition-colors">Patiserie</a>
            <a href="#bauturi" className="hover:text-rose transition-colors">Băuturi</a>
            <a href="#vizita" className="hover:text-rose transition-colors">Vizită</a>
          </nav>
          <a href="tel:+40744601167" className="hidden lg:inline-flex">
            <Button variant="default" className="rounded-full bg-cocoa hover:bg-cocoa/90 text-cream gap-2 text-xs uppercase tracking-widest">
              <Phone className="h-4 w-4" /> 0744 601 167
            </Button>
          </a>
          {/* Mobile / tablet: compact phone button */}
          <a href="tel:+40744601167" className="lg:hidden" aria-label="Sună 0744 601 167">
            <Button variant="default" size="icon" className="rounded-full h-10 w-10 bg-cocoa hover:bg-cocoa/90 text-cream">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section
        id="top"
        className="relative h-[100svh] min-h-[640px] w-full grain overflow-hidden bg-gradient-paper"
      >
        {/* soft color blobs */}
        <div className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 sm:h-80 sm:w-80 bg-coral/30 blob animate-float-slow" />
        <div className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 sm:h-96 sm:w-96 bg-mint/30 blob-2 animate-float-slower" />
        <div className="pointer-events-none absolute bottom-10 left-1/4 h-48 w-48 sm:h-64 sm:w-64 bg-mustard/20 blob animate-float-slow" />

        {/* Top chip */}
        <div
          className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2 rounded-full border border-cocoa/15 bg-cream/85 px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] whitespace-nowrap"
          style={{ opacity: textOpacity }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
          <span className="hidden sm:inline">Bistrița · Piața Unirii 3 · din 2014</span>
          <span className="sm:hidden">Bistrița · din 2014</span>
        </div>

        {/* GELATERIA — behind */}
        <div
          className="absolute inset-x-0 top-[28%] sm:top-[24%] z-10 text-center pointer-events-none px-2"
          style={{ opacity: textOpacity }}
        >
          <div
            className="font-display text-cocoa leading-[0.85] tracking-[0.04em] whitespace-nowrap"
            style={{ fontSize: "clamp(3.5rem, 17vw, 17rem)" }}
          >
            GELATERIA
          </div>
        </div>

        {/* THE CONE — centered, scoops only (bottom 42% of source = cone tip clipped). Sits on top of the ANIELA wordmark to ground the composition. */}
        <img
          src={heroCone}
          alt="Cupă de înghețată artizanală — zmeură, fistic și mango"
          width={1024}
          height={1536}
          className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none block"
          style={{
            top: "18%",
            height: "88%",
            width: "auto",
            maxWidth: "none",
            clipPath: "inset(0 0 42% 0)",
            WebkitClipPath: "inset(0 0 42% 0)",
            opacity: coneOpacity,
            filter: "drop-shadow(0 30px 50px hsl(350 70% 40% / 0.30))",
            transition: "opacity 80ms linear",
          }}
        />

        {/* ANIELA + tagline + CTAs — fixed at the bottom of the hero */}
        <div
          className="absolute inset-x-0 bottom-6 sm:bottom-8 z-30 px-4"
        >
          <div className="text-center pointer-events-none" style={{ opacity: textOpacity }}>
            <div
              className="font-display text-rose leading-[0.85] tracking-[0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(3.25rem, 16vw, 16rem)" }}
            >
              ANIELA
            </div>
            <div
              className="font-script text-cocoa/75 mt-2 sm:mt-3"
              style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.7rem)" }}
            >
              cafenea · patiserie · gelato bar
            </div>
          </div>

          <div
            className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            style={{ opacity: ctaOpacity }}
          >
            <a href="#meniu">
              <Button size="lg" className="rounded-full bg-rose hover:bg-rose-deep text-cream shadow-pop h-11 sm:h-12 px-5 sm:px-7 text-[10px] sm:text-xs uppercase tracking-[0.2em] gap-2 group">
                Vezi meniul
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#vizita">
              <Button size="lg" variant="outline" className="rounded-full border-cocoa text-cocoa hover:bg-cocoa hover:text-cream h-11 sm:h-12 px-5 sm:px-7 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Găsește-ne
              </Button>
            </a>
            <div className="w-full sm:w-auto sm:ml-4 flex items-center justify-center gap-2 sm:gap-3 text-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rose text-rose" />
                ))}
              </div>
              <span className="font-display text-lg">4,8</span>
              <span className="text-cocoa/55 text-[10px] sm:text-xs uppercase tracking-widest">634 recenzii</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARQUEE ───── */}
      <section className="bg-cocoa text-cream py-5 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-10 px-5 font-display text-2xl md:text-3xl tracking-[0.15em] uppercase">
              {["Cafea de specialitate", "Patiserie de casă", "Înghețată artizanală", "Waffles", "Ceaiuri & Fresh-uri", "Gelato Bar"].map((w, i) => (
                <span key={i} className="flex items-center gap-10">
                  {w}
                  <span className="h-2 w-2 rounded-full bg-coral" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ───── INTRO TRIPLET — three pillars, equal weight ───── */}
      <section id="meniu" className="py-20 md:py-28 bg-paper grain">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">— Bun venit —</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Trei mese reunite<br/>sub același acoperiș
            </h2>
            <p className="mt-5 text-cocoa/70 leading-relaxed">
              Cafenea de dimineață, patiserie la prânz, gelato la apus. Fiecare pagină a meniului
              nostru e o invitație separată — fără ierarhie, fără grabă.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Coffee, title: "Cafea", note: "100% Arabica, prăjită proaspăt", color: "bg-mustard/30", href: "#cafea" },
              { icon: Cake, title: "Patiserie", note: "Pavlova, Brownie, Profiterol, Tartă", color: "bg-blush", href: "#patiserie" },
              { icon: IceCream, title: "Înghețată", note: "Sortimente artizanale rotative", color: "bg-mint/40", href: "#inghetata", cardClassName: "text-center sm:text-left", iconClassName: "mx-auto sm:mx-0", titleClassName: "mx-auto text-center sm:mx-0 sm:text-left" },
            ].map(({ icon: Icon, title, note, color, href, titleClassName, cardClassName, iconClassName }) => (
              <a key={title} href={href}
                 className={`group relative overflow-hidden rounded-3xl ${color} p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cream ${cardClassName ?? ""}`}>
                <Icon className={`h-10 w-10 text-cocoa ${iconClassName ?? ""}`} strokeWidth={1.5} />
                <h3 className={`mt-6 font-display text-2xl md:text-4xl ${titleClassName ?? ""}`}>{title}</h3>
                <p className="mt-2 text-cocoa/70">{note}</p>
                <ArrowRight className="absolute bottom-8 right-8 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CAFEA ───── */}
      <section id="cafea" className="relative overflow-hidden py-24 md:py-32 bg-mustard/15 grain">
        {/* Floating coffee beans */}
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none absolute top-12 left-[6%] w-16 md:w-20 opacity-80 -rotate-12 animate-float-slow" />
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none absolute top-1/3 right-[4%] w-20 md:w-28 opacity-70 rotate-[25deg] animate-float-slower" />
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none absolute bottom-16 left-[10%] w-12 md:w-16 opacity-60 rotate-[40deg] animate-float-slower" />
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none absolute bottom-24 right-[12%] w-14 md:w-20 opacity-75 -rotate-[20deg] animate-float-slow" />
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none hidden md:block absolute top-1/2 left-[2%] w-10 opacity-50 rotate-[60deg] animate-float-slow" />
        <img src={coffeeBean} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none select-none hidden md:block absolute top-8 right-1/3 w-12 opacity-60 -rotate-[35deg] animate-float-slower" />

        <div className="container relative grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 xl:col-span-5 xl:max-w-[28rem]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">01 — De băut</p>
            <h2 className="mt-4 font-display leading-[0.95] pb-2" style={{ fontSize: "clamp(2rem, 4.2vw, 3.75rem)", wordBreak: "keep-all", overflowWrap: "normal", hyphens: "none" }}>
              Cafea de<br/>specialitate
            </h2>
            <p className="mt-6 text-cocoa/70 leading-relaxed max-w-md">
              Cafea 100% Arabica, de origine, proaspăt prăjită și preparată cu grijă. Cafeaua de
              specialitate este cultivată în zone cu climat special și se remarcă prin boabele cu
              corpul plin, cu note deosebite de gust și un număr redus de defecte.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-cocoa text-cream px-5 py-3 font-script text-2xl">
              + prăjitura casei
            </div>
            <p className="mt-3 text-xs text-cocoa/60 max-w-sm">
              Cine e harnic și își bea cafeaua înainte de ora 12<sup>00</sup> primește o prăjitură
              din partea casei.
            </p>
          </div>

          <div className="lg:col-span-8 xl:col-span-7">
            <div className="grid gap-x-10 xl:grid-cols-2">
              {cafea.map(([n, ml, p]) => <MenuRow key={n} name={n} qty={ml} price={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ───── PATISERIE + WAFFLES ───── */}
      <section id="patiserie" className="py-24 md:py-32 bg-paper grain">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">02 — Dulce</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Patiserie</h2>
            <span className="font-script text-rose text-3xl">de casă</span>
            <div className="mt-2 h-px w-20 bg-rose" />
            <div className="mt-8">
              {patiserie.map(([n, g, p]) => <MenuRow key={n} name={n} qty={g} price={p} />)}
            </div>

            <div className="mt-10 relative overflow-hidden rounded-3xl aspect-[5/3] shadow-cream">
              <img src={dessertBrownie} alt="Pavlova cu fructe de pădure și fistic" loading="lazy"
                   className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">03 — # Waffles</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Waffles</h2>
            <span className="font-script text-mint-deep text-3xl">crocante & calde</span>
            <div className="mt-2 h-px w-20 bg-mint-deep" />
            <div className="mt-8">
              {waffles.map(([n, g, p]) => <MenuRow key={n} name={n} qty={g} price={p} />)}
            </div>

            <div className="mt-10 relative overflow-hidden rounded-3xl aspect-[5/3] shadow-cream">
              <img src={dessertWaffle} alt="Waffle cu fructe, înghețată și ciocolată" loading="lazy"
                   className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ───── ÎNGHEȚATĂ ───── */}
      <section id="inghetata" className="py-24 md:py-32 bg-coral/25 relative grain overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-mint/30 blob animate-float-slower" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-rose/20 blob-2 animate-float-slow" />

        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 mb-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cocoa/70">04 — Cupele casei</p>
              <h2 className="mt-4 font-display leading-[0.95] pb-2" style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}>
                Înghețată<br/><span className="font-script text-rose normal-case tracking-normal leading-[1.1] inline-block pb-1" style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}>artizanală</span>
              </h2>
            </div>
            <div className="lg:col-span-5 self-end">
              <p className="text-cocoa/75 leading-relaxed">
                Pentru a alege sortimente de înghețată pe care doriți să le serviți la cornet sau la
                pahar, vă invităm să comandați de la vitrină. Cupele speciale sunt rezultatul
                caracteristicilor și compoziției valorilor pe care sunt cultivați aborii.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-cream md:translate-y-6">
              <img src={dessertSundae} alt="Cupă specială Grandissimo" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-cream">
              <img src={dessertPavlova} alt="Cupă cu înghețată și zmeură proaspătă" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="rounded-3xl bg-cream p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-script text-rose text-3xl">Înghețată</p>
                <p className="mt-3 text-cocoa/75 leading-relaxed text-sm">
                  Pentru a alege sortimentele de înghețată pe care doriți să le serviți la cornet
                  sau la pahar, vă invităm să comandați de la vitrină.
                </p>
              </div>
              <div>
                <p className="font-script text-mint-deep text-3xl">Torturi de înghețată</p>
                <p className="mt-3 text-cocoa/75 leading-relaxed text-sm">
                  Trei gusturi de înghețată în combinații sau delicioase de fructe, ciocolată sau
                  cremoșit. Tortul este ambalat în cutii izotermice și poate avea greutăți cuprinse
                  între 0,500 kg și 1,2 kg.
                </p>
              </div>
              <div>
                <p className="font-script text-cocoa text-3xl">Livrări la domiciliu</p>
                <p className="mt-3 text-cocoa/75 leading-relaxed text-sm">
                  Comandați online prin <span className="font-medium">delic.io</span> și
                  înghețata ajunge la ușa dumneavoastră în jur de 25 de minute.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-cocoa/10">
              <p className="font-script text-rose text-3xl">Gelato Bar</p>
              <p className="mt-3 text-cocoa/75 leading-relaxed text-sm max-w-2xl">
                Venim cu drag la evenimentul tău, aducând cu noi propria vitrină cu sortimente
                delicioase de înghețată naturală.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── BĂUTURI: CEAIURI + RĂCORITOARE ───── */}
      <section id="bauturi" className="py-24 md:py-32 bg-mint/25 grain">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">05 — Ceaiuri</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Ceaiuri</h2>
            <span className="font-script text-mint-deep text-3xl">de la dimineață până seara</span>
            <div className="mt-2 h-px w-20 bg-mint-deep" />
            <div className="mt-8">
              {ceaiuri.map(([n, g, p]) => <MenuRow key={n} name={n} qty={g} price={p} />)}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">06 — Răcoritoare</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Răcoritoare</h2>
            <span className="font-script text-rose text-3xl">& fresh-uri</span>
            <div className="mt-2 h-px w-20 bg-rose" />
            <div className="mt-8">
              {racoritoare.map(([n, g, p]) => <MenuRow key={n} name={n} qty={g} price={p} />)}
            </div>

            <p className="mt-10 font-script text-mint-deep text-3xl">Fresh-uri</p>
            <p className="text-xs uppercase tracking-[0.25em] text-cocoa/60 mt-1">stoarse pe loc</p>
            <div className="mt-4">
              {freshuri.map(([n, g, p]) => <MenuRow key={n} name={n} qty={g} price={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ───── DESPRE ───── */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 relative">
            <div className="absolute -inset-6 bg-mint/30 blob animate-float-slow" />
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-cream">
              <img src={shopInterior} alt="În interiorul Gelateriei Aniela din Bistrița"
                   width={1536} height={1024} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">07 — Despre noi</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Un colțișor de<br/><span className="font-script text-rose normal-case text-4xl md:text-6xl tracking-normal">Italie</span> în Piața Unirii
            </h2>
            <p className="mt-6 text-cocoa/75 leading-relaxed">
              Aniela a deschis ușa cu o singură regulă: nimic nu pleacă de la tejghea dacă nu ar
              servi-o propriei familii. Ingrediente reale, fără scurtături — și un bol cu apă pentru
              fiecare oaspete cu patru lăbuțe.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "4,8★", v: "634 recenzii" },
                { k: "10–60", v: "min petrecute aici" },
                { k: "din 2014", v: "în Bistrița" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-rose pl-4">
                  <div className="font-display text-2xl">{s.k}</div>
                  <div className="text-xs text-cocoa/60 mt-1 uppercase tracking-widest">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── RECENZII ───── */}
      <section className="py-24 md:py-32 bg-cream grain">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">08 — Ce spun clienții</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Dulceață<br/>
              <span className="font-script text-rose normal-case text-4xl md:text-6xl tracking-normal">de cinci stele</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={r.name}
                className={`relative bg-paper rounded-[2rem] p-8 shadow-cream hover:shadow-pop transition-all duration-500 hover:-translate-y-2 ${i === 1 ? "md:-translate-y-6" : ""}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-rose text-rose" />
                  ))}
                </div>
                <blockquote className="font-script text-2xl leading-snug">„{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-cocoa/50 text-xs uppercase tracking-widest">{r.time}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── VIZITĂ ───── */}
      <section id="vizita" className="py-24 md:py-32 bg-cocoa text-cream relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] bg-rose/15 blob animate-float-slower" />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-coral">09 — Treci pe la noi</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
                Ne vedem la<br/>
                <span className="font-script text-coral normal-case text-4xl md:text-6xl tracking-normal">tejghea</span>
              </h2>
              <p className="mt-6 text-cream/75 max-w-md">
                Deschis zilnic de la 11:00. Intră, comandă la pachet sau așază-te la una dintre
                măsuțele noastre și privește piața.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-coral shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg">Piața Unirii 3</div>
                    <div className="text-cream/60 text-sm">420036 Bistrița, România</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-coral shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg">Program</div>
                    <div className="text-cream/60 text-sm">Zilnic · 11:00 — 22:00</div>
                  </div>
                </div>
                <a href="tel:+40744601167" className="flex gap-4 group">
                  <Phone className="h-6 w-6 text-coral shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-lg group-hover:text-coral transition-colors">0744 601 167</div>
                    <div className="text-cream/60 text-sm">Sună-ne pentru comenzi speciale</div>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="https://www.google.com/maps?q=Gelateria+Aniela+Bistrita" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-coral hover:bg-coral/90 text-cocoa h-12 px-7 text-xs uppercase tracking-[0.2em]">
                    Vezi pe hartă
                  </Button>
                </a>
                <a href="https://www.instagram.com/gelateriaaniela/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-12 w-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-cocoa transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/gelateriaaniela/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-12 w-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-cocoa transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-mint/30 blob animate-float-slow" />
              <div className="relative overflow-hidden rounded-[2rem] aspect-square shadow-pop border-4 border-cream/10">
                <iframe title="Locația Gelateriei Aniela"
                  src="https://www.google.com/maps?q=Piata+Unirii+3,+Bistrita&output=embed"
                  className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="bg-cream py-6 border-t border-cocoa/10 overflow-visible">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <img src={logoAniela} alt="Gelateria Aniela" className="h-24 sm:h-28 w-auto -my-8" />
          <p className="text-sm text-cocoa/60">Cafenea · Patiserie · Gelato Bar — Bistrița</p>
          <p className="text-xs text-cocoa/50">© {new Date().getFullYear()} · Toate drepturile rezervate</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
