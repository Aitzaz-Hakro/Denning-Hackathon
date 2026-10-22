import type { ReactElement } from "react";
import {
  APPLICANTS,
  DASHBOARD_AVATARS,
  EMPLOYEE_SEGMENTS,
  FINANCIAL_MONTHS,
  SIDEBAR_ITEMS,
  type SidebarIcon,
} from "./content";
import {
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  CompsupsLogo,
  DownloadIcon,
  FolderIcon,
  GridIcon,
  PlusIcon,
  RefreshIcon,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from "./icons";

type Segment = { label: string; value: number; color: string };

const SIDEBAR_ICONS: Record<
  SidebarIcon,
  (props: { className?: string }) => ReactElement
> = {
  grid: GridIcon,
  users: UsersIcon,
  wallet: WalletIcon,
  briefcase: BriefcaseIcon,
  folder: FolderIcon,
};

export function SegmentedBar({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  return (
    <div className={`cs-segmented ${className ?? ""}`} aria-hidden="true">
      {segments.map((segment) => (
        <span
          key={segment.label}
          className="cs-segment"
          style={{ width: `${segment.value}%`, background: segment.color }}
        />
      ))}
    </div>
  );
}

export function DonutChart({
  total,
  segments,
  label,
  size = "7.5rem",
  thickness = 12,
  centerValue,
}: {
  total: number;
  segments: Segment[];
  label: string;
  size?: string;
  thickness?: number;
  centerValue?: string;
}) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  const arcs = segments.map((segment, index) => {
    const portion = segment.value / total;
    const length = portion * circumference;
    const offsetPortion = segments
      .slice(0, index)
      .reduce((sum, item) => sum + item.value / total, 0);

    return {
      ...segment,
      dash: Math.max(length - 5, 0),
      offset: offsetPortion * circumference,
    };
  });

  return (
    <div className="cs-donut" style={{ width: size }}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f3ebe7"
          strokeWidth={thickness}
        />
        <g transform="rotate(-90 60 60)">
          {arcs.map((arc) => (
            <circle
              key={arc.label}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
              strokeDashoffset={-arc.offset}
            />
          ))}
        </g>
      </svg>
      <div className="cs-donut-center">
        <strong>{centerValue ?? total.toLocaleString("en-US")}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function EmployeeCard() {
  return (
    <article className="cs-dash-card">
      <div className="cs-dash-card-head">
        <span className="cs-dash-card-title">
          <UsersIcon className="h-3.5 w-3.5" />
          Total Employee
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <div className="cs-employee-body">
        <div className="cs-employee-number">
          <strong>978</strong>
          <span>Employee</span>
        </div>
        <div className="cs-employee-growth">
          <span>From last year</span>
          <span className="cs-growth-pill">
            <span aria-hidden="true">↗</span> +43%
          </span>
        </div>
      </div>

      <SegmentedBar segments={EMPLOYEE_SEGMENTS} />

      <div className="cs-legend">
        {EMPLOYEE_SEGMENTS.map((segment) => (
          <span key={segment.label}>
            <i style={{ background: segment.color }} />
            {segment.label} ({segment.value}%)
          </span>
        ))}
      </div>
    </article>
  );
}

function ApplicantsCard() {
  return (
    <article className="cs-dash-card">
      <div className="cs-dash-card-head">
        <span className="cs-dash-card-title">
          <BriefcaseIcon className="h-3.5 w-3.5" />
          Job Applicants
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <div className="cs-applicants-body">
        <DonutChart
          total={APPLICANTS.total}
          segments={APPLICANTS.segments}
          label="Total Applied"
          size="7.4rem"
          thickness={11}
        />

        <div className="cs-applicant-list">
          {APPLICANTS.segments.map((segment) => (
            <div key={segment.label}>
              <span>
                <i style={{ background: segment.color }} />
                {segment.label}
              </span>
              <strong>{segment.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FinancialPanel() {
  return (
    <article className="cs-dash-card cs-fin-card">
      <div className="cs-dash-card-head">
        <span className="cs-dash-card-title">
          <WalletIcon className="h-3.5 w-3.5" />
          Financial Activity
        </span>
        <span className="cs-view-more">
          View More <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <div className="cs-fin-top">
        <div className="cs-fin-range">
          Last year
          <ChevronDown className="h-3 w-3" />
        </div>
        <span className="cs-fin-export">
          <DownloadIcon className="h-3 w-3" />
          Export
        </span>
      </div>

      <div className="cs-fin-grid">
        <div className="cs-fin-chart" aria-hidden="true">
          {FINANCIAL_MONTHS.map((month) => (
            <div key={month.month} className="cs-fin-month">
              <div className="cs-fin-bars">
                <span
                  className="cs-fin-bar cs-fin-income"
                  style={{ height: `${month.income}%` }}
                />
                <span
                  className="cs-fin-bar cs-fin-expense"
                  style={{ height: `${month.expense}%` }}
                />
              </div>
              <span className="cs-fin-label">{month.month}</span>
            </div>
          ))}
        </div>

        <div className="cs-fin-summary">
          <div className="cs-fin-legend">
            <span>
              <i className="cs-fin-dot-income" /> Income
            </span>
            <span>
              <i className="cs-fin-dot-expense" /> Expense
            </span>
          </div>
          <div className="cs-fin-stat">
            <span>Total Income</span>
            <strong>$63.7k</strong>
          </div>
          <div className="cs-fin-stat">
            <span>Total Expense</span>
            <strong>$39.5k</strong>
          </div>
          <div className="cs-fin-stat cs-fin-net">
            <span>Net</span>
            <strong>$24.2k</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export function DashboardPreview() {
  return (
    <section
      className="cs-dashboard"
      aria-label="Example Compsups dashboard with employee, applicant, and financial data"
    >
      <aside className="cs-dash-sidebar">
        <div className="cs-dash-brand">
          <CompsupsLogo />
        </div>

        <div className="cs-dash-user">
          <span className="cs-avatar cs-avatar-vl">VL</span>
          <div>
            <strong>Vincenzo Lozano</strong>
            <span>vincenzo@gmail.com</span>
          </div>
          <ChevronDown className="h-3.5 w-3.5" />
        </div>

        <p className="cs-side-label">GENERAL</p>

        <div className="cs-side-nav">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = SIDEBAR_ICONS[item.icon];
            return (
              <span
                key={item.label}
                className={item.active ? "is-active" : undefined}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </span>
            );
          })}
        </div>

        <div className="cs-side-foot">
          <span className="cs-side-foot-mark">+</span>
          <div>
            <strong>Invite your team</strong>
            <span>Save 20% on annual plans</span>
          </div>
        </div>
      </aside>

      <div className="cs-dash-main">
        <div className="cs-dash-mobilebar">
          <CompsupsLogo />
          <span className="cs-avatar cs-avatar-vl">VL</span>
        </div>

        <div className="cs-dash-top">
          <div>
            <h3>Dashboard</h3>
            <p>Let&rsquo;s see an overview of your company</p>
          </div>

          <div className="cs-dash-actions">
            <span className="cs-icon-button" aria-hidden="true">
              <RefreshIcon className="h-3.5 w-3.5" />
            </span>
            <span className="cs-icon-button" aria-hidden="true">
              <SettingsIcon className="h-3.5 w-3.5" />
            </span>
            <div className="cs-avatars" aria-hidden="true">
              {DASHBOARD_AVATARS.map((avatar, index) => (
                <span key={avatar} className={`cs-avatar cs-avatar-${index}`}>
                  {avatar}
                </span>
              ))}
            </div>
            <span className="cs-invite">
              <PlusIcon className="h-3.5 w-3.5" />
              Invite People
            </span>
          </div>
        </div>

        <div className="cs-dash-cards">
          <EmployeeCard />
          <ApplicantsCard />
        </div>

        <FinancialPanel />
      </div>
    </section>
  );
}
