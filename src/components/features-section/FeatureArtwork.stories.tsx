import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureArtwork } from './FeatureArtwork'
import './FeaturesSection.css'

const meta = {
  title: 'Components/FeatureArtwork',
  component: FeatureArtwork,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: 320 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureArtwork>

export default meta
type Story = StoryObj<typeof meta>

export const Responsive: Story = {
  args: {
    kind: 'responsive',
  },
}

export const HTML: Story = {
  args: {
    kind: 'html',
  },
}

export const SEO: Story = {
  args: {
    kind: 'seo',
  },
}

export const Customizable: Story = {
  args: {
    kind: 'customizable',
  },
}
