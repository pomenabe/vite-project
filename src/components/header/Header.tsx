import { useId, useState } from 'react'
import './Header.css'

export interface HeaderNavigationItem {
  label: string
  href: string
}

export interface HeaderProps {
  title: string
  navigationItems: HeaderNavigationItem[]
}

export function Header({ title, navigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigationId = useId()

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <h1 className="site-header-title">
          <a className="site-header-brand" href="https://xeory.jp/extension/">
            {title}
          </a>
        </h1>

        <button
          aria-controls={navigationId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="site-header-menu-button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          aria-label="メインナビゲーション"
          className={`site-header-navigation${isMenuOpen ? ' is-open' : ''}`}
          id={navigationId}
        >
          <ul className="site-header-navigation-list">
            {navigationItems.map(({ href, label }) => (
              <li className="site-header-navigation-item" key={href}>
                <a
                  className="site-header-navigation-link"
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
