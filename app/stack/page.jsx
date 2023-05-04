"use client";
import Link from "next/link";
import { DiJavascript1, DiReact, DiNodejsSmall, DiSass } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
	SiPostgresql,
	SiRedux,
	SiFigma,
	SiAdobephotoshop,
	SiTailwindcss,
	SiFirebase,
	SiLinear,
	SiBootstrap,
} from "react-icons/si";
import { BsGit, BsDiscord, BsSlack } from "react-icons/bs";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Footer } from "../components/Footer";

export default function Stack() {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div className="flex flex-col mt-[2rem] justify-center items-center min-h-screen">
			<motion.div
				className="flex justify-center"
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.1, duration: 1 }}
			>
				<h1 className="text-3xl  mt-[1.2rem] justify-center text-center">
					Stack
				</h1>
			</motion.div>
			<motion.div
				className=" flex flex-wrap justify-center mt-3 md:mx-auto md:grid md:grid-cols-3 auto-rows-min md:gap-4 md:mt-[-rem] cursor-pointer hover:border-amber-300"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
			>
				<Link href="https://react.dev/" passHref>
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
					radial-gradient(
						100px circle at ${mouseX}px ${mouseY}px,
						rgba(14, 165, 233, 0.15),
						transparent 80%
						)
					`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<DiReact className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">React</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Front-End
								</span>
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									UI-UX
								</span>
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Development
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://developer.mozilla.org/es/docs/Web/JavaScript">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
					radial-gradient(
						100px circle at ${mouseX}px ${mouseY}px,
						rgba(14, 165, 233, 0.15),
						transparent 80%
						)
					`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<DiJavascript1 className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Javascript</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Front-End
								</span>
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Back-End
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://nextjs.org/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
					radial-gradient(
						100px circle at ${mouseX}px ${mouseY}px,
						rgba(14, 165, 233, 0.15),
						transparent 80%
						)
					`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<TbBrandNextjs className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Next.js</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Framework web
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									React-based
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://www.postgresql.org/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiPostgresql className="flex  h-[7rem] text-[5.5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">PostgreSQL</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Database
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Data Managament
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://redux.js.org/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiRedux className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Redux</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									State management
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://git-scm.com/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<BsGit className="flex h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Git</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Version control
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Collaboration
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://tailwindcss.com/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiTailwindcss className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">
								Tailwind CSS
							</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									CSS
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Framework
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://www.figma.com/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiFigma className="flex  h-[7rem] text-[4.5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Figma</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Design
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									UI/UX
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://firebase.google.com/?hl=es">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiFirebase className="flex h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Firebase</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Servercless
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Authentication
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://sass-lang.com/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<DiSass className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Sass</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									CSS preprocessing
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Styling
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://nodejs.org/es">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<DiNodejsSmall className="flex  h-[7rem] text-[5rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Node.js</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Backend
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Server-side
								</span>
							</div>
						</div>
					</div>
				</Link>
				<Link href="https://getbootstrap.com/">
					<div
						className="group mt-2 bgCard w-[15rem] h-auto mt- hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50  "
						onMouseMove={handleMouseMove}
					>
						{" "}
						<motion.div
							className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
							style={{
								background: useMotionTemplate`
			radial-gradient(
				100px circle at ${mouseX}px ${mouseY}px,
				rgba(14, 165, 233, 0.15),
				transparent 80%
				)
			`,
							}}
						/>
						<div className="p-2  flex flex-col items-center">
							<SiBootstrap className="flex  h-[7rem] text-[4rem]" />
							<h2 className="text-xl font-bold mt-2 text-center">Bootstrap</h2>
							<div className="flex">
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Front-End
								</span>

								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									CSS
								</span>
								<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
									Framework
								</span>
							</div>
						</div>
					</div>
				</Link>
			</motion.div>
			<div className="mt-16">
				<Footer />
			</div>
		</div>
	);
}
