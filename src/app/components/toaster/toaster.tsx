"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export default function Toaster() {
  return (
    <ToasterProvider
      position="top-center"
      toastOptions={{
        success: {
          style: {
            background: "#10b981",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#10b981",
          },
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
}
