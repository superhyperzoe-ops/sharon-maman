import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  const classes = ["py-16 lg:py-24", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
