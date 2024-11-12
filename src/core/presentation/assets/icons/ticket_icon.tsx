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
        d="M7.5 4.375v11.25M1.875 12.5a2.5 2.5 0 000-5V5a.625.625 0 01.625-.625h15a.625.625 0 01.625.625v2.5a2.5 2.5 0 000 5V15a.624.624 0 01-.625.625h-15A.625.625 0 011.875 15v-2.5z"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
