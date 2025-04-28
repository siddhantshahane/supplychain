/*
 * This script helps ensure CSS is properly applied in Next.js applications
 * It gets imported by the main layout file
 */

if (typeof window !== 'undefined') {
  // Force a repaint on initial load
  setTimeout(() => {
    document.body.style.display = 'none';
    setTimeout(() => {
      document.body.style.display = '';
    }, 5);
  }, 100);
  
  // Ensure Tailwind classes apply correctly
  document.documentElement.classList.add('js-enabled');
  
  // Fix any potential CSS flash issues
  const style = document.createElement('style');
  style.textContent = `
    .js-enabled [data-tailwind-ready="false"] {
      opacity: 0;
    }
    .js-enabled [data-tailwind-ready="true"] {
      opacity: 1;
      transition: opacity 0.2s;
    }
  `;
  document.head.appendChild(style);
  
  // Mark document as ready for styles
  setTimeout(() => {
    document.body.setAttribute('data-tailwind-ready', 'true');
  }, 50);
} 