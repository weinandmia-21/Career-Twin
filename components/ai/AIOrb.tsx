"use client";

import styles from "./AIOrb.module.css";

export type AIOrbStatus =
  | "idle"
  | "thinking"
  | "success"
  | "error";

type AIOrbProps = {
  size?: "sm" | "md" | "lg";
  status?: AIOrbStatus;
};

export default function AIOrb({
  size = "lg",
  status = "idle",
}: AIOrbProps) {
  const sizeClass =
    size === "sm"
      ? styles.small
      : size === "md"
      ? styles.medium
      : styles.large;

  const statusClass =
    status === "thinking"
      ? styles.thinking
      : status === "success"
      ? styles.success
      : status === "error"
      ? styles.error
      : styles.idle;

  return (
    <div
      className={`${styles.orbContainer} ${sizeClass} ${statusClass}`}
    >
      <div className={styles.glow} />

      <div className={styles.outerRing} />

      <div className={styles.outerRingTwo} />

      <div className={styles.shell}>
        <div className={styles.energy} />

        <div className={styles.highlight} />

        <div className={styles.core} />
      </div>

      <div className={styles.orbit}>
        <div className={styles.particleOne} />
      </div>

      <div className={styles.orbitReverse}>
        <div className={styles.particleTwo} />
      </div>

      <div className={styles.orbitSlow}>
        <div className={styles.particleThree} />
      </div>

      <div className={styles.orbitReverseSlow}>
        <div className={styles.particleFour} />
      </div>
    </div>
  );
}