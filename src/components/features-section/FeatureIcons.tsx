import type { SVGProps } from 'react'

export function ResponsiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <rect x="5" y="10" width="38" height="29" rx="3" />
      <path d="M17 49h14m-7-10v10" />
      <rect x="39" y="26" width="17" height="29" rx="3" />
      <path d="M45 31h5m-4 19h3" />
    </svg>
  )
}

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23 18-14 14 14 14m18-28 14 14-14 14M37 12l-10 40"
      />
    </svg>
  )
}

export function SeoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <path
        strokeLinecap="round"
        d="M8 54V38h10v16m5 0V28h10v26m5 0V18h10v36"
      />
      <circle cx="45" cy="21" r="11" />
      <path strokeLinecap="round" d="m53 29 7 7" />
    </svg>
  )
}

export function CustomizableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <path strokeLinecap="round" d="M8 17h48M8 32h48M8 47h48" />
      <circle cx="23" cy="17" r="5" fill="white" />
      <circle cx="43" cy="32" r="5" fill="white" />
      <circle cx="30" cy="47" r="5" fill="white" />
    </svg>
  )
}
