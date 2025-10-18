import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './types'
import ProviderDirectory from './pages/ProviderDirectory'
import { fetchProviders, fetchProvider } from './api'

function App() {
  // Samples of API requests
  // fetchProviders().then(console.log)
  // fetchProvider("1").then(console.log)
  const [providers, setProviders] = useState<Provider[]>([])

  useEffect(() => {
    fetchProviders()
      .then((providers: Provider[]) => {
        setProviders(providers)
      })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProviderDirectory providers={providers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
