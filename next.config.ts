import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	// The monorepo root has its own lockfile; this app is its own root.
	turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
