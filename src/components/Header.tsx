import React from "react";
import Image from "next/image";

import Label from "@/components/Label";
import styles from "@/app/styles/header.module.scss";

type menu = {
  menuTitle: string;
  menuDetail: string[];
};

const Header = () => {
  // some dummy data here
  const menuData: menu[] = [
    {
      menuTitle: "For jobseekers",
      menuDetail: ["Search jobs", "Explore more"],
    },
    {
      menuTitle: "For clients",
      menuDetail: ["Our partners"],
    },
    {
      menuTitle: "Sectors",
      menuDetail: [
        "Software engineering",
        "DevOps",
        "Cloud",
        "Infrastructure",
        "Testing",
        "Security",
      ],
    },
    {
      menuTitle: "Resources",
      menuDetail: ["Partners", "Contact us"],
    },
  ];

  const rightDeco = () => {
    return (
      <div>
        <Image src="/icon_down.svg" alt="down" width={10} height={10} />
      </div>
    );
  };

  const Dropdown = ({ menuTitle, menuDetail }: menu) => {
    return (
      <div className={styles.dropdownContainer}>
        <Label rightDeco={rightDeco()}>{menuTitle}</Label>
        <ul className={styles.menuList}>
          {menuDetail.map((item, index) => (
            <li key={index} className={styles.menuDetail}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderMenu = (data: menu[]) => {
    return data.map((detail, index) => <Dropdown key={index} {...detail} />);
  };

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
        <div className={styles.headerMenu}>{renderMenu(menuData)}</div>
        <div className={styles.headerBtn}>
          <button className={`btn ${styles.btnHeader1}`}>Upload CV</button>
          <button className={`btn ${styles.btnHeader2}`}>Contact us</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
