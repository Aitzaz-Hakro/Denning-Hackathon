import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./wollo.css";

export const metadata: Metadata = {
  title: "Wollo — Maximize Your Social Media Presence",
  description:
    "Analytics, scheduling, and a unified inbox for social teams. A public design study recreated from the inspiration 3 reference.",
};

export default function InspirationThreeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
