import { Analytics } from "./_components/analytics";
import { FinalCta } from "./_components/cta";
import { Faq } from "./_components/faq";
import { Hero } from "./_components/hero";
import { Integrations } from "./_components/integrations";
import { Metrics } from "./_components/metrics";
import { SmoothScroll } from "./_components/motion";
import { Process } from "./_components/process";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { Statement } from "./_components/statement";
import { Testimonials } from "./_components/testimonials";

export default function InspirationThreePage() {
  return (
    <div className="wollo-root">
      <SmoothScroll>
        <div className="wollo-shell">
          <a className="wollo-skip" href="#main">
            Skip to content
          </a>

          <SiteHeader />

          <main id="main">
            <Hero />
            <Analytics />
            <Integrations />
            <Process />
            <Statement />
            <Metrics />
            <Testimonials />
            <Faq />
            <FinalCta />
          </main>

          <SiteFooter />
        </div>
      </SmoothScroll>
    </div>
  );
}
