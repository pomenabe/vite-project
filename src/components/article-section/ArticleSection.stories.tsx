import type { Meta, StoryObj } from '@storybook/react-vite'
import { popularArticles, recentArticles } from '../article-list/articles'
import {
  PopularArticlesIcon,
  RecentArticlesIcon,
} from './ArticleSectionIcons'
import { ArticleSection } from './ArticleSection'

const meta = {
  title: 'Components/ArticleSection',
  component: ArticleSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleSection>

export default meta
type Story = StoryObj<typeof meta>

export const PopularArticles: Story = {
  args: {
    articles: popularArticles,
    className: 'popular-articles',
    icon: <PopularArticlesIcon />,
    showRank: true,
    title: '人気のある記事',
    titleId: 'popular-articles-title',
  },
}

export const RecentArticles: Story = {
  args: {
    articles: recentArticles,
    className: 'recent-articles',
    icon: <RecentArticlesIcon />,
    title: '最近の投稿',
    titleId: 'recent-articles-title',
  },
}
