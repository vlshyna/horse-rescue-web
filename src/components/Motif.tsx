interface MotifLineProps {
  className?: string;
  strokeWidth?: number;
}

export function MotifLine({ className = '', strokeWidth = 1 }: MotifLineProps) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,38 C200,15 300,52 480,40 C620,30 720,50 900,34 C1080,18 1200,44 1440,36"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function MotifFill({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,40 C200,15 300,58 480,44 C620,32 720,54 900,36 C1080,18 1200,48 1440,38 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );
}
