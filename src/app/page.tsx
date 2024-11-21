import Image from "next/image";
import styles from "./page.module.css";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
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

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.latestJobs}>
          <span className={styles.jobHeader}>Latest Jobs</span>
          <div className={styles.jobContent}>
            <Card data={jobDetails} />
          </div>
          <div className={styles.jobFooter}>
            <div className={styles.jobNav}>
              <button className={`btn ${styles.btnNav}`}>
                <Image src="/left.svg" alt="left logo" width={40} height={40} />
              </button>
              <button className={`btn ${styles.btnNav}`}>
                <Image
                  src="/right.svg"
                  alt="right logo"
                  width={40}
                  height={40}
                />
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
