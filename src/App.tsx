import React from 'react'

import { GoogleAuthProvider } from './components/Authentication/store/context'

import Routs from './components/Routs/Routs'

const App = () => {
  return (
    <GoogleAuthProvider>
      <Routs />
    </GoogleAuthProvider>
  )
}

export default App
