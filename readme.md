## Hackathon

1. App can be installed from chrome/edge browser.
2. Images + fonts will be cached by serviceworker.
3. Push notification for sell positions.

### DEV

1. `yarn start` to start web.
2. `yarn startServer` to start node server.

PS: For serviceworker to work on localhost it takes the file from `public` not form `src/serviceworker`. Make changes in this file , do `yarn build` and move the `service-woker` file from `build` to `public`.
