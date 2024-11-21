/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

import Label from "@/components/Label";
import styles from "@/styles/footer.module.scss";

const Footer: React.FC = () => {
  const colData1: object = {
    Homepage: "#",
    "For jobseekers": "#",
    "For clients": "#",
    "Our Sectors": "#",
    Resources: "#",
    "Contact us": "#",
  };

  const colData2: object = {
    "Software engineering": "#",
    DevOps: "#",
    Cloud: "#",
    Infrastructure: "#",
    Testing: "#",
    Security: "#",
  };

  const colData3: object = {
    "New item": "#",
  };

  // data processing?
  const renderLabels = (obj: object) => {
    const keys = Object.keys(obj);

    if (keys.length === 1 && keys[0] === "New item") {
      return Array.from({ length: 5 }, (_, index) => {
        return <Label key={index}>{keys[0]}</Label>;
      });
    } else {
      return keys.map((key, index) => {
        return <Label key={index}>{key}</Label>;
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footCol1}>
        <a className={styles.footerLink} href="#">
          <span>Software Recruitment co.</span>
        </a>
        <div className={styles.socialMedia}>
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            width={24}
            height={24}
          />
          <Image
            src="/facebook.svg"
            alt="facebook logo"
            width={24}
            height={24}
          />
          <Image
            src="/instagram.svg"
            alt="instagram logo"
            width={24}
            height={24}
          />
          <Image src="/twitter.svg" alt="twitter logo" width={24} height={24} />
        </div>
      </div>
      <div className={styles.footCol2}>
        <Label styles={styles.footerText}>Explore</Label>
        {renderLabels(colData1)}
      </div>
      <div className={styles.footCol3}>
        <Label styles={styles.footerText}>Sectors</Label>
        {renderLabels(colData2)}
      </div>
      <div className={styles.footCol4}>
        <Label styles={styles.footerText}>Services</Label>
        {renderLabels(colData3)}
      </div>
    </footer>
  );
};

export default Footer;
