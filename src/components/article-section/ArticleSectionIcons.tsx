export function PopularArticlesIcon() {
  return (
    <svg
      aria-hidden="true"
      className="article-section-icon"
      viewBox="0 0 20 20"
    >
      <path d="M4 2v16" />
      <path d="M5 3h11l-3 4 3 4H5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function RecentArticlesIcon() {
  return (
    <svg
      aria-hidden="true"
      className="article-section-icon"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M10 5v5l3 2" />
    </svg>
  )
}
