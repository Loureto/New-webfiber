import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export function LogoutIcon(props: Props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.25 3.125h-5v13.75h5M9.25 10H18M14.875 6.875L18 10l-3.125 3.125"
        stroke="#F31260"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
