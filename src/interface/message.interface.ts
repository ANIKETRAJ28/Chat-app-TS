export interface IMessage {
  id: string
  sender: string | undefined
  reciever: string | undefined
  chat: string | undefined
  createdAt: Date
  updatedAt: Date
}
