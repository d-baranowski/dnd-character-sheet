# D&D Character Sheet Manager
Built using Electron & React.

Esthetically pleasing 5e Character sheet with many useful features.
 
* SRD Content for spells and feats
* Automatic long rest
* Animated health bar
* 3d animated hit dice menu
* Pretty alignment picker
* Auto calculated values from modifiers

[![Alt text](example.png?raw=true "Screen shoot")](
https://www.youtube.com/watch?v=4BCLUY1GEWU&list=PLxEsTDd6C5F4nDbgDgNLImzM1Ck_bN61T)

[Watch Demo Here](
https://www.youtube.com/watch?v=4BCLUY1GEWU&list=PLxEsTDd6C5F4nDbgDgNLImzM1Ck_bN61T)

[Download](https://github.com/d-baranowski/dnd-character-sheet/releases/latest)
Your operating system will warn you against installing it because I didnt bother signing the application.   
## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ npm run start-renderer-dev
$ npm run start-main-dev
```

## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

To run End-to-End Test

```bash
$ npm run build
$ npm run test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:
```bash
DEBUG_PROD=true npm run package
```

