export interface Article {
  category: string
  date?: string
  href: string
  image: string
  title: string
}

const articles: Article[] = [
  {
    category: 'カテゴリー#1',
    date: '2014-10-24',
    href: 'https://xeory.jp/extension/demo-top',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample02.jpg',
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#1',
    date: '2014-10-24',
    href: 'https://xeory.jp/extension/extension-cta',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg',
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#4',
    date: '2014-10-24',
    href: 'https://xeory.jp/extension/facebook-likebox',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01-800x533.jpg',
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#2',
    date: '2014-10-24',
    href: 'https://xeory.jp/extension/wp-gallery',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg',
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#3',
    date: '2014-10-24',
    href: 'https://xeory.jp/extension/xeorybase-social-media',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg',
    title: 'テスト投稿',
  },
]

export const popularArticles = articles
export const recentArticles = [
  articles[0],
  articles[1],
  articles[2],
  articles[4],
  articles[3],
]
