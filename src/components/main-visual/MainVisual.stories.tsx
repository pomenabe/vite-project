import type { Meta, StoryObj } from '@storybook/react-vite'
import { MainVisual } from './MainVisual'

const meta = {
  title: 'Components/MainVisual',
  component: MainVisual,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainVisual>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
