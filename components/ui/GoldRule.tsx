interface GoldRuleProps {
  width?: number;
  className?: string;
}

export function GoldRule({ width = 24, className }: GoldRuleProps): JSX.Element {
  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: "1px",
        background: "var(--gold)"
      }}
    />
  );
}
