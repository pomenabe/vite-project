import customizableImage from '../../assets/features/customizable.svg'
import htmlImage from '../../assets/features/html.svg'
import responsiveImage from '../../assets/features/responsive.svg'
import seoImage from '../../assets/features/seo.svg'

export interface Feature {
  title: string
  englishTitle: string
  description: string
  image: string
}

export const features: Feature[] = [
  {
    title: 'モバイルレスポンシブ',
    englishTitle: 'Mobile Responsive',
    description:
      'スマートフォンやタブレットなど、さまざまな画面サイズに合わせて見やすく表示します。',
    image: responsiveImage,
  },
  {
    title: 'HTML5デザイン',
    englishTitle: 'HTML5 Design',
    description:
      'HTML5をベースにした構成で、標準的なウェブ技術を使ったサイトづくりを支えます。',
    image: htmlImage,
  },
  {
    title: 'SEO最適化',
    englishTitle: 'Search Engine Optimized',
    description:
      '検索エンジンに内容が伝わりやすい構造を目指し、良質なコンテンツ作成に集中できます。',
    image: seoImage,
  },
  {
    title: '高いカスタマイズ性',
    englishTitle: 'Customizable',
    description:
      'CSSやHTMLなどを使って、サイトの目的やブランドに合わせた調整ができます。',
    image: customizableImage,
  },
]
