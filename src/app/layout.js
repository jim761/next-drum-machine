import React from "react";

import Header from "../components/Header";

import "./styles.css";
import MutedProvider from "../components/MutedContext";
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MutedProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </MutedProvider>
      </body>
    </html>
  );
}

export default RootLayout;
