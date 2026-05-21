const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const createPreviewImage = ({
  title,
  subtitle,
  accent = '#ef4444',
  backgroundStart = '#111111',
  backgroundEnd = '#1f1f1f',
}) => {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${backgroundStart}" />
          <stop offset="100%" stop-color="${backgroundEnd}" />
        </linearGradient>
        <linearGradient id="accent" x1="120" y1="100" x2="1080" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="48" fill="url(#bg)" />
      <circle cx="1040" cy="120" r="120" fill="${accent}" fill-opacity="0.16" />
      <circle cx="180" cy="660" r="160" fill="${accent}" fill-opacity="0.1" />
      <rect x="96" y="96" width="1008" height="608" rx="36" fill="white" fill-opacity="0.03" stroke="white" stroke-opacity="0.08" />
      <rect x="140" y="140" width="180" height="16" rx="8" fill="${accent}" />
      <rect x="140" y="188" width="420" height="16" rx="8" fill="white" fill-opacity="0.72" />
      <rect x="140" y="226" width="310" height="12" rx="6" fill="white" fill-opacity="0.34" />
      <rect x="140" y="316" width="920" height="1" fill="white" fill-opacity="0.1" />
      <rect x="140" y="356" width="240" height="220" rx="24" fill="url(#accent)" fill-opacity="0.16" stroke="white" stroke-opacity="0.08" />
      <rect x="410" y="356" width="650" height="48" rx="16" fill="white" fill-opacity="0.05" />
      <rect x="410" y="426" width="520" height="18" rx="9" fill="white" fill-opacity="0.28" />
      <rect x="410" y="468" width="460" height="18" rx="9" fill="white" fill-opacity="0.18" />
      <rect x="410" y="510" width="560" height="18" rx="9" fill="white" fill-opacity="0.18" />
      <text x="140" y="510" fill="white" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="700">${safeTitle}</text>
      <text x="140" y="580" fill="white" fill-opacity="0.75" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="500">${safeSubtitle}</text>
      <text x="140" y="642" fill="white" fill-opacity="0.5" font-family="Inter, Arial, sans-serif" font-size="22">Fast-loading preview image</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};