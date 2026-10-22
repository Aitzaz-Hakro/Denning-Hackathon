import { NAV_LINKS } from "./content";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./icons";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    Icon: FacebookIcon,
  },
  {
    label: "X",
    href: "https://x.com",
    Icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    Icon: LinkedInIcon,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="wollo-footer">
      <div className="wollo-container">
        <div className="wollo-footer-row">
          <nav className="wollo-footer-nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="wollo-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Wollo on ${label}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="wollo-footer-bottom">
          <a className="wollo-wordmark" href="#top" aria-label="Wollo, back to top">
            wollo
          </a>
          <p>&copy; {new Date().getFullYear()} Wollo. Social media in one place.</p>
        </div>
      </div>
    </footer>
  );
}
