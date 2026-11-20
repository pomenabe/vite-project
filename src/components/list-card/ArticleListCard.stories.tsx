import type { Meta, StoryObj } from '@storybook/react-vite'
import { popularArticles } from '../article-list/articles'
import { ArticleListCard } from './ArticleListCard'

const meta = {
  title: 'Components/ListCard',
  component: ArticleListCard,
  tags: ['autodocs'],
  args: {
    article: popularArticles[0],
    imageLoading: 'eager',
  },
} satisfies Meta<typeof ArticleListCard>

export default meta
type Story = StoryObj<typeof meta>

export const RecentArticle: Story = {}

export const RankedArticle: Story = {
  args: {
    rank: 1,
  },
}
