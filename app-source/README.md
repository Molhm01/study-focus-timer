# Study focus timer

Source for https://molhm01.github.io/study-focus-timer/ .

## Build

From `app-source`, run `npm ci`, `npx tsc --noEmit`, then `npm run build`. Copy the three emitted files from `dist` to the repository root. Runtime media carriers live in root `images/` and `sounds/`. They are split base64 text files because the deployment path accepts text reliably. The browser reconstructs JPEG/AAC bytes without upscaling. Keep these folders alongside the compiled files when hosting a clone. No API keys or server are needed. Existing visitor tasks, settings and timer progress stay in that visitor's browser.

## Video backgrounds

The timer has 101 additional distinct source videos, plus nine older selections kept under their saved IDs. Sources stream only when selected; no whole-catalog video download happens at startup. Two video elements share the selected URL and overlap their end and beginning with a dissolve. This smooths the wrap, not a claim that source footage is naturally cyclic. Playback pauses when hidden, minimized or animation is turned off. Muted inline autoplay is attempted; a tap retries if the browser blocks it. Phones, low-power mode, network speed and source availability can affect playback. If a source fails, a local rainy photo remains and Settings offers other choices. The timer itself does not depend on the external video server.

Pixabay expressly permits direct video application embeds in https://pixabay.com/api/docs/ under Hotlinking, and app incorporation in https://pixabay.com/service/faq/ . Videos are under the Pixabay Content License, NOT described as copyright-free or owned by this project. https://pixabay.com/service/terms/ . No new standalone raw licensed video is included. The contact-sheet picker is a composed app-preview design with labels and framing, not a stock image collection or a set of externally hotlinked stills. Earlier raw files, if retained in git history, keep their original rights; this project does not grant their redistribution.

### Older selections
- shrine: https://pixabay.com/videos/anime-style-fantasy-japanese-shrine-348164/
- rainy-window: https://pixabay.com/videos/anime-lofi-rain-anime-girl-376433/
- misty-river: https://pixabay.com/videos/river-mist-water-nature-loop-344726/
- water-garden: https://pixabay.com/videos/gardens-loop-waterfall-meditation-290959/
- sakura-night: https://pixabay.com/videos/night-moon-spring-cherry-blossom-155672/
- night-train: https://pixabay.com/videos/anime-lofi-cozy-night-train-311602/
- japan-street: https://pixabay.com/videos/ai-generated-japan-street-270367/
- cozy-window: https://pixabay.com/videos/heavy-rain-night-cozy-window-376049/
- balcony-dusk: https://pixabay.com/videos/anime-lofi-anime-girl-japan-376434/

### Additional selections
- Rainy bus stop: https://pixabay.com/videos/ai-generated-anime-lofi-rain-363709/
- Record shop: https://pixabay.com/videos/ai-generated-anime-lofi-record-shop-363710/
- Aurora lake: https://pixabay.com/videos/aurora-borealis-northern-lights-lake-186969/
- Autumn nook: https://pixabay.com/videos/autumn-forest-trees-leaves-yellow-313784/
- Lakeside campfire: https://pixabay.com/videos/autumn-forest-trees-leaves-yellow-313787/
- Cabin bedroom: https://pixabay.com/videos/autumn-nature-cabin-forest-324160/
- Forest cabin: https://pixabay.com/videos/autumn-nature-cabin-forest-324164/
- Autumn lake: https://pixabay.com/videos/autumn-relaxation-forest-lake-309119/
- Stormy coast: https://pixabay.com/videos/ai-generated-beach-ocean-night-sea-384362/
- Starlit shore: https://pixabay.com/videos/bioluminescence-beach-waves-sea-343671/
- Midnight waves: https://pixabay.com/videos/bioluminescence-beach-waves-glow-346010/
- Glowing ocean: https://pixabay.com/videos/bioluminescence-bioluminescent-ocean-381552/
- Aurora coast: https://pixabay.com/videos/ai-generated-bioluminescent-beach-375118/
- Moonlit boats: https://pixabay.com/videos/boats-moon-moonlight-milkyway-381338/
- Bonfire: https://pixabay.com/videos/bonfire-flames-fire-camping-camp-201688/
- Candlelit book: https://pixabay.com/videos/book-candle-stars-magic-bedroom-184469/
- Library fire: https://pixabay.com/videos/book-study-books-347655/
- Campfire embers: https://pixabay.com/videos/campfire-bonfire-flames-fire-pit-225422/
- Rainy candle: https://pixabay.com/videos/candle-flame-advent-candlelight-311235/
- Candlelight: https://pixabay.com/videos/candle-flame-advent-candlelight-312390/
- Snowy window: https://pixabay.com/videos/candle-flame-candlelight-light-312404/
- Cedar trail: https://pixabay.com/videos/cedar-tree-line-shrine-approach-211013/
- Purple night: https://pixabay.com/videos/city-starry-sky-relax-view-urban-310146/
- Rainy coffee: https://pixabay.com/videos/coffee-cup-rest-relax-morning-309872/
- Fireside coffee: https://pixabay.com/videos/coffee-living-room-fireplace-237103/
- Morning steam: https://pixabay.com/videos/coffee-tea-steam-morning-sunrise-285759/
- Garden cottage: https://pixabay.com/videos/cottage-cabin-house-hut-rain-180939/
- Forest lounge: https://pixabay.com/videos/ai-generated-couch-sofa-rain-books-185888/
- Cozy bedroom: https://pixabay.com/videos/ai-generated-cozy-bedroom-289797/
- Rainy bedroom: https://pixabay.com/videos/cozy-bedroom-modern-bedroom-290857/
- Quiet suite: https://pixabay.com/videos/cozy-bedroom-modern-bedroom-290943/
- Window retreat: https://pixabay.com/videos/cozy-bedroom-modern-bedroom-290944/
- Winter fire: https://pixabay.com/videos/cozy-winter-autumn-wood-fire-burn-253056/
- Snowy creek: https://pixabay.com/videos/creek-snow-winter-sunrays-trees-190915/
- Ocean doorway: https://pixabay.com/videos/ai-generated-dark-ocean-ocean-scene-372868/
- Stormy pier: https://pixabay.com/videos/ai-generated-dark-ocean-ocean-scene-372869/
- Rainy room: https://pixabay.com/videos/ai-generated-dark-room-storm-outside-369507/
- Winter cottage: https://pixabay.com/videos/dream-nature-fantasy-sleep-night-297586/
- Fireplace: https://pixabay.com/videos/fireplace-fire-heat-burn-hot-327084/
- Snowy lounge: https://pixabay.com/videos/fireplace-winter-snow-nature-347140/
- Moonlit blossoms: https://pixabay.com/videos/flowers-tree-moon-night-sky-179020/
- Moonlit forest: https://pixabay.com/videos/forest-nature-wood-landscape-moon-329836/
- Frozen river: https://pixabay.com/videos/ice-forest-frozen-winter-snow-254850/
- Castle at night: https://pixabay.com/videos/landscape-cute-heaven-nature-371729/
- Forest falls: https://pixabay.com/videos/landscape-waterfall-water-flow-298040/
- Library desk: https://pixabay.com/videos/ai-generated-library-books-363706/
- Coastal lighthouse: https://pixabay.com/videos/lighthouse-landscape-nature-sea-325141/
- Midnight lighthouse: https://pixabay.com/videos/ai-generated-lighthouse-storm-ocean-373895/
- Storm lighthouse: https://pixabay.com/videos/lighthouse-wave-ocean-storm-sea-358853/
- Silver waves: https://pixabay.com/videos/ai-generated-loop-ocean-nature-358453/
- Night lounge: https://pixabay.com/videos/luxury-bedroom-cozy-room-290401/
- Clouds and moon: https://pixabay.com/videos/moon-clouds-stars-sky-night-space-209264/
- Sunset ocean: https://pixabay.com/videos/ai-generated-moon-full-moon-370403/
- Crimson moon: https://pixabay.com/videos/moon-nature-night-moonlight-sky-290116/
- Still moonlight: https://pixabay.com/videos/moon-night-sky-lunar-dark-stars-256347/
- Forest moon: https://pixabay.com/videos/moon-trees-forest-stars-sky-183967/
- Moonlit sail: https://pixabay.com/videos/moonlight-patrol-boat-night-sea-290456/
- Alpine lake: https://pixabay.com/videos/mountains-lake-water-sky-clouds-124774/
- Golden moon: https://pixabay.com/videos/nature-night-moonlight-sea-ocean-313411/
- Kyoto sunset: https://pixabay.com/videos/night-old-capital-cloud-kyoto-182475/
- City moon: https://pixabay.com/videos/night-view-moon-building-143565/
- Night sky: https://pixabay.com/videos/night-view-yamadas-rice-fields-283431/
- Ship at night: https://pixabay.com/videos/ai-generated-ocean-night-stars-377557/
- Coastal cabin: https://pixabay.com/videos/ai-generated-ocean-scene-cinemagraph-372866/
- Misty ocean: https://pixabay.com/videos/ocean-sea-fog-loop-water-waves-299418/
- Blue moon coast: https://pixabay.com/videos/ocean-sea-waves-moon-night-water-174033/
- Rocky sea: https://pixabay.com/videos/ocean-sea-waves-horizon-sky-coast-232793/
- Purple cosmos: https://pixabay.com/videos/purple-cosmic-space-galaxy-clouds-278396/
- Tokyo tower: https://pixabay.com/videos/radio-tower-night-view-211067/
- Rainy cobbles: https://pixabay.com/videos/rain-cobblestone-puddle-wet-splash-380412/
- Rainy leaves: https://pixabay.com/videos/rain-leaves-foliage-raining-227700/
- Rainy path: https://pixabay.com/videos/rain-nature-water-weather-wet-289712/
- Storm lounge: https://pixabay.com/videos/ai-generated-rain-outside-372862/
- Rainy puddles: https://pixabay.com/videos/rain-raining-raindrops-water-199501/
- Neon train: https://pixabay.com/videos/ai-generated-rain-train-window-363703/
- Rainy street: https://pixabay.com/videos/ai-generated-rain-umbrella-night-368211/
- Quiet coast: https://pixabay.com/videos/sea-coast-japan-sea-wave-snowfall-197525/
- Moonlit surf: https://pixabay.com/videos/sea-full-moon-waves-wind-nocturne-227600/
- Moonlit boat: https://pixabay.com/videos/sea-ocean-waves-boat-ship-moon-269357/
- Violet sky: https://pixabay.com/videos/sky-clouds-moon-night-stars-trees-243117/
- Snowy shrine: https://pixabay.com/videos/snow-cold-scenery-natural-167736/
- Starry pines: https://pixabay.com/videos/starry-sky-milky-way-woods-mountain-170888/
- Starry cottage: https://pixabay.com/videos/starry-sky-milky-way-cloud-285663/
- Warm coffee: https://pixabay.com/videos/steaming-mug-hot-coffee-cozy-cafe-322244/
- Alpine table: https://pixabay.com/videos/table-epoxy-lounge-hall-river-298514/
- City commute: https://pixabay.com/videos/train-commuting-train-night-view-170887/
- Sunset train: https://pixabay.com/videos/ai-generated-train-silence-anime-286593/
- Green leaves: https://pixabay.com/videos/tree-foliage-rain-forest-woodland-176026/
- Rainy woodland: https://pixabay.com/videos/tree-forest-rain-outdoor-nature-205213/
- Wet leaves: https://pixabay.com/videos/tree-leaves-rain-rain-water-172759/
- Violet branches: https://pixabay.com/videos/tree-stars-starry-galaxy-night-176198/
- Mountain forest: https://pixabay.com/videos/trees-foliage-forest-rain-woodland-171443/
- Night blossoms: https://pixabay.com/videos/trees-forest-moon-sky-night-183969/
- Winter branches: https://pixabay.com/videos/trees-leaves-snow-forest-woods-190667/
- Turtles at night: https://pixabay.com/videos/turtle-moon-night-beach-ocean-289572/
- Neon city: https://pixabay.com/videos/ai-generated-wallpaper-pixel-anime-247738/
- Sunset crossing: https://pixabay.com/videos/ai-generated-wallpaper-pixel-anime-247740/
- Kyoto evening: https://pixabay.com/videos/ai-generated-wallpaper-pixel-anime-247741/
- Forest waterfall: https://pixabay.com/videos/waterfall-trees-forest-jungle-208570/
- Moonlit ocean: https://pixabay.com/videos/waves-ocean-sea-moonlight-moon-372255/
- Snowy walk: https://pixabay.com/videos/winter-snow-nature-cold-frost-336603/

## Photos

Eight replacement photos are native 1920px wide. CSS uses centered cover crops without blur-fill. A high-density or large display can exceed that resolution; this does not promise that every screen ratio has an exact native matching crop. These specific items are CC0 under Pixabay terms section4 because each Published date is before January9,2019. Main-image downloads were paired to the exact image external-id, not by independently ordered search arrays.

- rain: https://pixabay.com/photos/dark-rain-windows-glass-windows-1850684/ - Published November22,2016, 1920 x 1278 delivered.
- library: https://pixabay.com/photos/george-peabody-library-1629308/ - Published August31,2016, 1920 x 1281 delivered.
- coffee: https://pixabay.com/photos/coffee-pen-notebook-open-notebook-2306471/ - Published May12,2017, 1920 x 1281 delivered.
- desk: https://pixabay.com/photos/diary-ipad-write-blog-workplace-968592/ - Published October5,2015, 1920 x 1440 delivered.
- forest: https://pixabay.com/photos/fog-nature-landscape-forest-trees-1901410/ - Published December13,2016, 1920 x 1280 delivered.
- stars: https://pixabay.com/photos/starry-sky-stars-night-sky-astro-1775745/ - Published October31,2016, 1920 x 1280 delivered.
- mountains: https://pixabay.com/photos/mountains-lake-reflection-sierra-2633783/ - Published August12,2017, 1920 x 1281 delivered.
- ocean: https://pixabay.com/photos/waves-gangneung-sand-3380568/ - Published May7,2018, 1920 x 1078 delivered.

## Ambient audio

Nine real Joseph SARDIN / BigSoundBank CC0 recordings, with exact item credits in `sounds/CREDITS.md`. They are edited into cyclic Web Audio buffers with overlap joins. Only the selected recording loads. White/brown noise remain synthesized and are labeled as noise. Audio needs a user tap under ordinary browser policy.

## Imports, storage and desktop window

Image/video uploads fit with CSS cover and reset on reload. Direct image/video links depend on source permissions and cross-origin rules; public Pinterest pins may work through the image resolver, but private/deleted pins and short pin.it links cannot be guaranteed. Google search result pages are not direct images: use the original file link or upload it. The previous background is retained when import fails. The app cannot restore detail absent from a low-resolution source.

Document Picture-in-Picture gives a browser-managed always-on-top timer on supporting desktop browsers (not universal). A minimal-chrome popup mirror is used elsewhere; browser settings control its chrome and pinning. The mirror is a control/display for the main timer, not an independent timer. Keep the main tab open. Spotify remains an official embed, not account synchronization; Spotify controls sign-in and playback availability.
