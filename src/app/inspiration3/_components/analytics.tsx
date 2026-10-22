"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { AUDIENCE, HASHTAGS } from "./content";
import { gsap, useGSAP } from "./motion";

const RANGES = ["3 days", "1 week", "1 month", "3 months", "6 months", "1 year"];

export function Analytics() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-analytics-head > *", {
          y: 26,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-analytics-head",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".wollo-analytics-card", {
          y: 34,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-analytics-grid",
            start: "top 82%",
            once: true,
          },
        });

        const line = scope.current?.querySelector<SVGPathElement>(".wollo-line-draw");
        if (line) {
          const length = line.getTotalLength();
          gsap.fromTo(
            line,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".wollo-optimizing",
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        const responseLine = scope.current?.querySelector<SVGPathElement>(
          ".wollo-response-draw",
        );
        if (responseLine) {
          const length = responseLine.getTotalLength();
          gsap.fromTo(
            responseLine,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".wollo-response-panel",
                start: "top 82%",
                once: true,
              },
            },
          );
        }
      });

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const grid = scope.current?.querySelector<HTMLElement>(
            ".wollo-analytics-grid",
          );
          const panels = gsap.utils.toArray<HTMLElement>(
            ".wollo-analytics-panel",
            scope.current,
          );

          if (!grid || panels.length < 2) return;

          gsap.set(panels.slice(1), { autoAlpha: 0, y: 34 });
          gsap.set(panels[0], { y: 0 });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: grid,
              start: "top 120px",
              end: "+=150%",
              pin: true,
              scrub: 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          for (let index = 1; index < panels.length; index += 1) {
            timeline
              .to(
                panels[index - 1],
                { autoAlpha: 0, y: -26, duration: 0.45, ease: "power2.in" },
                index * 1.35,
              )
              .fromTo(
                panels[index],
                { autoAlpha: 0, y: 26 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.55,
                  ease: "power2.out",
                },
                index * 1.35 + 0.55,
              );
          }

          timeline.to({}, { duration: 0.35 });

          return () => {
            gsap.set(panels, { clearProps: "all" });
          };
        },
      );

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="features" ref={scope} className="wollo-section wollo-analytics">
      <div className="wollo-container">
        <div className="wollo-analytics-head">
          <h2 className="wollo-section-title">
            <span>Advanced Analytics</span>
            <span>and Reporting</span>
          </h2>
          <p className="wollo-section-sub">
            One dashboard for reach, audience, and response time.
          </p>
        </div>

        <div className="wollo-analytics-grid">
          <div className="wollo-card wollo-analytics-card wollo-analytics-left">
            <div className="wollo-analytics-stack">
              <article className="wollo-analytics-panel">
                <div className="wollo-card-head">
                  <h3>Hashtag Performance</h3>
                  <span className="wollo-card-note">Last 30 days</span>
                </div>
                <div className="wollo-hashtag-board">
                  {HASHTAGS.map((tag) => (
                    <span
                      key={tag.label}
                      className={`wollo-hashtag wollo-hashtag-${tag.tone}`}
                      style={
                        {
                          left: tag.left,
                          top: tag.top,
                          transform: `rotate(${tag.rotate}deg)`,
                        } as CSSProperties
                      }
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="wollo-legend" aria-hidden="true">
                  <span className="wollo-legend-violet" />
                  <span className="wollo-legend-pink" />
                  <span className="wollo-legend-soft" />
                  <span className="wollo-legend-yellow" />
                </div>
              </article>

              <article className="wollo-analytics-panel">
                <div className="wollo-card-head">
                  <h3>Audience Demographics</h3>
                  <span className="wollo-card-note">Engaged followers</span>
                </div>
                <div className="wollo-audience">
                  {AUDIENCE.map((item) => (
                    <div key={item.label} className="wollo-audience-row">
                      <div
                        className="wollo-audience-bar"
                        style={{ width: `${item.value}%` }}
                      >
                        <span>{item.label}</span>
                        <strong>{item.value}%</strong>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="wollo-legend" aria-hidden="true">
                  <span className="wollo-legend-violet" />
                  <span className="wollo-legend-pink" />
                  <span className="wollo-legend-soft" />
                  <span className="wollo-legend-yellow" />
                </div>
              </article>

              <article className="wollo-analytics-panel wollo-response-panel">
                <div className="wollo-card-head">
                  <h3>Average Response Time</h3>
                </div>
                <div className="wollo-range wollo-range-sm">
                  <span className="is-active">by channel</span>
                  <span>by content type</span>
                </div>
                <div className="wollo-chart-wrap">
                  <svg
                    viewBox="0 0 520 240"
                    className="wollo-chart"
                    role="img"
                    aria-label="Average response time falls over six months, with a low point of 0.5 minutes."
                  >
                    <g stroke="#dad7e2" strokeDasharray="2 7" strokeWidth="1">
                      <line x1="18" y1="60" x2="502" y2="60" />
                      <line x1="18" y1="120" x2="502" y2="120" />
                      <line x1="18" y1="180" x2="502" y2="180" />
                    </g>
                    <path
                      className="wollo-response-draw"
                      d="M22 112C56 18 88 22 120 92s58 88 96 20 62-38 94 34 58 24 92-44 62-52 102-24"
                      fill="none"
                      stroke="#f5e923"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="388"
                      y1="54"
                      x2="388"
                      y2="196"
                      stroke="#b9b4c8"
                      strokeDasharray="2 6"
                    />
                    <circle cx="388" cy="96" r="7" fill="#17121f" />
                    <g transform="translate(336 62)">
                      <rect width="104" height="34" rx="17" fill="#17121f" />
                      <text
                        x="52"
                        y="22"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="13"
                        fontFamily="inherit"
                      >
                        0.5min
                      </text>
                    </g>
                    <g fill="#8c8797" fontSize="11" fontFamily="inherit">
                      <text x="22" y="228">Oct</text>
                      <text x="112" y="228">Nov</text>
                      <text x="202" y="228">Dec</text>
                      <text x="292" y="228">Jan</text>
                      <text x="382" y="228">Feb</text>
                      <text x="472" y="228">Mar</text>
                    </g>
                  </svg>
                </div>
              </article>
            </div>
          </div>

          <div className="wollo-card wollo-analytics-card wollo-optimizing">
            <div className="wollo-card-head">
              <h3>Optimizing Performance</h3>
              <span className="wollo-card-note">Live</span>
            </div>

            <div className="wollo-stat-tiles">
              <div className="wollo-stat-tile wollo-stat-yellow">
                <span>Engagement Rate</span>
                <strong>+44%</strong>
              </div>
              <div className="wollo-stat-tile wollo-stat-pink">
                <span>Followers</span>
                <strong>+57%</strong>
              </div>
            </div>

            <div className="wollo-range">
              {RANGES.map((range) => (
                <span
                  key={range}
                  className={range === "1 week" ? "is-active" : undefined}
                >
                  {range}
                </span>
              ))}
            </div>

            <div className="wollo-chart-wrap">
              <svg
                viewBox="0 0 520 240"
                className="wollo-chart"
                role="img"
                aria-label="Follower growth trends upward over one week."
              >
                <g stroke="#dad7e2" strokeDasharray="2 7" strokeWidth="1">
                  <line x1="18" y1="54" x2="502" y2="54" />
                  <line x1="18" y1="112" x2="502" y2="112" />
                  <line x1="18" y1="170" x2="502" y2="170" />
                  <line x1="18" y1="222" x2="502" y2="222" />
                </g>
                <line
                  x1="116"
                  y1="100"
                  x2="116"
                  y2="222"
                  stroke="#c9a6ba"
                  strokeDasharray="2 6"
                />
                <line
                  x1="366"
                  y1="76"
                  x2="366"
                  y2="222"
                  stroke="#c9a6ba"
                  strokeDasharray="2 6"
                />
                <path
                  className="wollo-line-draw"
                  d="M22 196C64 190 90 128 116 132s40 82 74 86 58-34 90-36 48 18 86-26 66-58 122-102"
                  fill="none"
                  stroke="#f044a6"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <g>
                  <circle cx="116" cy="132" r="6.5" fill="#f044a6" />
                  <circle cx="116" cy="132" r="2.6" fill="#ffffff" />
                  <g transform="translate(66 96)">
                    <rect width="78" height="30" rx="15" fill="#17121f" />
                    <text
                      x="39"
                      y="20"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontFamily="inherit"
                    >
                      52K
                    </text>
                  </g>
                </g>
                <g>
                  <circle cx="366" cy="104" r="6.5" fill="#f044a6" />
                  <circle cx="366" cy="104" r="2.6" fill="#ffffff" />
                  <g transform="translate(318 70)">
                    <rect width="78" height="30" rx="15" fill="#17121f" />
                    <text
                      x="39"
                      y="20"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontFamily="inherit"
                    >
                      55K
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
