"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/page.module.scss";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LeftBtnIcon, RightBtnIcon } from "@/components/Svg";

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);

  const cardsPerSlide = 3;

  const jobDetails = [
    {
      language: "Python",
      svg: "python",
      position: "Software Engineer",
      location: "London",
      salary: "65,000",
      jobDesc:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      datePosted: "29/08/2023",
    },
    {
      language: "Python",
      svg: "python",
      position: "Software Engineer",
      location: "London",
      salary: "65,000",
      jobDesc:
        "Odio mi amet commodo convallis nunc.\nTincidunt mauris eu egestas eget in aliquam.",
      datePosted: "29/08/2023",
    },
    {
      language: "Python",
      svg: "python",
      position: "Software Engineer",
      location: "London",
      salary: "65,000",
      jobDesc:
        "Odio mi amet commodo convallis nunc.\nTincidunt mauris eu egestas eget in aliquam.",
      datePosted: "29/08/2023",
    },
    {
      language: "Swift",
      svg: "swift",
      position: "Mobile Developer",
      location: "Manchester",
      salary: "75,000",
      jobDesc:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      datePosted: "14/11/2023",
    },
  ];

  // cycling functions
  const showNextCards = () => {
    // Cycle forward, if reached the end, go back to start
    setStartIndex((prevIndex) => {
      // Ensure that when the end is reached, it wraps around to the start
      return (prevIndex + cardsPerSlide) % jobDetails.length;
    });
  };

  const showPreviousCards = () => {
    // Cycle backward, if reached the start, go to end
    setStartIndex((prevIndex) => {
      // Ensure that when at the start, it wraps around to the end
      return (
        (prevIndex - cardsPerSlide + jobDetails.length) % jobDetails.length
      );
    });
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainSec}>
          <div className={styles.container}>
            <Image
              src="/Ellipse 1.svg"
              alt="homepage logo"
              layout="intrinsic"
              width={160}
              height={160}
              className={styles.ellipseTop}
            />
            <div className={styles.mainContent}>
              <div className={styles.content}>
                <span className={styles.contentTitle}>
                  Software Recruitment Specialists
                </span>
                <span className={styles.contentSubTitle}>
                  Elevate your career
                </span>
                <div className={styles.searchContainer}>
                  <form className="d-flex">
                    <input
                      className={`form-control ${styles.search}`}
                      type="search"
                      placeholder="E.g. networking"
                    />
                    <button
                      className={`form-control ${styles.searchBtn}`}
                      type="submit"
                    >
                      Search jobs
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <Image
                  src="/homepage 1.svg"
                  alt="homepage logo"
                  width={420}
                  height={380}
                  layout="intrinsic"
                />
              </div>
            </div>
            <Image
              src="/Ellipse 2.svg"
              alt="homepage logo"
              layout="intrinsic"
              width={160}
              height={160}
              className={styles.ellipseBottom}
            />
          </div>
        </section>
        <section className={styles.latestJobs}>
          <span className={styles.jobHeader}>Latest Jobs</span>
          <div className={styles.jobContent}>
            {/* Display only 3 cards at a time */}
            {[0, 1, 2].map((offset) => {
              const cardIndex = (startIndex + offset) % jobDetails.length;
              return (
                <Card
                  data={[jobDetails[cardIndex]]}
                  key={cardIndex}
                  oriIndex={cardIndex}
                />
              );
            })}
          </div>
          <div className={styles.jobFooter}>
            <div className={styles.jobNav}>
              <button className={`btn`} onClick={showNextCards}>
                <LeftBtnIcon className={styles.btnNav} />
              </button>
              <button className={`btn`} onClick={showPreviousCards}>
                <RightBtnIcon className={styles.btnNav} />
              </button>
            </div>
            <button className={`btn ${styles.jobFooterText}`}>
              View more jobs
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
