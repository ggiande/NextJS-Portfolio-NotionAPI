import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId_Timeline } from "../lib/config";
import notion from "../lib/notion";
import Head from "next/head";
{
  /* Fetch Content for a Notion Page */
}
export const getStaticProps = async () => {
  const pageId = rootNotionPageId_Timeline;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <>
      <Head>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/clock.svg" />
      </Head>
      <NotionPage
        recordMap={recordMap}
        rootPageId={rootNotionPageId_Timeline}
      />
    </>
  );
}
