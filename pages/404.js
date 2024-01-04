import React, { useEffect } from "react";
import styles from "../styles/404.module.css";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  //   console.log(router);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <section className={styles.container}>
      <div>
        <h1>Page not found</h1>
        <p>lorem lorem lorem</p>
        <button className={styles.button} onClick={() => router.push("/")}>
          New articles await
        </button>
      </div>
    </section>
  );
}
