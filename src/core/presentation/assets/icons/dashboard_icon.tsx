import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export function DashboardIcon(props: Props) {
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
        d="M8.125 3.75h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM15.625 3.75h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM8.125 11.25h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM15.625 11.25h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625z"
        stroke="#F4F4F5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
