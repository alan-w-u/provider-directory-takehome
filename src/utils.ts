import { Provider } from './types'

export const BLANK_PROFILE_PICTURE = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'

export function getProfession(provider: Provider): string {
  const professions = [
    "Registered Social Worker",
    "Registered Clinical Counsellor",
    "Social Worker",
    "Clinical Counsellor"
  ]

  for (const profession of professions) {
    if (provider?.bio.toLocaleLowerCase().includes(profession.toLocaleLowerCase())) {
      return profession
    }
  }

  return ''
}
