"use client";

import styles from "./AIOrb.module.css";

type AIOrbProps = {
  size?: "sm" | "md" | "lg";
};

export default function AIOrb({
  size = "lg",
}: AIOrbProps) {
  return (
    <div className={styles.orbContainer}>

      <div className={styles.glow} />

      <div className={styles.shell}>

        <div className={styles.energy} />

        <div className={styles.highlight} />

      </div>

    </div>
  );
}