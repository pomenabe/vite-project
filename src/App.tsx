import { Header } from './components/header/Header'
import { MainVisual } from './components/main-visual/MainVisual'
import { PopularArticles } from './components/popular-articles/PopularArticles'
import { RecentArticles } from './components/recent-articles/RecentArticles'

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
  return (
    <>
      <Header title="XeoryExtension" navigationItems={navigationItems} />
      <main>
        <MainVisual />
        <PopularArticles />
        <RecentArticles />
      </main>
    </>
  )
}

export default App
