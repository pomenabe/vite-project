import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeaturesSection } from './FeaturesSection'

const meta = {
  title: 'Components/FeaturesSection',
  component: FeaturesSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeaturesSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
