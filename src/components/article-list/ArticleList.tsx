import './ArticleList.css'
import type { Article } from './articles'

interface ArticleListProps {
  articles: Article[]
  showRank?: boolean
}

export function ArticleList({ articles, showRank = false }: ArticleListProps) {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <article className="article-list-card" key={article.href}>
          <a className="article-list-link" href={article.href}>
            <div className="article-list-image-wrap">
              <img
                alt="サンプル画像"
                className="article-list-image"
                height="533"
                loading={index < 2 ? 'eager' : 'lazy'}
                src={article.image}
                width="800"
              />
              {showRank ? (
                <span className="article-list-rank">NO.{index + 1}</span>
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
      ))}
    </div>
  )
}
