import { ArticleList } from '../article-list/ArticleList'
import { popularArticles } from '../article-list/articles'
import '../article-list/ArticleList.css'
import './PopularArticles.css'

export function PopularArticles() {
  return (
    <section
      aria-labelledby="popular-articles-title"
      className="popular-articles"
    >
      <h2 className="article-section-heading" id="popular-articles-title">
        <svg
          aria-hidden="true"
          className="article-section-icon"
          viewBox="0 0 20 20"
        >
          <path d="M4 2v16" />
          <path d="M5 3h11l-3 4 3 4H5z" fill="currentColor" stroke="none" />
        </svg>
        人気のある記事
      </h2>
      <ArticleList articles={popularArticles} showRank />
    </section>
  )
}
