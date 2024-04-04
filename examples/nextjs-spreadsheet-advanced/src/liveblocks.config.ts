import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { Presence, Storage, UserMeta } from "./types";

const client = createClient({
  // authEndpoint: "/api/liveblocks-auth",
  authEndpoint: (_roomId?: string) =>
    Promise.resolve({
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdiNmM5Y2E0NDViZGJiNzMwNTliMTZiZjRhNTljMGE1In0.eyJpYXQiOjE3MDYyNzMyNzEsImV4cCI6MTcwNjM1OTY3MSwiayI6ImFjYyIsInBpZCI6IjYzNTc4ZWFlYzM4ODRlYjYxZWZkNjc1NSIsInVpZCI6InVzZXItNiIsInVpIjp7Im5hbWUiOiJWaW5jZW50IiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS84Mzg0ND92PTQifSwicGVybXMiOnsibmV4dGpzLXdoaXRlYm9hcmQtYWR2YW5jZWQiOlsicm9vbTp3cml0ZSIsImNvbW1lbnRzOndyaXRlIl19LCJtY3ByIjoyMH0.mTsFCevySWF1n-eU1eXrkurFyDwjSRcvyhJ8onPAyT0c4GAw3sj6e9a7FSi3Dv_NkPifKM6KH5l7P_Uc5yXxnDyv21Fbl4pa3QLhOzsk6Wq9PBhjXB7bMZYZIZ4iNg4302Kjczr5agNDpCyW1duDEvFKd38-48H1PVgIZ81zDkH1EGdfiI3NmRN60BkHfsZbrqlwpAY7dGjvcX392yygIscCmonztiwGoe1GDoLuWhCgkrO4PcsAeb7Gx-PWmYuchKp_7Y4357ywObyi0PaImDetU9s1bAhVYGOJSsROFtK-v_yWvrbaFLzGk_1DD3cI5C5mpKC9jmGovb_AFy0161IQBPdzuU4w3DZVQbXTGuz5RfEs9xrqe_xirxajjhrnbz3ElkCUQZFYEKI3LAufF7-e6DvZ38R0zXDWLTFgBVa592lcUpnqzfSOp4-dnL4xf7G8XY-U-NaG2A8HM8ru5hehUSvqW7-44PqCT-q1w7KmY0JvqcFlrMWF4Ruot44XlpG7rgUuLlneFrJbQxTPjja_yIz5Se8SVQkbBCeRxgVBx7crEug7cnIkLguYQjLPLlWVPy4Gb0gNLalENyP8yNQBHZJSJsvJoCe3dogyilF10aH-T89VAtQ5n-1MrwcmurfiDZg7xUxVEjm6hA05jwCeIYZsUNI6NeXJQxoNUEU",
    }),

  // @ts-expect-error
  baseUrl: "http://127.0.0.1:8787/",
});

export const {
  RoomProvider,
  useRoom,
  useHistory,
  useSelf,
  useCanUndo,
  useCanRedo,
} = createRoomContext<Presence, Storage, UserMeta>(client);
