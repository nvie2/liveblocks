import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createClient } from "@liveblocks/client";
import { LiveblocksProvider, RoomProvider } from "@liveblocks/react";
import "./index.css";

let PUBLIC_KEY = "pk_test_lOMrmwejSWLaPYQc5_JuGH-H";
let roomId = "react-native-whiteboard";

overrideApiKeyAndRoomId();

if (!/^pk_(live|test)/.test(PUBLIC_KEY)) {
  console.warn(
    `Replace "${PUBLIC_KEY}" by your public key from https://liveblocks.io/dashboard/apikeys.\n` +
      `Learn more: https://github.com/liveblocks/liveblocks/tree/main/examples/react-whiteboard#getting-started.`
  );
}

const client = createClient({
  publicApiKey: PUBLIC_KEY,
});

function Page() {
  return (
    <RoomProvider id={roomId}>
      <App />
    </RoomProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LiveblocksProvider client={client}>
      <Page />
    </LiveblocksProvider>
  </React.StrictMode>
);

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function overrideApiKeyAndRoomId() {
  const query = new URLSearchParams(window?.location?.search);
  const apiKey = query.get("apiKey");
  const roomIdSuffix = query.get("roomId");

  if (apiKey) {
    PUBLIC_KEY = apiKey;
  }

  if (roomIdSuffix) {
    roomId = `${roomId}-${roomIdSuffix}`;
  }
}
