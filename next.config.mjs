/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.ECOS_BUILD_VERIFY || ".next",
  async redirects() {
    // Pagine rimosse con la ristrutturazione secondo i documenti di Valerio.
    // Non permanenti (301) finché la struttura non è confermata.
    const map = [
      ["/erasmus", "/formazione-mobilita-europea"],
      ["/progetti/:slug*", "/cooperation-partnership"],
      ["/progetti", "/cooperation-partnership"],
      ["/network", "/chi-siamo#reti"],
      ["/partnership", "/contatti"],
      ["/eventi", "/news"],
      ["/laboratori/:slug*", "/"],
      ["/laboratori", "/"],
      ["/pubblicazioni/:slug*", "/"],
      ["/pubblicazioni", "/"],
      ["/lavora-con-noi", "/contatti"],
    ];
    return map.flatMap(([source, destination]) => [
      { source, destination, permanent: false },
      { source: `/en${source}`, destination: `/en${destination}`, permanent: false },
    ]);
  },
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
