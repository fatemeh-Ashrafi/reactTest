import React from 'react'
import UserProvider from './User/provader';

function ContextProvider({children}) {
  return (
    <UserProvider>{children}</UserProvider>
  )
}

export default ContextProvider;