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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-cocoa/5">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-raspberry text-cream font-display italic text-xl shadow-pop transition-transform group-hover:rotate-12">A</span>
            <span className="font-display text-xl tracking-tight">
              Gelateria <em className="text-raspberry not-italic font-medium">Aniela</em>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#meniu" className="hover:text-raspberry transition-colors">Meniu</a>
            <a href="#cupe" className="hover:text-raspberry transition-colors">Cupe</a>
            <a href="#recenzii" className="hover:text-raspberry transition-colors">Recenzii</a>
            <a href="#vizita" className="hover:text-raspberry transition-colors">Vizită</a>
          </nav>
          <a href="tel:+40744601167" className="hidden md:inline-flex">
            <Button variant="default" className="rounded-full bg-cocoa hover:bg-cocoa/90 text-cream gap-2">
              <Phone className="h-4 w-4" /> 0744 601 167
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32 grain">
        <div className="absolute inset-0 -z-10 bg-gradient-scoop" />
        <div className="pointer-events-none absolute -top-10 -left-20 h-72 w-72 bg-mango/40 blob animate-float-slow" />
        <div className="pointer-events-none absolute top-40 -right-16 h-80 w-80 bg-pistachio/40 blob-2 animate-float-slower" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 bg-raspberry/20 blob animate-float-slow" />

        <div className="container relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-cocoa/15 bg-cream/80 px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
              <span className="h-2 w-2 rounded-full bg-raspberry animate-pulse" />
              Bistrița · Piața Unirii 3
            </div>

            <h1 className="mt-6 font-display font-medium text-[clamp(3rem,9vw,8.5rem)] leading-[0.88] tracking-tight text-balance">
              Cupe <em className="italic text-raspberry">cu</em>
              <br />
              gust de
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">vară.</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-mango/70 -z-0 rounded-full" />
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-cocoa/75 leading-relaxed">
              Înghețată artizanală, sorbeturi și deserturi în inima Bistriței. Făcute pe îndelete,
              servite repede — și mereu cu o întâmpinare prietenoasă, inclusiv pentru prietenii cu blană.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#meniu">
                <Button size="lg" className="rounded-full bg-raspberry hover:bg-raspberry-deep text-cream shadow-pop h-14 px-8 text-base gap-2 group">
                  Vezi meniul
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#vizita">
                <Button size="lg" variant="outline" className="rounded-full border-cocoa text-cocoa hover:bg-cocoa hover:text-cream h-14 px-8 text-base">
                  Găsește gelateria
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-mango text-mango" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-display text-xl font-semibold">4,8</span>
                <span className="text-cocoa/60"> · 634 recenzii Google</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:col-span-5 relative animate-rise [animation-delay:200ms]">
            <div className="absolute -inset-6 bg-raspberry/10 blob animate-float-slower" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-pop">
              <img
                src={heroGelato}
                alt="Trei cupe colorate de înghețată — fistic, zmeură și mango — într-o napolitană"
                width={1536}
                height={1536}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-cocoa text-cream flex items-center justify-center shadow-cream animate-spin-slow">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text className="font-display fill-cream" fontSize="11" letterSpacing="2">
                  <textPath href="#circ">PROASPĂTĂ · ZILNIC · CU DRAG · DIN 2014 · </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute -top-4 -right-4 rotate-12 bg-mango text-cocoa font-display italic text-2xl px-5 py-3 rounded-2xl shadow-soft animate-wiggle">
              gelato!
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-cocoa text-cream py-6 overflow-hidden border-y-2 border-cocoa">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display italic text-3xl md:text-4xl">
              {["Înghețată artizanală", "Sorbeturi", "Gofre", "Limonate", "Cafea", "Cupe speciale"].map((w, i) => (
                <span key={i} className="flex items-center gap-12">
                  {w}
                  <span className="h-3 w-3 rounded-full bg-mango" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MENIU — paper-menu reference */}
      <section id="meniu" className="py-24 md:py-36 relative bg-blush/40 grain overflow-hidden">
        {/* Vertical hand-drawn label like the menu */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <span className="font-display italic text-cocoa/30 text-7xl tracking-[0.3em]">ÎNGHEȚATĂ</span>
        </div>

        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-5">
              <p className="text-xs font-medium tracking-widest uppercase text-raspberry">01 — Sortimente</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Peste douăzeci de <em className="italic">cupe</em>, niciun compromis.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-lg text-cocoa/75 leading-relaxed">
                Înghețata noastră este preparată în fiecare dimineață cu lapte din ferme locale,
                fructe adevărate și răbdare ca la bunica. Sorbeturile sunt fără lactate, vibrant colorate
                și incredibil de răcoritoare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {flavors.map((f, i) => (
              <article
                key={f.name}
                className="group relative overflow-hidden rounded-[2rem] bg-card shadow-cream transition-all duration-500 hover:shadow-pop hover:-translate-y-2"
                style={{ animationDelay: `${i * 80}ms` }}
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
                    <h3 className="font-display text-2xl">{f.name}</h3>
                    <span className={`h-3 w-3 rounded-full ${f.color}`} />
                  </div>
                  <p className="mt-1 text-sm text-cocoa/60">{f.note}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Price strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { qty: "1 cupă", price: "8 lei" },
              { qty: "2 cupe", price: "14 lei" },
              { qty: "3 cupe", price: "20 lei" },
              { qty: "Cupă specială", price: "28 lei" },
            ].map((p) => (
              <div key={p.qty} className="rounded-2xl border border-cocoa/15 bg-cream px-5 py-4 flex items-baseline justify-between">
                <span className="text-sm text-cocoa/70">{p.qty}</span>
                <span className="font-display text-2xl">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUPE — house specialties styled after the paper menu */}
      <section id="cupe" className="py-24 md:py-36 bg-cocoa text-cream relative grain overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 bg-raspberry/30 blob animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 bg-pistachio/20 blob-2 animate-float-slower" />

        <div className="container relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-mango">02 — Cupele casei</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight max-w-3xl">
                Gofre, coppe și <em className="italic text-mango">limonate</em> care fac masa să aplaude.
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
                      <h3 className="font-display text-3xl">{d.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-cocoa/50">{d.grams}</span>
                    </div>
                    <span className="font-display text-xl text-raspberry">{d.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-cocoa/70 leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Tiny menu list — echo of paper menu names */}
          <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl text-cream/90">
            {[
              ["Banana Split", "400 g", "19 lei"],
              ["Fruttissima", "280 g", "19 lei"],
              ["Pinocchio", "130 g", "13 lei"],
              ["Yogo Macaroons Gelato", "160 g", "17 lei"],
              ["Choco Goodness", "235 g", "15 lei"],
              ["Hot Berry Gelato", "230 g", "15,5 lei"],
            ].map(([n, g, p]) => (
              <div key={n} className="flex items-baseline gap-3 border-b border-cream/15 py-3">
                <span className="font-display italic text-lg">{n}</span>
                <span className="text-xs text-cream/50">{g}</span>
                <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-4px]" />
                <span className="font-display">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section className="py-24 md:py-36 relative">
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
            <p className="text-xs font-medium tracking-widest uppercase text-raspberry">03 — Despre noi</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Un colțișor de <em className="italic">Italie</em> în Piața Unirii.
            </h2>
            <p className="mt-6 text-lg text-cocoa/75 leading-relaxed">
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
                  <div className="font-display text-3xl">{s.k}</div>
                  <div className="text-sm text-cocoa/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENZII */}
      <section id="recenzii" className="py-24 md:py-36 bg-blush/40 relative grain">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-raspberry">04 — Ce spun clienții</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
              Dulceață <em className="italic">de cinci stele</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className={`relative bg-cream rounded-[2rem] p-8 shadow-cream hover:shadow-pop transition-all duration-500 hover:-translate-y-2 ${
                  i === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-mango text-mango" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug">„{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-cocoa/50">{r.time}</span>
                </figcaption>
                <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-raspberry text-cream flex items-center justify-center font-display italic text-lg shadow-pop">
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
              <p className="text-xs font-medium tracking-widest uppercase text-mango">05 — Treci pe la noi</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Ne vedem la <em className="italic text-mango">tejghea</em>.
              </h2>
              <p className="mt-6 text-lg text-cream/75 max-w-md">
                Deschis zilnic de la 11:00. Intră, comandă la pachet sau așază-te la una dintre
                măsuțele noastre și privește piața.
              </p>

              <div className="mt-10 space-y-5">
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
                  <Button size="lg" className="rounded-full bg-mango hover:bg-mango/90 text-cocoa h-14 px-8">
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
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-raspberry text-cream font-display italic text-xl">A</span>
            <span className="font-display text-lg">Gelateria Aniela</span>
          </div>
          <p className="text-sm text-cocoa/60 flex items-center gap-2">
            <Cookie className="h-4 w-4" /> Făcută cu lapte, fructe și drag, în Bistrița.
          </p>
          <p className="text-xs text-cocoa/50">© {new Date().getFullYear()} · Toate drepturile rezervate</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
