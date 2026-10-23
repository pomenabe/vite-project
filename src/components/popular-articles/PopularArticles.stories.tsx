import type { Meta, StoryObj } from '@storybook/react-vite'
import { PopularArticles } from './PopularArticles'

const meta = {
  title: 'Components/PopularArticles',
  component: PopularArticles,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PopularArticles>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
