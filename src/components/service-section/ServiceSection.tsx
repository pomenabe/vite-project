import type { Service } from './ServiceCard'
import { ServiceSectionHeader } from './ServiceSectionHeader'
import { ServiceSectionMain } from './ServiceSectionMain'
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
      <ServiceSectionHeader />
      <ServiceSectionMain services={services} />
    </section>
  )
}
