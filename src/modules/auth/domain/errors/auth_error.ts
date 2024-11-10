class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid credentials')
    this.name = 'InvalidCredentialsError'
  }
}

class ForbiddenError extends Error {
  constructor() {
    super('You do not have permission to perform this action')
    this.name = 'ForbiddenError'
  }
}

class UnexpectedError extends Error {
  constructor() {
    super('An unexpected error occurred. Please try again later.')
    this.name = 'UnexpectedError'
  }
}

export { InvalidCredentialsError, ForbiddenError, UnexpectedError }
