import { ArticleList } from '../article-list/ArticleList'
import { recentArticles } from '../article-list/articles'
import '../article-list/ArticleList.css'
import './RecentArticles.css'

export function RecentArticles() {
  return (
    <section
      aria-labelledby="recent-articles-title"
      className="recent-articles"
    >
      <h2 className="article-section-heading" id="recent-articles-title">
        <svg
          aria-hidden="true"
          className="article-section-icon"
          viewBox="0 0 20 20"
        >
          <circle cx="10" cy="10" r="8" />
          <path d="M10 5v5l3 2" />
        </svg>
        最近の投稿
      </h2>
      <ArticleList articles={recentArticles} />
    </section>
  )
}
