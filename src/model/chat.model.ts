import mongoose from 'mongoose'
import { IChat } from '../interface/chat.interface'

const chatSchema = new mongoose.Schema<IChat>(
  {
    isGroupChat: {
      type: Boolean,
      required: true,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Messages',
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true },
)

export const User = mongoose.model('Chat', chatSchema)
