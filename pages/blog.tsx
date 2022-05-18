import * as React from 'react'
import { ExtendedRecordMap } from 'notion-types'
import { NotionPage } from '../components/NotionPage'
import { rootNotionPageId } from '../lib/config'
import notion from '../lib/notion'
import Head from "next/head"

export const getStaticProps = async () => {
  const pageId = rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <>
      <Head>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/clock.svg" />
      </Head>
      <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
</>
}
