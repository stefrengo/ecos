/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.ECOS_BUILD_VERIFY || ".next",
  images: {
    // NOTA: in produzione sostituire con i domini reali del CMS/DAM utilizzato per le immagini.
    remotePatterns: [],
  },
};

export default nextConfig;
