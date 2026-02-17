import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { UrlData } from './data/UrlData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UrlData path=""/>
    </>
  )
}

export default App
