import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export function SvgComponent(props: Props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.125 17.5h-8.75a.625.625 0 01-.625-.625V5.625A.625.625 0 014.375 5h6.25l3.125 3.125v8.75a.624.624 0 01-.625.625z"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 5V3.125a.625.625 0 01.625-.625h6.25l3.125 3.125v8.75a.624.624 0 01-.625.625H13.75M6.875 11.875h3.75M6.875 14.375h3.75"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
