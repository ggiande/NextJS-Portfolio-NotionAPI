import Link from "next/link";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
export default function About() {
  return (
    <div>
      <Head>
        <title>About Giancarlo</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/Gian.svg" />
      </Head>

      <div className={styles.list}>
        <p>Writer of code and workshops. CA.</p>
        <p>Incoming Software Engineering Intern @ JPMorgan Chase & Co.</p>
        <p>
          Participated in Hackthons and sponsorer of open-source projects. Check
          out my projects!
        </p>
        <p>
          Formerly: IT Analyst @ Cummins Inc, Codepath.org Teacher Assistant for
          Mobile Development
        </p>
      </div>
    </div>
  );
}
