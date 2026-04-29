interface EyebrowProps {
  children: string;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps): JSX.Element {
  return (
    <p className={`text-eyebrow${className ? ` ${className}` : ""}`}>
      {children}
    </p>
  );
}
