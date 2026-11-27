import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ArticleListCard } from './ArticleListCard'
import type { Article } from '../article-list/articles'

const article: Article = {
  category: 'お知らせ',
  date: '2025-03-08',
  href: 'https://example.com/article',
  image: '/article-image.jpg',
  title: 'テスト記事',
}

describe('ArticleListCard', () => {
  it('displays the article details and link', () => {
    render(<ArticleListCard article={article} imageLoading="lazy" />)

    expect(
      screen.getByRole('heading', { name: 'テスト記事' }),
    ).toBeInTheDocument()
    expect(screen.getByText('お知らせ')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', article.href)

    const image = screen.getByRole('img', { name: 'サンプル画像' })
    expect(image).toHaveAttribute('src', article.image)
    expect(image).toHaveAttribute('loading', 'lazy')
    expect(screen.getByText('2025')).toBeInTheDocument()
  })

  it('matches the rendered markup snapshot', () => {
    const { asFragment } = render(
      <ArticleListCard article={article} imageLoading="lazy" />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
