import mongoose from 'mongoose'
import { IMessage } from '../interface/message.interface'

const messageSchema = new mongoose.Schema<IMessage>(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
  },
  { timestamps: true },
)

export const Message = mongoose.model<IMessage>('Messages', messageSchema)
