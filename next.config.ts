import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.telvis.uk" }],
        destination: "https://telvis.uk/:path*",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/trial",
        destination: "/free-trial/",
        permanent: true,
      },
      {
        source: "/refund",
        destination: "/refund-policy/",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/plans/",
        permanent: true,
      },
      {
        source: "/iptv",
        destination: "/iptv-uk/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms/",
        permanent: true,
      },
      {
        source: "/favicon.ico/",
        destination: "/favicon.ico",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
