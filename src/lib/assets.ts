/** Resolves a file under public/assets honoring Vite's base path (GitHub Pages subpath). */
export const asset = (file: string): string => `${import.meta.env.BASE_URL}assets/${file}`;
