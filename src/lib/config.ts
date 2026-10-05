/**
 * Where the guides point. Set per deploy (see .env.example); the defaults are
 * production's addresses.
 */

const trim = (url: string) => url.replace(/\/+$/, '');

/** This site — the guides (canonical URLs, sitemap, Open Graph). */
export const SITE_URL = trim(process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.mintapp.shop');

/** The MINT app — the tenant panel, where people sign in and work. */
export const APP_URL = trim(process.env.NEXT_PUBLIC_APP_URL || 'https://app.mintapp.shop');

/** The backend's root: API addresses and script tags in the guides start here. */
export const API_ORIGIN = trim(process.env.NEXT_PUBLIC_API_URL || 'https://api.mintapp.shop');

/** The marketing website. */
export const WEBSITE_URL = trim(process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://mintapp.shop');

/** A project's public API, with `<project>` standing in for its public slug. */
export const PUBLIC_API = `${API_ORIGIN}/public/api/<project>`;

/** The app's home once signed in; the app sends anyone signed out to its login page first. */
export const APP_HOME = `${APP_URL}/dashboard`;
