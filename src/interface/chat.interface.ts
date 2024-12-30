export interface IChat {
  id: string
  isGroupChat: boolean
  users: (string | undefined)[] // change
  latestMessage: string | undefined // change
  groupAdmin: string | undefined // change
  createdAt: Date
  updatedAt: Date
}
