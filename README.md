# express-ts-ghost-blog-gen

A blog that publishes itself is only useful if a device on the wall can trigger it. This is an Express and TypeScript service that takes a request — from a Tasmota device, from Node-RED, from anything that can call an endpoint — and turns it into content, keeping the logic that talks to a third-party model or API in one place.

**What is here:** `src/` holds the server, the routes and the helpers · `__tests__/` is the Jest suite, run with `supertest` against the routes · the scripts in `package.json` are `npm run dev` to watch it, `npm run build` and `npm start` to run the compiled server, and `npm test` / `npm run coverage` for the suite. The server runs in UTC on purpose, so a scheduled post does not move with the machine's clock.

---

Written in ExpressJS with Typescript and full coverage tests.

Continuous blog generation.

This project will support outside flow applications such as Tasmtoa devices and NodeRed such that, it will provide connectivity and logic to 3rd party LLMs and APIs to generated automatic content.

## Demo
Endpoints are hosted here:
https://express-ts-ghost-blog-gen.nodejavascript.com

(see routes in code for usage)

## Roadmap
- ~~POST endpoint to convert Ghost API key to JWT in a formatted header to POST to Ghost API admin endpoint.~~
- Implement Google trends API, detect topics to create new post
- Implement LLM
- Implement NodeRed friendly endpoints
