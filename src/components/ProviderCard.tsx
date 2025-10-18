import './ProviderCard.css'
import { Provider } from '../types'
import { getProfession } from '../utils'

const BLANK_PROFILE_PICTURE = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'

function ProviderCard({
  provider
}: {
  provider: Provider
}) {
  return (
    <div className="provider-card">
      <div className="profile">
        <img src={provider.avatarUrl || BLANK_PROFILE_PICTURE} alt={''} />
        <div>
          <b>{provider.name}, {provider.title}</b>
          <p>{getProfession(provider)}</p>
        </div>
      </div>
      <p className="bio">{provider.bio}</p>
      <div className="availability">Available {provider.availabilty}</div>
    </div>
  )
}

export default ProviderCard
