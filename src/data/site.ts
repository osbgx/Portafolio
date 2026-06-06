export const fullSiteUrl = (() => {
  const baseUrl = import.meta.env.BASE_URL;
  const siteUrl = 'https://osbgx.dev';
  return baseUrl && baseUrl !== '/' ? `${siteUrl.replace(/\/$/, '')}${baseUrl}` : `${siteUrl}/`;
})();
