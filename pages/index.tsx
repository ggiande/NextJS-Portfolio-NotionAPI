import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={(styles.body_container, styles.night, styles.day)}>
			<Head>
				<title>Giancarlo's Website</title>
				<meta
					name="description"
					content="Generated by create next app and hosted by Vercel"
				/>
				<link rel="icon" href="/waving.svg" />
			</Head>

			<main className={styles.main_container}>
				<h1>Hello, I&apos;m Gian!</h1>
				<pre className={styles.pre_code_container}>
					<p className={styles.code_container}>
						👋 I am currently pursuing a Bachelor&apos;s degree in
						Computer Science
					</p>
					<p className={styles.code_container}>
						💻 I&apos;m a Computer Science major at California State
						University Stanislaus.
					</p>
					<p className={styles.code_container}>
						💼 In the past I have worked as a Software Engineering
						Academic Intern at JPMorgan Chase & Co. - Palo Alto
						Office
					</p>
					<p className={styles.code_container}>
						💬 Feel free to talk to me about paving the way for
						students to achieve success through new opportunities
						and being as inclusive as possible.
					</p>

					{/* <!-- Add the terminal division --> */}
					<div id="input" className={styles.terminal}></div>
				</pre>
			</main>
		</div>
	);
}
