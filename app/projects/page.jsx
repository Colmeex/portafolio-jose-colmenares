"use client";
import Image from "next/image";
import Word from "../images/Countries.jpg";
import Adidas from "../images/Adidas.jpg";
import Portfolio from "../images/portfolio/Portfolio.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Footer } from "../components/Footer";

export default function Projects() {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const router = useRouter();
	return (
		<div className="flex flex-col mt-[2rem]  items-center min-h-screen">
			<motion.div
				className="flex justify-center"
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.1, duration: 1 }}
			>
				<h1 className="text-3xl  mt-[1.2rem] justify-center text-center">
					Projects
				</h1>
			</motion.div>
			<div className="flex flex-wrap justify-center mt-3 md:mx-auto md:grid md:grid-cols-2 md:gap-4 md:mt-[-rem] cursor-pointer">
				<motion.card
					className="group bgCard w-[20rem] h-[20rem] mt-4  hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50"
					onClick={() => router.push("projects/travel")}
					onMouseMove={handleMouseMove}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
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
									)`,
						}}
					/>
					<div className="p-2">
						<Image
							src={Word}
							alt="Countries"
							className="w-[19rem] h-[11rem] object-cover rounded-lg bg-slate-500"
						/>
						<div className="flex">
							<h2 className="text-xl font-bold mt-4">Travel</h2>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								React
							</span>

							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								SQl
							</span>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								Sequelize
							</span>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								CSS
							</span>
						</div>
						<p className="text-sm h-[5rem] font-light overflow-hidden">
							This is a web project that uses the Countries API to allow users
							to search for countries by name, continent, and population, and
							also add activities for each one...
						</p>
					</div>
				</motion.card>
				<motion.card
					className="group bgCard w-[20rem] h-[20rem] mt-2 md:mt-4  hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50"
					onClick={() => router.push("projects/haal")}
					onMouseMove={handleMouseMove}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
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
									)`,
						}}
					/>
					<div className="p-2">
						<Image
							src={Adidas}
							alt="Countries"
							className="w-[19rem] h-[11rem] object-cover rounded-lg bg-slate-500"
						/>
						<div className="flex">
							<h2 className="text-xl font-bold mt-4">Haal</h2>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								React
							</span>

							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								SQl
							</span>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								Sequelize
							</span>
							<span class="mt-5 ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.65em] font-bold leading-none text-neutral-50  flex items-center justify-center">
								Tailwind
							</span>
						</div>
						<p className="text-sm font-light">
							Haal is an e-commerce project dedicated to selling Adidas
							clothing. The site features third-party authentication, which
							allows users to log in as...
						</p>
					</div>
				</motion.card>
				<motion.card
					className="group bgCard mt-2 w-[20rem] h-[20rem] hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50"
					onClick={() => router.push("projects/portfolio")}
					onMouseMove={handleMouseMove}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
				>
					<motion.div
						className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
						style={{
							background: useMotionTemplate`
								radial-gradient(
									100px circle at ${mouseX}px ${mouseY}px,
									rgba(14, 165, 233, 0.15),
									transparent 80%
									)`,
						}}
					/>
					<div className="p-2">
						<Image
							src={Portfolio}
							alt="Countries"
							className="w-[19rem] h-[11rem] object-cover rounded-lg bg-slate-500"
						/>
						<h2 className="text-xl font-bold mt-4">Portafolio</h2>
						<p className="text-sm font-light">
							{
								"This is my personal portfolio, which I will be constantly working"
							}
						</p>
					</div>
				</motion.card>
				{/* <motion.card
					className="group bgCard w-[20rem] h-[20rem] mt-2 hover:border-amber-300 hover:-translate-y-2 transition duration-500  hover:text-slate-50"
					onClick={() => router.push("projects/portfolio")}
					onMouseMove={handleMouseMove}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.5, duration: 1 }}
				>
					<motion.div
						className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
						style={{
							background: useMotionTemplate`
								radial-gradient(
									100px circle at ${mouseX}px ${mouseY}px,
									rgba(14, 165, 233, 0.15),
									transparent 80%
									)`,
						}}
					/>
					<div className="p-2">
						<Image
							src={Word}
							alt="Countries"
							className="w-[19rem] h-[11rem] object-cover rounded-lg bg-slate-500"
						/>
						<h2 className="text-xl font-bold mt-4">Countries</h2>
						<p className="text-sm font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</motion.card> */}
			</div>
			<div className="mt-[5rem]">
				<Footer />
			</div>
		</div>
	);
}
