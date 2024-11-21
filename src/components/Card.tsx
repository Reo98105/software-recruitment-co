import React from "react";
import Image from "next/image";

import styles from "@/app/styles/card.module.scss";

type Job = {
  language: string;
  svg: string;
  position: string;
  location: string;
  salary: string;
  jobDesc: string;
  datePosted: string;
  background: string;
};

export interface cardProps {
  data: Job[]; // card data
}

const Card = ({ data }: cardProps) => {
  return data.map((job, index) => {
    return (
      <div
        className={`card ${styles[`customCard-${(index % 3) + 1}`]}`}
        key={index}
      >
        <div className={styles.cardHeader}>
          <Image
            src={`${job.svg + ".svg"}`}
            alt="language logo"
            width={24}
            height={24}
          />
          <span>{job.language}</span>
        </div>
        <h6 className={styles.cardTitle}>{job.position}</h6>
        <div>
          <div className={styles.subSection}>
            <Image
              src={index + 1 == 2 ? "/locationW.svg" : "/location.svg"}
              alt="location logo"
              width={24}
              height={24}
            />
            <h6 className={styles.cardSubTitle}>{job.location}</h6>
          </div>
          <div className={styles.subSection}>
            <Image
              src={index + 1 == 2 ? "/salaryW.svg" : "/salary.svg"}
              alt="salary logo"
              width={24}
              height={24}
            />
            <h6 className={styles.cardSubTitle}>{job.salary}</h6>
          </div>
        </div>
        <p className={styles.cardText}>{job.jobDesc}</p>
        <button className={`btn ${styles[`customBtn`]}`}>View this job</button>
        <p className={styles.cardFooter}>Posted on {job.datePosted}</p>
      </div>
    );
  });
};

export default Card;
