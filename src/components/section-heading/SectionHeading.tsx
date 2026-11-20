import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  icon: ReactNode
  title: string
  titleId: string
  eyebrow?: string
}

export function SectionHeading({
  icon,
  title,
  titleId,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span aria-hidden="true" className="section-heading-icon">
        {icon}
      </span>
      <h2 className="section-heading-title" id={titleId}>
        {title}
      </h2>
      {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
      <span aria-hidden="true" className="section-heading-caret" />
    </header>
  )
}
