import { ArticleListCard } from '../list-card/ArticleListCard'
import type { Article } from './articles'

interface ArticleListProps {
  articles: Article[]
  showRank?: boolean
}

export function ArticleList({ articles, showRank = false }: ArticleListProps) {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleListCard
          article={article}
          imageLoading={index < 2 ? 'eager' : 'lazy'}
          key={article.href}
          rank={showRank ? index + 1 : undefined}
        />
      ))}
    </div>
  )
}
