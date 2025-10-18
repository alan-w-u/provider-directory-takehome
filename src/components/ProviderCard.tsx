import './ProviderCard.css'
import { Link } from 'react-router-dom'
import { Provider } from '../types'
import { getProfession, BLANK_PROFILE_PICTURE } from '../utils'

function ProviderCard({
  provider
}: {
  provider: Provider
}) {
  return (
    <Link to={`/provider/${provider.id}`} className="provider-card">
      <div className="profile">
        <img src={provider.avatarUrl || BLANK_PROFILE_PICTURE} alt="" />
        <div>
          <b>{provider.name}, {provider.title}</b>
          <p>{getProfession(provider)}</p>
        </div>
      </div>
      <p className="bio">{provider.bio}</p>
      <div className="availability">Available {provider.availabilty}</div>
    </Link>
  )
}

export default ProviderCard
