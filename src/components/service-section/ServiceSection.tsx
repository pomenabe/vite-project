import { SectionHeading } from '../section-heading/SectionHeading'
import { ServiceCard, type Service } from './ServiceCard'
import './ServiceSection.css'

const services: Service[] = [
  {
    title: 'Xeoryカスタマイズ',
    englishTitle: 'Xeory Customize',
    link: 'https://xeory.jp/design-examples/',
    linkLabel: 'カスタマイズ事例を見る',
  },
  {
    title: 'コンテンツマーケティング',
    englishTitle: 'Content Marketing',
    link: 'https://lucy.ne.jp/bazubu/case',
    linkLabel: '成功事例を見る',
  },
] as const

export function ServiceSection() {
  return (
    <section
      aria-labelledby="service-section-title"
      className="service-section"
    >
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

      <div className="service-section-list">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}
