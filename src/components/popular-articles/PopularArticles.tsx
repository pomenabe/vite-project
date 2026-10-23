import './PopularArticles.css'

const articles = [
  {
    category: 'カテゴリー#1',
    href: 'https://xeory.jp/extension/demo-top',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample02.jpg',
  },
  {
    category: 'カテゴリー#1',
    href: 'https://xeory.jp/extension/extension-cta',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg',
  },
  {
    category: 'カテゴリー#4',
    href: 'https://xeory.jp/extension/facebook-likebox',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01-800x533.jpg',
  },
  {
    category: 'カテゴリー#2',
    href: 'https://xeory.jp/extension/wp-gallery',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg',
  },
  {
    category: 'カテゴリー#3',
    href: 'https://xeory.jp/extension/xeorybase-social-media',
    image:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg',
  },
]

export function PopularArticles() {
  return (
    <section
      aria-labelledby="popular-articles-title"
      className="popular-articles"
    >
      <h2 className="popular-articles-heading" id="popular-articles-title">
        <svg
          aria-hidden="true"
          className="popular-articles-icon"
          viewBox="0 0 20 20"
        >
          <path d="M4 2v16M5 3h11l-3 4 3 4H5" />
        </svg>
        人気のある記事
      </h2>
      <div className="popular-articles-list">
        {articles.map(({ category, href, image }, index) => (
          <article className="popular-article" key={href}>
            <a className="popular-article-link" href={href}>
              <div className="popular-article-image-wrap">
                <img
                  alt="サンプル画像"
                  className="popular-article-image"
                  height="533"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  src={image}
                  width="800"
                />
                <span className="popular-article-rank">NO.{index + 1}</span>
              </div>
              <span className="popular-article-category">{category}</span>
              <h3 className="popular-article-title">テスト投稿</h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
