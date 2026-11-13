import { Header } from './components/header/Header'
import { MainVisual } from './components/main-visual/MainVisual'
import { popularArticles, recentArticles } from './components/article-list/articles'
import { FeaturesSection } from './components/features-section/FeaturesSection'
import {
  PopularArticlesIcon,
  RecentArticlesIcon,
} from './components/article-section/ArticleSectionIcons'
import { ArticleSection } from './components/article-section/ArticleSection'

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
        <ArticleSection
          articles={popularArticles}
          className="popular-articles"
          icon={<PopularArticlesIcon />}
          showRank
          title="人気のある記事"
          titleId="popular-articles-title"
        />
        <ArticleSection
          articles={recentArticles}
          className="recent-articles"
          icon={<RecentArticlesIcon />}
          title="最近の投稿"
          titleId="recent-articles-title"
        />
        <FeaturesSection />
      </main>
    </>
  )
}

export default App
