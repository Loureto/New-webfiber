export namespace CreateAccountCompany {
  export type Params = {
    company: {
      name: string
      email: string
    }
    adminUser: {
      username: string
      fullname: string
      email: string
      password: string
      phone: string
      city: string
      state: string
    }
  }
}
