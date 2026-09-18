"use client";

import { createContext, useContext } from "react";

const LoadingContext = createContext({ isLoaded: true });

export const useLoading = () => useContext(LoadingContext);

export default function InitialLoadProvider({ children }: { children: React.ReactNode }) {
  return (
    <LoadingContext.Provider value={{ isLoaded: true }}>
      <div className="w-full relative">{children}</div>
    </LoadingContext.Provider>
  );
}

