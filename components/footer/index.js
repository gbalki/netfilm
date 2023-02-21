import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/serhat-balk%C4%B1-013219227/" target="_blank">
        Serhat BALKI
      </Link>
    </footer>
  );
}

export default Footer;