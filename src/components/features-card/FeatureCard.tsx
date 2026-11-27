import type { Feature } from '../features-section/features'
import '../features-section/FeaturesSection.css'

const extensionDownloadUrl = 'https://xeory.jp/template/xeory-extension/'

interface FeatureCardProps {
  feature: Feature
  imageLeft: boolean
  index: number
}

export function FeatureCard({ feature, imageLeft, index }: FeatureCardProps) {
  return (
    <article
      className={`feature-card${imageLeft ? ' feature-card-image-left' : ''}`}
    >
      <div className="feature-card-inner">
        <div className="feature-card-copy">
          <header className="feature-card-title">
            <p className="feature-card-number">{index + 1}</p>
            <h3>{feature.title}</h3>
            <p className="feature-card-english">{feature.englishTitle}</p>
          </header>
          <div aria-hidden="true" className="feature-visual">
            <img
              alt=""
              className="feature-icon"
              height="64"
              src={feature.image}
              width="64"
            />
          </div>
          <div className="feature-card-description">
            <p>{feature.description}</p>
            <a href={extensionDownloadUrl}>詳しく見る</a>
          </div>
        </div>
      </div>
    </article>
  )
}
