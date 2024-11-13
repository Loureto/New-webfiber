const nextConfig = {
  reactStrictMode: false,
  redirects: async () => [
    {
      source: '/',
      destination: '/signIn',
      permanent: true
    }
  ]
}

export default nextConfig
