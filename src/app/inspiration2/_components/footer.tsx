import { FOOTER_GROUPS } from "./content";
import {
  CompsupsLogo,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./icons";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer id="contact" className="cs-footer">
      <div className="cs-footer-top">
        <div className="cs-footer-brand">
          <CompsupsLogo />
          <p>
            One calm workspace for the people, payroll, hiring, and numbers
            that keep your company moving.
          </p>
          <a href="mailto:hello@compsups.com">hello@compsups.com</a>
        </div>

        <div className="cs-footer-groups">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="cs-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Compsups. All rights reserved.</p>

        <div className="cs-footer-bottom-actions">
          <div className="cs-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Compsups on ${label}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a className="cs-back-top" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
