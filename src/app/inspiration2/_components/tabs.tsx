import type { ReactElement } from "react";
import { FEATURE_TABS, type FeatureIcon } from "./content";
import {
  BriefcaseIcon,
  CalendarIcon,
  UsersIcon,
  WalletIcon,
} from "./icons";

const TAB_ICONS: Record<
  FeatureIcon,
  (props: { className?: string }) => ReactElement
> = {
  wallet: WalletIcon,
  users: UsersIcon,
  briefcase: BriefcaseIcon,
  calendar: CalendarIcon,
};

export function FeatureTabs() {
  return (
    <ul className="cs-tabs" aria-label="Product areas">
      {FEATURE_TABS.map((tab) => {
        const Icon = TAB_ICONS[tab.icon];
        return (
          <li key={tab.label} className={`cs-tab cs-tab-${tab.tone}`}>
            <span className="cs-tab-icon" aria-hidden="true">
              <Icon className="h-4 w-4" />
            </span>
            {tab.label}
          </li>
        );
      })}
    </ul>
  );
}
