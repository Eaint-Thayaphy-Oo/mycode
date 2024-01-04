import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

export default function Nav() {
  console.log(styles);
  return (
    <header className={styles.header}>
      <Link href="/">LOGO</Link>
      <ul className={styles.nav}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
