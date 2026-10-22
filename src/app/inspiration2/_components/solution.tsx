"use client";

import { useRef } from "react";
import { DonutChart, SegmentedBar } from "./dashboard";
import { EMPLOYEE_SEGMENTS } from "./content";
import {
  ChevronRight,
  SolutionIcon,
  UsersIcon,
  WalletIcon,
} from "./icons";
import { gsap, useGSAP } from "./motion";

const SPENDING = {
  total: 48700,
  segments: [
    { label: "Operational Insurances", value: 29120, color: "#f26b4e" },
    { label: "Salary Employee", value: 9840, color: "#3bb273" },
    { label: "Others Category", value: 9640, color: "#f5c453" },
  ],
};

function EmployeePanel() {
  return (
    <div className="cs-float-panel cs-float-employee">
      <div className="cs-float-head">
        <span>
          <UsersIcon className="h-3 w-3" />
          Total Employee
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-2.5 w-2.5" />
        </span>
      </div>

      <div className="cs-float-employee-row">
        <div>
          <strong>978</strong>
          <span>Employee</span>
        </div>
        <div className="cs-float-growth">
          <span>From last year</span>
          <span className="cs-growth-pill">
            <span aria-hidden="true">↗</span> +43%
          </span>
        </div>
      </div>

      <SegmentedBar segments={EMPLOYEE_SEGMENTS} />
      <div className="cs-legend cs-legend-compact">
        {EMPLOYEE_SEGMENTS.map((segment) => (
          <span key={segment.label}>
            <i style={{ background: segment.color }} />
            {segment.label} ({segment.value}%)
          </span>
        ))}
      </div>
    </div>
  );
}

function DesignStagePanel() {
  return (
    <div className="cs-float-panel cs-float-design">
      <div className="cs-tag-row">
        <span className="cs-tag cs-tag-blue">#Design Team</span>
        <span className="cs-tag cs-tag-pink">#Priority Task</span>
      </div>
      <h4>Design System Stage</h4>
      <p>Design system includes fonts, colors, components, dev guide.</p>
      <div className="cs-progress-label">
        <span>Progress</span>
        <strong>78%</strong>
      </div>
      <div className="cs-progress">
        <span style={{ width: "78%" }} />
      </div>
    </div>
  );
}

function SpendingPanel() {
  return (
    <div className="cs-float-panel cs-float-spending">
      <div className="cs-float-head">
        <span>
          <WalletIcon className="h-3 w-3" />
          Top Spending Category
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-2.5 w-2.5" />
        </span>
      </div>

      <div className="cs-spending-body">
        <DonutChart
          total={SPENDING.total}
          segments={SPENDING.segments}
          label="USD Dollars"
          centerValue="$48.7k"
          size="5.8rem"
          thickness={10}
        />
        <div className="cs-spending-list">
          {SPENDING.segments.map((segment) => (
            <div key={segment.label}>
              <span>
                <i style={{ background: segment.color }} />
                {segment.label}
              </span>
              <strong>${segment.value.toLocaleString("en-US")}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SaldoPanel() {
  return (
    <div className="cs-float-panel cs-float-saldo">
      <div className="cs-float-head">
        <span>
          <WalletIcon className="h-3 w-3" />
          Your Saldo
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-2.5 w-2.5" />
        </span>
      </div>
      <div className="cs-saldo-row">
        <strong>$24,278.00</strong>
        <span className="cs-growth-pill">
          <span aria-hidden="true">↗</span> +8%
        </span>
      </div>
      <span className="cs-saldo-note">From last year</span>
      <div className="cs-saldo-list">
        <div>
          <span>
            <i className="cs-dot-green" /> Total Income
          </span>
          <strong>$63.7k</strong>
        </div>
        <div>
          <span>
            <i className="cs-dot-red" /> Total Expense
          </span>
          <strong>$39.5k</strong>
        </div>
      </div>
    </div>
  );
}

export function Solution() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cs-solution-heading", {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-solution-heading",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".cs-solution-card", {
          y: 40,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-solution-grid",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".cs-float-panel", {
          y: 28,
          autoAlpha: 0,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-solution-grid",
            start: "top 76%",
            once: true,
          },
        });

        gsap.from(".cs-solution-ghost", {
          autoAlpha: 0,
          scale: 0.97,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cs-solution-grid",
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="solution" ref={scope} className="cs-solution">
      <div className="cs-solution-inner">
        <div className="cs-solution-heading">
          <h2>
            Solution Multiple{" "}
            <span className="cs-solution-mark" aria-hidden="true">
              <SolutionIcon className="h-full w-full" />
            </span>{" "}
            Aspects
          </h2>
          <p>We finalize various aspects into one platform for your convenience.</p>
        </div>

        <div className="cs-solution-grid">
          <article className="cs-solution-card">
            <div className="cs-solution-stage">
              <div className="cs-solution-ghost cs-solution-ghost-a" aria-hidden="true" />
              <div className="cs-solution-ghost cs-solution-ghost-b" aria-hidden="true" />
              <EmployeePanel />
              <DesignStagePanel />
            </div>
            <div className="cs-solution-copy">
              <h3>Organized Employee</h3>
              <p>
                You can organize your employees such as employee data
                collection, hiring process and task management.
              </p>
            </div>
          </article>

          <article className="cs-solution-card">
            <div className="cs-solution-stage">
              <div className="cs-solution-ghost cs-solution-ghost-c" aria-hidden="true" />
              <div className="cs-solution-ghost cs-solution-ghost-d" aria-hidden="true" />
              <SpendingPanel />
              <SaldoPanel />
            </div>
            <div className="cs-solution-copy">
              <h3>Financial Management</h3>
              <p>
                You can manage your company&apos;s activity, financial
                operations, salaries and others.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
