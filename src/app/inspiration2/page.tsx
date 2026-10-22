import { FinalCta } from "./_components/cta";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { SmoothScroll } from "./_components/motion";
import { Solution } from "./_components/solution";
import { Testimonial } from "./_components/testimonial";

export default function InspirationTwoPage() {
  return (
    <div className="cs-root">
      <SmoothScroll>
        <div className="cs-shell">
          <a className="cs-skip" href="#main">
            Skip to content
          </a>

          <Header />

          <main id="main">
            <Hero />
            <Solution />
            <Testimonial />
            <FinalCta />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}
