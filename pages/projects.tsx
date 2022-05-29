import Head from "next/head";
import styles from "../styles/Projects.module.css";
import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId_Projects } from "../lib/config";
import notion from "../lib/notion";

export const getStaticProps = async () => {
	const pageId = rootNotionPageId_Projects;
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
			<NotionPage
				recordMap={recordMap}
				rootPageId={rootNotionPageId_Projects}
			/>
		</>
	);
}
