import { User } from './user'

export interface Inscription {
  tripId: number,
  user: User,
  people: number,
  allergies: string,
  questions: string,
}
