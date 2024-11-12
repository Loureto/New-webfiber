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
        d="M15.625 8.75v6.944a.556.556 0 01-.556.556H3.125a.625.625 0 01-.625-.625v-8.75a.625.625 0 01.625-.625h3.541c.136 0 .267.044.375.125l2.334 1.75H15a.625.625 0 01.625.625z"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.625 8.75v6.944a.556.556 0 01-.556.556H3.125a.625.625 0 01-.625-.625v-8.75a.625.625 0 01.625-.625h3.541c.136 0 .267.044.375.125l2.334 1.75H15a.625.625 0 01.625.625z"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 6.25V4.375a.625.625 0 01.625-.625h3.541c.136 0 .267.044.375.125l2.334 1.75H17.5a.625.625 0 01.625.625v6.944a.555.555 0 01-.555.556h-1.945"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
