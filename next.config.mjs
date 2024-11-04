const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/signIn',
      permanent: true
    }
  ]
}

export default nextConfig
