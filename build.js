// Builds the offline web bundle into ./www (used by Capacitor).
// - compiles Tailwind CSS from the classes used in src/index.html
// - copies the game page
// - copies FontAwesome (css + webfonts) so icons work without internet
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const www = path.join(root, "www");

fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, "css"), { recursive: true });

execSync(
  "npx tailwindcss -c tailwind.config.js -i src/input.css -o www/css/tailwind.css --minify",
  { cwd: root, stdio: "inherit" }
);

fs.copyFileSync(path.join(root, "src", "index.html"), path.join(www, "index.html"));

const fa = path.join(root, "node_modules", "@fortawesome", "fontawesome-free");
fs.cpSync(path.join(fa, "css"), path.join(www, "fa", "css"), { recursive: true });
fs.cpSync(path.join(fa, "webfonts"), path.join(www, "fa", "webfonts"), { recursive: true });

console.log("Web bundle ready in ./www");
