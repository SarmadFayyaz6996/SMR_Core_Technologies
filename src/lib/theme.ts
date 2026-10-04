export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'smr-theme';

/**
 * Runs before first paint (inlined in <head>) to avoid a flash of the wrong theme.
 * Resolution order: saved preference → system preference → dark.
 * Also adds the `js` class that enables scroll-reveal styles.
 */
export const themeInitScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t}catch(e){d.dataset.theme='dark'}})();`;
