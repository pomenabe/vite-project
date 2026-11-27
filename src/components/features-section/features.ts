import type { ComponentType, SVGProps } from 'react'
import {
  CustomizableIcon,
  HtmlIcon,
  ResponsiveIcon,
  SeoIcon,
} from './FeatureIcons'

export interface Feature {
  title: string
  englishTitle: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const features: Feature[] = [
  {
    title: 'モバイルレスポンシブ',
    englishTitle: 'Mobile Responsive',
    description:
      'スマートフォンやタブレットなど、さまざまな画面サイズに合わせて見やすく表示します。',
    icon: ResponsiveIcon,
  },
  {
    title: 'HTML5デザイン',
    englishTitle: 'HTML5 Design',
    description:
      'HTML5をベースにした構成で、標準的なウェブ技術を使ったサイトづくりを支えます。',
    icon: HtmlIcon,
  },
  {
    title: 'SEO最適化',
    englishTitle: 'Search Engine Optimized',
    description:
      '検索エンジンに内容が伝わりやすい構造を目指し、良質なコンテンツ作成に集中できます。',
    icon: SeoIcon,
  },
  {
    title: '高いカスタマイズ性',
    englishTitle: 'Customizable',
    description:
      'CSSやHTMLなどを使って、サイトの目的やブランドに合わせた調整ができます。',
    icon: CustomizableIcon,
  },
]
