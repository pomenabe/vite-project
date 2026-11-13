import type { ReactNode } from 'react'
import { ArticleList } from '../article-list/ArticleList'
import type { Article } from '../article-list/articles'
import './ArticleSection.css'

interface ArticleSectionProps {
  articles: Article[]
  className: string
  icon: ReactNode
  showRank?: boolean
  title: string
  titleId: string
}

export function ArticleSection({
  articles,
  className,
  icon,
  showRank = false,
  title,
  titleId,
}: ArticleSectionProps) {
  return (
    <section
      aria-labelledby={titleId}
      className={`article-section ${className}`}
    >
      <h2 className="article-section-heading" id={titleId}>
        {icon}
        {title}
      </h2>
      <ArticleList articles={articles} showRank={showRank} />
    </section>
  )
}
