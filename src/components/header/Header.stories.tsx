import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
  title: 'Components/SiteHeader',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'XeoryExtension',
    navigationItems: [
      {
        label: '記事ページサンプル',
        href: 'https://xeory.jp/extension/sample',
      },
      {
        label: 'Extensionをダウンロード',
        href: 'https://xeory.jp/template/xeory-extension/',
      },
    ],
  },
}
