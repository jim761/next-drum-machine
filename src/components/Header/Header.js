"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { MutedContext } from "../MutedContext";
function Header() {
  const { isMuted, setIsMuted } = React.useContext(MutedContext);
  const id = React.useId();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setIsMuted(!isMuted);
          }}
        >
          {!isMuted ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {!isMuted ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
