export interface Feature {
  title: string
  englishTitle: string
  description: string
  artwork: 'responsive' | 'html' | 'seo' | 'customizable'
}

export const features: Feature[] = [
  {
    title: 'モバイルレスポンシブ',
    englishTitle: 'Mobile Responsive',
    description:
      'スマートフォンやタブレットなど、さまざまな画面サイズに合わせて見やすく表示します。',
    artwork: 'responsive',
  },
  {
    title: 'HTML5デザイン',
    englishTitle: 'HTML5 Design',
    description:
      'HTML5をベースにした構成で、標準的なウェブ技術を使ったサイトづくりを支えます。',
    artwork: 'html',
  },
  {
    title: 'SEO最適化',
    englishTitle: 'Search Engine Optimized',
    description:
      '検索エンジンに内容が伝わりやすい構造を目指し、良質なコンテンツ作成に集中できます。',
    artwork: 'seo',
  },
  {
    title: '高いカスタマイズ性',
    englishTitle: 'Customizable',
    description:
      'CSSやHTMLなどを使って、サイトの目的やブランドに合わせた調整ができます。',
    artwork: 'customizable',
  },
]
