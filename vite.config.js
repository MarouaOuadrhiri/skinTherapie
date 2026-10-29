import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Keep existing .html links working on static hosting as well as Vite.
function pageAliases() {
  return {
    name: 'page-aliases',
    writeBundle(output) {
      for (const page of [
        'about',
        'service',
        'service-static',
        'appointment',
        'contact',
        'blog',
        'blog-details',
        'privacy-policy',
        '404-error',
      ]) {
        copyFileSync(
          resolve(output.dir, 'index.html'),
          resolve(output.dir, `${page}.html`),
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pageAliases()],
  server: { host: true },
});
