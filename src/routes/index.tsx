import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Asia Tech — Smart Gear. Superior Performance." },
      {
        name: "description",
        content:
          "Asia Tech crafts premium tech accessories — mousepads, HDMI cables, gaming peripherals and more. Smart gear. Superior performance.",
      },
      { property: "og:title", content: "Asia Tech — Premium Tech Accessories" },
      {
        property: "og:description",
        content: "Precision-engineered tech accessories for creators, gamers and professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
