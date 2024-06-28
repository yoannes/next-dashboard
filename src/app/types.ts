export type Task = {
  id: string
  startedAt: number
  endedAt?: number
  breaks: {
    startedAt: number
    endedAt: number
    reason: string
  }[]
}
