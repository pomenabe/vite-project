import { SectionHeading } from '../section-heading/SectionHeading'

export function ServiceSectionHeader() {
  return (
    <SectionHeading
      icon={
        <svg viewBox="0 0 24 24">
          <path d="M3 10h18M5 10v10h14V10M4 10l2-6h12l2 6M9 20v-6h6v6" />
        </svg>
      }
      title="サービス紹介"
      titleId="service-section-title"
      eyebrow="service"
    />
  )
}
