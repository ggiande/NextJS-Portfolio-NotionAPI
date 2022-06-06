import * as React from "react";

import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId_Projects } from "../lib/config";
import notion from "../lib/notion";
{
  /* Fetch Content for a Notion Page */
}
export const getStaticProps = async (context) => {
  const pageId = (context.params.pageId as string) || rootNotionPageId_Projects;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId_Projects} />
  );
}
