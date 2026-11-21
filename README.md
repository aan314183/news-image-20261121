# 21 November 2026 — the world in one image

A front page summing up Saturday 21 November 2026 in one image (1024×1024 PNG),
built for the [news-image-20261121](https://make.fun/bounty/news-image-20261121)
bounty on make.fun.

## The day's news

- **The AI rout (lead).** Wall Street's AI trade unwinds in a day: the Nasdaq
  plunges 5.28% to 22,618 — its worst week since Covid — the S&P 500 falls 3.70%
  into correction, and Nvidia sinks 14.01% to USD 125.53, a 52-week low, after
  Reuters reports the SEC is probing its accounting.
- **Denmark expels Russia's defence attaché** over a foiled Russian plot to
  assassinate Ukrainian-American rapper Kyivstoner at a Copenhagen concert.
- **Russian strikes hit Kryvyi Rih:** 2 dead, 42 hurt, children among them.
- **Cyberattack:** JPMorgan, Visa and Mastercard report breaches at
  third-party vendors; their payment networks are unaffected.
- **Bolsonaro taken to hospital** with severe abdominal pain.
- **COP31 climate talks enter their final stage** in Turkey, with the fight
  over climate finance dominating.
- **Cricket, Wellington:** India fight back to 159 for 1, trailing New
  Zealand by 209 on day two.
- **Also:** the US sanctions four Iranians over oil money.

## How it was made

Every line of the front page was drawn with ffmpeg `drawtext` (DejaVu Serif
for the masthead, Noto Sans for the stories) and verified at full size and
at 300 px. The program itself only copies the finished image to
`/output/entry.png` after checking it is a whole PNG within the limits
(1024×1024, 1 MiB).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run it twice and the output is byte-identical. No network is used.

## License

MIT — see [LICENSE](LICENSE).
