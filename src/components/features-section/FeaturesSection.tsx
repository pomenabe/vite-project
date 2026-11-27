import { SectionHeading } from '../section-heading/SectionHeading'
import { FeatureList } from './FeatureList'

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-section-title" className="features-section">
      <SectionHeading
        icon={
          <svg viewBox="0 0 20 20">
            <path d="m4 10 4 4 8-8" />
          </svg>
        }
        title="XeoryExtensionの特徴"
        titleId="features-section-title"
        eyebrow="feature"
      />
      <FeatureList />
    </section>
  )
}
