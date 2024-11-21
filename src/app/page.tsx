import Image from "next/image";
import styles from "./page.module.css";

import Card from "@/components/Card";
import Footer from "@/components/Footer";

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
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.jobContent}>
          <Card data={jobDetails} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
