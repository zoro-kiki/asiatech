import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import mousepad from "@/assets/product-mousepad.jpg";
import hdmi from "@/assets/product-hdmi.jpg";
import mouse from "@/assets/product-mouse.jpg";
import keyboard from "@/assets/product-keyboard.jpg";

const products = [
  {
    title: "RGB Pro Mousepad",
    desc: "Extended surface with ambient lighting for precision tracking.",
    image: mousepad,
  },
  {
    title: "Ultra HDMI 2.1 Cable",
    desc: "Braided 8K cable engineered for flawless signal integrity.",
    image: hdmi,
  },
  {
    title: "Wireless Gaming Mouse",
    desc: "Ultra-light shell, 26K DPI sensor, zero-latency response.",
    image: mouse,
  },
  {
    title: "Mechanical Keyboard",
    desc: "Hot-swap switches, aluminum frame, custom blue backlight.",
    image: keyboard,
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">
              Featured Collection
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Engineered for <span className="text-gradient">performance.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A curated lineup of accessories built to elevate every setup —
            tested, refined and ready to ship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass p-3 shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] sm:block sm:p-4"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-secondary/40 sm:h-auto sm:w-auto sm:aspect-square">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <div className="flex-1 p-1 sm:p-3 sm:pt-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <a
                  href={`https://wa.me/919967024321?text=Hello%20ASIA%20TECH,%20I%20want%20to%20buy%20${p.title}%20from%20your%20website.%20Please%20provide%20me%20with%20more%20details%20and%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_24px_var(--glow)]"
                >
                  <MessageCircle size={14} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
