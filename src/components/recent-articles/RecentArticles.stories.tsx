import type { Meta, StoryObj } from '@storybook/react-vite'
import { RecentArticles } from './RecentArticles'

const meta = {
  title: 'Components/RecentArticles',
  component: RecentArticles,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RecentArticles>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
