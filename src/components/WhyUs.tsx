import { motion } from "framer-motion";
import { Sparkles, Wifi, Truck, ShieldCheck } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Premium Quality", desc: "Sourced and tested to meet the highest standards of build and finish." },
  { icon: Wifi, title: "Reliable Connectivity", desc: "Stable performance across every device, every session, every time." },
  { icon: Truck, title: "Fast Delivery", desc: "Quick dispatch across India with secure, protected packaging." },
  { icon: ShieldCheck, title: "Trusted Tech Partner", desc: "Backed by responsive support and a no-nonsense warranty." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Why Asia Tech</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built around <span className="text-gradient">trust</span> and craft.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:glow-border"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary/25 group-hover:shadow-[0_0_24px_var(--glow)]">
                <f.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
