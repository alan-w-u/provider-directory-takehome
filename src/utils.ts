import { Provider } from './types'

export function getProfession(provider: Provider): string {
  const professions = [
    "Registered Social Worker",
    "Registered Clinical Counsellor",
    "Social Worker",
    "Clinical Counsellor"
  ]

  for (const profession of professions) {
    if (provider.bio.toLocaleLowerCase().includes(profession.toLocaleLowerCase())) {
      return profession
    }
  }

  return ''
}
