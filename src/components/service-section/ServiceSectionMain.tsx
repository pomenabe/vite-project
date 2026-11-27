import { ServiceCard, type Service } from './ServiceCard'

interface ServiceSectionMainProps {
  services: Service[]
}

export function ServiceSectionMain({ services }: ServiceSectionMainProps) {
  return (
    <div className="service-section-list">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  )
}
