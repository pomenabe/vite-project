import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeading } from './SectionHeading'

const meta = {
  title: 'Components/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Services: Story = {
  args: {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 10h18M5 10v10h14V10M4 10l2-6h12l2 6M9 20v-6h6v6" />
      </svg>
    ),
    title: 'サービス紹介',
    titleId: 'service-section-title',
    eyebrow: 'service',
  },
}

export const Articles: Story = {
  args: {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: '記事一覧',
    titleId: 'article-section-title',
    eyebrow: 'articles',
  },
}
