"use client";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Perfil from "./images/Perfil/perfil.jpg";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";

export default function Home() {
	const router = useRouter();
	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		// 	<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
		// 		<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
		// 			Get started by editing&nbsp;
		// 			<code className="font-mono font-bold">app/page.js</code>
		// 		</p>
		// 		<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
		// 			<a
		// 				className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
		// 				href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 				target="_blank"
		// 				rel="noopener noreferrer"
		// 			>
		// 				By{" "}
		// 				<Image
		// 					src="/vercel.svg"
		// 					alt="Vercel Logo"
		// 					className="dark:invert"
		// 					width={100}
		// 					height={24}
		// 					priority
		// 				/>
		// 			</a>
		// 		</div>
		// 	</div>

		// 	<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
		// 		<Image
		// 			className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
		// 			src="/next.svg"
		// 			alt="Next.js Logo"
		// 			width={180}
		// 			height={37}
		// 			priority
		// 		/>
		// 	</div>

		// 	<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
		// 		<a
		// 			href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Docs{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		// 				Find in-depth information about Next.js features and API.
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Learn{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		// 				Learn about Next.js in an interactive course with&nbsp;quizzes!
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Templates{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		// 				Explore the Next.js 13 playground.
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Deploy{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		// 				Instantly deploy your Next.js site to a shareable URL with Vercel.
		// 			</p>
		// 		</a>
		// 	</div>
		// </main>
		<main className="flex flex-col mt-[8rem] justify-center items-center ">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<Image
					src={Perfil}
					alt="Imagen perfil"
					className="w-[10rem] h-[11rem] cursor-pointer transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-blue-500/40 hover:shadow-yellow-400 hover:-translate-y-2 "
					onClick={() => router.push("/about")}
				/>
			</motion.div>
			<motion.div
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 1.5 }}
				className="flex mt-8 justify-center items-center"
			>
				<h2 className=" flex text-xl md:text-3xl font-source font-thin text-zinc-200  text-center">
					Hi! I'm
				</h2>
				<h1 className="flex text-xl md:text-[2rem] justify-center text-center">
					Jose Colmenares.
				</h1>
			</motion.div>
			<motion.h2
				initial={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 1, duration: 1.5 }}
				className=" flex text-xl md:text-3xl font-source font-normal text-zinc-200 mt-[-0.5rem] text-center"
			>
				I am a full stack web developer.{" "}
			</motion.h2>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1.5 }}
				className="flex "
			>
				<button
					className="btn py-2 px-4 mt-4 my-2 cursor-pointer border-transparent hover:border-amber-300 opacity-60 hover:opacity-100 transition-all duration-300 text-sm mx-2"
					type="button "
					onClick={() => router.push("/contact")}
				>
					Contact me!
				</button>
				<a
					href="./FullStack José Mauricio Colmenares.pdf"
					download
					className=" btn2 py-2 px-4  mt-4 my-2 cursor-pointer border border-amber-300 border-opacity-60 opacity-60 hover:opacity-100 transition-all duration-300 text-sm mx-2 hover "
				>
					Download my CV!
				</a>
			</motion.div>
			<div className="mt-[22rem]">
				<Footer />
			</div>
		</main>
	);
}
