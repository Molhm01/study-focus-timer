# Study focus timer

Source for https://molhm01.github.io/study-focus-timer/ .

## Build

From `app-source`, run `npm install`, `npx tsc --noEmit`, then `npm run build`. Copy the three emitted files from `dist` to the repository root. Runtime media carriers live in root `images/images/` and `sounds/`. They are split base64 text files because the deployment path accepts text reliably. The browser reconstructs JPEG/AAC bytes without upscaling. Keep these folders alongside the compiled files when hosting a clone. No API keys or server are needed. Existing visitor tasks, settings and timer progress stay in that visitor's browser.

## Video backgrounds

The timer has 197 animated scene choices (8 featured plus themed real-world and illustrated groups), down from 211 after a loop-quality pass removed 14 sources whose motion visibly resets at the repeat (walking, camera drift, lighting shifts). Quality over count: only scenes whose end-to-start transition blends into natural motion are listed. All scenes fill the whole screen (object-fit cover); no letterbox bars. The player uses one video element and mounts a second only during the end-of-clip dissolve, shows the scene's own preview image while the stream starts instead of a black frame, and automatically retries other quality variants (medium, large, small, tiny) before reporting a failure. Phones start at the small variant (same resolution, lower bitrate) so scenes start faster on mobile data. End timing uses the verified complete-file duration, not the temporary duration Chromium can report while a fragmented MP4 is still loading. Playback pauses when hidden, minimized or animation is turned off. Muted inline autoplay is attempted; a tap retries if the browser blocks it. Phones, low-power mode, network speed and source availability can affect playback. A saved scene ID that no longer exists falls back to the default scene instead of an empty background. The timer itself does not depend on the external video server.

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

### Earth landmark sources (added 2026-11-08, loop-checked, Pixabay Content License)

- Eiffel Tower by the Seine: https://pixabay.com/videos/eiffel-tower-river-boats-paris-215421/
- Brooklyn Bridge at night: https://pixabay.com/videos/new-york-night-brooklyn-bridge-city-10866/
- Statue of Liberty: https://pixabay.com/videos/statue-of-liberty-statue-liberty-149070/
- Golden Gate Bridge: https://pixabay.com/videos/san-francisco-golden-gate-bridge-17962/
- Northern lights: https://pixabay.com/videos/northern-lights-aurora-borealis-200313/
- Green aurora: https://pixabay.com/videos/aurora-borealis-green-aurora-292822/
- Golden beach sunset: https://pixabay.com/videos/ocean-beach-sunset-waves-dawn-183960/
- Rolling ocean waves: https://pixabay.com/videos/wave-ocean-background-sea-slow-45704/
- Mount Fuji sunrise: https://pixabay.com/videos/mountains-mount-fuji-before-sunrise-214938/
- Mount Fuji lake: https://pixabay.com/videos/mount-fuji-japan-natural-sky-91319/
- Rainbow waterfall: https://pixabay.com/videos/waterfall-rainbow-river-nature-246856/
- Mountain river falls: https://pixabay.com/videos/river-waterfall-mountain-forest-173887/

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
