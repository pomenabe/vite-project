import { FeatureCard } from '../features-card/FeatureCard'
import { features } from './features'

export function FeatureList() {
  return (
    <div className="features-section-list">
      {features.map((feature, index) => (
        <FeatureCard
          feature={feature}
          imageLeft={index % 2 === 1}
          index={index}
          key={feature.title}
        />
      ))}
    </div>
  )
}
