class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid credentials')
  }
}

class UnexpectedError extends Error {
  constructor() {
    super('An unexpected error occurred. Please try again later.')
  }
}

export { InvalidCredentialsError, UnexpectedError }
