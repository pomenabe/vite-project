import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureList } from './FeatureList'

const meta = {
  title: 'Components/FeatureList',
  component: FeatureList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
