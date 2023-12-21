import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Messages {
  id: string
  message: string
  isBot: boolean
}

interface State {
  messages: Messages[]
  loading: boolean
}

interface Action {
  addMessage: (message: Messages) => void
  clearMessages: () => void
  setLoading: (loading: boolean) => void
}
export const useMessageStore = create(
  persist<State & Action>(
    (set, get) => ({
      messages: [],
      loading: false,
      addMessage: (message: Messages) => {
        set((state) => ({
          messages: [...state.messages, message]
        }))
      },
      clearMessages: () => {
        set((state) => ({
          messages: []
        }))
      },
      setLoading: (loading: boolean) => {
        set((state) => ({
          loading
        }))
      }
    }),
    {
      name: 'messages'
    }
  )
)