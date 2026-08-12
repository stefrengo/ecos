/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.ECOS_BUILD_VERIFY || ".next",
  images: {
    // NOTA: in produzione sostituire con i domini reali del CMS/DAM utilizzato per le immagini.
    // images.pexels.com: foto stock gratuite (licenza Pexels, nessuna attribuzione
    // richiesta) usate come placeholder editoriali finché non ci saranno foto reali ECOS.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
