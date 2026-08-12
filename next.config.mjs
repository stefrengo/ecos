/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // NOTA: in produzione sostituire con i domini reali del CMS/DAM utilizzato per le immagini.
    remotePatterns: [],
  },
};

export default nextConfig;
