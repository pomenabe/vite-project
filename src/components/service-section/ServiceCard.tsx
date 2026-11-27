export interface Service {
  title: string
  englishTitle: string
  link: string
  linkLabel: string
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-copy">
        <h3>{service.title}</h3>
        <p className="service-card-english">{service.englishTitle}</p>
        <a href={service.link}>{service.linkLabel}</a>
      </div>
    </article>
  )
}
