import type { Feature } from './features'

type FeatureArtworkKind = Feature['artwork']

export function FeatureArtwork({ kind }: { kind: FeatureArtworkKind }) {
  return (
    <div aria-hidden="true" className={`feature-artwork feature-artwork-${kind}`}>
      {kind === 'responsive' ? (
        <svg viewBox="0 0 480 320">
          <rect className="feature-artwork-window" x="75" y="52" width="270" height="190" rx="8" />
          <path className="feature-artwork-window-top" d="M75 80h270" />
          <circle className="feature-artwork-dot" cx="94" cy="66" r="4" />
          <circle className="feature-artwork-dot" cx="109" cy="66" r="4" />
          <rect className="feature-artwork-screen" x="95" y="101" width="230" height="18" rx="4" />
          <rect className="feature-artwork-screen" x="95" y="135" width="142" height="10" rx="4" />
          <rect className="feature-artwork-screen" x="95" y="155" width="202" height="10" rx="4" />
          <rect className="feature-artwork-phone" x="326" y="130" width="78" height="142" rx="12" />
          <rect className="feature-artwork-phone-screen" x="335" y="146" width="60" height="108" rx="4" />
          <circle className="feature-artwork-phone-button" cx="365" cy="262" r="4" />
        </svg>
      ) : null}
      {kind === 'html' ? (
        <svg viewBox="0 0 480 320">
          <rect className="feature-artwork-window" x="72" y="52" width="336" height="216" rx="8" />
          <path className="feature-artwork-window-top" d="M72 84h336" />
          <circle className="feature-artwork-dot" cx="94" cy="68" r="4" />
          <circle className="feature-artwork-dot" cx="109" cy="68" r="4" />
          <path className="feature-artwork-code" d="m174 147-34 25 34 25m132-50 34 25-34 25m-46-67-26 84" />
        </svg>
      ) : null}
      {kind === 'seo' ? (
        <svg viewBox="0 0 480 320">
          <rect className="feature-artwork-window" x="72" y="52" width="336" height="216" rx="8" />
          <path className="feature-artwork-window-top" d="M72 84h336" />
          <circle className="feature-artwork-dot" cx="94" cy="68" r="4" />
          <circle className="feature-artwork-dot" cx="109" cy="68" r="4" />
          <path className="feature-artwork-chart" d="M122 220v-48h42v48m18 0v-78h42v78m18 0v-112h42v112" />
          <circle className="feature-artwork-search" cx="330" cy="144" r="35" />
          <path className="feature-artwork-search" d="m355 169 25 25" />
        </svg>
      ) : null}
      {kind === 'customizable' ? (
        <svg viewBox="0 0 480 320">
          <rect className="feature-artwork-window" x="72" y="52" width="336" height="216" rx="8" />
          <path className="feature-artwork-window-top" d="M72 84h336" />
          <circle className="feature-artwork-dot" cx="94" cy="68" r="4" />
          <circle className="feature-artwork-dot" cx="109" cy="68" r="4" />
          <path className="feature-artwork-slider" d="M130 133h220m-220 44h220m-220 44h220" />
          <circle className="feature-artwork-knob" cx="201" cy="133" r="10" />
          <circle className="feature-artwork-knob" cx="292" cy="177" r="10" />
          <circle className="feature-artwork-knob" cx="235" cy="221" r="10" />
        </svg>
      ) : null}
    </div>
  )
}
