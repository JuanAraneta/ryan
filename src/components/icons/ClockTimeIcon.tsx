import * as React from "react";
import { SVGProps } from "react";

export const ClockTimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.892 9c0 4.24 3.44 7.68 7.68 7.68s7.68-3.44 7.68-7.68-3.44-7.68-7.68-7.68S.892 4.76.892 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.398 4.76 3.067 4.48 3.28-1.493"
    />
  </svg>
);
