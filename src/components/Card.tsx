import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  const classes = ["border border-sand bg-white p-6", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
