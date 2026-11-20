import '../article-list/ArticleList.css'
import type { Article } from '../article-list/articles'

interface ArticleListCardProps {
  article: Article
  imageLoading: 'eager' | 'lazy'
  rank?: number
}

export function ArticleListCard({
  article,
  imageLoading,
  rank,
}: ArticleListCardProps) {
  return (
    <article className="article-list-card">
      <a className="article-list-link" href={article.href}>
        <div className="article-list-image-wrap">
          <img
            alt="サンプル画像"
            className="article-list-image"
            height="533"
            loading={imageLoading}
            src={article.image}
            width="800"
          />
          {rank !== undefined ? (
            <span className="article-list-rank">NO.{rank}</span>
          ) : article.date ? (
            <time className="article-list-date" dateTime={article.date}>
              <span>{article.date.slice(0, 4)}</span>
              <span>
                {article.date.slice(5, 7)}/{article.date.slice(8, 10)}
              </span>
            </time>
          ) : null}
        </div>
        <span className="article-list-category">{article.category}</span>
        <h3 className="article-list-title">{article.title}</h3>
      </a>
    </article>
  )
}
