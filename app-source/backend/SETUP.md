# Connecting the optional account + live presence backend

The site works fully without this file. These steps activate three optional
features: Google sign-in, profile sync across devices, and the live
"N studying now" counter. Everything runs on Firebase's no-cost Spark plan
(no card, no paid plan; usage hard-caps instead of charging).

Costs and limits (Firebase Spark, from https://firebase.google.com/pricing):
Authentication 50,000 monthly users; Realtime Database 100 simultaneous
connections, 1 GB stored, 10 GB/month download. A personal study site fits
comfortably. If the 100-connection presence cap is ever hit, extra visitors
just do not appear in the counter; the timer itself is unaffected.

## One-time setup (about 10 minutes, in the owner's Google account)

1. Open https://console.firebase.google.com and sign in with the Google
   account that should OWN the data (the site owner's account).
2. "Create a project" - name e.g. `study-focus-timer`. Decline Google
   Analytics (not needed).
3. Build > Authentication > Get started. Enable TWO providers:
   - Google (set the support email when asked)
   - Anonymous (used only for the guest presence count)
4. Build > Realtime Database > Create database. Location: United States
   (us-central1). Start in LOCKED mode, then open the Rules tab, paste the
   contents of `firebase-rules.json` from this folder, and Publish.
   These rules keep every profile private to its owner and let visitors
   read only the anonymous presence flags that make up the count.
5. Project settings (gear icon) > "Your apps" > web app (`</>`). Register
   any nickname. Firebase shows a config object.
6. In Authentication > Settings > Authorized domains, confirm
   `molhm01.github.io` is listed (add it if not).
7. Copy the five values from the config object into
   `src/progression/backend.ts` -> `FIREBASE_CONFIG`
   (apiKey, authDomain, projectId, databaseURL, appId).
   The databaseURL looks like `https://<project>-default-rtdb.firebaseio.com`.
   These values are public-by-design identifiers, not secrets - access is
   enforced by the security rules above.
8. Rebuild and publish the site. Sign-in, sync and the counter turn on.

## What visitors' browsers send once this is on

- Presence (every visitor, via anonymous sign-in): a random id, a true/false
  "studying" flag and a timestamp, deleted automatically on disconnect.
- Profile sync (only visitors who choose Google sign-in): display name,
  avatar/accessory choices and a timestamp, stored under their own account.
- Google sign-in shares the visitor's Google name and email with Firebase
  Authentication only; the site reads them just to show who is signed in.

No study stats are uploaded by this version - progression is recomputed
locally on each device from that device's own timer history.
