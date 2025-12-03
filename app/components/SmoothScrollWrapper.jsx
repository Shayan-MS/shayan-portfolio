"use client";

import { Scrollbar } from "smooth-scrollbar-react";

export default function SmoothScrollWrapper({ children }) {
  return (
    <Scrollbar
      damping={0.08}
      alwaysShowTracks={false}
      continuousScrolling={true}
      style={{ height: "100vh" }}
    >
      {children}
    </Scrollbar>
  );
}
