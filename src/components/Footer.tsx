import { Phone, Mail, MapPin, Globe, Send, AtSign } from "lucide-react";

const socialIcons = [Globe, AtSign, Send];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                ASIA<span className="text-primary">TECH</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Smart gear and superior accessories — crafted for the next generation of creators.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <InfoRow icon={Phone} text="+91 99670 24321" href="tel:+919967024321" />
            <InfoRow icon={Mail} text="asiatech40@gmail.com" href="mailto:asiatech40@gmail.com" />
            <InfoRow icon={MapPin} text="Mumbai, Maharashtra, India" />
          </div>

          <div className="flex items-start gap-3 md:justify-end">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_var(--glow)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Asia Tech. All rights reserved.</p>
          <p>Crafted with precision in Mumbai.</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="https://whatsapp.com/channel/0029VafUxNW4yltSxLEHVn3Z"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_var(--glow)]"
        >
          Join our WhatsApp Channel for latest tech updates
        </a>
      </div>
    </footer>
  );
}

function InfoRow({
  icon: Icon,
  text,
  href,
}: {
  icon: typeof Phone;
  text: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
      <Icon size={14} className="text-primary" />
      {text}
    </span>
  );
  return href ? <a href={href} className="block">{content}</a> : <div>{content}</div>;
}
