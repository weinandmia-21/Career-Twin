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

      {/* NEW */}
      <div className={styles.outerRing} />

      {/* NEW */}
      <div className={styles.outerRingTwo} />

      <div className={styles.shell}>

        <div className={styles.energy} />

        <div className={styles.highlight} />

      </div>

      {/* NEW */}
      <div className={styles.particleOne} />
      <div className={styles.particleTwo} />
      <div className={styles.particleThree} />
      <div className={styles.particleFour} />

    </div>
  );
}