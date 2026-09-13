import { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchData } from '../lib/searchData'

export default function SiteSearch() {
  const [query, setQuery] = useState('')
  const s = query.trim().toLowerCase()
  const list = s ? searchData.filter((x) => x.join(' ').toLowerCase().includes(s)) : searchData

  return (
    <div className="site-search">
      <label htmlFor="siteSearchInput">Search the website</label>
      <input
        id="siteSearchInput"
        type="search"
        placeholder="Try Redis, AI, government, blockchain, affiliate…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div id="searchResults" className="search-results">
        {list.length ? (
          list.map(([title, href, kind, copy]) => (
            <Link className="search-result" to={href} key={href + title}>
              <small>{kind}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Link>
          ))
        ) : (
          <div className="card">
            No matching pages. Try Redis, AI, government, blockchain or affiliate.
          </div>
        )}
      </div>
    </div>
  )
}
