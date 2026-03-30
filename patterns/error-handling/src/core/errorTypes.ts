export type AppError = {
  message: string
  code?: string
  field?: string
}

export type ErrorListener = (error: AppError | null) => void