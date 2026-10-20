# Neon Dash: Android APK build

This project wraps the Neon Dash HTML game in an Android app (using Capacitor).
The APK is built for free in the cloud by GitHub Actions. You do not need Android Studio.

## Get your APK (about 10 minutes, no coding)

1. Create a free account at https://github.com and sign in.
2. Click **New repository** (top-right "+"), name it `neon-dash`, keep it Private, and create it.
3. On the empty repository page click **uploading an existing file**.
4. Unzip `neon-dash-android-project.zip` on your computer, then drag ALL the
   contents of the unzipped folder into the browser, including the hidden `.github` folder.
   Important: the `.github/workflows/build-apk.yml` file must be uploaded.
   If your computer hides the `.github` folder, use "Add file > Create new file" on GitHub,
   type `.github/workflows/build-apk.yml` as the name, and paste the contents of that file.
5. Click **Commit changes**.
6. Open the **Actions** tab. A run called "Build Android APK" starts by itself
   (or click it, then **Run workflow**). Wait 5 to 8 minutes for the green tick.
7. Click the finished run, scroll to **Artifacts**, and download **neon-dash-apk**.
8. Unzip it to get `app-debug.apk`, send it to your phone, tap it, and allow
   "Install unknown apps" when asked. Then play.

## Notes

- The APK is a debug build, which is fine for personal use. A Play Store release needs a signed release build.
- The game is locked to portrait mode and works fully offline.
- To change the game, edit `src/index.html` and commit; a new APK is built automatically.
