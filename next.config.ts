import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	// The monorepo root has its own lockfile; this app is its own root.
	turbopack: { root: path.join(__dirname) },
	// No image optimizer (billed per image on Vercel): plain <img> only.
	images: { unoptimized: true },
};

export default nextConfig;
