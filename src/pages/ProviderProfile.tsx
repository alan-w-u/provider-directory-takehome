import './ProviderProfile.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Provider } from '../types'
import { fetchProvider } from '../api'
import { getProfession, BLANK_PROFILE_PICTURE } from '../utils'

function ProviderProfile() {
  const [provider, setProvider] = useState<Provider>()
  const [isBioExpanded, setIsBioExpanded] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    fetchProvider(id)
      .then((provider: Provider) => {
        setProvider(provider)
      })
  })

  return (
    <div className="provider-profile">
      <p className="breadcrumb">Mental Wellness <img src="/icons/chevron-grey.svg" alt="Chevron" /> <b>{provider?.name}</b></p>
      <div className="profile">
        <img src={provider?.avatarUrl || BLANK_PROFILE_PICTURE} alt="" />
        <div className="info">
          <div className="about">
            <h1>{provider?.name}</h1>
            <h2>{getProfession(provider!)}</h2>
            <p>
              {isBioExpanded ? provider?.bio : `${provider?.bio?.slice(0, 200)}${provider?.bio && provider?.bio.length > 200 ? '...' : ''}`}
            </p>
            {provider?.bio && provider?.bio.length > 200 && (
              <div
                className="read-less"
                onClick={() => setIsBioExpanded(state => !state)}
              >
                {isBioExpanded ? 'Read less' : 'Read more'} <img src="/icons/chevron-blue.svg" alt="Chevron" className={isBioExpanded ? '' : 'rotated'} />
              </div>
            )}
          </div>
          <div className="general">
            <div className="fact">
              <img src="/icons/map.svg" alt="Map icon" className="icon" />
              <div>
                <p>Location</p>
                <b>{provider?.location}</b>
              </div>
            </div>
            <div className="fact">
              <img src="/icons/cap.svg" alt="Cap icon" className="icon" />
              <div>
                <p>Education</p>
                <b>{provider?.education}</b>
              </div>
            </div>
            <div className="fact">
              <img src="/icons/globe.svg" alt="Globe icon" className="icon" />
              <div>
                <p>Language</p>
                <b>{provider?.languages?.join(', ')}</b>
              </div>
            </div>
            <button className="book-with-us">Book with us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderProfile
