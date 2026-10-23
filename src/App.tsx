import { Header } from './components/header/Header'

const navigationItems = [
  {
    label: '記事ページサンプル',
    href: 'https://xeory.jp/extension/sample',
  },
  {
    label: 'Extensionをダウンロード',
    href: 'https://xeory.jp/template/xeory-extension/',
  },
]

function App() {
  return <Header title="XeoryExtension" navigationItems={navigationItems} />
}

export default App
