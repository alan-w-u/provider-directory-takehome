import './ProviderDirectory.css'
import { useState } from 'react'
import { Provider } from '../types'
import ProviderCard from '../components/ProviderCard'

const PROVINCES = {
  Ontario: 'ON',
  Quebec: 'QC'
} as const

type Province = keyof typeof PROVINCES

function ProviderDirectory({
  providers
}: {
  providers: Provider[]
}) {
  const [province, setProvince] = useState<Province>(Object.keys(PROVINCES)[0] as Province)
  const provinces = Object.keys(PROVINCES) as Province[]

  const handleLocationClick = () => {
    const currentIndex = provinces.indexOf(province)
    const nextIndex = (currentIndex + 1) % provinces.length
    setProvince(provinces[nextIndex])
  }

  return (
    <div className="provider-directory">
      <div className="header">
        <h1>Browse our providers</h1>
        <p>Mental Wellness</p>
        <div className="location" onClick={handleLocationClick}>
          <img src="/icons/location-pin.svg" alt="Location pin icon" />
          {PROVINCES[province]}
        </div>
      </div>
      <div className="providers">
        <p className="count"><b>{providers.length}</b> providers in Ontario</p>
        {providers.map(provider => (
          <ProviderCard provider={provider} />
        ))}
      </div>
    </div>
  )
}

export default ProviderDirectory
