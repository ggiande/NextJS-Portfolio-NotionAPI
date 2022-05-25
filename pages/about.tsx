import styles from "../styles/About.module.css";
import Head from "next/head";
export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Giancarlo</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/Gian.svg" />
      </Head>

      <div className={styles.list}>
        <p>Writer of code and workshops</p>
        <p>Incoming Software Engineering Intern @ JPMorgan Chase & Co.</p>
        <p>
          Participated in Hackthons and sponsorer of open-source projects. Check
          out my projects!
        </p>
        <p>
          Formerly: IT Analyst @ Cummins Inc, Codepath.org Teacher Assistant for
          Mobile Development, Communications Assistant at Stan State.
        </p>
      </div>
    </div>
  );
}
