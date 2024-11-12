import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export function UserIcon(props: Props) {
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
        d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM4.984 15.576a5.625 5.625 0 0110.032 0"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
