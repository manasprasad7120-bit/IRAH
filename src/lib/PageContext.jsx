import { createContext, useContext } from 'react'

const PageContext = createContext('default')

export function PageProvider({ pageKey, children }) {
  return <PageContext.Provider value={pageKey}>{children}</PageContext.Provider>
}

export function usePageKey() {
  return useContext(PageContext)
}
