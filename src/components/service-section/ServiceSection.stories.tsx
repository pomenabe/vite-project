import type { Meta, StoryObj } from '@storybook/react-vite'
import { ServiceSection } from './ServiceSection'

const meta = {
  title: 'Components/ServiceSection',
  component: ServiceSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
