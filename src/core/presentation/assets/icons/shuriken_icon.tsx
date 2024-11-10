import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export function ShurikenIcon(props: Props) {
  return (
    <svg
      width={81}
      height={81}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.5}
        y={0.5}
        width={80}
        height={80}
        rx={40}
        fill="#3F53D8"
        fillOpacity={0.07}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.023 39.166l3.932-15.06-12.789 8.872-15.06-3.933 8.873 12.79-3.933 15.06 12.79-8.873 15.06 3.933-8.873-12.79zm-8.896 3.302a2.4 2.4 0 102.75-3.935 2.4 2.4 0 00-2.75 3.935z"
        fill="#3F53D8"
      />
    </svg>
  )
}
