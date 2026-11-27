import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureCard } from './FeatureCard'
import { features } from '../features-section/features'

const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  args: {
    feature: features[0],
    imageLeft: false,
    index: 0,
  },
} satisfies Meta<typeof FeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const ImageRight: Story = {}

export const ImageLeft: Story = {
  args: {
    feature: features[1],
    imageLeft: true,
    index: 1,
  },
}
