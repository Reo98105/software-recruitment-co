import React from "react";
import Image from "next/image";

import Label from "@/components/Label";
import styles from "@/app/styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <a href="#">
          <Image
            src="/logo.svg"
            alt="Software Recruitment co. logo"
            width={244}
            height={44}
          />
        </a>
        <div className={styles.headerMenu}>
          <Label>For jobseekers</Label>
          <Label>For clients</Label>
          <Label>Sectors</Label>
          <Label>Resources</Label>
        </div>
        <div className={styles.headerBtn}>
          <button className={`btn ${styles.btnHeader1}`}>Upload CV</button>
          <button className={`btn ${styles.btnHeader2}`}>Contact us</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
