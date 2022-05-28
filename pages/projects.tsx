import Head from "next/head";
import styles from "../styles/Projects.module.css";
import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

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

export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};
