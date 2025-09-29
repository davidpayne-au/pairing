import type { BangladeshFlagProps } from './BangladeshFlag.types';

/**
 * Renders the Bangladesh flag as an SVG.
 * The flag consists of a green rectangle with a red circle positioned slightly to the hoist side.
 */
export const BangladeshFlag = ({ size = 32, className = '' }: BangladeshFlagProps) => (
  <svg
    width={size}
    height={size * 0.6} // Bangladesh flag has 3:5 ratio, so height is 0.6 of width
    viewBox="0 0 300 180"
    className={`inline-block ${className}`}
    aria-label="Bangladesh flag"
    role="img"
  >
    {/* Green background */}
    <rect width="300" height="180" fill="#006A4E" />
    {/* Red circle - positioned slightly to the hoist side */}
    <circle cx="120" cy="90" r="54" fill="#F42A41" />
  </svg>
);