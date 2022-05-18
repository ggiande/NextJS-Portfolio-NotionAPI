import Link from "next/link"
import styles from "../styles/About.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About() {
  return (
    <div>
      <Head>
        <title>About Giancarlo</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/Gian.svg" />
      </Head>

      <main className={styles.about}>
        {/* <Image
          className={styles.headshot}
          src="/Gian.svg"   
          alt="Gian's Headshot"
          width={150}
          height={150}
        /> */}
        <h1>About Me</h1>
        <p>
          I am studying computer science at Stan State, and in my fourth-year.
          Currently, I am the Vice President of the Computer Science Club with a
          various experience and a desire to help others find their path.
        </p>
        <p>
          I am working on a number of projects and slowly converting them into
          workshops for other students&#39; advantage. A handful of my projects
          are publicly listed on{" "}
          <Link href="https://github.com/ggiande">
            <a>Github.</a>
          </Link>
        </p>

        <div className="social">
          {/* Add LinkedIn */}
          {/* Add Twitter */}
          {/* Add GitHub */}
          {/* Add DevPost */}
          {/* Add Guides and Resources */}
        </div>
      </main>
    </div>);
}