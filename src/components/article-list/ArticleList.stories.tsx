import type { Meta, StoryObj } from '@storybook/react-vite'
import { popularArticles, recentArticles } from './articles'
import { ArticleList } from './ArticleList'

const meta = {
  title: 'Components/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const PopularArticles: Story = {
  args: {
    articles: popularArticles,
    showRank: true,
  },
}

export const RecentArticles: Story = {
  args: {
    articles: recentArticles,
  },
}
