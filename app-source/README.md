# Study focus timer

Source for https://molhm01.github.io/study-focus-timer/ .

## Build

From `app-source`, run `npm install`, `npx tsc --noEmit`, then `npm run build`. Copy the three emitted files from `dist` to the repository root. Runtime media carriers live in root `images/images/` and `sounds/`. They are split base64 text files because the deployment path accepts text reliably. The browser reconstructs JPEG/AAC bytes without upscaling. Keep these folders alongside the compiled files when hosting a clone. No API keys or server are needed. Existing visitor tasks, settings and timer progress stay in that visitor's browser.

## Video backgrounds

The timer offers 20 animated scenes, chosen as a small intentional set after a quality pass over hundreds of candidates: 15 flat illustrated lofi rooms and 5 photographed nature scenes (waterfalls, an alpine lake, surf and shoreline). Illustrated scenes are drawn as seamless loops and wrap natively. Photographed scenes are near-static tripod compositions with continuous water or fog motion; their repeat is covered by a short end-of-clip crossfade, which masks rather than eliminates the cut. All scenes fill the whole screen (object-fit cover); no letterbox bars. Videos stream directly from Pixabay's CDN only when a scene is selected (embedding permitted by Pixabay's terms); no video files are hosted in this repository. While a scene loads, the previous background stays on screen until the new stream's first frame is decoded (a still photo on first visit); a scene that fails keeps the previous background and shows a note, and the player retries other quality variants (medium, large, small, tiny) first. Phones start at the small variant so scenes start faster on mobile data. Playback pauses when hidden, minimized or animation is turned off. Muted inline autoplay is attempted; a tap retries if the browser blocks it. A saved scene ID that no longer exists falls back to the default scene instead of an empty background. The timer itself does not depend on the external video server.

Scene sources (Pixabay Content License):

- Cat on the windowsill: https://pixabay.com/videos/lofi-cat-night-window-rain-cute-246243/
- Cat at sunset window: https://pixabay.com/videos/lofi-chill-cat-cartoon-cozy-246535/
- Sleeping cat, night room: https://pixabay.com/videos/lofi-cat-sleeping-cute-cartoon-246241/
- Cat by the fireplace: https://pixabay.com/videos/lofi-cat-fireplace-fire-sleeping-246242/
- Rainy mountain cafe: https://pixabay.com/videos/live-wallpaper-cozy-cabin-rainy-day-270983/
- Attic studio nap: https://pixabay.com/videos/dog-room-nap-lights-vacation-73663/
- Rainy study desk: https://pixabay.com/videos/lofi-girl-study-lamp-rain-window-215407/
- Tropical waterfall: https://pixabay.com/videos/nature-waterfall-tropical-rain-107976/
- Waterfall streams: https://pixabay.com/videos/waterfall-river-nature-water-22589/
- Rainy reading cat: https://pixabay.com/videos/anime-lofi-cat-cozy-rain-312345/
- City window cat: https://pixabay.com/videos/anime-lofi-cat-cute-cat-345856/
- Cozy study rain: https://pixabay.com/videos/anime-cozy-rain-rainy-night-310025/
- Sunset fence cat: https://pixabay.com/videos/lofi-chill-nature-cat-sunrise-270507/
- Alpine lake (Moraine Lake): https://pixabay.com/videos/moraine-lake-banff-national-park-292827/
- Golden surf: https://pixabay.com/videos/ocean-waves-rocks-beach-sea-surf-20451/
- Shoreline waves: https://pixabay.com/videos/beach-coast-ocean-wave-coastal-198488/
- Warm library desk: https://pixabay.com/videos/girl-study-relaxing-alone-anime-214500/
- Retro train cat: https://pixabay.com/videos/cat-train-retro-chill-relax-anime-301247/
- Sleeping dog desk: https://pixabay.com/videos/anime-lofi-dog-cute-dog-345838/
- Night reading: https://pixabay.com/videos/anime-lofi-girl-anime-girl-reading-345955/

## Focus radio

The mini music player defaults to Focus radio: eight instrumental lofi tracks that stream directly from Pixabay's CDN only while playing, under the Pixabay Content License (https://pixabay.com/service/license-summary/) - free to use without attribution. Free-to-use is not public domain; the authors keep their copyright. No audio files are hosted in this repository. Browsers block audio autoplay before the first tap on the page, so radio playback starts from the play button or resumes on the first tap after a reload. The player shows the current track's title, artist and cover; the tracks are instrumentals, so there are no lyrics to display.

Track sources:

- Chillhop Jazz Coffee Shop - alex-morgan: https://pixabay.com/music/lofi-chillhop-jazz-coffee-shop-552792/
- Lofi - Sub_Clair: https://pixabay.com/music/lofi-lofi-586095/
- LoFi Relax - Kulakovka: https://pixabay.com/music/lofi-lofi-relax-570489/
- Lofi - APALONBeats: https://pixabay.com/music/lofi-lofi-576261/
- LoFi Music - MondaMusic: https://pixabay.com/music/lofi-lofi-lofi-music-589107/
- Chill Lofi - ZephiraMusic: https://pixabay.com/music/lofi-chill-lofi-585360/
- Lofi Coffee Shop - alex-morgan: https://pixabay.com/music/lofi-lofi-coffee-shop-568150/
- Lofi Midnight Club - alex-morgan: https://pixabay.com/music/lofi-lofi-midnight-club-568164/

## Music player and Spotify

The mini player can be dragged anywhere by its top bar; its position is remembered on that device. Spotify mode embeds Spotify's official player, which shows album art and playback controls; Spotify decides what plays (full songs when signed in to Spotify inside the player, 30-second previews when signed out). Showing the live current song or synced lyrics is not supported through an embedded player - Spotify exposes that only to apps connected to a Spotify account, which this site does not use.

## Saved backgrounds, solid colors and the color wheel

Image and video links pasted in Settings are saved under My saved backgrounds and reload on each visit (stored in that browser only); each can be re-applied or forgotten independently. Solid color backgrounds are picked from presets or a color wheel (hue/saturation wheel with a lightness slider); light colors are dimmed behind the timer automatically so the clock stays readable. The old gradient and CSS-animated background presets were removed; saved picks migrate once to the closest solid color or the default photo.

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

Image/video uploads offer Crop to fill or Show whole image, never stretch, and reset on reload. Direct image/video links depend on source permissions and cross-origin rules; public Pinterest pins may work through the image resolver, but private/deleted pins and short pin.it links cannot be guaranteed. Google search result pages are not direct images: use the original file link or upload it. The previous background is retained when import fails. The app cannot restore detail absent from a low-resolution source.

Document Picture-in-Picture gives a browser-managed always-on-top timer on supporting desktop browsers (not universal). A minimal-chrome popup mirror is used elsewhere; browser settings control its chrome and pinning. The mirror is a control/display for the main timer, not an independent timer. Keep the main tab open. Spotify remains an official embed, not account synchronization; Spotify controls sign-in and playback availability.

### Longer study scene sources
- Rainy study window (60.09s): https://pixabay.com/videos/lofi-girl-study-lamp-rain-window-215407/
- Rainlit reading nook (64s): https://pixabay.com/videos/ai-generated-anime-cozy-rain-297863/
- Neon rainy lounge (60s): https://pixabay.com/videos/anime-background-rain-couch-265906/
- Night desk journal (52.07s): https://pixabay.com/videos/girl-study-anime-cartoon-drawing-276498/
- Umbrella city (61.17s): https://pixabay.com/videos/anime-lofi-cozy-rain-rainy-night-311563/
- Neon alley puddles (24.88s): https://pixabay.com/videos/umbrellas-street-rain-anime-city-180170/
- Moonlit river window (30.03s): https://pixabay.com/videos/window-moon-clouds-river-manga-229537/
- Cabin porch fire (30s): https://pixabay.com/videos/ai-generated-porch-fireplace-cozy-211097/
- Window cat at dusk (58.56s): https://pixabay.com/videos/lofi-chill-cat-cartoon-cozy-246535/
- Rainy sofa cat (75.34s): https://pixabay.com/videos/lofi-cat-sleeping-cute-cartoon-246241/
- Firelit cabin (30s): https://pixabay.com/videos/cozy-interior-fireplace-chimney-204116/
- Lavender lounge (20s): https://pixabay.com/videos/ai-generated-girl-rain-rainy-248668/
- City cat companion (60.17s): https://pixabay.com/videos/ai-generated-anime-cozy-rain-371447/
- City blues (20.12s): https://pixabay.com/videos/ai-generated-city-night-rain-storm-379222/
- Sleepy desk cat (64s): https://pixabay.com/videos/anime-lofi-cat-cute-cat-345856/
- Lamp and sleeping cat (64s): https://pixabay.com/videos/anime-lofi-cat-cozy-rain-312345/
- Rainy study companion (67.8s): https://pixabay.com/videos/girl-chill-rain-relax-relaxation-271841/
- Rooftop study (72s): https://pixabay.com/videos/girl-chill-rain-relax-study-297736/
- Sleeping hearth cat (58.69s): https://pixabay.com/videos/lofi-cat-fireplace-fire-sleeping-246242/
- Dusk window cat (76.71s): https://pixabay.com/videos/lofi-cat-night-window-rain-cute-246243/
- Candlelit library (30s): https://pixabay.com/videos/library-books-cozy-candle-rain-202823/
- Old-town rain (32.87s): https://pixabay.com/videos/buildings-road-rain-street-shops-75368/
- Storm at sea (58.52s): https://pixabay.com/videos/moon-sea-rain-thunder-dark-clouds-38271/
- Library afternoon (22.21s): https://pixabay.com/videos/ai-generated-anime-girl-cozy-room-360380/
- Night study wall (64s): https://pixabay.com/videos/anime-cozy-rain-rainy-night-310025/
- City laptop glow (63.53s): https://pixabay.com/videos/anime-cozy-rain-rainy-night-330062/
- Library dog (61.4s): https://pixabay.com/videos/anime-lofi-dog-cute-dog-345838/
- Autumn porch (30s): https://pixabay.com/videos/ai-generated-porch-rain-rainy-day-211089/
- Retro train cat (29.87s): https://pixabay.com/videos/cat-train-retro-chill-relax-anime-301247/
- Cottage candlelight (30s): https://pixabay.com/videos/cozy-cabin-interior-log-trees-208856/
- Rainy woodland lounge (30.03s): https://pixabay.com/videos/ai-generated-chill-living-room-257953/
- Red rainy room (30.03s): https://pixabay.com/videos/living-room-cozy-fireplace-loop-258729/
- Ancient forest (60.27s): https://pixabay.com/videos/tree-branches-rain-fog-dark-251562/
- Mountain lodge window (30s): https://pixabay.com/videos/ai-generated-rain-fireplace-243696/
- Classic hearth room (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-247096/
- Moonlit lounge (60.06s): https://pixabay.com/videos/room-river-cozy-moon-168104/
- Candlelit studio (30.06s): https://pixabay.com/videos/ai-generated-candles-room-spa-205001/
- Round-door library (39.83s): https://pixabay.com/videos/room-fireplace-rain-coffee-study-182592/
- Ember-lit room (60.12s): https://pixabay.com/videos/room-cozy-fireplace-cat-candles-166272/
- Rainy bedroom (29.63s): https://pixabay.com/videos/cozy-moon-rain-summer-interior-120583/
- Mountain lake bedroom (30.03s): https://pixabay.com/videos/ai-generated-rain-raining-weather-236040/
- Hilltop sunset (60.06s): https://pixabay.com/videos/ai-generated-sunset-living-room-181971/
- Round-door fire (30.03s): https://pixabay.com/videos/ai-generated-living-room-cozy-259293/
- Snowy city window (60s): https://pixabay.com/videos/ai-generated-window-snow-winter-253904/
- Sunset city lounge (60s): https://pixabay.com/videos/ai-generated-living-room-house-267347/
- Forest library (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-208105/
- Rainy sunset room (60.14s): https://pixabay.com/videos/cat-couch-living-room-cozy-room-156473/
- Fireside tabby (30.08s): https://pixabay.com/videos/cozy-home-cabin-warm-tea-cup-201968/
- Victorian fire (60.01s): https://pixabay.com/videos/nature-rain-cozy-fireplace-porch-108292/
- Rainy mountain retreat (58.12s): https://pixabay.com/videos/ai-generated-bedroom-lake-rainy-201179/
- Blue mountain bedroom (20.04s): https://pixabay.com/videos/ai-generated-room-cabin-cottage-208621/
- Sunlit bookcase (31.98s): https://pixabay.com/videos/ai-generated-living-room-sun-cozy-204238/
- Warm timber library (30s): https://pixabay.com/videos/ai-generated-living-room-cozy-205644/
- Indoor garden library (30s): https://pixabay.com/videos/ai-generated-fireplace-living-room-205634/
- Snowy fireplace bedroom (30s): https://pixabay.com/videos/ai-generated-living-room-cozy-snowy-209220/
- Rainy high-rise (64.8s): https://pixabay.com/videos/dark-room-rain-outside-cinemagraph-337559/
- Quiet bookshelf nook (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-210278/
- Sunlit mountain lounge (30.03s): https://pixabay.com/videos/ai-generated-sofa-window-219025/
- Classic book room (30.03s): https://pixabay.com/videos/cafe-animated-background-coffee-267920/
- Golden reading room (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-208089/
- Rain on glass (30.9s): https://pixabay.com/videos/dark-room-raining-videos-asmr-258614/
- Sunset forest lounge (60.06s): https://pixabay.com/videos/ai-generated-living-room-cozy-181977/
- Forest rain windows (60.14s): https://pixabay.com/videos/living-room-windows-rain-raindrops-167688/
- Round-window lounge (60.12s): https://pixabay.com/videos/ai-generated-cottage-snow-188977/
- Sunbeam lodge (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-208106/
- Warm sunset lounge (60.06s): https://pixabay.com/videos/ai-generated-living-room-cat-sunset-181947/
- Mountain study lounge (30.03s): https://pixabay.com/videos/cozy-relaxing-ambience-living-room-298922/
- Sunlit green room (30s): https://pixabay.com/videos/ai-generated-living-room-fireplace-209881/
- Rainy city apartment (60s): https://pixabay.com/videos/ai-generated-room-house-home-261757/
- Rainy timber bedroom (30s): https://pixabay.com/videos/autumn-nature-cabin-forest-324169/
- Mountain night retreat (60s): https://pixabay.com/videos/bedroom-home-indoors-window-sleep-340848/
- Twilight pagoda (24.21s): https://pixabay.com/videos/five-story-tower-crescent-moon-night-184370/
- Snowy shrine lantern (27.48s): https://pixabay.com/videos/shrine-lantern-winter-snow-night-266428/
- Lantern street (30s): https://pixabay.com/videos/ai-generated-heavy-rain-japan-kyoto-225944/
- Anime river sunset (60s): https://pixabay.com/videos/ai-generated-night-sky-stars-265909/
- Violet Mount Fuji (30s): https://pixabay.com/videos/ai-generated-mountain-japan-nature-281165/
- Snowy Kyoto lane (52.51s): https://pixabay.com/videos/snow-snowfall-pedestrian-old-town-153086/
- Stormy mountain garden (25s): https://pixabay.com/videos/ai-generated-storm-garden-rain-185425/
- Moonlit cherry pond (60.05s): https://pixabay.com/videos/pond-moon-night-stars-water-japan-158195/
- Snowy shrine gate (60.05s): https://pixabay.com/videos/temple-snow-winter-japan-asia-189472/
- Night library student (63.23s): https://pixabay.com/videos/girl-study-relaxing-alone-anime-214500/
- Sunset headphones (64s): https://pixabay.com/videos/ai-generated-lofi-anime-night-314688/
- Cozy room companion (64s): https://pixabay.com/videos/anime-lofi-girl-anime-girl-reading-345955/
- Coffee shop hearth (30s): https://pixabay.com/videos/ai-generated-coffee-shop-fireplace-208093/
- Garden porch (20s): https://pixabay.com/videos/ai-generated-porch-flowers-cozy-209201/
- Tea by the fire (30s): https://pixabay.com/videos/cozy-cabin-interior-fireplace-204117/
- Covered forest porch (30s): https://pixabay.com/videos/ai-generated-fireplace-chill-246984/
- Round-door storybook (60s): https://pixabay.com/videos/ai-generated-living-room-house-267296/
- Rainy fireside study (60.5s): https://pixabay.com/videos/landscape-nature-field-countryside-301045/
- Moonclock lounge (30s): https://pixabay.com/videos/fireplace-home-cabin-house-nature-297472/
- Snowy coffee shop (60s): https://pixabay.com/videos/ai-generated-snow-chill-lofi-242924/
- Winter cafe (60s): https://pixabay.com/videos/ai-generated-coffee-shop-snow-chill-243342/
- Open book garden (30.03s): https://pixabay.com/videos/bible-book-window-cozy-286806/
- Snowy porch chair (30s): https://pixabay.com/videos/ai-generated-chill-soothing-244452/
- Snowy cabin deck (30s): https://pixabay.com/videos/ai-generated-fireplace-campfire-244362/
- Autumn porch hearth (30s): https://pixabay.com/videos/ai-generated-fireplace-porch-cozy-210707/
- Dusk window reader (64s): https://pixabay.com/videos/anime-cozy-evening-night-ambience-309388/
- Neon headphones (59.99s): https://pixabay.com/videos/lofi-girl-chill-for-chill-study-265815/
- Pale winter lounge (30.03s): https://pixabay.com/videos/ai-generated-fireplace-home-house-266042/
- Pink-haired study (30s): https://pixabay.com/videos/girl-study-meditation-sleep-rest-325442/
- Night laptop study (59.99s): https://pixabay.com/videos/lofi-girl-chill-for-chill-study-265816/
