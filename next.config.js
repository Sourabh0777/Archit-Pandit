const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.drarchitpandit.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
