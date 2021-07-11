import React from 'react'
import { Store } from 'redux'
const StoreContext = React.createContext<any>(null)

type ProviderType = {
  store: Store
  children: React.ReactNode
}

export const Provider = ({ children, store }: ProviderType) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreContext
