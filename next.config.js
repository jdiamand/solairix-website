/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Forces Next.js to generate static files
  distDir: "out",    // Change output directory to "out"
  images: {
    unoptimized: true, // Required for AWS Amplify static hosting
  },
};

module.exports = nextConfig;