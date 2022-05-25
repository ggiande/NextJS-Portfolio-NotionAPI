import Head from "next/head";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects Page" />
        <link rel="icon" href="/Bulldozer.svg" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>The Projects Page is Still Under Development</h1>
        </main>
      </div>
    </>
  );
}
