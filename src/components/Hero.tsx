import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mousepad from "@/assets/product-mousepad.jpg";
import hdmi from "@/assets/product-hdmi.jpg";
import mouse from "@/assets/product-mouse.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Ambient backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>

          <a
            href="https://whatsapp.com/channel/0029VafUxNW4yltSxLEHVn3Z"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-[0_0_20px_var(--glow)]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            🔥 FOLLOW ASIA TECH UPDATES
          </a>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            ASIA
            <br />
            <span className="text-gradient glow-text">TECH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-display text-xl font-light text-foreground/80 sm:text-2xl"
          >
            Smart Gear. Superior Performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 max-w-md text-base text-muted-foreground"
          >
            Precision-engineered accessories built for creators, gamers and
            professionals who refuse to compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--glow)]"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919967024321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-card/60"
            >
              <MessageCircle size={16} />
              Contact on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right – floating product collage */}
        <div className="relative h-[480px] lg:h-[600px]">
          <FloatingProduct
            src={mouse}
            alt="Gaming mouse"
            className="absolute right-0 top-0 h-56 w-56 sm:h-72 sm:w-72"
            delay={0.2}
            float={12}
          />
          <FloatingProduct
            src={mousepad}
            alt="RGB mousepad"
            className="absolute bottom-10 left-0 h-48 w-64 sm:h-60 sm:w-80"
            delay={0.4}
            float={16}
          />
          <FloatingProduct
            src={hdmi}
            alt="HDMI cable"
            className="absolute bottom-0 right-8 h-40 w-40 sm:h-52 sm:w-52"
            delay={0.6}
            float={10}
          />
          <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}

function FloatingProduct({
  src,
  alt,
  className,
  delay,
  float,
}: {
  src: string;
  alt: string;
  className: string;
  delay: number;
  float: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -float, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full overflow-hidden rounded-2xl glass glow-border"
      >
        <img
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
