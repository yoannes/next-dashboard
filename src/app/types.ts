export type Task = {
  id: string
  startedAt: number
  endedAt?: number
  name: string
  breaks: {
    startedAt: number
    endedAt: number
    reason: string
  }[]
}
