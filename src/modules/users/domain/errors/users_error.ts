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

export { ForbiddenError, UnexpectedError }
