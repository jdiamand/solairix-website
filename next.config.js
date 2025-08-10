    /** @type {import('next').NextConfig} */
    const nextConfig = {
        output: "export",
        distDir: "out",
        trailingSlash: true,       // 👈 makes /about/ → out/about/index.html
        images: { unoptimized: true },
    };
    module.exports = nextConfig;