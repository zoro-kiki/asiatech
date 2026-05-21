import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl glass-strong p-8 shadow-[var(--shadow-card)] sm:p-14"
        >
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Get in touch</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let's build something <span className="text-gradient">powerful.</span>
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              window.open(
                "https://wa.me/919967024321?text=Hello%20ASIA%20TECH,%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
                "_blank"
              );
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <Field label="Name" type="text" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@email.com" />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what you need…"
                className="w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:bg-input/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--glow)]"
              >
                {sent ? "Message sent ✓" : (
                  <>
                    Send Message
                    <Send size={15} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:bg-input/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
