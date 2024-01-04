import React, { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Card({ data }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.description}>{data.body}</p>
      <button
        className={styles.button}
        onClick={() => router.push(`/detail/${data.id}`)}
      >
        Read More
      </button>
    </div>
  );
}
