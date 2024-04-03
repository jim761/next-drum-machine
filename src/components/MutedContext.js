"use client";
import React from "react";
export const MutedContext = React.createContext();
function MutedProvider({ children }) {
  const [isMuted, setIsMuted] = React.useState(false);
  const Muted = { isMuted, setIsMuted };
  return (
    <MutedContext.Provider value={Muted}>{children}</MutedContext.Provider>
  );
}

export default MutedProvider;
