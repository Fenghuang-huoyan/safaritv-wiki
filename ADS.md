# Ads — safaritv.wiki

The Native Banner slot after Quick Answer is wired and **turned on** for safaritv.wiki only.

`sites/safari/ads.config.ts` sets `enabled` to true. `afterQuickAnswer.id` is `bf22be7212d999646a322853d7349d4b`. `afterQuickAnswer.scriptSrc` and the site-wide `scriptSrc` are `https://bauval.org/21/bf22be7212d999646a322853d7349d4b`. That zone is this domain’s own Get Code. No key from another game is stored here. `invokeBase` stays empty. The container id is `container-bf22be7212d999646a322853d7349d4b`. Format is `native-banner`.

`analytics.gaId` in `sites/safari/site.config.ts` is `G-3V3EVPD0Y2`. The base layout loads GA4 `G-3V3EVPD0Y2` on content pages.

Adult and sensitive categories stay off. The 404 page does not render a slot.
