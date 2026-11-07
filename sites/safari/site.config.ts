export const siteConfig = {
  siteName: 'Safari-TV Guide',
  domain: 'safaritv.wiki',
  url: 'https://safaritv.wiki',
  gameTitle: 'Safari-TV',
  steamAppId: 5118500,
  steamUrl: 'https://store.steampowered.com/app/5118500/SafariTV/',
  supportEmail: '',
  social: [
    { href: 'https://discord.gg/4Vk7b4u7qk', label: 'Discord (store page icon)' },
    { href: 'https://discord.gg/VbkVvdb4zt', label: 'Discord (support URL)' },
    { href: 'https://www.youtube.com/@mercy_games_company', label: 'YouTube' },
    { href: 'https://www.tiktok.com/@coopgamesdev', label: 'TikTok' },
    { href: 'https://www.instagram.com/iam_game_dev/', label: 'Instagram' },
    { href: 'https://x.com/bayern_dev', label: 'X' },
    { href: 'https://www.facebook.com/profile.php?id=61573254253105', label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/alex-a-962891306/', label: 'LinkedIn' },
  ],
  developer: 'Mercy Games and stre1itzia',
  publisher: 'Mercy Games and Blue Ocean Games',
  tagline: 'Unofficial English fan guide for the 2–4 player safari agency co-op.',
  locale: 'en',
  themeColor: '#16130e',
  contentRoot: 'safari',
  homeTitle: 'Safari-TV Guide — Release Date, Co-op, and the Safari Truck',
  homeDescription:
    'Unofficial English guide to Safari-TV (Steam AppID 5118500). Mercy Games and stre1itzia with Blue Ocean Games. Early Access 9 Nov 2026, 2–4 player co-op, the physics truck, tourists, and wildlife. Not affiliated with the developers or Valve.',
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Safari-TV: stylized passengers crowded in an open yellow safari truck, one holding a camera, with a giraffe behind them',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Safari-TV: the Safari TV logo over passengers in an open yellow truck, one of them filming',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'safaritv.wiki is an unofficial fan-made guide for Safari-TV. It is not affiliated with, endorsed by, or sponsored by Mercy Games, stre1itzia, Blue Ocean Games, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Store text and screenshots from before the 9 Nov 2026 Early Access unlock can change. This site does not sell the game, redeem codes, or recover accounts. Discord, social links, and the support URL in the footer are the ones printed on the Steam store page or in the appdetails payload. Mail and chat sent there do not reach the people who edit this wiki.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/truck', label: 'Truck' },
    { href: '/wildlife', label: 'Wildlife' },
    { href: '/coop', label: 'Co-op' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/truck', label: 'Truck' },
    { href: '/wildlife', label: 'Wildlife' },
    { href: '/coop', label: 'Co-op' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 7 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, age ratings, system requirements, the playtest app id, and the Early Access developer notes are from the Steam appdetails API, IStoreBrowseService, and the English store page on 7 Nov 2026. Wishlist and playtest lines are from the six Steam community announcements dated 27 Aug through 28 Oct 2026. No launch client was available. The public price was not in that appdetails payload.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/5118500/SafariTV/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5164540',
      label: 'Safari-TV Playtest app',
    },
    {
      href: 'https://steamcommunity.com/app/5118500/announcements/detail/1847920302232075',
      label: 'Pre-launch announcement, 28 Oct 2026',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
