/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.adeelatta.dev",
          },
        ],
        destination: "https://adeelatta.dev/:path*",
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
