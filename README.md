<h1 align=center>Dungeon Master</h1>
<div align="center">
  <h2>Open Source AI Powered RPG Master</h2>
  <h3>Play <strong>Online and Free</strong> RPG games controlled by Artificial Intelligence.</h3>
  <image src="./public/images/system-preview.png" width="600px" alt="System Preview"></image>
</div>

### Setup your OpenAI Key

```bash
cp .env.example .env
# set your own key or
echo GPT_API_KEY=sk-YourApiKey >> .env
```

### Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
