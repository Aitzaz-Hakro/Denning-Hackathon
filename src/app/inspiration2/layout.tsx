import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./compsups.css";

export const metadata: Metadata = {
  title: "Compsups — Company management in one place",
  description:
    "A warm, product-led landing page recreation from the inspiration 2 reference. Public design study route.",
};

export default function InspirationTwoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
