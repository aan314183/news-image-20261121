[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/aan314183/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/aan314183/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# 21 November 2026 — the world in one image

A newspaper front page summing up 21 November 2026's world news in a
single 1024x1024 image, for the make.fun bounty `news-image-20261121`.

## The news

1. **Markets — the lead story: the AI rout.** Wall Street's AI trade
   unwinds in a day: Nasdaq -5.28% (22,618 — worst week since Covid),
   S&P 500 -3.70% (6,910 — correction confirmed), Nvidia -14.01%
   (USD 125.53 — a 52-week low) as the SEC probes its books.
2. **Denmark — espionage.** Denmark expels a Russian defence attache;
   a plot to kill rapper Kyivstoner is foiled.
3. **Ukraine — war.** Russian strikes hit Kryvyi Rih: 2 dead, 42 hurt,
   children among them.
4. **Cyberattack.** JPMorgan, Visa and Mastercard hit; vendors breached,
   networks unaffected.
5. **Brazil.** Bolsonaro taken to hospital; the jailed ex-president is
   in severe pain.
6. **Climate — COP31.** Climate talks enter their final stage; the
   finance fight dominates the Turkey summit.
7. **Cricket — Wellington.** India fight back at 159 for 1, trailing
   New Zealand by 209 on day two.
8. **Also:** the US sanctions four Iranians over oil money.

## How the image was built

`entry.png` is rendered with ffmpeg `drawtext`/`drawbox` filters on a
paper-coloured background (`#f7f3ea`, ink `#141414`, red `#b91c1c`).
Masthead in DejaVu Serif Bold; all other text in Noto Sans. Every text
element is passed via a `textfile=` with `expansion=none`, so `%`, `&`,
commas and apostrophes render literally.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This validates `entry.png` (PNG magic, size ≤ 1 MiB, dimensions
≤ 1024x1024, IHDR chunk present, file closed by an empty IEND chunk)
and copies it to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
Node 22 standard library only.

## Notes

- Deterministic: running `main.ts` twice produces a byte-identical
  `entry.png` (same SHA-256).
- No network access is needed to build or run this entry.

## License

MIT — see `LICENSE`.
